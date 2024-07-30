var PG_HomePage = require("PG_HomePage_Functions");
var PG_Filtering = require("PG_Filtering_Functions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var zephyrFunctions = require("ZephyrUtils");
var PG_MainPage = require("PG_Main_Locators");
var globalConstants= require("GlobalConstants");
var filtering=require("Filtering");

function KT_T105_Manage_Custom_Filter_Dont_show_current_work_site() {
  try{
  
    aqTestCase.Begin("KT_T105_Manage_Custom_Filter_Dont_show_current_work_site");
    //<Step 1> to <step 4>
    filtering.preconditionForFiltering();

    //<Step 5> Enter a name "Don't Show Current worksite" under the "Caption" field
    PG_Filtering.clickAndEnterTextOnSearchBar("caption",globalConstants.DontShow);

    //<Step 6> Under the "RELATED" section, for the field "Current Work Site" , select the option "Don't show current work site"
    PG_Filtering.clickAndSetValueOnCustomFilterFields("Related","CurrentWorksite", globalConstants.DontShow);

    //<Step 7> Click on Ok button
    PG_Filtering.clickOnFilteringOptions("OK");

    //<Step 8> Click on "Close" button in "MANAGE CUSTOM FILTERS" window
    PG_Filtering.clickOnFilteringOptions("CLOSE");

    //<Step 9> Under the "FILTERING" section, select the newly added filter
    PG_Filtering.clickOnFilteringOptions(globalConstants.DontShow);

    //<step 10><step 11>
    filtering.postConditionForFiltering("Include","Filter Test");
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
