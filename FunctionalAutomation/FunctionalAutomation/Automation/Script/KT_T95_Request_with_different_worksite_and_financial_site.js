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
var workSiteCode = dataDriver.getValue("WorkSiteCode");
var financialSiteCode = dataDriver.getValue("FinancialSiteCode");
var hospital = dataDriver.getValue("Hospital");
var ward = dataDriver.getValue("Ward");

function KT_T95_Request_with_different_worksite_and_financial_site() {
  try {
    aqTestCase.Begin("KT_T95_Request_with_different_worksite_and_financial_site");
    RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

    //<Step 6 & 7 >- Under the "Workflow Information" Click on the three dots (ellipses) on the right hand side of the 'Work Site' field
    PG_Patient_Request.seletWorkSite(workSiteCode);

    //<Step 8 & 9 >- Verify that "SELECT WORKSITE" window appears. Select any worksite other than default work site
    PG_Patient_Request.seletFinancialSite(financialSiteCode);

    //<Step 10 >-Under "LOCATIONS", enter the corresponding "Hospital" and "Ward/Location" fields
    PG_Patient_Request.selectHospital(hospital);
    PG_Patient_Request.selectWard(ward);

    //<Step 11> Click on 'Continue' button if any warning pop up appears.
    PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

    //<Step 12>-Verify that the registered request appears in the patient requests
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
