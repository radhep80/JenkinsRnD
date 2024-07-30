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
var updatedLastName = dataDriver.getValue("updatedLastName");

var firstName = firstNameRaw.charAt(0).toUpperCase() + firstNameRaw.slice(1);
var sexAtBirth = dataDriver.getValue("Sex_At_Birth")
var searchByLastNameAndFirstName = lastName + ", " + firstName;
var searchByLastNameAndFirstNameAfterUpdation = updatedLastName + ", " + firstName;
//@editPatient
function KT_T24_Change_Last_Name() {
    aqTestCase.Begin("KT_T24_Change_Last_Name");

    //<Step 1>Search a patient by comma separator "<Surname>,<First Name>"
    PG_Add_Patient.editPatientPrecondition(searchByLastNameAndFirstName, sexAtBirth)
    PG_PatientDialogBox.searchPatientByName(searchByLastNameAndFirstName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByLastNameAndFirstName);

    //<Step 2>- Double click on patient jacket 
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3>-Under the Name section, edit the first name of patient and click on the Save button.
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.setTextInPatientNameBox("lastName", updatedLastName);
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");

    //<Step 4>-Verify that the changes are reflected in the patient's name in the patient jacket
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.clearPatientSearchBox();
    PG_PatientDialogBox.searchPatientByName(searchByLastNameAndFirstNameAfterUpdation);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByLastNameAndFirstNameAfterUpdation);
    PG_Patient_Jacket.checkPatientNameOnTopOfJacket(searchByLastNameAndFirstNameAfterUpdation, searchByLastNameAndFirstNameAfterUpdation);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
}
