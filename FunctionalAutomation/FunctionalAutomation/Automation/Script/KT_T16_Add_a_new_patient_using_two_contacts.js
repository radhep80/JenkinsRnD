var verificationUtils = require("VerificationUtils");
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
var birthDate = dataGenerator.getRandomDayFormatted()
var birthMonth= dataGenerator.getRandomMonth();
var birthYear=dataGenerator.getRandomYear(1980);
var contactNumber=dataGenerator.generateRandomNumberBasedOnLength(10);
var AUID = dataGenerator.generateRandomNumberBasedOnLength(8);
var lastName = (dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName")).toUpperCase();
var firstNameRaw = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
var firstName = firstNameRaw.charAt(0).toUpperCase() + firstNameRaw.slice(1);
var searchByFirstNameAndLastName = lastName + ", " +firstName;

var email=dataGenerator.generateRandomString(5)+"@gmail.com";

 //@addPatient   
function KT_T16_Add_a_new_patient_using_two_contacts() {
  
     aqTestCase.Begin("KT_T16_Add_a_new_patient_using_two_contacts");

    //step1 and step2:
    PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
    
    //step3:Under the Contact section, click on "Add email" button
    dataDriver.setDataDriver("AddPatient", "KT_T16_TwoContact");
    PG_Add_Patient.clickOnContactButtonsByName("Addemail");

    //step4:Enter any email address for the "Type" email
    PG_Add_Patient.setEmailAddress(email);

    //step5:Click on Save button on the patient window. Verify that the two contacts are saved successfully
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_Patient_Jacket.validateTextOnPatientJacketByTextName(dataDriver.getValue("ContactType"), email);
    PG_MainPage.clickMenu("Menu");
     aqTestCase.End();


}

module.exports.KT_T16_Add_a_new_patient_using_two_contacts=KT_T16_Add_a_new_patient_using_two_contacts;
module.exports.searchByFirstNameAndLastName=searchByFirstNameAndLastName;
module.exports.contactNumber=contactNumber;
module.exports.email=email;
