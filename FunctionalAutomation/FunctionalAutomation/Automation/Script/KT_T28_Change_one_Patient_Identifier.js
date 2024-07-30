var KT_Add_Patient = require("KT_T15_Add_a_new__patient_using_two_identifiers");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var patientName = KT_Add_Patient.searchByFirstNameAndLastName;
//@editPatient
function KT_T28_Change_one_Patient_Identifier() {
  
    //<Step 1>-Search a patient by phone number
    KT_Add_Patient.KT_T15_Add_a_new__patient_using_two_identifiers();
    aqTestCase.Begin("KT_T28_Change_one_Patient_Identifier");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.searchPatientByName(KT_Add_Patient.contactNumber);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);

    //<Step 2>- Double click on patient jacket 
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3>-Under the Identifier section, edit the identifier say MRN of patient and click on the Save button..
    dataDriver.setDataDriver("AddPatient", "KT-T15_TwoIdentifier");
    var updatedMRN=dataDriver.getValue("UpdatedMRN")
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.setMRNValue(updatedMRN);
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");

    //<Step 4>-Verify that the changes are reflected in the patient's identifier in the patient jacket under the Identifiers section
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);
    PG_Patient_Jacket.ValidateRandomIdentifiers("*" + updatedMRN + "*", updatedMRN);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();

}