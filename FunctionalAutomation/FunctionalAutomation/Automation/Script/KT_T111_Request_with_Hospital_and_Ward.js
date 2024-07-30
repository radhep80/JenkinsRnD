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
var hospital = dataDriver.getValue("Hospital");
var ward = dataDriver.getValue("Ward");
var searchByLastNameAndFirstName=RegisterRequest.searchByLastNameAndFirstName;

function KT_T111_Register_a_request_with_different_Hospital_and_Ward() {
    try {
        aqTestCase.Begin("KT_T111_Register_a_request_with_different_Hospital_and_Ward");
        RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

        //<Step 6 & 7>- Under the "LOCATIONS" Click on the three dots (ellipses) on the right hand side of the 'Hospital' field"
        PG_Patient_Request.selectHospital(hospital);

        //<Step 8 & 9>- Under the "LOCATIONS" Click on the three dots (ellipses) on the right hand side of the 'Ward / Location' field
        PG_Patient_Request.selectWard(ward);

        //<Step 10> Click on 'Continue' button if any warning pop up appears.
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

module.exports.KT_T111_Register_a_request_with_different_Hospital_and_Ward = KT_T111_Register_a_request_with_different_Hospital_and_Ward;
module.exports.hospital = hospital;
module.exports.ward=ward;
module.exports.searchByLastNameAndFirstName=searchByLastNameAndFirstName;

