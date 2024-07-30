var patientDialogBoxPg = require("PG_Patient_Dialog_Locators");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var verificationUtils = require("VerificationUtils");
var waitUtils = require("WaitUtils");
var globalConstants = require("GlobalConstants");


function waitForVisibilityOfPatientDialogBox(){
patientDialogBoxPg.getPatientSearchBoxChild().WaitProperty("Visible", true, globalConstants.shortTimeout);
}

module.exports.waitForVisibilityOfPatientDialogBox=waitForVisibilityOfPatientDialogBox;

function clickOnPatientSearchBox() {
    try {
        if (patientDialogBoxPg.getPatientSearchBoxChild().Exists) {
            patientDialogBoxPg.getPatientSearchBoxChild().Click();
        } else {
            Log.Error("Search box not found within the child object.");
        }
    } catch (error) {
        Log.Error("An error occurred in clickOnPatientSearchBox: " + error.message);
    }
}

module.exports.clickOnPatientSearchBox=clickOnPatientSearchBox;


function searchPatientByName(PatientName) {
    try {
        clickOnPatientSearchBox();
        patientDialogBoxPg.getPatientSearchBoxChild().Keys(PatientName);
        Log.Message("Text set in the TextBox: " + PatientName);
    } catch (error) {
        Log.Error("An error occurred in searchPatientByName: " + error.message);
    }
}

module.exports.searchPatientByName = searchPatientByName;

function validatePatientAddButtonText(expectedText) {
    try {
        verificationUtils.verifyText(patientDialogBoxPg.getPatientWpfFlowItemContainer(), "Name", "*WpfObject*Run*ADD PATIENT*,1)", 50, expectedText);
    } catch (e) {
        Log.Error("An error occurred while validating the patient add button text: " + e.message);
        return false;
    }
}
module.exports.validatePatientAddButtonText = validatePatientAddButtonText;

function clearPatientSearchBox() {
    try {
        clickOnPatientSearchBox();
        patientDialogBoxPg.getPatientSearchBoxChild().Clear();
        Log.Message("Patient search box cleared successfully.");
    } catch (error) {
        Log.Error("An error occurred in clearPatientSearchBox: " + error.message);
        return false;
    }
}
module.exports.clearPatientSearchBox=clearPatientSearchBox;

function clickOnAddButton() {
    try {
      
        var patientAddButton = patientDialogBoxPg.getPatientWpfFlowItemContainer().FindChildEx("Name", "*WpfObject*Run*ADD PATIENT*,1)", 50);
        if (patientAddButton != null && patientAddButton.Parent != null) {
            patientAddButton.Parent.Click();
            Log.Message("Successfully clicked on the button: " + patientAddButton.Name);
           PG_Add_Patient.waitForVisibilityOfAddPatientPopup("Save");
        } else {
            Log.Message("Add Patient button not found.");
        }
    } catch (error) {
        Log.Error("An error occurred while trying to click on the Add Patient button: " + error.message);
    }
}
module.exports.clickOnAddButton=clickOnAddButton;

function waitForVisibilityOfAddButton(){
waitUtils.waitforControl(patientDialogBoxPg.getPatientWpfFlowItemContainer(),"Name","*WpfObject*Run*ADD PATIENT*,1)",50,globalConstants.shortTimeout);
}

module.exports.waitForVisibilityOfAddButton=waitForVisibilityOfAddButton;

function clickOnPatientOnPatientDialogByPatientName(expectedPatientName) {
    try {
        var searchPattern = expectedPatientName.replace(/ /g, ',');
        var patientName = patientDialogBoxPg.getPatientSearchBox().FindChild("Name", "*TextBlock*," + searchPattern + "*", 50);
        if (patientName.Exists) {
            var actualPatientName = patientName.Text;
            if (actualPatientName.Equals(expectedPatientName)) {
                patientName.Click();
                 Log.Message("Successfully clicked on the patient name: " + actualPatientName);
            } else {
                Log.Error("Patient name does not match the expected name.");
            }
        } else {
            Log.Error("Child object not found.");
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.clickOnPatientOnPatientDialogByPatientName=clickOnPatientOnPatientDialogByPatientName;

function validateCountOfAllPatient() {
    try {
        //var patientCount = patientDialogBoxPg.getPatientCountAfterSearch().FindChildEx("Name", "*TextBlock,ALL PATIENTS*", 2);
        var patientCount = globalConstants.parentHandle.FindChildEx("Name", "*TextBlock,ALL PATIENTS*", 50); 
        if (patientCount != null) {
            var actualCount = patientCount.Text;
            var exactCountFromText = String(actualCount).match(/\((\d+)\)/);
            if (exactCountFromText && exactCountFromText.length > 1) {
                var numericValue = exactCountFromText[1];
                Log.Message("Patient search successful and search count is " + numericValue);
            } else {
                Log.Error("Unable to parse the patient count from text: " + actualCount);
            }
        } else {
            Log.Error("Patient count element not found.");
        }
    } catch (e) {
        Log.Error("Error occurred while validating count of all patients: " + e.message);
    }
}

module.exports.validateCountOfAllPatient=validateCountOfAllPatient;

