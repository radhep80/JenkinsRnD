var PG_Filtering = require("PG_Filtering_Functions");
var zephyrFunctions = require("ZephyrUtils");
var PG_MainPage = require("PG_Main_Locators");
var filtering=require("Filtering");
var globalConstants = require("GlobalConstants");
var KT_Register_Request = require("KT_T111_Request_with_Hospital_and_Ward");
var ward = KT_Register_Request.ward;
var patientName = KT_Register_Request.searchByLastNameAndFirstName;

function KT_T115_Manage_Custom_Filter_Ward_Only_Show()
{
   try {
     
        //KT_Register_Request.KT_T111_Register_a_request_with_different_Hospital_and_Ward();
        aqTestCase.Begin("KT_T115_Manage_Custom_Filter_Ward_Only_Show");
            
        //<Step 1> to <step 4>
        filtering.preconditionForFiltering();

        //<Step 5> Enter a name "Ward Only Show" under the "Caption" field
        PG_Filtering.clickAndEnterTextOnSearchBar("caption",globalConstants.wardOnly);

        //<Step 6>Under the "RELATED" section, for the field "Ward" ,select the option "Only Show.." from the dropdown and click on the search bar magnifier icon
        PG_Filtering.clickAndSetValueOnCustomFilterFields("Related","Ward", "Only Show");
        PG_Filtering.clickOnMagnierIcon("Related","WardMagnifierIcon");

        //<Step 7> to <Step 9>In the "CHECK  WARD" window, check the relevant ward option and click on Ok button
        filtering.selectOptionOnWindowAndCloseWindow(ward);

        //<Step 10> Under the "FILTERING" section, select the newly added filter
        PG_Filtering.clickOnFilteringOptions(globalConstants.wardOnly);
        
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
