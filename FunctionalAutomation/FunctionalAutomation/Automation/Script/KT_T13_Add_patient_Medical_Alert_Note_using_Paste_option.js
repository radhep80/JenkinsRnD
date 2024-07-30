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
var textInNotes = dataDriver.getValue("MedicalAlertNote");
var expectedNotesTxt=textInNotes+dataDriver.getValue("MedicalAlertNote");
 
//@addPatient
function KT_T13_Add_a_new_patient_including_a_Medical_Alert_Note_using_Paste_option()  {
  
    aqTestCase.Begin("KT_T13_Add_a_new_patient_including_a_Medical_Alert_Note_using_Paste_option");
 
     //step1 and step2:
    PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
    //<Step 3>-In the Notes section, click on the "Medical alert" tab. Verify that "Medical alert note" tab pop up appears
    PG_Add_Patient.selectNoteType("Medical alert");
 
    //<Step 4>-Copy any text and right click on the medical alert note area and click on "Paste" option. Click on "save" button
    PG_Add_Patient.clickOnInternationDocument("MedicalAleartNote");
    PG_Add_Patient.setTextInInternationDocument("MedicalAleartNote",textInNotes);
    PG_Add_Patient.rightClickAndPasteInNote("MedicalAleartNote", "copy");
    PG_Add_Patient.clickOnSaveButtonOnNotes("MedicalAleartNote");
    //<Step 5>-Verify that the added text appears under the Medical alert section
    PG_Add_Patient.validateEnteredNoteText("MedicalAlertNoteTxt", textInNotes, expectedNotesTxt);
    //<Step 6>-Click on Save button on the patient window. Verify that all patient details along with the Medical alert notes are saved successfully
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByFirstNameAndLastName);
    PG_Patient_Jacket.validateTextOnPatientJacketByTextName(textInNotes,expectedNotesTxt);
     PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
}