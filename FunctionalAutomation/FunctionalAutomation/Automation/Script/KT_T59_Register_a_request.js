var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var PG_Patient_Request = require("PG_Patient_Request_Functions");
var PG_MainPage = require("PG_Main_Locators");
var dataGenerator = require("DataGenerator");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var zephyrFunctions = require("ZephyrUtils");
var RegisterRequest = require("RegisterRequest");

var lastName = (dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName")).toUpperCase();
var firstNameRaw = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
var firstName = firstNameRaw.charAt(0).toUpperCase() + firstNameRaw.slice(1);

var searchByLastNameAndFirstName = lastName + ", " + firstName;
dataDriver.setDataDriver("AddServices", "Services");
var serviceName = dataDriver.getValue("ServiceName");
var accountType = dataDriver.getValue("PrivateAccountType");

function KT_T59_Register_a_request() {
    try {
        aqTestCase.Begin("KT_T59_Register_a_request");
        RegisterRequest.registerRequestPrecondition(serviceName, accountType);

        //<Step 6>-Click on 'Continue' button if any warning pop up appears.
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

        //<Step 7>-Verify that the registered request appears in the patient requests
        PG_Patient_Request.validateReciveRequestText(serviceName);
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

module.exports.KT_T59_Register_a_request = KT_T59_Register_a_request;
module.exports.searchByLastNameAndFirstName = searchByLastNameAndFirstName;
