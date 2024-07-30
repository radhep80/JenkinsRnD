var waitUtils = require("WaitUtils");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var dataGenerator = require("DataGenerator");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");


var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");

var firstName = (dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName")).toUpperCase();
var lastNameRaw = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
var lastName = lastNameRaw.charAt(0).toUpperCase() + lastNameRaw.slice(1);

var birthDate = dataGenerator.getRandomDayFormatted();
var birthMonth = dataGenerator.getRandomMonth();
var birthYear = dataGenerator.getRandomYear(1978);
var sexAtBirth = dataDriver.getValue("Sex_At_Birth")
var searchByDOB = birthDate + "/" + birthMonth + "/" + birthYear;

var updatedBirthDate = dataGenerator.getRandomDayFormatted();
var UpdateBirthMonth = dataGenerator.getRandomMonth();
var UpdatedBirthYear = dataGenerator.getRandomYear(1998);
var updatePatientDOB = updatedBirthDate + "-" + UpdateBirthMonth + "-" + UpdatedBirthYear;

var searchByFirstNameAndLastName = firstName + ", " + lastName;
//@editPatient
function KT_T26_Change_DOB() {
    aqTestCase.Begin("KT_T26_Change_DOB");

    //<Step 1>-Search a patient by DOB "MM/DD/YYYY" 
    PG_Add_Patient.editPatientPrecondition(searchByFirstNameAndLastName,sexAtBirth,birthDate, birthMonth, birthYear);
    PG_PatientDialogBox.searchPatientByName(searchByDOB);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByFirstNameAndLastName);

    //<Step 2>- Double click on patient jacket 
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3>-Under the Demographic section, edit the birth date of patient and click on the Save button.
    PG_Add_Patient.clearDateMonthYearTextBox();
    PG_Add_Patient.setBirthDate(updatedBirthDate, UpdateBirthMonth, UpdatedBirthYear);
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");

    //<Step 4>- Verify that the changes are reflected under the patient's name in the patient jacket
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.clearPatientSearchBox();
    PG_PatientDialogBox.searchPatientByName(searchByFirstNameAndLastName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByFirstNameAndLastName);
    PG_Patient_Jacket.checkPatientNameOnTopOfJacket(searchByFirstNameAndLastName, searchByFirstNameAndLastName);
    PG_Patient_Jacket.validateDOBOnPatientJacket(updatePatientDOB);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
}

