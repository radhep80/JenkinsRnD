var zephyrFunctions = require("ZephyrUtils");
var PG_Filtering = require("PG_Filtering_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var filtering = require("Filtering");
var globalConstants = require("GlobalConstants");
var KT_Register_Request = require("KT_T59_Register_a_request");
var patientName = KT_Register_Request.searchByLastNameAndFirstName;

function KT_T100_Filter_using_work_Site() {
    try {
        aqTestCase.Begin("KT_T100_Filter_using_work_Site");
        //<Step 1> to <step3> Register a request with different worksite and financial site
        PG_HomePage.selectTheMenuAndClick("Reception");

        //<Step 4> Click on Configuration Pane icon
        PG_Filtering.clickOnConfigurationPaneicon();

        //<Step 5> Under the FILTERING, select the Work Site option and click on the magnifier icon
        PG_Filtering.clickOnFilterByName(globalConstants.worksite,globalConstants.worksite);
        PG_Filtering.clickOnMagnierIcon("Filtering Options",globalConstants.worksite);

        //<Step 6> In the "CHECK WORK SITE" window, select the work site used in STEP 3. Click on Ok button
        filtering.selectOptionOnWindow("C");

        //<Step 7>and <Step 8>
        filtering.postConditionForFiltering("Include", "Filter Test");
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