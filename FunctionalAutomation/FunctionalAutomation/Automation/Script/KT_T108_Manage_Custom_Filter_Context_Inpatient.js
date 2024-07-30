var PG_Filtering = require("PG_Filtering_Functions");
var zephyrFunctions = require("ZephyrUtils");
var PG_MainPage = require("PG_Main_Locators");
var filtering=require("Filtering");
var KT_Register_Request = require("KT_T106_Register_request_with_context_Inpatient");
var patientName = KT_Register_Request.searchByLastNameAndFirstName;

function KT_T108_Manage_Custom_Filter_Context_Inpatient() {
   try{
     KT_Register_Request.KT_T106_Register_request_with_context_Inpatient();
    aqTestCase.Begin("KT_T108_Manage_Custom_Filter_Context_Inpatient");
    //<Step 1> to <step 4>
   filtering.preconditionForFiltering();

    //<Step 5>Enter a name "Inpatient" under the "Caption" field
    PG_Filtering.clickAndEnterTextOnSearchBar("caption", "Inpatient");

    //<Step 6>Under the "RELATED" section, for the field "Context" ,click on the search bar magnifier icon
    PG_Filtering.clickOnMagnierIcon("Related","Context");

    //<Step 7>In the "CHECK CONTEXT" window, check the "Inpatient" option and click on Ok button     
    PG_Filtering.selectTheOptionOnCheckContextWindow("Inpatient");
    PG_Filtering.clickOnPopupWindowButtons("OK");

    //<Step 8> Click on Ok button
    PG_Filtering.clickOnFilteringOptions("OK");

    //<Step 9> Click on "Close" button in "MANAGE CUSTOM FILTERS" window
    PG_Filtering.clickOnFilteringOptions("CLOSE");

    //<Step 10> Under the "FILTERING" section, select the newly added filter
    PG_Filtering.clickOnFilteringOptions("Inpatient");

    //<Step 11> and //<Step 12> 
    filtering.postConditionForFiltering("Include",patientName);
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

