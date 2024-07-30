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
var searchByFirstNameAndLastName = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName") + "," +
    dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
    dataDriver.setDataDriver("AddPatient", "KT_T11_GeneralNote");
var textInNotes = dataDriver.getValue("AccountNoteText");

//@addPatient
function KT_T12_Add_a_new_patient_including_a_Account_Note_using_Insert_Note_template() {
  
   aqTestCase.Begin("KT_T12_Add_a_new_patient_including_a_Account_Note_using_Insert_Note_template");

     //step1 and step2:
    PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);

    //<Step 3>-In the Notes section, click on the "Account" tab. Verify that "Account note" tab pop up appears
    PG_Add_Patient.selectNoteType("Account");

    //<Step 4>-Click on "Insert Note Template..." button and select note template. Click on Ok button.
    PG_Add_Patient.clickOnInternationDocument("accountNote");
    PG_Add_Patient.selectMenuOnTheNotes("accountNote", "insertNoteTemplate");
    PG_Add_Patient.clickOnSelectNoteTemplateButton("OK");
   
    //<Step 5>-Click on the "save" button
    PG_Add_Patient.clickOnSaveButtonOnNotes("accountNote")
      
    //<Step 6>-Verify that the added note template appears under the Account section
    PG_Add_Patient.validateEnteredNoteText("AccountNoteText", textInNotes, textInNotes);
   
    //<Step 7>-Click on Save button on the patient window. Verify that all patient details along with the Registration notes are saved successfully
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByFirstNameAndLastName);
    PG_Patient_Jacket.validateConatinsTextOnPatientJacketByTextName(textInNotes,textInNotes);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
    
}


