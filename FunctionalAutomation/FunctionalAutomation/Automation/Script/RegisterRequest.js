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
var contactNumber = dataGenerator.generateContactNo();
var AUID = dataGenerator.generateRandomNumberBasedOnLength(8);
var globalConstants = require("GlobalConstants");

var lastName = (dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName")).toUpperCase();
var firstNameRaw = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
var firstName = firstNameRaw.charAt(0).toUpperCase() + firstNameRaw.slice(1);

var searchByLastNameAndFirstName = lastName + ", " + firstName;
var globalConstants = require("GlobalConstants");
var globalConstants = require("GlobalConstants");

/*function registerRequestPrecondition(serviceName, accountType) {
    try {
        //<Step 1>-Search a patient by comma separator "<Surname>,<First Name>"
        PG_Add_Patient.addPatientPrecondition(searchByLastNameAndFirstName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
        dataDriver.setDataDriver("AddPatient", "KT-T15_TwoIdentifier");

        PG_Add_Patient.setMRNValue(dataDriver.getValue("MRN_Number"));
        PG_Add_Patient.clickOnAddPatientwindowButton("Save");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByLastNameAndFirstName);

        //<Step 2>-Select the respective patient from the search results and click on 'Register' button
        PG_MainPage.clickMenu("Menu");
        PG_HomePage.selectTheMenuAndClick("Reception");
        PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
        PG_PatientDialogBox.searchPatientByName(searchByLastNameAndFirstName);
        PG_PatientDialogBox.waitForVisibilityOfAddButton();
        PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByLastNameAndFirstName);
        PG_Patient_Request.clickOnServiceRequestMenu("Register");

        //<Step 3>-Verify that 'REGISTER REQUEST DETAILS' window is opened successfully if there are not previously scheduled requests.
        PG_Patient_Request.verifyRequestDetailsPop(globalConstants.registerRequestPOPupTitle);

        //<Step 4>- Verify that 'Register-Request Selection' window appears if there are previously scheduled requests with an option to select existing requests or 'REGISTER NEW". Click on "REGISTER NEW'. Verify that 'REGISTER REQUEST DETAILS' window opened successfully

        //<Step 5>- Enter the mandatory fields (highlighted in lavender background)
        PG_Patient_Request.fillMandetoryFieldsOnRegisterRequestDetails(serviceName, accountType);

    }
    catch (e) {
        Log.Error(e.message);
    }
}
*/
function registerRequestPrecondition(serviceName, accountType,setMedicare = false) {
    try {
        //<Step 1>-Search a patient by comma separator "<Surname>,<First Name>"
        PG_Add_Patient.addPatientPrecondition(searchByLastNameAndFirstName, sexAtBirth, birthDate, birthMonth, birthYear, contactNumber, AUID, addressLine1, suburb);
        dataDriver.setDataDriver("AddPatient", "KT-T15_TwoIdentifier");
        PG_Add_Patient.setIdentifierValue(dataDriver.getValue("MRN_Number"), "MRN");
        
        if (setMedicare) {
            PG_Add_Patient.setIdentifierValue("61660109941", "MedicareNumber");
        }

        PG_Add_Patient.clickOnAddPatientwindowButton("Save");
        PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByLastNameAndFirstName);

        //<Step 2>-Select the respective patient from the search results and click on 'Register' button
        PG_MainPage.clickMenu("Menu");
        PG_HomePage.selectTheMenuAndClick("Reception");
        PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
        PG_PatientDialogBox.searchPatientByName(searchByLastNameAndFirstName);
        PG_PatientDialogBox.waitForVisibilityOfAddButton();
        PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByLastNameAndFirstName);
        PG_Patient_Request.clickOnServiceRequestMenu("Register");

        //<Step 3>-Verify that 'REGISTER REQUEST DETAILS' window is opened successfully if there are not previously scheduled requests.
        PG_Patient_Request.verifyRequestDetailsPop(globalConstants.registerRequestPOPupTitle);

        //<Step 4>- Verify that 'Register-Request Selection' window appears if there are previously scheduled requests with an option to select existing requests or 'REGISTER NEW". Click on "REGISTER NEW'. Verify that 'REGISTER REQUEST DETAILS' window opened successfully

        //<Step 5>- Enter the mandatory fields (highlighted in lavender background)
        PG_Patient_Request.fillMandetoryFieldsOnRegisterRequestDetails(serviceName, accountType);

    } catch (e) {
        Log.Error(e.message);
    }
}

module.exports.registerRequestPrecondition = registerRequestPrecondition;
module.exports.searchByLastNameAndFirstName = searchByLastNameAndFirstName;


  