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
Log.Message(searchByLastNameAndFirstName);
dataDriver.setDataDriver("AddServices", "Services");
var serviceName = dataDriver.getValue("BulkBillRequest");
var medicareBulkBill = dataDriver.getValue("MedicareBulkBill");

function KT_T61_Add_a_bulk_bill_request() {
    try {
        aqTestCase.Begin("KT_T61_Add_a_bulk_bill_request");
        RegisterRequest.registerRequestPrecondition(serviceName, medicareBulkBill, true);

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

