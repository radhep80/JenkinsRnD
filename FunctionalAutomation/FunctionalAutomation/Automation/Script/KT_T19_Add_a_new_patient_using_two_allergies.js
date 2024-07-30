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

 //@addPatient
function KT_T19_Add_a_new_patient_using_two_allergies() {

  aqTestCase.Begin("KT_T19_Add_a_new_patient_using_two_allergies");

  //step1 and step2:
  PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);

  //step3:Under the Allergy section, select any value from "Allergen" and "Severity" dropdown
  dataDriver.setDataDriver("AddPatient", "KT_T19_TwoAllergy");
  PG_Add_Patient.selectAllergy("AddAllergyFirst", "none", "Unknown", dataDriver.getValue("AllergyFirst"), dataDriver.getValue("SeverityFirst"));

  //step4:Click on "Add new" button under Allergy, select any value from "Allergen" and "Severity" dropdown
  PG_Add_Patient.clickonAddnewButtonthirdblock("AllergyAddnewButton");
  PG_Add_Patient.selectAllergy("AddAllergySecond", "none", "Unknown", dataDriver.getValue("AllergySecond"), dataDriver.getValue("SeveritySecond"));

  //step5:Click on Save button on the patient window. Verify that the two allergies are saved successfully
  PG_Add_Patient.clickOnAddPatientwindowButton("Save");
  PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByFirstNameAndLastName);
  dataDriver.setDataDriver("AddPatient", "KT_T19_TwoAllergy");
  PG_Add_Patient.validateAllergyorConditionOnPatientJacket("ValidateAllergyorConditionFirst", dataDriver.getValue("ValidateFirstAllergy"), dataDriver.getValue("ValidateFirstAllergy"));
  PG_Add_Patient.validateAllergyorConditionOnPatientJacket("ValidateAllergyorConditionSecond", dataDriver.getValue("ValidateSecondAllergy"), dataDriver.getValue("ValidateSecondAllergy"));
  PG_MainPage.clickMenu("Menu");
  aqTestCase.End();

}
module.exports.KT_T19_Add_a_new_patient_using_two_allergies=KT_T19_Add_a_new_patient_using_two_allergies;
module.exports.searchByFirstNameAndLastName=searchByFirstNameAndLastName;