var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Filtering = require("PG_Filtering_Functions");
var PG_HomePage = require("PG_HomePage_Functions");
var globalConstants = require("GlobalConstants");
var actionUtils = require("ActionUtils");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");

function preconditionForFiltering() {
    try {
        //<Step 1> Navigate to Reception
        PG_HomePage.selectTheMenuAndClick("Reception");
        PG_Filtering.waitForVisibilityOfConfigurationPaneicon();

        //<Step 2> Click on Configuration Pane icon
        PG_Filtering.clickOnConfigurationPaneicon();

        //<Step 3> Click on the "Manage" icon, Verify that "MANAGE CUSTOM FILTERS' window is opened successfully 
        PG_Filtering.clickOnFilteringOptions("MANAGE");
        PG_Filtering.validateFilteringWindowTitle(globalConstants.manageWindowTitle);

        //<Step 4> Click on "NEW" button. Verify that the "CUSTOM FILTER" screen appears
        PG_Filtering.checkExistingFilterAndClickOnNew();
        PG_Add_Patient.validateManagePatientWindowTittle("CUSTOM FILTER", "CUSTOM FILTER");
    }
    catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.preconditionForFiltering = preconditionForFiltering;

function postConditionForFiltering(countType, patientName) {
    try {
        //<Step>  Click on Configuration Pane icon
        PG_Filtering.clickOnConfigurationPaneicon();

        //<Step> Verify that in "TODAY'S PATIENTS"  list, the patient corresponding to the selected filter  appears
        PG_PatientDialogBox.searchPatientByName(patientName);
        PG_PatientDialogBox.waitForVisibilityOfAddButton();
        PG_Filtering.validateCountOfTodaysPatients(countType);
    }
    catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.postConditionForFiltering = postConditionForFiltering;

function selectOptionOnWindowAndCloseWindow(selectText) {
    try {
        //<Step 7>In the "CHECK  WARD" window, check the relevant ward option and click on Ok button
        PG_Filtering.waitForVisibilityOfSearchBarOnWindow();
        PG_Filtering.clickAndEnterTextOnSearchBar("CheckWindow", selectText);
        actionUtils.pressKeyMultipleTimes("[Enter]", "1");
        Delay(globalConstants.shortTimeout);
        actionUtils.pressKeyMultipleTimes("[Tab]", "2");
        PG_Filtering.clickOnPopupWindowButtons("OK");

        //<Step 8> Click on Ok button
        PG_Filtering.clickOnFilteringOptions("OK");

        //<Step 9> Click on "Close" button in "MANAGE CUSTOM FILTERS" window
        PG_Filtering.clickOnFilteringOptions("CLOSE");
    }
    catch (e) {
        Log.Error("Error occurred while clicking the button: " + e.message);
    }
}
module.exports.selectOptionOnWindowAndCloseWindow = selectOptionOnWindowAndCloseWindow;

function selectOptionOnWindow(selectOption) {
    try {
        //<Step > In the window, check the relevant option and click on Ok button
        PG_Filtering.clickAndEnterTextOnSearchBar("FilterSerachBar", selectOption);
        actionUtils.pressKeyMultipleTimes("[Enter]", "1");
        Delay(globalConstants.shortTimeout);
        actionUtils.pressKeyMultipleTimes("[Tab]", "2");
        PG_Filtering.clickOnFilteringOptions("OK");
    }
    catch (e) {
        Log.Error("Error occurred while clicking the button: " + e.message);
    }
}
module.exports.selectOptionOnWindow = selectOptionOnWindow;


