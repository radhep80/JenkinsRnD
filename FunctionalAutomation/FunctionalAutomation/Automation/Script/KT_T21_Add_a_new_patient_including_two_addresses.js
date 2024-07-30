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

//AddressFilds  
dataDriver.setDataDriver("AddPatient", "KT_T21_TwoAddress");
var addressline = dataDriver.getValue("AddressLine1");
var secondsuburb = dataDriver.getValue("Suburb");
var postcode = dataDriver.getValue("Postcode");
var city = dataDriver.getValue("City");
var state = dataDriver.getValue("State");
var country = dataDriver.getValue("Country");
var type = dataDriver.getValue("Type");

 //@addPatient
function KT_T21_Add_a_new_patient_including_two_addresses() {
  
  aqTestCase.Begin("KT_T21_Add_a_new_patient_including_two_addresses");

      //step1 and step2:
    PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
    
    //step3:Under the Address, click on "Add new", select the "Type" and enter the address details
    PG_Add_Patient.clickonAddnewButtonSecondBlock("AddressAddNewButton");
    PG_Add_Patient.addSecondAddress(addressline, secondsuburb, postcode, city, state, country, type);

    //step4:Click on Save button on the patient window. Verify that the two addresses are saved successfully
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_Add_Patient.doubleClickOnRandomPatientData();
    PG_Add_Patient.validateAddressChildCount();
    PG_Add_Patient.clickOnAddPatientwindowButton("Cancel");
    PG_MainPage.clickMenu("Menu");
     aqTestCase.End();
      

}

module.exports.KT_T21_Add_a_new_patient_including_two_addresses=KT_T21_Add_a_new_patient_including_two_addresses;
module.exports.searchByFirstNameAndLastName=searchByFirstNameAndLastName;
module.exports.birthDate=birthDate;
module.exports.birthMonth=birthMonth;
module.exports.birthYear=birthYear;