var waitUtils = require("WaitUtils");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var dataGenerator = require("DataGenerator");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var dataDriver = require("DataDriver");
dataDriver.setDataDriver("AddPatient", "Prerequisite");

var lastName = (dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName")).toUpperCase();
var firstNameRaw = dataGenerator.generateRandomString(5) + dataDriver.getValue("FirstName");
var firstName = firstNameRaw.charAt(0).toUpperCase() + firstNameRaw.slice(1);
var searchByLastNameAndFirstName = lastName + ", " + firstName;
var sexAtBirth = dataDriver.getValue("Sex_At_Birth")

var deceasedDeathDate = dataGenerator.getRandomDayFormatted();
var deceasedDeathMonth = dataGenerator.getRandomMonth();
var deceasedDeathYear = dataGenerator.getRandomYear(1978);
//@editPatient
function KT_T23_Edit_patient_Patient_Deceased(){
    aqTestCase.Begin("KT_T23_Edit_patient_Patient_Deceased");
    //<Step 1>-Search a patient by comma separator "<Surname>,<First Name>"
    PG_Add_Patient.editPatientPrecondition(searchByLastNameAndFirstName,sexAtBirth);
    PG_PatientDialogBox.searchPatientByName(searchByLastNameAndFirstName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(searchByLastNameAndFirstName);

    //<Step 2>-Double click on patient jacket
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();
    
     //<Step 3>-Under the Demographic section, click on the "Deceased" checkbox , enter the death date and click on the Save button.
    PG_Add_Patient.clickOnDeceasedCheckBox();
    PG_Add_Patient.setDeceasedDeathDate("date",deceasedDeathDate);
    PG_Add_Patient.setDeceasedDeathDate("month",deceasedDeathMonth);
    PG_Add_Patient.setDeceasedDeathDate("year",deceasedDeathYear);
    
     //<Step 4>-Click on "yes" button and verify that the deceased status is updated in patient jacket
     PG_Add_Patient.clickOnAddPatientwindowButton("Save");
     PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
     PG_Patient_Jacket.validateDOBOnPatientJacket("deceased");
     PG_MainPage.clickMenu("Menu");
     aqTestCase.End();
}







