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
var requestingUnit = dataDriver.getValue("RequestingUnit");

function KT_T119_Register_request_with_a_different_value_of_Requesting_unit() {
  try {
    aqTestCase.Begin("KT_T119_Register_request_with_a_different_value_of_Requesting_unit");
    RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

    //<Step 6 & 7 >- Under the "LOCATIONS" Click on the three dots (ellipses) on the right hand side of the 'Hospital' field
    PG_Patient_Request.selectHospital(hospital);

    //<Step 8 & 9 >- Under the "LOCATIONS" Click on the three dots (ellipses) on the right hand side of the 'Ward / Location' field
    PG_Patient_Request.selectWard(ward);


    //<Step 10 >-Navigate to "PRACTITIONERS AND UNITS".  Click on the three dots (ellipses) on the right hand side of the 'Requesting Unit' field
    PG_Patient_Request.clickOnRequestingUnit();


    //<Step 11 >-Verify that "SELECT UNIT" window appears. Select any unit corresponding to hospital
    PG_Patient_Request.selectRequestingUnit(requestingUnit);

    //<Step 12> Click on 'Continue' button if any warning pop up appears.
    PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

    //<Step 13>-Verify that the registered request appears in the patient requests
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
