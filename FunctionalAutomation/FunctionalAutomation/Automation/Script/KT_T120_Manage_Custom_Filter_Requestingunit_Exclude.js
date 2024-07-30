var PG_Filtering = require("PG_Filtering_Functions");
var zephyrFunctions = require("ZephyrUtils");
var filtering=require("Filtering");
var globalConstants = require("GlobalConstants");
var PG_MainPage = require("PG_Main_Locators");

function KT_T120_Manage_Custom_Filter_Requestingunit_Exclude()
{
  try {
        aqTestCase.Begin("KT_T120_Manage_Custom_Filter_Requestingunit_Exclude");
        //<Step 1> to <step 4>
        filtering.preconditionForFiltering();

        //<Step 5>Enter a name " Requesting unit Exclude" under the "Caption" field
        PG_Filtering.clickAndEnterTextOnSearchBar("caption",globalConstants.requestingUnitExclude);

        //<Step 6> Under the "RELATED" section, for the field "Requesting unit" ,select the option "Exclude..." from the dropdown and click on the search bar magnifier icon
        PG_Filtering.clickAndSetValueOnCustomFilterFields("Related","RequestingUnit", "Exclude");
        PG_Filtering.clickOnMagnierIcon("Related","RequestingUnitMagnifierIcon");

        //<Step 7>to <Step 9>In the "CHECK  UNIT" window, check the relevant Unit and click on Ok button
        filtering.selectOptionOnWindowAndCloseWindow("A");
       
        //<Step 10> Under the "FILTERING" section, select the newly added filter
        PG_Filtering.clickOnFilteringOptions(globalConstants.requestingUnitExclude);
        
        //<Step 11> and //<Step 12> 
        filtering.postConditionForFiltering("Exclude","Filter Test");
      
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

