var PG_HomePage = require("PG_HomePage_Functions");
var PG_Filtering = require("PG_Filtering_Functions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var zephyrFunctions = require("ZephyrUtils");
var PG_MainPage = require("PG_Main_Locators");
var globalConstants = require("GlobalConstants");

function KT_T94_Filtering_options() {
    try {
        aqTestCase.Begin("KT_T94_Filtering_options");
        //<Step 1> Navigate to Reception
        PG_HomePage.selectTheMenuAndClick("Reception");
        PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

        //<Step 2> Click on Configuration Pane icon
        PG_Filtering.clickOnConfigurationPaneicon();

        //<Step 3> Under the FILTERING option, verify that the four default filters are available
        PG_Filtering.validateFilterOptionNames(globalConstants.all, globalConstants.all);
        PG_Filtering.validateFilterOptionNames(globalConstants.serviceDepartment,globalConstants.serviceDepartment);
        PG_Filtering.validateFilterOptionNames(globalConstants.allocatedResource,globalConstants.allocatedResource);
        PG_Filtering.validateFilterOptionNames(globalConstants.worksite,globalConstants.worksite);

        //<Step 4> Verify that the default selected option is "All" with the filter icon on the left hand side
        PG_Filtering.validateFilterIconVisibility();
    }
    catch (e) {
        Log.Error(e.message);
    }
    finally {
        zephyrFunctions.updateTestExecutionNoSteps(aqTestCase.CurrentTestCase.Name);
        aqTestCase.End();
        PG_MainPage.clickMenu("Menu");
    }
}
