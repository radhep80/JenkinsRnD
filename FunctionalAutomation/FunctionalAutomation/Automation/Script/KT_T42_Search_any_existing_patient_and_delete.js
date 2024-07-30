var PG_Delete_Patient = require("PG_Delete_Patient_Functions");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_Patient_Request = require("PG_Patient_Request_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var KT_Add_Patient = require("KT_T11_Add__patient__including__a_General_Note");
var globalConstants = require("GlobalConstants");
var zephyrFunctions = require("ZephyrUtils");
var nameGenerator= require("NameGenerator");
var dataGenerator = require("DataGenerator");
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
var patientName = globalConstants.lst_Name[0];
globalConstants.lst_Name.splice(0, 1);
var totalSteps = 6, serviceName = "CTAH";

//@deletePatient
function KT_T42_Search_any_existing_patient_and_delete() {
    try {
        //<Step 1>Launch Karisma application:Create patient with references
        aqTestCase.Begin("KT_T42_Search_any_existing_patient_and_delete");
        PG_Add_Patient.addPatientPrecondition(patientName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
        PG_Add_Patient.clickOnAddPatientwindowButton("Save");
        PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
        PG_Patient_Request.clickOnServiceRequestMenu("Receive");
        PG_Patient_Request.receiveRequestDetailsPop()
        PG_Patient_Request.fillMandatoryFieldsOnServiceRequestPopUP(serviceName);
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket();
        PG_MainPage.clickMenu("Menu");

        //<Step 2> Navigate to Data Management-> Patients
        //<Step 3> In the Search bar, enter any newly added patient name and verify that a list of patient with the entered name appears
        PG_Delete_Patient.deletePatientPrecondition(patientName);
        PG_Delete_Patient.verifyPatientListOnGrid(patientName);

        //<Step 4> Select the newly added patient and click on the "delete" icon
        PG_Add_Patient.pressKeyMultipleTimes("[Tab]", "1");
        PG_Delete_Patient.selectButtonOnPopUp("Delete");

        //<Step 5> Verify that the "Delete patient" window appears
        PG_Delete_Patient.validateDeletePatientWindowTittle("DELETE PATIENT");

        //<Step 6> Verify that the patient cannot be deleted as patient is associated with references
        PG_Delete_Patient.validatedeletePatientWindowReferences("Patient cannot be deleted due to references");
        globalConstants.passFlag = "Pass";
    }
    catch (e) {
        Log.Error(e.message);
    }
    finally {
        zephyrFunctions.updateTestExecutionNoSteps(aqTestCase.CurrentTestCase.Name);
        aqTestCase.End();
        PG_MainPage.clickMenu("Menu");
    }

}
