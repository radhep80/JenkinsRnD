var KT_Add_Patient = require("KT_T18_Add_a_new_patient_using_two_conditions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var addPatientPgLocators = require("PG_Add_Patient_Locators");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var patientName = KT_Add_Patient.searchByFirstNameAndLastName;
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient","KT_T18_TwoCondition");
var conditionFirst=dataDriver.getValue("ConditionFirst");
var conditionSecond=dataDriver.getValue("ConditionSecond");
var initialCount;

//@removePatient
function KT_T38_Remove_one_Condition() {
  
    //<Step 1.1> Launch Karisma application

    //<Step 1.2> Click on the reception button on the main menu
    KT_Add_Patient.KT_T18_Add_a_new_patient_using_two_conditions();
    aqTestCase.Begin("KT_T38_Remove_one_Condition");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

    //<Step 1.3> Enter "<Surname>,<First Name>" in the search bar. Verify that the corresponding patient name and number appears under the "ALL PATIENTS" section
    PG_PatientDialogBox.searchPatientByName(patientName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);
    initialCount = addPatientPgLocators.getAllergyOrConditionData().ChildCount;

    //<Step 2>- Click on Conditions section on patient jacket
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3> Under the Condition section, click on the "X" icon next to Condition Type and click on the Save button.
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.clickOnRemoveButton("RemoveButtonNoteSection","RemoveCondition");
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);

    //<Step 4>Verify that the Condition is removed and changes are reflected under the Conditions section in the patient jacket
    PG_Patient_Jacket.validateCount("AllergyOrCondition",initialCount);
    PG_Add_Patient.validateAllergyorConditionOnPatientJacket("ValidateAllergyorConditionSecond", conditionSecond, conditionSecond);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
}