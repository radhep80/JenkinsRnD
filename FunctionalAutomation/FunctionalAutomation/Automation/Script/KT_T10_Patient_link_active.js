var waitUtils =  require("WaitUtils");  
var PG_HomePage =  require("PG_HomePage_Functions");  
var PG_MainPage =  require("PG_Main_Locators");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var dataGenerator = require("DataGenerator");
var zephyrFunctions =  require("ZephyrUtils"); 

//@patientSearch
function KT_10_Patient_link_active()
{
  try
  {
        aqTestCase.Begin("KT-T10_Patient_link_active");

        //<Step 2>-Navigate to Reception
        PG_HomePage.selectTheMenuAndClick("Reception");
        PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

        //<Step 3>-Enter any patient name which does not pre exist in Karisma in the search bar. Verify that the "+ ADD PATIENT" button is enabled and visible once the search is performed
        PG_PatientDialogBox.searchPatientByName(dataGenerator.generateRandomString(10));
        PG_PatientDialogBox.waitForVisibilityOfAddButton();
        PG_PatientDialogBox.validatePatientAddButtonText("+ ADD PATIENT");
        PG_PatientDialogBox.clearPatientSearchBox();
        PG_MainPage.clickMenu("Menu");
   }
   catch(e)
   {
      Log.Error(e.message);
   }
   finally
   {
      zephyrFunctions.updateTestExecutionNoSteps(aqTestCase.CurrentTestCase.Name);
      aqTestCase.End();   
   }
}