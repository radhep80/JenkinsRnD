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
function KT_T8_Search_a_patient_by_DOB_in_MM_DD_YYYY()
{
  try
  {
      aqTestCase.Begin("KT-T8_Search_a_patient_by_DOB_in_MM_DD_YYYY");
  
      //<Step 2>-Click on the reception button on the main menu 
      PG_HomePage.selectTheMenuAndClick("Reception");
      PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

      //<Step 3>-Enter the patient's DOB in "MM DD YYYY" format using space operator in the search bar. Verify that the corresponding patient name and number appears under the "ALL PATIENTS" section
      PG_PatientDialogBox.searchPatientByName(dataDriver.getValue("DOBWithSpace"));
      PG_PatientDialogBox.waitForVisibilityOfAddButton();
      PG_PatientDialogBox.validateCountOfAllPatient();
      PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);
      PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);
      PG_Patient_Jacket.checkPatientNameOnTopOfJacket(dataDriver.getValue("PatientSearchByCommaseparator"), dataDriver.getValue("PatientName"));
      PG_Patient_Jacket.validateDOBOnPatientJacket(dataDriver.getValue("DOB"));
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
