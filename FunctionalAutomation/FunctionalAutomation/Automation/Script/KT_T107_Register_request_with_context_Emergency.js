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
var searchByLastNameAndFirstName=RegisterRequest.searchByLastNameAndFirstName;

function KT_T107_Register_request_with_context_Emergency() {
    try {
        aqTestCase.Begin("KT_T107_Register_request_with_context_Emergency");
        RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

        //<Step 6>- Under the "LOCATIONS" field, check the checkbox "Override Context"
        PG_Patient_Request.checkedContextCheckBox();

        //<Step 7>- Select the option "Inpatient" from the dropdown
        PG_Patient_Request.selectValueFromComboBox("Emergency");

        //<Step 8> Click on 'Continue' button if any warning pop up appears.
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
module.exports.KT_T107_Register_request_with_context_Emergency=KT_T107_Register_request_with_context_Emergency;
module.exports.searchByLastNameAndFirstName=searchByLastNameAndFirstName;

