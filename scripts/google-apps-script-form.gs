/**
 * Frontis Communications website contact form backend.
 * Receives POSTs from frontiscommunications.com/contact, appends each submission to the
 * attached Google Sheet, and emails an alert to the sheet owner.
 *
 * Setup (one time):
 * 1. Create a Google Sheet (this project lives inside it: Extensions > Apps Script).
 * 2. Paste this file over the default Code.gs and save.
 * 3. Deploy > New deployment > type "Web app":
 *      Execute as: Me
 *      Who has access: Anyone
 *    Authorize when prompted.
 * 4. Copy the /exec URL into NEXT_PUBLIC_FORM_ENDPOINT (or lib/site.ts fallback).
 *
 * To change where alerts go, set NOTIFY_EMAIL. Empty string = sheet owner.
 */

var SHEET_NAME = "Leads";
var NOTIFY_EMAIL = "";

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};

    // Honeypot field: real visitors never fill it.
    if (p.website) return respond({ ok: true });
    if (!p.name && !p.email && !p.message) {
      return respond({ ok: false, error: "Empty submission" });
    }

    var sheet = getSheet();
    sheet.appendRow([
      new Date(),
      p.name || "",
      p.company || "",
      p.email || "",
      p.phone || "",
      p.service || "",
      p.message || "",
    ]);

    var to = NOTIFY_EMAIL || Session.getEffectiveUser().getEmail();
    MailApp.sendEmail({
      to: to,
      replyTo: p.email || to,
      subject: "New website inquiry: " + (p.name || "Unknown") + " (" + (p.service || "General") + ")",
      body:
        "New submission from frontiscommunications.com\n\n" +
        "Name: " + (p.name || "") + "\n" +
        "Company: " + (p.company || "") + "\n" +
        "Email: " + (p.email || "") + "\n" +
        "Phone: " + (p.phone || "") + "\n" +
        "Service: " + (p.service || "") + "\n\n" +
        "Message:\n" + (p.message || ""),
    });

    return respond({ ok: true });
  } catch (err) {
    return respond({ ok: false, error: String(err) });
  }
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Full name", "Company", "Email", "Phone", "Service", "Message"]);
    sheet.setFrozenRows(1);
    sheet.getRange("1:1").setFontWeight("bold");
  }
  return sheet;
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
