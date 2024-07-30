var KT_Add_Patient = require("KT_T11_Add__patient__including__a_General_Note");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_Delete_Patient = require("PG_Delete_Patient_Functions");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var globalConstants = require("GlobalConstants");
var zephyrFunctions = require("ZephyrUtils");
var patientName, totalSteps = 7;

//@deletePatient
function KT_T41_Delete_the_newly_created_patient() {
    try {

        //<Step 1> Add a new patient including a General Note
        KT_Add_Patient.KT_T11_Add_a_new_patient_including_a_General_Note();
        aqTestCase.Begin("KT_T41_Delete_the_newly_created_patient");

        //<Step 2>Note the name of the newly created patient
        patientName = KT_Add_Patient.searchByFirstNameAndLastName;
        
        //<Step 3> Navigate to Data Management. In the search bar, enter "patients". select "PATIENTS" option
        //<Step 4>In the search bar, enter the patient name noted in Step 2 and click enter     
        PG_Delete_Patient.deletePatientPrecondition(patientName);

        //<Step 5> Select the patient and click on the "Delete" button
        PG_Add_Patient.pressKeyMultipleTimes("[Tab]", "1");
        PG_Delete_Patient.selectButtonOnPopUp("Delete");

        //<Step 6> Click on "DELETE" button. Verify that the message window "Are you sure you want to delete this patient?" with the option of Delete and Cancel
        PG_Delete_Patient.clickOnDeletePatientPopupButtonByName("DELETE");
        PG_Delete_Patient.validateDeletePatientWindowTittle(globalConstants.windowTitle);

        //<Step 7>Click on "Delete" option and verify that the patient is deleted succesfully
        PG_Add_Patient.clickOnWindowPopupButtonByName("DELETE");
        PG_MainPage.clickMenu("Menu");
        PG_HomePage.selectTheMenuAndClick("Reception");
        PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
        PG_PatientDialogBox.searchPatientByName(patientName);
        PG_PatientDialogBox.waitForVisibilityOfAddButton();
        PG_Delete_Patient.validateDeletePatientRecordCount();
        globalConstants.passFlag = "Pass";
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


