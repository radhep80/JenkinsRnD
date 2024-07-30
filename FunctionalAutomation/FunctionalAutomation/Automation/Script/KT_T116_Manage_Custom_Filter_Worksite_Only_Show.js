var PG_Filtering = require("PG_Filtering_Functions");
var zephyrFunctions = require("ZephyrUtils");
var filtering = require("Filtering");
var PG_MainPage = require("PG_Main_Locators");
var globalConstants = require("GlobalConstants");
var KT_Register_Request = require("KT_T59_Register_a_request");
var patientName = KT_Register_Request.searchByLastNameAndFirstName;

function KT_T116_Manage_Custom_Filter_Worksite_Only_Show() {
    try {
        KT_Register_Request.KT_T59_Register_a_request();
        aqTestCase.Begin("KT_T114_Manage_Custom_Filter_Worksite_Only_Show");
        //<Step 1> to <step 4>
        filtering.preconditionForFiltering();

        //<Step 5>Enter a name "Worksite Only show" under the "Caption" field
        PG_Filtering.clickAndEnterTextOnSearchBar("caption",globalConstants.worksiteOnly);

        //<Step 6> Under the "RELATED" section, for the field "Work site" ,select the option "Only Show..." from the dropdown and click on the search bar magnifier icon 
        PG_Filtering.clickAndSetValueOnCustomFilterFields("Related", "Worksite", "Only Show");
        PG_Filtering.clickOnMagnierIcon("Related", "WorksiteMagnifierIcon");

        //<Step 7> to <Step 9>In the "CHECK  WORKSITE" window, check the relevant worksite option and click on Ok button
        filtering.selectOptionOnWindowAndCloseWindow("C");

        //<Step 10> Under the "FILTERING" section, select the newly added filter
        PG_Filtering.clickOnFilteringOptions(globalConstants.worksiteOnly);

        //<Step 11> and //<Step 12> 
        filtering.postConditionForFiltering("Include", patientName);
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