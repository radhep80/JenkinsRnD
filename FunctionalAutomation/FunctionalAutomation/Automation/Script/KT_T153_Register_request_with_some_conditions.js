var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var PG_Patient_Request = require("PG_Patient_Request_Functions");
var PG_Request_Jacket = require("PG_Request_Jacket_Functions");
var PG_MainPage = require("PG_Main_Locators");
var RegisterRequest = require("RegisterRequest");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var zephyrFunctions = require("ZephyrUtils");
dataDriver.setDataDriver("AddServices", "Services");
var serviceName = dataDriver.getValue("UltrasoundModality");
var privateInvoiceType = dataDriver.getValue("PrivateInvoiceType");
var condition = dataDriver.getValue("ConditionCardiology");

function KT_T153_Register_request_with_some_conditions() {
    try {
        aqTestCase.Begin("KT_T153_Register_request_with_some_conditions");
        RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

        //<Step 6 & 7>-Under the "SPECIAL CONDITIONS" Click on the drop down button on the right hand side of the 'Conditions' field
        PG_Patient_Request.setCondition(condition);

        //<Step 8> Click on 'Continue' button if any warning pop up appears.
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

        //<Step 9>-Verify that the registered request appears in the patient requests
        PG_Patient_Request.validateReciveRequestText(serviceName);
        PG_Request_Jacket.validateConditionOnRequestJacket(condition)
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
