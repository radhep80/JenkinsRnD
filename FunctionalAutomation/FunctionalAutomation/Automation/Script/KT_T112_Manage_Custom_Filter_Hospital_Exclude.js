var PG_Filtering = require("PG_Filtering_Functions");
var PG_Delete_Patient = require("PG_Delete_Patient_Functions");
var zephyrFunctions = require("ZephyrUtils");
var PG_MainPage = require("PG_Main_Locators");
var filtering=require("Filtering");
var KT_Register_Request = require("KT_T111_Request_with_Hospital_and_Ward");
var hospital = KT_Register_Request.hospital;
var patientName = KT_Register_Request.searchByLastNameAndFirstName;

function KT_T112_Manage_Custom_Filter_Hospital_Exclude() {
    try {
       KT_Register_Request.KT_T111_Register_a_request_with_different_Hospital_and_Ward();
        aqTestCase.Begin("KT_T112_Manage_Custom_Filter_Hospital_Exclude");
        
        //<Step 1> to <step 4>
        filtering.preconditionForFiltering();

        //<Step 5> Enter a name "Hospital Exclude" under the "Caption" field
        PG_Filtering.clickAndEnterTextOnSearchBar("caption", "Hospital Exclude");

        //<Step 6>Under the "RELATED" section, for the field "Hospital" ,select the option "Exclude..." from the dropdown and click on the search bar magnifier icon
        PG_Filtering.clickAndSetValueOnCustomFilterFields("Related","Hospital", "Exclude");
        PG_Filtering.clickOnMagnierIcon("Related","HospitalMagnifierIcon");

        //<Step 7> to <Step 9> In the "CHECK HOSPITAL" window, check the relevant hospital option and click on Ok button
        PG_Filtering.selectOptionOnWindowAndCloseWindow(hospital);

        //<Step 10> Under the "FILTERING" section, select the newly added filter
        PG_Filtering.clickOnFilteringOptions("Hospital Exclude");

        //<Step 11> and  //<Step 12> 
        filtering.postConditionForFiltering("Exclude",patientName);
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
