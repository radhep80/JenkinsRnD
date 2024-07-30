var verificationUtils = require("VerificationUtils");
var dataGenerator = require("DataGenerator");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var globalConstants= require("GlobalConstants");
var dataDriver = require("DataDriver");
var nameGenerator= require("NameGenerator");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var sexAtBirth=dataDriver.getValue("Sex_At_Birth");
var addressLine1=dataDriver.getValue("AddressLine1");
var suburb=dataDriver.getValue("Suburb");
var birthDate = dataGenerator.getRandomDayFormatted()
var birthMonth= dataGenerator.getRandomMonth();
var birthYear=dataGenerator.getRandomYear(1980);
var contactNumber=dataGenerator.generateRandomNumberBasedOnLength(10);
var AUID = dataGenerator.generateRandomNumberBasedOnLength(8);
var searchByFirstNameAndLastName = globalConstants.lst_Name[0];
globalConstants.lst_Name.splice(0,1);
dataDriver.setDataDriver("AddPatient", "KT_T11_GeneralNote");
var generalNoteTitle=dataDriver.getValue("GeneralNoteTitle");
var enterDataOnGeneralData= dataDriver.getValue("EnterDataOnGeneralNote");
    
//@addPatient
function KT_T11_Add_a_new_patient_including_a_General_Note() {
  
     aqTestCase.Begin("KT_T11_Add_a_new_patient_including_a_General_Note");

    //step1 and step2:
    PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
    
    //step3:In the Notes section, click on the "general" tab. Verify that "General note" tab pop up appears
    PG_Add_Patient.selectNoteType("General");
    PG_Add_Patient.validateGeneralNoteTittle(generalNoteTitle, generalNoteTitle);

    //step4:Enter any text and click on the "save" button
    PG_Add_Patient.clickOnInternationDocument("generalNote");
    PG_Add_Patient.setTextInInternationDocument("generalNote", enterDataOnGeneralData);
    PG_Add_Patient.clickOnSaveButtonOnNotes("generalNote");

    //step5:Verify that the added text appears under the general section
    PG_Add_Patient.validateEnteredNoteText("GeneralNoteText", enterDataOnGeneralData, enterDataOnGeneralData);

    //step6:Click on Save button on the patient window. Verify that all patient details along with the general notes are saved successfully
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_Patient_Jacket.validateTextOnPatientJacketByTextName(enterDataOnGeneralData, enterDataOnGeneralData);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();



}
module.exports.KT_T11_Add_a_new_patient_including_a_General_Note=KT_T11_Add_a_new_patient_including_a_General_Note;
module.exports.searchByFirstNameAndLastName=searchByFirstNameAndLastName;