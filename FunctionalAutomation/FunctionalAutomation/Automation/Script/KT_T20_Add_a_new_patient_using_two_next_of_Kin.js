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

//KIN1-Details
dataDriver.setDataDriver("AddPatient","KT_T20");
var kinIndex2=dataDriver.getValue("KinIndex2");
var firstKinName=dataDriver.getValue("Kin1_Name");
var firstKinRelationship=dataDriver.getValue("Kin1_Relationship");
var firstKinSequence=dataDriver.getValue("Kin1_Sequence");
var firstKinMobile=dataDriver.getValue("Kin1_Mobile");
var firstKinHome=dataDriver.getValue("Kin1_Home");

var firstKinAddressLine1=dataDriver.getValue("Kin1_AddressLine1");	
var firstKinAddressLine2=dataDriver.getValue("Kin1_AddressLine2");	
var firstKinAddressLine3=dataDriver.getValue("Kin1_AddressLine3");
var firstKinSubBurb=dataDriver.getValue("Kin1_SubBurb");
var firstKinPostCode=dataDriver.getValue("Kin1_PostCode");
var firstKinCity=dataDriver.getValue("Kin1_City");
var firstKinState=dataDriver.getValue("Kin1_State");
var firstKinCountry=dataDriver.getValue("Kin1_Country");

	
//KIN2-Details
var kinIndex3=dataDriver.getValue("KinIndex3");
var secondKinName=dataDriver.getValue("Kin2_Name");
var secondKinRelationship=dataDriver.getValue("Kin2_Relationship");
var secondKinSequence=dataDriver.getValue("Kin2_Sequence");
var secondKinMobile=dataDriver.getValue("Kin2_Mobile");
var secondKinHome=dataDriver.getValue("Kin2_Home");

var PJ_KinName1 = dataDriver.getValue("PJ_KinName1Index");
var PJ_KinName2 = dataDriver.getValue("PJ_KinName2Index");

 //@addPatient
function KT_T20_Add_a_new_patient_using_two_next_of_Kin()  {
  
    aqTestCase.Begin("KT_T20_Add_a_new_patient_using_two_next_of_Kin");
  
    //step1 and step2:
    PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
    
    //<Step 3>-Under the "Next of Kin" section, enter the below details Name,Relationship,Sequence,Mobile
    PG_Add_Patient.setValuesInKin(kinIndex2, firstKinName, firstKinRelationship, firstKinSequence, firstKinMobile, firstKinHome);

    //<Step 4>-Click on "Add new" button under "Next of Kin" and enter the below details Name,Relationship,Sequence,Home,Send Letter (Check this option)
    PG_Add_Patient.clickonAddnewButtonthirdblock("KinAddnewButton");
    PG_Add_Patient.setValuesInKin(kinIndex3, secondKinName, secondKinRelationship, secondKinSequence, secondKinMobile, secondKinHome);
    PG_Add_Patient.clickOnSendLetterCheckBox(kinIndex3);

    //<Step 5>-Click the "show address" expander and enter the address for the kin where "Send Letter" option is checked
    PG_Add_Patient.clickOnShowAddress();
    PG_Add_Patient.setAddressInKin(kinIndex3, firstKinAddressLine1, firstKinAddressLine2, firstKinAddressLine3, firstKinSubBurb, firstKinPostCode, firstKinCity, firstKinState, firstKinCountry);

    //<Step 6>-Click on Save button on the patient window. Verify that the two next of kins are saved successfully
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByFirstNameAndLastName);
    PG_Patient_Jacket.verifyNextToKinOnPatientJacket(PJ_KinName1, firstKinName);
    PG_Patient_Jacket.verifyNextToKinOnPatientJacket(PJ_KinName2, secondKinName);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
   
}

module.exports.KT_T20_Add_a_new_patient_using_two_next_of_Kin=KT_T20_Add_a_new_patient_using_two_next_of_Kin;
module.exports.searchByFirstNameAndLastName=searchByFirstNameAndLastName;
module.exports.birthDate=birthDate;
module.exports.birthMonth=birthMonth;
module.exports.birthYear=birthYear;
