var KT_Add_Patient = require("KT_T20_Add_a_new_patient_using_two_next_of_Kin");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var PG_MainPage = require("PG_Main_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");
var patientJacketPg = require("PG_Patient_Jacket_Locators");
var dataDriver = require("DataDriver");
var secondKinName=dataDriver.getValue("Kin2_Name");
var PJ_KinName1 = dataDriver.getValue("PJ_KinName1Index");

var birthDate = KT_Add_Patient.birthDate;
var birthMonth = KT_Add_Patient.birthMonth;
var birthYear = KT_Add_Patient.birthYear;
var searchByDOB = birthDate + "/" + birthMonth + "/" + birthYear;
var patientName = KT_Add_Patient.searchByFirstNameAndLastName;
var initialCount;


//@removePatient

function KT_T40_Remove_one_Next_of_Kin() {
  
    //<Step 1.1> Launch Karisma application

    //<Step 1.2> Click on the reception button on the main menu
    KT_Add_Patient.KT_T20_Add_a_new_patient_using_two_next_of_Kin();
    aqTestCase.Begin("KT_T40_Remove_one_Next_of_Kin");
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();

    //<Step 1.3> Enter the patient's DOB in "MM/DD/YYYY" format using slash operator in the search bar. Verify that the corresponding patient name and number appears under the "ALL PATIENTS" section
    PG_PatientDialogBox.searchPatientByName(searchByDOB);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.clickOnPatientOnPatientDialogByPatientName(patientName);
    initialCount = patientJacketPg.getNextKinPatientJacketGrid().ChildCount;

    //<Step 2>- Click on Next of Kins section on patient jacket
    PG_Patient_Jacket.clickOnDemographicsButtonOnPJ();

    //<Step 3>Under the Next of Kin section, click on the "X" icon and click on the Save button.
    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
      PG_Add_Patient.clickOnRemoveButton("RemoveButtonNoteSection","RemoveKin");
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(patientName);

    //<Step 4>-Verify that the next of kin is removed and changes are reflected under the Next of Kins section in the patient jacket
    PG_Patient_Jacket.validateCount("KIN",initialCount);
    PG_Patient_Jacket.verifyNextToKinOnPatientJacket(PJ_KinName1, secondKinName);
    PG_MainPage.clickMenu("Menu");
    aqTestCase.End();


}