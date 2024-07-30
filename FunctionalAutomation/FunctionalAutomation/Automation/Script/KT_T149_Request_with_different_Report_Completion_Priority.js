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
var hospital = dataDriver.getValue("Hospital");
var ward = dataDriver.getValue("Ward");
var requestPriority = dataDriver.getValue("RequestPriority");

function KT_T149_Register_a_request_with_a_different_value_of_Report_Completion_Priority() {
  try {
    aqTestCase.Begin("KT_T149_Register_a_request_with_a_different_value_of_Report_Completion_Priority");
    RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

    //<Step 6>- Under the "SPECIAL CONDITIONS" Click on the three dots (ellipses) on the right hand side of the 'Report Completion Priority' field
    PG_Patient_Request.clickOnReportCompletionPriority();

    //<Step 7>- Verify that "SELECT REQUEST PRIORTY TYPE" window appears. Select Request Priority as 'URGENT'. Click on Ok button
    PG_Patient_Request.selectRequestPriorityType(requestPriority);

    //<Step 8> Click on 'Continue' button if any warning pop up appears.
    PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

    //<Step 9>-Verify that the registered request appears in the patient requests
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