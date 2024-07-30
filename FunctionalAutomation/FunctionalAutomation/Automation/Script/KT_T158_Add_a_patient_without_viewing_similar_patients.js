var verificationUtils = require("VerificationUtils");
var dataGenerator = require("DataGenerator");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var birthDate = dataGenerator.getRandomDayFormatted();
var birthMonth= dataGenerator.getRandomMonth();
var birthYear=dataGenerator.getRandomYear(1980);
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var searchByFirstNameAndLastName = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName") + "," +
    dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
    
 //@addPatient
function KT_T158_Add_a_patient_without_viewing_similar_patients() {
  
     aqTestCase.Begin("KT_T158_Add_a_patient_without_viewing_similar_patients");

    //<Step 1.2>Navigate to Reception
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

    //<Step 1.3>In the search bar on the left hand side, enter firstname, lastname and click on the magnifier icon next to it
    PG_PatientDialogBox.searchPatientByName(searchByFirstNameAndLastName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();

    //<Step 1.4> Verify that "+ADD PATIENT" button is available
    PG_PatientDialogBox.validatePatientAddButtonText("+ ADD PATIENT");

    //<Step 1.5 Click on the "+ADD PATIENT" button.
    PG_PatientDialogBox.clickOnAddButton();

    //Enter the below fields Birth Date,Sex assigned at birth,Add any identifier,Contact Number,Address
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.setSexAssignedatBirth(dataDriver.getValue("Sex_At_Birth"));
    PG_Add_Patient.setBirthDate(birthDate, birthMonth, birthYear);
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");

    //step2:Enter the patient name (Added in step 1) in the search bar
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_MainPage.clickMenu("Menu");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.searchPatientByName(searchByFirstNameAndLastName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    var intialCount = PG_Add_Patient.getPatientCountOnPatientJacket();

    //step3:Click on "+ADD PATIENT" button
    PG_PatientDialogBox.clickOnAddButton();

    //step4:Enter the mandatory fields and click on the Save button
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.setSexAssignedatBirth(dataDriver.getValue("Sex_At_Birth"));
    PG_Add_Patient.setBirthDate(birthDate, birthMonth, birthYear);
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");

    //step 5:Verify the the message "Would you like to view similar patients before adding this patient? {Number of patients} similar patients found
    dataDriver.setDataDriver("AddPatient", "KT_T158_WithoutViewingSimilar");
    PG_Add_Patient.validatePopupMessageOnWindow(dataDriver.getValue("ExpectedQUEOnWindow"), dataDriver.getValue("ExpectedANSOnWindow"));

    //step 6: Click the "No" button
    PG_Add_Patient.clickOnWindowPopupButtonByName("NO");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_MainPage.clickMenu("Menu");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.searchPatientByName(searchByFirstNameAndLastName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_Add_Patient.validateCountOfAllPatient(intialCount);
    PG_MainPage.clickMenu("Menu");
     aqTestCase.End();


}