var KT_Add_Patient = require("KT_T19_Add_a_new_patient_using_two_allergies");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var dataDriver = require("DataDriver");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var addPatientPgLocators = require("PG_Add_Patient_Locators");
var patientName = KT_Add_Patient.searchByFirstNameAndLastName;
var initialCount;


//@removePatient
function KT_T39_Remove_one_Allergy() {

    //<Step 1.1> Launch Karisma application

    //<Step 1.2> Click on the reception button on the main menu
    KT_Add_Patient.KT_T19_Add_a_new_patient_using_two_allergies();
    aqTestCase.Begin("KT_T39_Remove_one_Allergy");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

    //<Step 1.3> Enter "<Surname>,<First Name>" in the search bar. Verify that the corresponding patient name and number appears under the "ALL PATIENTS" section
    PG_PatientDialogBox.searchPatientByName(patientName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);
    initialCount = addPatientPgLocators.getAllergyOrConditionData().ChildCount;

    //<Step 2>- Click on Allergies section on patient jacket
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3> Under the Allergy section, click on the "X" icon next to Severity and click on the Save button.
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
     PG_Add_Patient.clickOnRemoveButton("RemoveButtonNoteSection","RemoveAllergy");
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);

    //<Step 4> Verify that the Allergy is removed and changes are reflected under the Allergies section in the patient jacket
    PG_Patient_Jacket.validateCount("AllergyOrCondition",initialCount);
    dataDriver.setDataDriver("AddPatient", "KT_T19_TwoAllergy");
    PG_Add_Patient.validateAllergyorConditionOnPatientJacket("ValidateAllergyorConditionSecond", dataDriver.getValue("ValidateFirstAllergy"), dataDriver.getValue("ValidateFirstAllergy"));
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();


}