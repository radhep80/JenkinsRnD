var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var PG_Patient_Request = require("PG_Patient_Request_Functions");
var PG_MainPage = require("PG_Main_Locators");
var RegisterRequest = require("RegisterRequest");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var zephyrFunctions = require("ZephyrUtils");
dataDriver.setDataDriver("AddServices", "Services");
var serviceName = dataDriver.getValue("UltrasoundModality");
var privateInvoiceType = dataDriver.getValue("PrivateInvoiceType");

function KT_T96_Register_request_using_service_UltrasoundModality() {
    try {
        aqTestCase.Begin("KT_T96_Register_request_using_service_UltrasoundModality");
        RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

        //<Step 6> Click on 'Continue' button if any warning pop up appears.
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

        //<Step 7>-Verify that the registered request appears in the patient requests
        PG_Patient_Request.validateReciveRequestText(serviceName);

    }
    catch (e) {
        Log.Error(e.message);
    }
    finally {
        PG_MainPage.clickMenu("Menu");
        zephyrFunctions.updateTestExecutionNoSteps(aqTestCase.CurrentTestCase.Name);
        aqTestCase.End();
    }
}
