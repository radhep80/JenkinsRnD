var KT_Add_Patient = require("KT_T15_Add_a_new__patient_using_two_identifiers");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var addPatientPgLocators = require("PG_Add_Patient_Locators");
var patientJacketPg = require("PG_Patient_Jacket_Locators");
var patientName = KT_Add_Patient.searchByFirstNameAndLastName;
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "KT-T15_TwoIdentifier");

//@removePatient
function KT_T34_Remove_one_Patient_Identifier() {
    //<Step 1.1> Launch Karisma application

    //<Step 1.2> Click on the reception button on the main menu
    KT_Add_Patient.KT_T15_Add_a_new__patient_using_two_identifiers();
    aqTestCase.Begin("KT_T34_Remove_one_Patient_Identifier");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

    //<Step 1.3> Enter "<Surname>,<First Name>" in the search bar. Verify that the corresponding patient name and number appears under the "ALL PATIENTS" section
    PG_PatientDialogBox.searchPatientByName(patientName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);
    var initialCount = patientJacketPg.getIdentifierChildCount().ChildCount;

    //<Step 2>- Click on identifiers section on patient jacket
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3> Under the Identifier section, click on the "X" icon next to identifier and click on the Save button.
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.clickOnIdentifierOrHealthFundRemoveButton("IdentifierRemoveButton");
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);

    //<Step 4>Verify that the identifier is removed and changes are reflected under the Identifiers section in the patient jacket
    PG_Patient_Jacket.validateCount("IdentifierOrHealthFund", initialCount);
    PG_Patient_Jacket.ValidateRandomIdentifiers("*" + dataDriver.getValue("ExpectedIdentifier") + "*", dataDriver.getValue("ExpectedIdentifier"));
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();

}