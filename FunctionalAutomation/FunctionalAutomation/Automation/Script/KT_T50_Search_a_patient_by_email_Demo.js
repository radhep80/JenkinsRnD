var waitUtils = require("WaitUtils");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("PatientSearch", "PatientSearchTC");
var patientName = dataDriver.getValue("PatientName");
var zephyrFunctions =  require("ZephyrUtils"); 
var totalSteps = 3;

//@patientSearch1
function KT_T50_Search_a_patient_by_email() {
        try
        {
            aqTestCase.Begin("KT-T50_Search_a_patient_by_email");
    
            //zephyrFunctions.logStep(1,"Pass","",totalSteps);
            //<Step 2>-Click on the reception button on the main menu 
            PG_HomePage.selectTheMenuAndClick("Reception");
            PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
            //zephyrFunctions.logStep(2,"Pass","",totalSteps);
        
            //<Step 3>-Enter the email with the '@' symbol in it
            PG_PatientDialogBox.searchPatientByName(dataDriver.getValue("PatientEmailID"));
            PG_PatientDialogBox.waitForVisibilityOfAddButton();
            PG_PatientDialogBox.validateCountOfAllPatient();
            PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);
            PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);
            PG_Patient_Jacket.checkPatientNameOnTopOfJacket(dataDriver.getValue("PatientSearchByCommaseparator"), dataDriver.getValue("PatientName"));
            PG_Patient_Jacket.validateTextOnPatientJacketByTextName(3,totalSteps,dataDriver.getValue("PatientLastName"), dataDriver.getValue("PatientEmailID"))
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
