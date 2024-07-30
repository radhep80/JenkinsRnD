var KT_Add_Patient = require("KT_T19_Add_a_new_patient_using_two_allergies");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var dataGenerator = require("DataGenerator");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");

var updatedConatctNo = dataGenerator.generateRandomNumberBasedOnLength(10).toString();;
var patientName = KT_Add_Patient.searchByFirstNameAndLastName;

var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "KT_T19_TwoAllergy");
var initalAllergy1Val = dataDriver.getValue("AllergyFirst");
var initalSeverity1Val = dataDriver.getValue("SeverityFirst");
var secondAllergy = dataDriver.getValue("AllergySecond");
var secondSeverity = dataDriver.getValue("SeveritySecond");
var updatedAllergy1Val = dataDriver.getValueByRow(2, "AllergyFirst");
var updatedSeverity1Val = dataDriver.getValueByRow(2, "SeverityFirst");
var expactedAllergy1OnPJAfterUpdates = updatedAllergy1Val + " - " + updatedSeverity1Val;
var expactedAllergy2OnPJ = secondAllergy + " - " + secondSeverity;
//@editPatient
function KT_T31_Change_one_Allergy() {
   
    //<Step 1>-Launch Karisma application

    //<Step 2>-Navigate to reception and search for the patient (created in KT-T19 test case) by entering the name in the search bar
    KT_Add_Patient.KT_T19_Add_a_new_patient_using_two_allergies();
    aqTestCase.Begin("KT_T31_Change_one_Allergy");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.searchPatientByName(patientName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);

    //<Step 3>- Click on the patient details and verify that the patient window is opened
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 4>-Navigate to Allergy section and edit the severity of the allergy
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.selectAllergy("AddAllergySecond", initalAllergy1Val, initalSeverity1Val, updatedAllergy1Val, updatedSeverity1Val);

    //<Step 5>-Click on Save button on the patient window. Verify that the edited details in Allergy section are saved successfully
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);
    PG_Add_Patient.validateAllergyorConditionOnPatientJacket("ValidateAllergyorConditionFirst", expactedAllergy1OnPJAfterUpdates, expactedAllergy1OnPJAfterUpdates);
    PG_Add_Patient.validateAllergyorConditionOnPatientJacket("ValidateAllergyorConditionSecond", expactedAllergy2OnPJ, expactedAllergy2OnPJ);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
}
