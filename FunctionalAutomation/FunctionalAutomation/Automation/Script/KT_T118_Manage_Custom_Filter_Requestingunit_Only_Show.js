var PG_Filtering = require("PG_Filtering_Functions");
var zephyrFunctions = require("ZephyrUtils");
var filtering=require("Filtering");
var globalConstants = require("GlobalConstants");
var PG_MainPage = require("PG_Main_Locators");

function KT_T118_Manage_Custom_Filter_Requestingunit_Only_Show()
{
  try{
  aqTestCase.Begin("KT_T118_Manage_Custom_Filter_Requestingunit_Only_Show");
        //<Step 1> to <step 4>
        filtering.preconditionForFiltering();

        //<Step 5>Enter a name "Only Show Requesting Unit" under the "Caption" field
        PG_Filtering.clickAndEnterTextOnSearchBar("caption",globalConstants.requestingUnitOnly);

        //<Step 6> Under the "RELATED" section, for the field "Requesting Unit" ,select the option "Only Show..." from the dropdown and click on the search bar magnifier icon
        PG_Filtering.clickAndSetValueOnCustomFilterFields("Related","RequestingUnit", "Only Show");
        PG_Filtering.clickOnMagnierIcon("Related","RequestingUnitMagnifierIcon");

        //<Step 7>to <Step 9>In the "CHECK  UNIT" window, check the relevant Unit and click on Ok button
        filtering.selectOptionOnWindowAndCloseWindow("A");
     
        //<Step 10> Under the "FILTERING" section, select the newly added filter
        PG_Filtering.clickOnFilteringOptions(globalConstants.requestingUnitOnly);
        
        //<Step 11> and //<Step 12> 
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