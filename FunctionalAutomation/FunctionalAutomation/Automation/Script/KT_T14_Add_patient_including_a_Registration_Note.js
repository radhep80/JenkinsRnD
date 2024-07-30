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
var textInNotes = dataDriver.getValue("RegistrationNote");
//@addPatient
function KT_T14_Add_a_new_patient_including_a_Registration_Note_using_a_table()  {
  
    aqTestCase.Begin("KT_T14_Add_a_new_patient_including_a_Registration_Note_using_a_table");

    //step1 and step2:
    PG_Add_Patient.addPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
    
    //<Step 3>-In the Notes section, click on the "Registration" tab. Verify that "Registration note" tab pop up appears
    PG_Add_Patient.selectNoteType("Registration");

    //<Step 4>-Right click on the Registration note tab. Select Insert-> Table and Insert a table with Row count and column count of 3. click on the "Ok" button
    PG_Add_Patient.clickOnInternationDocument("registationNote");
    PG_Add_Patient.rightClickInsideTheInternationDocControl("registationNote");
  
    PG_Add_Patient.pressKeyMultipleTimes("[Down]", "7");
    PG_Add_Patient.pressKeyMultipleTimes("[Right]", "1");
    PG_Add_Patient.pressKeyMultipleTimes("[Enter]", "1");
    
     //<Step 5>-Enter any values in the 3 rows and 3 columns of the table and click on the "save" button
    PG_Add_Patient.createTableOnNotes("3","3");
    PG_Add_Patient.clickOnSaveButtonOnNotes("registationNote");
       
    //<Step 6>-Verify that the added text appears under the Registration section
    PG_Add_Patient.validateEnteredNoteText("RegisterdNoteTxt", textInNotes, textInNotes);
   
    //<Step 7>-Click on Save button on the patient window. Verify that all patient details along with the Registration notes are saved successfully
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByFirstNameAndLastName);
    PG_Patient_Jacket.validateConatinsTextOnPatientJacketByTextName(textInNotes,textInNotes);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();
   
}


