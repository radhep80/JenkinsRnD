var dataGenerator = require("DataGenerator");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var sexAtBirth=dataDriver.getValue("Sex_At_Birth");
var addressLine1=dataDriver.getValue("AddressLine1");
var suburb=dataDriver.getValue("Suburb");
var updatedSuburb=dataDriver.getValue("UpdatedSuburb");

var birthDate = dataGenerator.getRandomDayFormatted()
var birthMonth= dataGenerator.getRandomMonth();
var birthYear=dataGenerator.getRandomYear(1980);
var contactNumber=dataGenerator.generateRandomNumberBasedOnLength(10);
var AUID = dataGenerator.generateRandomNumberBasedOnLength(8);
var lastName = (dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName")).toUpperCase();
var firstNameRaw = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
var firstName = firstNameRaw.charAt(0).toUpperCase() + firstNameRaw.slice(1);
var searchByFirstNameAndLastName = lastName + ", " +firstName;

//@editPatient
function KT_T30_Change_one_Address() {
    aqTestCase.Begin("KT_T30_Change_one_Address");

    //<Step 1>Search a patient by space separator "<Surname> <First Name>"
    PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_MainPage.clickMenu("Menu");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.searchPatientByName(searchByFirstNameAndLastName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByFirstNameAndLastName);
    
    //<Step 3>- Double click on patient jacket
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();
    
    //<Step3>:Under the Address section, select a new suburb of patient and click on the Save button.
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
     PG_Add_Patient.clearSubBurb();
    PG_Add_Patient.setPatientAddress(addressLine1,updatedSuburb);
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByFirstNameAndLastName);
    
    //<Step4>:Verify that the changes are reflected in the patient's name in the patient jacket under Contact section
     PG_Patient_Jacket.validateTextOnPatientJacketByTextContains(updatedSuburb);
     PG_MainPage.clickMenu("Menu");
     aqTestCase.End();
}


