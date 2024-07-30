﻿var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var PG_Patient_Request = require("PG_Patient_Request_Functions");
var PG_MainPage = require("PG_Main_Locators");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var zephyrFunctions = require("ZephyrUtils");
var RegisterRequest = require("RegisterRequest");
var PG_Request_Jacket = require("PG_Request_Jacket_Functions");
dataDriver.setDataDriver("AddServices", "Services");
var serviceName = dataDriver.getValue("BulkBillRequest");
var medicareBulkBill = dataDriver.getValue("MedicareBulkBill");

function KT_T66_Request_for_patient_with_Medicare_number() {
    try {
        aqTestCase.Begin("KT-T66_Request_for_patient_with_Medicare_number");
        RegisterRequest.registerRequestPrecondition(serviceName, medicareBulkBill, true);

        //<Step 6>-Click on 'Continue' button if any warning pop up appears.
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

        //<Step 7>-Verify that the registered request appears in the patient requests
        PG_Patient_Request.validateReciveRequestText(serviceName);

        //<Step 8>-Verify that the below fields are populated as per the request
        PG_Request_Jacket.verifyRegisteredFieldsPopulatedForMedicareNumber();

    }
    catch (e) {
        Log.Error(e.message);
    }
    finally {
        zephyrFunctions.updateTestExecutionNoSteps(aqTestCase.CurrentTestCase.Name);
        PG_MainPage.clickMenu("Menu");
        aqTestCase.End();

    }
}
