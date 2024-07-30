var waitUtils = require("WaitUtils");
var verificationUtils = require("VerificationUtils");
var globalConstants = require("GlobalConstants");
var PG_Delete_Patient = require("PG_Delete_Patient_Functions");
var PG_HomePage = require("PG_HomePage_Functions");
var deletePatientPgLocators = require("PG_Delete_Patient_Locators");
var PG_Add_Patient = require("PG_Add_Patient_Functions");

function clickOnDeletePatientSearchBox() {
    try {
        if (deletePatientPgLocators.getDeletePatientSearchBoxParent().Exists) {
            deletePatientPgLocators.getDeletePatientSearchTextBox().Click();
        } else {
            Log.Error("Search box not found within the child object.");
        }
    }

    catch (error) {
        Log.Error("An error occurred in clickOnPatientSearchBox: " + error.message);
    }
}
module.exports.clickOnDeletePatientSearchBox = clickOnDeletePatientSearchBox;

function searchDataManagementMenuByName(dataManagementName) {
    try {
        clickOnDeletePatientSearchBox();
        deletePatientPgLocators.getDeletePatientSearchTextBox().Keys(dataManagementName);
        Log.Message("Text set in the TextBox: " + dataManagementName);
    } catch (error) {
        Log.Error("An error occurred in searchPatientByName: " + error.message);
    }
}

module.exports.searchDataManagementMenuByName = searchDataManagementMenuByName;


function clickOnDataManagementMenuOnSearchGrid(expectedMenuName) {
    try {

        var dataMenuName = deletePatientPgLocators.getDeletePatientDataMenuToClick().FindChild("Name", "*TextBlock," + expectedMenuName + "*", 50);
        if (dataMenuName.Exists) {
                dataMenuName.Click();
                Log.Message("Successfully clicked on the data management menu: " +expectedMenuName );
            } else {
                Log.Error("Data management menu does not match the expected name.");
            }    
        
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.clickOnDataManagementMenuOnSearchGrid = clickOnDataManagementMenuOnSearchGrid;


function clickOnSearchBox() {
    try {
        if (deletePatientPgLocators.getDeletePatientSearchBoxByName().Exists) {
            deletePatientPgLocators.getSearchBoxByName().Click();
        } else {
            Log.Error("Search box not found within the child object.");
        }
    }

    catch (error) {
        Log.Error("An error occurred in clickOnSearchBox " + error.message);
    }
}
module.exports.clickOnSearchBox = clickOnSearchBox;

function setTextInTheSearchBox(SearchPatientName) {
    try {
        clickOnSearchBox();
        deletePatientPgLocators.getSearchBoxByName().Keys(SearchPatientName);
        Log.Message("Text set in the TextBox: " + SearchPatientName);
    } catch (error) {
        Log.Error("An error occurred in setTextInTheSearchBox " + error.message);
    }
}

module.exports.setTextInTheSearchBox = setTextInTheSearchBox;


function clickOnDeletePatientPopupButtonByName(popupButtonName) {
    try {
        var clickButton = deletePatientPgLocators.getDeleteCancelButton().FindChildEx("Name", "*TextBlock," + popupButtonName + "*", 25);
        if (clickButton.Exists) {
            clickButton.Click();
            Log.Message("Successfully clicked on button " + popupButtonName);
        } else {
            Log.Error("Button is not found on window: " + popupButtonName);
        }
    } catch (e) {
        Log.Error("Error occurred while clicking the button: " + e.message);
    }
}
module.exports.clickOnDeletePatientPopupButtonByName = clickOnDeletePatientPopupButtonByName;

function selectButtonOnPopUp(PopupbuttonName) {
    try {
        const buttonType = deletePatientPgLocators.popupButtonNamesToMap[PopupbuttonName];
        if (buttonType === undefined) {
            Log.Error("Invalid menu name provided: " + PopupbuttonName);
            return null;
        }
        var popupButton = deletePatientPgLocators.getPopupButtonParent().FindChildEx("Name", "*WpfObject*WpfNative*," + buttonType + "*", 17);
        if (popupButton.Exists) {
            popupButton.Click();
            Log.Message("Successfully clicked on button with name: " + PopupbuttonName);
        } else {
            Log.Error("TextBlock with button type not found.");
        }
    } catch (e) {
        Log.Error("An error occurred: " + e.message);
        return false;
    }
}

module.exports.selectButtonOnPopUp = selectButtonOnPopUp;

function validateDeletePatientWindowTittle(expectedWindowTitle) {
    try {

        verificationUtils.verifyText(globalConstants.parentHandle, "Name", "*WpfObject*Run*" + expectedWindowTitle + "*", 50, expectedWindowTitle);
    }
    catch (exception) {
        Log.Error("An error occurred: " + exception.message);
    }
}
module.exports.validateDeletePatientWindowTittle = validateDeletePatientWindowTittle;

function verifyPatientListOnGrid(patientNameOnGrid) {
    try {
        var patientList = OCR.Recognize(deletePatientPgLocators.getPatientGridList());
        patientList.CheckText("*" + patientNameOnGrid + "*");

    }
    catch (e) {
        Log.Error("An error occurred: " + e.message);
        return false;
    }
}
module.exports.verifyPatientListOnGrid = verifyPatientListOnGrid;

function validatedeletePatientWindowReferences(expectedWarningTitle) {
    try {

        verificationUtils.verifyTextConatins(globalConstants.parentHandle, "Name", "*TextBlock*" + expectedWarningTitle + "*", 50, expectedWarningTitle);
    }
    catch (exception) {
        Log.Error("An error occurred: " + exception.message);
    }
}
module.exports.validatedeletePatientWindowReferences = validatedeletePatientWindowReferences;

function validateDeletePatientRecordCount() {
    try {
        var actualRecordCount = PG_Add_Patient.getPatientCountOnPatientJacket();
        if (actualRecordCount === 0) {
            Log.Message("Record deleted successfully");
        } else {
            Log.Error("Record not deleted successfully");
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.validateDeletePatientRecordCount = validateDeletePatientRecordCount;

function deletePatientPrecondition(patientName) {
    try {

        //<Step>Navigate to Data Management. In the search bar, enter "patients". select "PATIENTS" option
        PG_HomePage.selectTheMenuAndClick("DataManagement");
        PG_Delete_Patient.searchDataManagementMenuByName("PATIENTS");
        PG_Delete_Patient.clickOnDataManagementMenuOnSearchGrid("PATIENTS");

        //<Step>In the search bar, enter the patient name noted in Step 2 and click enter
        PG_Delete_Patient.setTextInTheSearchBox(patientName);
        PG_Add_Patient.pressKeyMultipleTimes("[Enter]", "1");
    }
    catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
 module.exports.deletePatientPrecondition = deletePatientPrecondition;






