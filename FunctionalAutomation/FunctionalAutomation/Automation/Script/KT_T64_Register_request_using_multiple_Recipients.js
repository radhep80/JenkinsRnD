var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var PG_Request_Jacket = require("PG_Request_Jacket_Functions");
var PG_Patient_Request = require("PG_Patient_Request_Functions");
var PG_MainPage = require("PG_Main_Locators");
var RegisterRequest = require("RegisterRequest");
var dataGenerator = require("DataGenerator");
var globalConstants = require("GlobalConstants");
var actionUtils = require("ActionUtils");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var zephyrFunctions = require("ZephyrUtils");
var globalConstants = require("GlobalConstants");

dataDriver.setDataDriver("AddServices", "Services");
var serviceName = dataDriver.getValue("ServiceName");
var privateInvoiceType = dataDriver.getValue("PrivateInvoiceType");
var email = dataGenerator.generateRandomString(5) + "@gmail.com";
var deliveryDefultMethodval = "Default";
var deliveryEmailMethodval = "Email";


function KT_T64_Register_request_using_multiple_Recipients() {
    try {
        aqTestCase.Begin("KT_T64_Register_request_using_multiple_Recipients");
        RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

        //<Step 6>-Under the Request Details, click on 'Manage Recipients'. Verify that the 'NEW REQUEST RECIPIENT' window appears
        PG_Patient_Request.clickOnManageRecipients();
        PG_Patient_Request.verifyRequestRecipientPopUpTitle(globalConstants.newRequestRecipientPopupTitle);

        //<Step 7>- Select the recipient as "Patient" and delivery method as 'Default'. Click on "Ok"
        PG_Patient_Request.selectItemOnRequestRecipientByName("Patient");
        PG_Patient_Request.setDeliveryMethodValue("DeliveryMethod", deliveryDefultMethodval);
        actionUtils.clickOnTextBlockButtonByName("OK");

        //<Step 8>-Click on "New" in the new window and select the Recipient type as Main practitioner and the delivery method as email. Select the document design and click on Ok.
        actionUtils.clickOnTextBlockButtonByName("New");
        PG_Patient_Request.selectItemOnRequestRecipientByName("Main Practitioner Assignment");
        PG_Patient_Request.setDeliveryMethodValue("DeliveryMethod", deliveryEmailMethodval);
        PG_Patient_Request.setDocumentDesignText("LETTER");
        PG_Patient_Request.setEmailAddress(email);
        PG_Patient_Request.clickOkButtonOnNewRequestRecipient();
        actionUtils.clickOnTextBlockButtonByName("OK");

        //<Step 9>-Verify that both patient and main recipient entries are added. Click on Ok  button
        PG_Patient_Request.verifyManageRecipientValueOnTab(RegisterRequest.searchByLastNameAndFirstName, deliveryDefultMethodval, deliveryEmailMethodval);

        //<Step 10> Click on 'Continue' button if any warning pop up appears.
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

        //<Step 11>-Verify that the registered request appears in the patient requests
        PG_Patient_Request.validateReciveRequestText(serviceName);

        //<Step 12>-Verify that under the RECIPIENT section, both patient and main practitioner names and delivery methods are added
        PG_Request_Jacket.verifyRecipientTextOnRJ(deliveryDefultMethodval);
        PG_Request_Jacket.verifyRecipientTextOnRJ(deliveryEmailMethodval);
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
