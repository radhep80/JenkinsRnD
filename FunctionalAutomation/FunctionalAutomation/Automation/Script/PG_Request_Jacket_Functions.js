var verificationUtils = require("VerificationUtils");
var actionUtils = require("ActionUtils");
var globalConstants = require("GlobalConstants");
var patientRequestJacketPg = require("PG_Request_Jacket_Locators");

function validateListPopulatedOnRegisterRequestJacket(expectedListPolpulatedOnRJ) {
  var actualNotesListPolpulatedOnRJ = [];
  expectedListPolpulatedOnRJ.forEach(function(value) {
    var textObject = actionUtils.getObjectByType("Run", value, 70);
    var text = textObject && textObject.Text ? String(textObject.Text).trim().toUpperCase() : "";
    actualNotesListPolpulatedOnRJ.push(text);
  });

  var isEqual = expectedListPolpulatedOnRJ.length === actualNotesListPolpulatedOnRJ.length && expectedListPolpulatedOnRJ.every(function(val, index) {
    return val.trim().toUpperCase() === actualNotesListPolpulatedOnRJ[index];
  });

  if (isEqual) {
    Log.Message("All the fields are successfully populated on Request Jacket.");
  } else {
    Log.Error("Validation failed: Some fields are not populated on Request Jacket.");

    if (expectedListPolpulatedOnRJ.length !== actualNotesListPolpulatedOnRJ.length) {
      Log.Error("Lists have different lengths. Expected list length: " + expectedListPolpulatedOnRJ.length + ", Actual list length: " + actualNotesListPolpulatedOnRJ.length);
    } else {
      expectedListPolpulatedOnRJ.forEach(function(val, index) {
        if (val.trim().toUpperCase() !== actualNotesListPolpulatedOnRJ[index]) {
          Log.Error("Mismatch at index " + index + ". Expected: " + val + ", Actual: " + actualNotesListPolpulatedOnRJ[index]);
        }
      });
    }
  }
}
module.exports.validateListPopulatedOnRegisterRequestJacket=validateListPopulatedOnRegisterRequestJacket;

function verifyRegisteredFieldsPopulatedOntheRequestJacket(){
validateListPopulatedOnRegisterRequestJacket(patientRequestJacketPg.getRegisterRequestListOnRJ());
}
module.exports.verifyRegisteredFieldsPopulatedOntheRequestJacket=verifyRegisteredFieldsPopulatedOntheRequestJacket

function verifyNotesListPopulatedOntheRequestJacket(){
validateListPopulatedOnRegisterRequestJacket(patientRequestJacketPg.getNotesListOnRJ());
}
module.exports.verifyNotesListPopulatedOntheRequestJacket=verifyNotesListPopulatedOntheRequestJacket;

function validateTextOnRequestJacketByText(expectedValue) {    
    try {
        verificationUtils.verifyText(globalConstants.parentHandle, "Name", "*Run*," + expectedValue + "*", 70, expectedValue);
    } catch (exception) {
        Log.Error("An error occurred: " + exception.message);
        throw exception; 
    }
}
module.exports.validateTextOnRequestJacketByText=validateTextOnRequestJacketByText;

function verifyRecipientTextOnRJ(expectedText){
  verificationUtils.verifyTextConatins(globalConstants.parentHandle, "Name", "*WpfObject*Run*"+expectedText+"*", 70, expectedText);
}
module.exports.verifyRecipientTextOnRJ=verifyRecipientTextOnRJ;


function validateConditionOnRequestJacket(conditionText){
  actionUtils.recognizeUniqueTextUsingOCR(patientRequestJacketPg.getRegisteredBlock(),conditionText)
}
module.exports.validateConditionOnRequestJacket=validateConditionOnRequestJacket;

function verifyRegisteredFieldsPopulatedForMedicareNumber(){
validateListPopulatedOnRegisterRequestJacket(patientRequestJacketPg.getRegisterRequestListForMedicareNumberOnRJ());
}
module.exports.verifyRegisteredFieldsPopulatedForMedicareNumber=verifyRegisteredFieldsPopulatedForMedicareNumber
