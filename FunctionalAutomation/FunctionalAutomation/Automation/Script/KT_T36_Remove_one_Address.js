var KT_Add_Patient = require("KT_T21_Add_a_new_patient_including_two_addresses");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var addPatientPgLocators = require("PG_Add_Patient_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");

var birthDate = KT_Add_Patient.birthDate;
var birthMonth = KT_Add_Patient.birthMonth;
var birthYear = KT_Add_Patient.birthYear;
var searchByDOB = birthMonth + "/" + birthDate + "/" + birthYear;
var patientName = KT_Add_Patient.searchByFirstNameAndLastName;
var initialCount;

//@removePatient
function KT_T36_Remove_one_Address() {
  
    //<Step 1.1> Launch Karisma application

    //<Step 1.2>- Click on the reception button on the main menu
    KT_Add_Patient.KT_T21_Add_a_new_patient_including_two_addresses();
    aqTestCase.Begin("KT_T36_Remove_one_Address");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

    //<Step 1.3>- Enter the patient's DOB in "MM/DD/YYYY" format using slash operator in the search bar. Verify that the corresponding patient name and number appears under the "ALL PATIENTS" section
    PG_PatientDialogBox.searchPatientByName(patientName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);

    //<Step 2>- Click on Contact section on patient jacket
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3>- Under the Address section, click on the "X" icon next to Address and click on the Save button.
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    initialCount = addPatientPgLocators.getAddressChildCount().ChildCount;
    PG_Add_Patient.clickOnRemoveButton("RemoveButtonContactSection","RemoveAddress");
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 4>-Verify that the Address is removed and changes are reflected under the Contact section in the patient jacket
    PG_Patient_Jacket.validateCount("RemoveAddress",initialCount);
    PG_Add_Patient.clickOnAddPatientwindowButton("Cancel");
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();

}