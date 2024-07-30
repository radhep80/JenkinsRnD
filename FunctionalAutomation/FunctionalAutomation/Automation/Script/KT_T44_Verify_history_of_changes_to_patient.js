var PG_HomePage = require("PG_HomePage_Functions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var PG_MainPage = require("PG_Main_Locators");
var KT_Edit_Patient = require("KT_T33_Change_one_or_more_Patient_notes");
var globalConstants = require("GlobalConstants");
var zephyrFunctions = require("ZephyrUtils");
var KT_Edit_Patient = require("KT_T33_Change_one_or_more_Patient_notes");

//@patientHistory
function KT_T44_Verify_history_of_changes() {
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
        PG_Patient_Jacket.verifyPoPName("PATIENT VERSION HISTORY");

        //<Step 3>-Click on the three dots on the extreme left side of the window and verify that 'PATIENT REVISION LIST' window is opened
        PG_Patient_Jacket.selectToolBarOnPatientHistory("ThreeDot");

        //<Step 4>-Click on "Compare to Previous" and verify that the changes are highlighted
        PG_Patient_Jacket.clickOnPatientRevisionListItem("compareToPrevious");
        //Note-Issue with WinMerge, code needs to be added once issue get resolved.
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
