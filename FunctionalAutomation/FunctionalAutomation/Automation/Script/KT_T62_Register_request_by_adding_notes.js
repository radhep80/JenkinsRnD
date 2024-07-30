var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var PG_Request_Jacket = require("PG_Request_Jacket_Functions");
var PG_Patient_Request = require("PG_Patient_Request_Functions");
var PG_MainPage = require("PG_Main_Locators");
var dataGenerator = require("DataGenerator");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var zephyrFunctions = require("ZephyrUtils");
var globalConstants = require("GlobalConstants");
var RegisterRequest = require("RegisterRequest");

var lastName = (dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName")).toUpperCase();
var firstNameRaw = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
var firstName = firstNameRaw.charAt(0).toUpperCase() + firstNameRaw.slice(1);

var searchByLastNameAndFirstName = lastName + ", " + firstName;
Log.Message(searchByLastNameAndFirstName);
var globalConstants = require("GlobalConstants");
dataDriver.setDataDriver("AddServices", "Services");
var serviceName = dataDriver.getValue("ServiceName");
var privateInvoiceType = dataDriver.getValue("PrivateInvoiceType");

function KT_T62_Register_request_by_adding_notes() {
    try {

        aqTestCase.Begin("KT_T62_Register_request_by_adding_notes");
        RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

        //<Step 6>-Select the Clinical Notes tab and enter any details
        PG_Patient_Request.selectTheTabOnServiceRequestPopUp("Clinical");
        PG_Patient_Request.enterTextInNotesTemplate("Clinical", globalConstants.clinicalNotesText);

        //<Step 7>-Select the Scheduling Notes tab and enter any details
        PG_Patient_Request.selectTheTabOnServiceRequestPopUp("Scheduling");
        PG_Patient_Request.enterTextInNotesTemplate("Scheduling", globalConstants.schedulingNotesText);

        //<Step 8>-Select the Imaging Notes tab and enter any details.
        PG_Patient_Request.selectTheTabOnServiceRequestPopUp("Imaging");
        PG_Patient_Request.enterTextInNotesTemplate("Imaging", globalConstants.imagingNotesText);

        //<Step 9>-Select the Accounting Notes tab and enter any details
        PG_Patient_Request.selectTheTabOnServiceRequestPopUp("Accounting");
        PG_Patient_Request.enterTextInNotesTemplate("Accounting", globalConstants.accountingNotesText);

        //<Step 10>-Select the Order Notes tab and enter any details
        PG_Patient_Request.selectTheTabOnServiceRequestPopUp("Order");
        PG_Patient_Request.enterTextInNotesTemplate("Order", globalConstants.orderNotesText);

        //<Step 12>-Click on 'Continue' button if any warning pop up appears.
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

        //<Step 13>-Verify that the registered request appears in the patient requests
        PG_Patient_Request.validateReciveRequestText(serviceName);

        //<Step 13>-Verify that in the Notes section, the added details are reflected in the respective sections
        PG_Request_Jacket.verifyNotesListPopulatedOntheRequestJacket();

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