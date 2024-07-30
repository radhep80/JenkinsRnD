var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var PG_Request_Jacket = require("PG_Request_Jacket_Functions");
var PG_Patient_Request = require("PG_Patient_Request_Functions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var dataGenerator = require("DataGenerator");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");
var sexAtBirth = dataDriver.getValue("Sex_At_Birth");
var addressLine1 = dataDriver.getValue("AddressLine1");
var suburb = dataDriver.getValue("Suburb");
var birthDate = dataGenerator.getRandomDayFormatted()
var birthMonth = dataGenerator.getRandomMonth();
var birthYear = dataGenerator.getRandomYear(1980);
var contactNumber = dataGenerator.generateContactNo();
var AUID = dataGenerator.generateRandomNumberBasedOnLength(8);
var zephyrFunctions = require("ZephyrUtils");
var nameGenerator = require("NameGenerator");
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
var conditionBiohazard = dataDriver.getValue("conditionBiohazard");
var conditionCollect = dataDriver.getValue("conditionCollect");
var conditionDeliver = dataDriver.getValue("conditionDeliver");


var actionUtils = require("ActionUtils");

function KT_T63_Register_a_request_using_more_than_one_request_conditions() {
    try {

        aqTestCase.Begin("KT_T63_Register_a_request_using_more_than_one_request_conditions");
        RegisterRequest.registerRequestPrecondition(serviceName, privateInvoiceType);

        //<Step 6>-Add more than one request condition under Special Conditions-> Conditions section.
        PG_Patient_Request.setConditionValue();

        //<Step 7>- Click on 'Continue' button if any warning pop up appears.
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

        //<Step 8>-Verify that the registered request appears in the patient requests
        PG_Patient_Request.validateReciveRequestText(serviceName);

        //<Step 9>-Verify that the request conditions are reflected under the conditions section of registered request
        PG_Request_Jacket.validateTextOnRequestJacketByText("Biohazard");
        PG_Request_Jacket.validateTextOnRequestJacketByText("COLLECT");
        PG_Request_Jacket.validateTextOnRequestJacketByText("DELIVER");


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

