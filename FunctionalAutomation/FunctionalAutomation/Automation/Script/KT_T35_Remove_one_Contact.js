var KT_Add_Patient = require("KT_T16_Add_a_new_patient_using_two_contacts");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var addPatientPgLocators = require("PG_Add_Patient_Locators");
var patientJacketPg = require("PG_Patient_Jacket_Locators");
var patientName = KT_Add_Patient.searchByFirstNameAndLastName;
var contactNumber=KT_Add_Patient.contactNumber;
var email= KT_Add_Patient.email;
var initialCount;
var actionUtils=require("ActionUtils");

//@removePatient
function KT_T35_Remove_one_Contact() {

    //<Step 1.1> Launch Karisma application

    //<Step 1.2> Click on the reception button on the main menu
    KT_Add_Patient.KT_T16_Add_a_new_patient_using_two_contacts();
    aqTestCase.Begin("KT_T35_Remove_one_Contact");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

    //<Step 1.3> Enter the email with the '@' symbol in it
    PG_PatientDialogBox.searchPatientByName(email);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);
    initialCount = patientJacketPg.getContactChildCount().ChildCount;

    //<Step 2>- Click on Contact section on patient jacket
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3>- Under the Contact section, click on the "X" icon next to Contact and click on the Save button.
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.clickOnRemoveButton("RemoveButtonContactSection","RemoveContact");
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);

    //<Step 4>Verify that the Contact is removed and changes are reflected under the Contact section in the patient jacket
    PG_Patient_Jacket.validateCount("Contact",initialCount);
    PG_Patient_Jacket.validateContactNumber(contactNumber);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();

}
