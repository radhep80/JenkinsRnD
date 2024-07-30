var KT_Add_Patient = require("KT_T11_Add__patient__including__a_General_Note");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
dataDriver = require("DataDriver");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var dataGenerator = require("DataGenerator");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
dataDriver.setDataDriver("AddPatient", "KT_T11_GeneralNote");
var actualText=dataDriver.getValue("EnterDataOnGeneralNote");
var updatedNotesValue=dataDriver.getValue("updatedNotesValue");
var expectedText= actualText+updatedNotesValue;
var patientName=KT_Add_Patient.searchByFirstNameAndLastName;
//@editPatient
function KT_T33_Change_one_or_more_Patient_notes(){
   
    //<Step 1>-Launch Karisma application
   
     //<Step 2>-Navigate to reception and search for the patient (created in KT-T11 test case) by entering the name in the search bar
    KT_Add_Patient.KT_T11_Add_a_new_patient_including_a_General_Note();
    aqTestCase.Begin("KT_T33_Change_one_or_more_Patient_notes");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.searchPatientByName(patientName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);
  
    //<Step 3>- Click on the patient details and verify that the patient window is opened
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();
  
    //<Step 4>-Navigate to General tab and edit some details in the existing notes
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.selectNoteType("General");
    PG_Add_Patient.validateGeneralNoteTittle(dataDriver.getValue("GeneralNoteTitle"), dataDriver.getValue("GeneralNoteTitle"));
    PG_Add_Patient.enterAndSaveGeneralNote(updatedNotesValue);
    PG_Add_Patient.validateEnteredNoteText("GeneralNoteText", actualText,expectedText);
   
    //<Step 5>-Click on Save button on the patient window. Verify that the edited details in general notes are saved successfully
    PG_Add_Patient.clickOnAddPatientwindowButton("Save"); 
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);  
    PG_Patient_Jacket.validateTextOnPatientJacketByTextName(actualText,expectedText);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
}

module.exports.KT_T33_Change_one_or_more_Patient_notes=KT_T33_Change_one_or_more_Patient_notes;
module.exports.patientName=patientName;
module.exports.expectedText=expectedText;
module.exports.actualText=actualText;