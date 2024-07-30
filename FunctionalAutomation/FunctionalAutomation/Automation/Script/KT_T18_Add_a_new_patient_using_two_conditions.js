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
    
 dataDriver.setDataDriver("AddPatient","KT_T18_TwoCondition");
 var conditionFirst=dataDriver.getValue("ConditionFirst");
  var conditionSecond=dataDriver.getValue("ConditionSecond");
 
 //@addPatient
function KT_T18_Add_a_new_patient_using_two_conditions() {
  aqTestCase.Begin("KT_T18_Add_a_new_patient_using_two_conditions");
  //step1 and step2:
  PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);

  //step3:Under the Allergy section, select any value from "Allergen" and "Severity" dropdown
  PG_Add_Patient.selectCondition("ConditionFirst", conditionFirst);

  //step4:Click on "Add new" button under Allergy, select any value from "Allergen" and "Severity" dropdown
  PG_Add_Patient.clickonAddnewButtonthirdblock("ConditionAddnewButton");
  PG_Add_Patient.selectCondition("ConditionSecond", conditionSecond);


  //step5:Click on Save button on the patient window. Verify that the two allergies are saved successfully
  PG_Add_Patient.clickOnAddPatientwindowButton("Save");
  PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByFirstNameAndLastName);
  PG_Add_Patient.validateAllergyorConditionOnPatientJacket("ValidateAllergyorConditionFirst", conditionSecond, conditionSecond);
  PG_Add_Patient.validateAllergyorConditionOnPatientJacket("ValidateAllergyorConditionSecond", conditionFirst, conditionFirst);
  PG_MainPage.clickMenu("Menu");
  aqTestCase.End();



}

module.exports.KT_T18_Add_a_new_patient_using_two_conditions=KT_T18_Add_a_new_patient_using_two_conditions;
module.exports.searchByFirstNameAndLastName=searchByFirstNameAndLastName;