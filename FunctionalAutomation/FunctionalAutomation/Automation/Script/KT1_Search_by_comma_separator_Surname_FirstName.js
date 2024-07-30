var waitUtils =  require("WaitUtils");  
var PG_HomePage =  require("PG_HomePage_Functions"); 
var PG_MainPage =  require("PG_Main_Locators");   
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("PatientSearch","PatientSearchTC");
var patientName=dataDriver.getValue("PatientName");
var zephyrFunctions =  require("ZephyrUtils"); 

//@patientSearch
function KT1_Search_a_patient_by_comma_separator_Surname_FirstName()
{
  try
  {

      aqTestCase.Begin("KT-T1_Search_a_patient_by_comma_separator_Surname_FirstName");
 
      //<Step 2>-Click on the reception button on the main menu 
      PG_HomePage.selectTheMenuAndClick("Reception");
      PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

      //<Step 3>-Enter "<Surname>,<First Name>" in the search bar. Verify that the corresponding patient name and number appears under the "ALL PATIENTS" section
      PG_PatientDialogBox.searchPatientByName(dataDriver.getValue("PatientSearchByCommaseparator"));
      PG_PatientDialogBox.waitForVisibilityOfAddButton();
      PG_PatientDialogBox.validateCountOfAllPatient();
      PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);
      PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);
      PG_Patient_Jacket.checkPatientNameOnTopOfJacket(dataDriver.getValue("PatientSearchByCommaseparator"), dataDriver.getValue("PatientName"));
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
