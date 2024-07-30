var KT_Add_Patient = require("KT_T20_Add_a_new_patient_using_two_next_of_Kin");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var dataDriver = require("DataDriver");

dataDriver.setDataDriver("AddPatient", "KT_T20");
var PJ_KinName1 = dataDriver.getValue("PJ_KinName1Index");
var PJ_KinName2 = dataDriver.getValue("PJ_KinName2Index");
var kinIndex2 = dataDriver.getValue("KinIndex2");
var Kin2_Name = dataDriver.getValue("Kin2_Name");
var KinNameAfterUpdate = dataDriver.getValue("PJ_KinNameAfterUpdate");

var firstKinNameUpdated = dataDriver.getValueByRow(2, "Kin2_Name");
var firstKinRelationshipUpdated = dataDriver.getValueByRow(2, "Kin2_Relationship");
var firstKinSequenceUpdated = dataDriver.getValueByRow(2, "Kin2_Sequence");
var firstKinMobileUpdated = dataDriver.getValueByRow(2, "Kin2_Mobile");
var firstKinHomeUpdated = dataDriver.getValueByRow(2, "Kin2_Home");
var patientName = KT_Add_Patient.searchByFirstNameAndLastName;
//@editPatient
function KT_T32_Change_one_Next_of_Kin() {
    //<Step 1>-Launch Application

    //<Step 2>-Navigate to reception and search for the patient (created in KT-T20 test case) by entering the name in the search bar
    KT_Add_Patient.KT_T20_Add_a_new_patient_using_two_next_of_Kin();
    aqTestCase.Begin("KT_T32_Change_one_Next_of_Kin");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.searchPatientByName(patientName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);

    //<Step 3>- Click on the patient details and verify that the patient window is opened
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 4>-Navigate to Next of Kin section and edit some details. e.g., change the Sequence
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.setValuesInKin(kinIndex2, firstKinNameUpdated, firstKinRelationshipUpdated, firstKinSequenceUpdated, firstKinMobileUpdated, firstKinHomeUpdated);

    //<Step 5>-Click on Save button on the patient window. Verify that the edited details in Next of Kin section are saved successfully
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);
    PG_Patient_Jacket.verifyNextToKinOnPatientJacket(PJ_KinName1, Kin2_Name);
    PG_Patient_Jacket.verifyNextToKinOnPatientJacket(KinNameAfterUpdate, firstKinNameUpdated);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
}
