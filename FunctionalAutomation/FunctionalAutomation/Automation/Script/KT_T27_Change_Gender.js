var waitUtils = require("WaitUtils");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var dataGenerator = require("DataGenerator");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");

var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");

var lastName = (dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName")).toUpperCase();
var firstNameRaw = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
var updatedSexAtBirth = dataDriver.getValue("updatedSexAtBirth");

var firstName = firstNameRaw.charAt(0).toUpperCase() + firstNameRaw.slice(1);
var sexAtBirth = dataDriver.getValue("Sex_At_Birth");
var searchByLastNameAndFirstName = lastName + ", " + firstName;
//@editPatient
function KT_T27_Change_Gender_Female_To() {
    aqTestCase.Begin("KT_T27_Change_Gender");

    //<Step 1>Search a patient by comma separator "<Surname>,<First Name>"
    PG_Add_Patient.editPatientPrecondition(searchByLastNameAndFirstName, sexAtBirth)
    PG_PatientDialogBox.searchPatientByName(searchByLastNameAndFirstName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByLastNameAndFirstName);

    //<Step 2>- Double click on patient jacket 
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3>-Under the Name section, edit the first name of patient and click on the Save button.
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.clearDemographicsData();
    PG_Add_Patient.setSexAssignedatBirth(updatedSexAtBirth);
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");

    //<Step 4>-Verify that the changes are reflected in the patient's name in the patient jacket
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByLastNameAndFirstName);
    PG_Patient_Jacket.checkPatientNameOnTopOfJacket(searchByLastNameAndFirstName, searchByLastNameAndFirstName);
    PG_Patient_Jacket.validateDOBOnPatientJacket(updatedSexAtBirth);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
}
