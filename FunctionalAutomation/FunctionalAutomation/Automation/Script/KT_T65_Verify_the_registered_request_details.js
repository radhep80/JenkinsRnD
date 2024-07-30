var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var PG_Patient_Request = require("PG_Patient_Request_Functions");
var PG_Request_Jacket = require("PG_Request_Jacket_Functions");
var PG_MainPage = require("PG_Main_Locators");
var RegisterRequest = require("RegisterRequest");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var zephyrFunctions = require("ZephyrUtils");
dataDriver.setDataDriver("AddServices", "Services");
var serviceName = dataDriver.getValue("UltrasoundModality");
var privateInvoiceType = dataDriver.getValue("PrivateInvoiceType");

function KT_T65_Verify_the_registered_request_details() {
    try {
        aqTestCase.Begin("KT_T65_Verify_the_registered_request_details");
        RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

        //<Step 6> Click on 'Continue' button if any warning pop up appears.
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

        //<Step 7>-Verify that the registered request appears in the patient requests
        PG_Patient_Request.validateReciveRequestText(serviceName);
        
        //<Step 8>-Verify that the below fields are populated as per the request
        PG_Request_Jacket.verifyRegisteredFieldsPopulatedOntheRequestJacket();
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


