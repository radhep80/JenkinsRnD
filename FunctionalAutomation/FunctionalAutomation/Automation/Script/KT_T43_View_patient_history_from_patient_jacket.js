var PG_HomePage = require("PG_HomePage_Functions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var PG_MainPage = require("PG_Main_Locators");
var globalConstants= require("GlobalConstants");
var zephyrFunctions =  require("ZephyrUtils");
var KT_Edit_Patient = require("KT_T33_Change_one_or_more_Patient_notes");

//@patientHistory
function KT_T43_View_patient_history_patient_jacket() {
    try {
        //<Step 1>-View patient history from patient jacket
        KT_Edit_Patient.KT_T33_Change_one_or_more_Patient_notes();
        aqTestCase.Begin("KT_T43_View_patient_history_patient_jacket");
        PG_HomePage.selectTheMenuAndClick("Reception");
        PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
        PG_PatientDialogBox.searchPatientByName(KT_Edit_Patient.patientName);
        PG_PatientDialogBox.waitForVisibilityOfAddButton();
        PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(KT_Edit_Patient.patientName);

        //<Step 2>-Click on the history button on the patient jacket
        PG_Patient_Jacket.clickOnImageByName("History");

        //<Step 3>-Verify that the 'PATIENT VERSION HISTORY' is opened successfully with the relevant request details with only a single page
        PG_Patient_Jacket.verifyPoPName("PATIENT VERSION HISTORY");

        //<Step 4>-Verify that the updated patient notes are available under the Notes section
        PG_Patient_Jacket.verifyNoteTextOnPatientVersionHistory(KT_Edit_Patient.expectedText);

        //<Step 5>-Click on the <- (back arrow) and verify that the previous notes are available on the second last page
        PG_Patient_Jacket.selectToolBarOnPatientHistory("BackwardArrow");
        PG_Patient_Jacket.verifyNoteTextOnPatientVersionHistory(KT_Edit_Patient.actualText);
        PG_Patient_Jacket.clickOnButton("CLOSE");
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


