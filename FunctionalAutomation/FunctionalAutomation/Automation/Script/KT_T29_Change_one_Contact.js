var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var dataGenerator = require("DataGenerator");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var sexAtBirth = dataDriver.getValue("Sex_At_Birth");
var addressLine1 = dataDriver.getValue("AddressLine1");
var suburb = dataDriver.getValue("Suburb");
var birthDate = dataGenerator.getRandomDayFormatted()
var birthMonth = dataGenerator.getRandomMonth();
var birthYear = dataGenerator.getRandomYear(1980);
var email = dataGenerator.generateRandomString(5) + "@gmail.com";
var contactNumber = dataGenerator.generateRandomNumberBasedOnLength(10);
var AUID = dataGenerator.generateRandomNumberBasedOnLength(8);
var updatedConatctNo = dataGenerator.generateRandomNumberBasedOnLength(10).toString();;
var lastName = (dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName")).toUpperCase();
var firstNameRaw = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
var firstName = firstNameRaw.charAt(0).toUpperCase() + firstNameRaw.slice(1);
var searchByFirstNameAndLastName = lastName + ", " + firstName;
//@editPatient
function KT_T29_Change_one_Contact() {
   aqTestCase.Begin("KT_T29_Change_one_Contact");
    
    //<Step 1>-Search a patient with Karisma number as identifier
    PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
    dataDriver.setDataDriver("AddPatient", "KT_T16_TwoContact");
    PG_Add_Patient.clickOnContactButtonsByName("Addemail");
    PG_Add_Patient.setEmailAddress(email);
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_Patient_Jacket.validateTextOnPatientJacketByTextName(dataDriver.getValue("ContactType"), email);
    var patientKarishmaNo = PG_Patient_Jacket.getKarishmaNumberFromPJ();
    PG_MainPage.clickMenu("Menu");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.searchPatientByName(patientKarishmaNo);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByFirstNameAndLastName);

    //<Step 2>- Double click on patient jacket 
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3>-Under the Contact section, edit the "Contact Number" of patient and click on the Save button..
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.clearContactNumber();
    PG_Add_Patient.enterContactNumber(updatedConatctNo);
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByFirstNameAndLastName);
   
    //<Step 4>-Verify that the changes are reflected in the patient's name in the patient jacket under Contact section
    PG_Patient_Jacket.validateContactNumber(updatedConatctNo);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();

}
