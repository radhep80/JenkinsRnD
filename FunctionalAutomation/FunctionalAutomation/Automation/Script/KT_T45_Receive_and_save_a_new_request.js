var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
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
var contactNumber = dataGenerator.generateRandomNumberBasedOnLength(10);
var AUID = dataGenerator.generateRandomNumberBasedOnLength(8);
var zephyrFunctions =  require("ZephyrUtils");
var nameGenerator =  require("NameGenerator");
var globalConstants = require("GlobalConstants");

var lastName = (dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName")).toUpperCase();
var firstNameRaw = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
var firstName = firstNameRaw.charAt(0).toUpperCase() + firstNameRaw.slice(1);

var searchByLastNameAndFirstName = lastName + ", " + firstName;
var globalConstants = require("GlobalConstants");
var serviceName = "CTAH";

//@receiveRequest
function KT_T45_Receive_and_save_a_new_request() {
    try {
        //<Step 1>-Search a patient by comma separator "<Surname>,<First Name>"
        PG_Add_Patient.addPatientPrecondition(searchByLastNameAndFirstName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
        PG_Add_Patient.clickOnAddPatientwindowButton("Save");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByLastNameAndFirstName);

        //<Step 2>-Select the respective patient from the search results and click on 'RECIEVE' button
        PG_MainPage.clickMenu("Menu");
        PG_HomePage.selectTheMenuAndClick("Reception");
        PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
        PG_PatientDialogBox.searchPatientByName(searchByLastNameAndFirstName);
        PG_PatientDialogBox.waitForVisibilityOfAddButton();
        PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByLastNameAndFirstName);
        PG_Patient_Request.clickOnServiceRequestMenu("Receive");

        //<Step 3>-Verify that 'RECIEVE REQUEST DETAILS' window is opened successfully if there are not previously scheduled requests.
        PG_Patient_Request.verifyRequestDetailsPop(globalConstants.receiveRequestPOPupTitle);

        //<Step 4>- Enter the mandatory fields (highlighted in lavender background)
        PG_Patient_Request.fillMandatoryFieldsOnServiceRequestPopUP(serviceName);

        //<Step 5>-Click on 'Continue' button if any warning pop up appears.
        PG_Patient_Request.clickOnOkOrCancelButtonOnServiceRequest("Ok");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket();

        ////<Step 6>-Verify that the received request appears in the patient requests
        PG_Patient_Request.validateReciveRequestText(serviceName);
        globalConstants.passFlag = "Pass";
    }
    catch (e) {
        Log.Error(e.message);
    }
    finally {
        zephyrFunctions.updateTestExecutionNoSteps(aqTestCase.CurrentTestCase.Name);
        aqTestCase.End();
        PG_MainPage.clickMenu("Menu");
    }
}
