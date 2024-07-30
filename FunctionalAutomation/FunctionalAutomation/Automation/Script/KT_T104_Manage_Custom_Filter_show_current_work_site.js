var PG_HomePage = require("PG_HomePage_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_Filtering = require("PG_Filtering_Functions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var globalConstants= require("GlobalConstants");
var zephyrFunctions = require("ZephyrUtils");
var filtering=require("Filtering");
var KT_Register_Request = require("KT_T59_Register_a_request");
var patientName = KT_Register_Request.searchByLastNameAndFirstName;

function KT_T104_Manage_Custom_Filter_show_current_work_site()
{
  try
  {
    KT_Register_Request.KT_T59_Register_a_request();
   aqTestCase.Begin("KT_T104_Manage_Custom_Filter_show_current_work_site");
    //<Step 1> to <step 4>
    filtering.preconditionForFiltering();

    //<Step 5> Enter a name "Only Show Current worksite" under the "Caption" field
    PG_Filtering.clickAndEnterTextOnSearchBar("caption",globalConstants.onlyShow);

    //<Step 6> Under the "RELATED" section, for the field "Current Work Site" , select the option "Only show current work site"
    PG_Filtering.clickAndSetValueOnCustomFilterFields("Related","CurrentWorksite",globalConstants.onlyShow);

    //<Step 7> Click on Ok button
    PG_Filtering.clickOnFilteringOptions("OK");

    //<Step 8> Click on "Close" button in "MANAGE CUSTOM FILTERS" window
    PG_Filtering.clickOnFilteringOptions("CLOSE");

    //<Step 9> Under the "FILTERING" section, select the newly added filter
    PG_Filtering.clickOnFilteringOptions(globalConstants.onlyShow);

    //<step 10><step 11>
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



