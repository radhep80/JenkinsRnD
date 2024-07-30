var PG_Patient_Request = require("PG_Patient_Request_Functions");
var PG_MainPage = require("PG_Main_Locators");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var zephyrFunctions = require("ZephyrUtils");
var RegisterRequest = require("RegisterRequest");
dataDriver.setDataDriver("AddServices", "Services");
var serviceName = dataDriver.getValue("BulkBillRequest");
var medicareBulkBill = dataDriver.getValue("MedicareBulkBill");

function KT_T67_Error_For_request_without_Medicare_number() {
    try {
        aqTestCase.Begin("KT-T67_Error_For_request_without_Medicare_number");
        RegisterRequest.registerRequestPrecondition(serviceName, medicareBulkBill);

        //<Step 6>-Click on 'Ok' button and verify that user gets an error message "Patient '[PatientName]' does not have identifiers of identifier types 'MedicareNo' required by account B
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Request.validateRequestIssueReportPOPupTiitle();
        PG_Patient_Request.validateErrorMessageOnRequestIssueReportPOPup();
        PG_Patient_Request.clickOnCloseButton();
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Cancel");
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
