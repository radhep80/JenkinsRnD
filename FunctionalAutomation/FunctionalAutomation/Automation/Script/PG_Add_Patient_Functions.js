﻿var globalConstants = require("GlobalConstants");
var verificationUtils = require("VerificationUtils");
var dataGenerator = require("DataGenerator");
var addPatientPgLocators = require("PG_Add_Patient_Locators");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");
var zephyrFunctions =  require("ZephyrUtils");
var PG_MainPage = require("PG_Main_Locators");
var verificationUtils = require("VerificationUtils");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_Patient_Jacket = require("PG_Patient_Jacket_Functions");


function clickOnAddPatientwindowButton(buttonName) {
    try {
        if (buttonName in addPatientPgLocators.addPatientWindowButtonNamesToMap) {
            var mappedValue = addPatientPgLocators.addPatientWindowButtonNamesToMap[buttonName];
            var button = addPatientPgLocators.getAddPatientWindowButton().FindChild("Name", "*WpfObject*WpfNative*," + mappedValue, 2);
            if (button.Exists) {
                button.Click();
                Log.Message("Successfully clicked on button with name: " + buttonName);
            } else {
                Log.Error("Button not found on window");    
            } 
        } else {
            Log.Error("Argument not found in the mapping");
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
        return false;
    }
}

module.exports.clickOnAddPatientwindowButton=clickOnAddPatientwindowButton;

function clickonAddnewButtonSecondBlock(secondAddNewButton) {
    try {
        if (secondAddNewButton in addPatientPgLocators.addNewButtonContactBlockToMap) {
            var addNewButtonmappedValue = addPatientPgLocators.addNewButtonContactBlockToMap[secondAddNewButton];
            var addNewButtonNumber = addPatientPgLocators.getAddNewButtonContactBlock().FindChildEx("Name", "*WpfObject*WpfNative*" + addNewButtonmappedValue, 3);
            var addNew1 = addNewButtonNumber.FindChildEx("Name", "*TextBlock,Add new*", 25);
            if (addNew1.Exists) {
                addNew1.click();
                Log.Message("Successfully clicked on the AddNew button: " + secondAddNewButton);
            } else {
                Log.Error("AddNew button  not found.");
            }
        } else {
            Log.Error("Argument not found in the mapping");
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}

module.exports.clickonAddnewButtonSecondBlock=clickonAddnewButtonSecondBlock;

function setBirthDate(dayValue, monthValue, yearValue) {
    try {     
        if (dayValue >= 1 && dayValue <= 31) {
            var enterDay =addPatientPgLocators.getDayTextbox().FindChildEx("Name", "*WpfObject*TextBox*,1)", 7);
            enterDay.Click();
            enterDay.Keys(dayValue.toString());
        } else {
            Log.Error("Invalid day value provided.");
            return; 
        }
        if (monthValue >= 1 && monthValue <= 12) {
            var enterMonth = addPatientPgLocators.getMonthTextbox().FindChildEx("Name", "*WpfObject*TextBox*,1)", 7);
            enterMonth.Keys(monthValue.toString());
        } else {
            Log.Error("Invalid month value provided.");
            return; 
        }
        if (yearValue > 0) {
            var enterYear = addPatientPgLocators.getYearTextbox().FindChildEx("Name", "*WpfObject*TextBox*,1)", 7);
            enterYear.Keys(yearValue.toString());
        } else {
            Log.Error("Invalid year value provided.");
            return; 
        }       
        Log.Message("Date of Birth "+dayValue+"/"+monthValue+"/"+yearValue+ " entered succesfully.");
    } catch (error) {
       
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.setBirthDate=setBirthDate;

function setSexAssignedatBirth(birthSexValue) {
  try {
    var txt_SexAtBirth = addPatientPgLocators.getSexAssignedatBirth().findChildEx("Name", "*WpfObject*TextBlock*none*", 15);
    if (txt_SexAtBirth.Exists) {
      txt_SexAtBirth.Click();
      Sys.Keys(birthSexValue);
      Delay(globalConstants.shortTimeout);
      Sys.Keys("[Enter]");
      Log.Message("Sex Assigned At Birth value selected successfully: " + birthSexValue);
    }
    else {
      Log.Error("SexATBirth field not found.");
    }
  
  }
  catch (e) {
  Log.Message(e.Message);
}
}

module.exports.setSexAssignedatBirth=setSexAssignedatBirth;

function selectNoteType(NoteType) {
    try {
        var note = addPatientPgLocators.getNoteType().FindChild("Name", "*TextBlock," + NoteType + "*", 17);
        if (note.Exists) {
            note.Click();
             Log.Message("Successfully clicked on note with name: " + NoteType);
        } else {
            Log.Error("TextBlock with Note Type not found.");
        }
    } catch (e) {
        Log.Error("An error occurred: " + e.message);
        return false;
    }
}

module.exports.selectNoteType=selectNoteType;

const deceasedDeathDate = {
    date: 1,
    month: 3,
    year: 5
};
function setDeceasedDeathDate(parameterName, valueToSet) {
    try {
        var index = deceasedDeathDate[parameterName];
        var nativ = addPatientPgLocators.getDeceasedDeath().FindChildEx("Name", `*WpfObject*WpfNative*,${index})`, 1);
        var textBOX = nativ.FindChildEx("Name", "*WpfObject*TextBox*,1)", 50);
        textBOX.Click();
        textBOX.Keys(valueToSet);
        Log.Message(`Setting value for '${parameterName}' to '${valueToSet}'`);
    } catch (error) {
      Log.Error(`Error in setDecresedDeathDate for parameter '${parameterName}':`, error);
     }
}
module.exports.setDeceasedDeathDate=setDeceasedDeathDate;

function clickOnDeceasedCheckBox() {
    try {
      
        addPatientPgLocators.getDeceasedCheckBox().Click();
        Log.Message("Clicked on Deceased checkbox.");
    } catch (error) {
        Log.Error("Error occurred while clicking on Deceased checkbox:", error);
    }
}

module.exports.clickOnDeceasedCheckBox=clickOnDeceasedCheckBox;

function enterAndSaveGeneralNote(enterGeneralNoteText) {
  try {
    if (addPatientPgLocators.getGeneralNoteDocument().Exists) {
      var enterText = addPatientPgLocators.getGeneralNoteDocument().FindChild("Name", "*InternalDocumentControl*", 5);
      enterText.Keys(enterGeneralNoteText);
      var saveButton = addPatientPgLocators.getGeneralNoteDocument().FindChildEx("Name", "*WpfObject*WpfNative*,3)", 3);
      if (saveButton.Exists) {
        saveButton.Click();
        Log.Message("General note text entered successfully:"+enterGeneralNoteText);
        return true;
      } else {
        Log.Error("Save button not found.");
      }
    }
    else {
      Log.Error("General note document not found.");
      return false;
    }
  } catch (error) {
    Log.Error("An error occurred: " + error.message);
  }
}
module.exports.enterAndSaveGeneralNote=enterAndSaveGeneralNote;

function addSecondAddress(addressline, suburb, postcode, city, state, country, type) {
    const patientAddressfields = [
        { value: addressline, index: 1 },
        { value: suburb, index: 4 },
        { value: postcode, index: 5 },
        { value: city, index: 6 },
        { value: state, index: 7 },
        { value: country, index: 8 },
        { value: type, index: 9 },
    ];
    try {
        for (let i = 0; i < patientAddressfields.length; i++) {
            const field = patientAddressfields[i];
            var secondAddressParent = addPatientPgLocators.getSecondAddress().FindChildEx("Name", `*WpfObject*WpfNative,\"\", ${field.index})`, 1);
            if (field.index == 8) {
                var countryField = secondAddressParent.FindChildEx("Name", "*WpfObject*TextBlock,(none)*", 20);
                Delay(globalConstants.shortTimeout);
                countryField.Click();
                Delay(globalConstants.shortTimeout);
                Sys.Keys(country);
                Sys.Keys("[Enter]");
            }
            else if (field.index == 9) {
                var typeField = secondAddressParent.FindChildEx("Name", "*WpfObject*TextBlock,Current*", 25);
                Delay(globalConstants.shortTimeout);
                typeField.Click();
                Sys.Keys(type);
                Sys.Keys("[Enter]");
            }
            else {
                var textBox = secondAddressParent.FindChildEx("Name", "*WpfObject*TextBox*,1)", 15);
                textBox.set_Text(field.value);
            }
        }
    } catch (error) {

        Log.Error("An error occurred: " + error.message);
    }
}

module.exports.addSecondAddress=addSecondAddress;

function clickOnContactButtonsByName(contactButton) {
    try {
      
        if (contactButton in addPatientPgLocators.contactButtonNameToMap) {
            var contactMappedValue = addPatientPgLocators.contactButtonNameToMap[contactButton];
            var contactType = addPatientPgLocators.getContactButton().FindChild("Name", "*WpfObject*WpfNative*," + contactMappedValue, 2);
            if (contactType.Exists) {
                contactType.Click();
                Log.Message("Successfully clicked on button with name: " + contactButton);
            } else {
                Log.Error("Button not found on window");    
            } 
            
        } else {
           
            Log.Error("Argument not found in the mapping");
        }
    } catch (error) {
       
        Log.Error("An error occurred: " + error.message);
        return false;
    }
}

module.exports.clickOnContactButtonsByName=clickOnContactButtonsByName;

function setEmailAddress(emailId) {
    try {
        var emailTextBox = addPatientPgLocators.getEmailAddress().FindChildEx("Name", "*WpfObject*TextBox*,1)", 5);
        if (emailTextBox.Exists) {
            emailTextBox.keys(emailId);
             Log.Message("Successfully entered email address : " + emailId);
        } else {
            Log.Error("TextBlock with Email address not found.");
        }
    } catch (error) {
      Log.Error("An error occurred: " + error.message);
      return false;
    }
}

module.exports.setEmailAddress=setEmailAddress;

function enterContactNumber(Number) {
    try {
        
        var contactNumber =addPatientPgLocators.getContactNumber().FindChild("Name", "*WpfObject*TextBox*,1", 10);
        if (contactNumber.Exists) {
            contactNumber.Keys(Number);
            Log.Message("Successfully entered contact number : " + Number);
        } else {
            Log.Error("Contact Number field not found.");
        }
    } catch (error) {
        
        Log.Error("An error occurred: " + error.message);
    }
}

module.exports.enterContactNumber=enterContactNumber;

function setPatientAddress(addressline, suburb)
 {
    try {  
      const addressFields = [
        { value: addressline, index: 1 },
        { value: suburb, index: 4 }
        ];
      for (let i = 0; i < addressFields.length; i++) {
            const field =addressFields[i]
            var addressParent = addPatientPgLocators.getPatientAddress().FindChildEx("Name", `*WpfObject*WpfNative,\"\",${field.index})`, 1);
            if (field.index == 4) {
                var suburbField = addressParent.FindChildEx("Name", "*WpfObject*TextBox*,1)", 20);
                suburbField.Click();
                Sys.Keys(suburb);
                Sys.Keys("[Enter]");
            } 
             else {
                var textBox = addressParent.FindChildEx("Name", "*WpfObject*TextBox*,1)", 15);
                textBox.set_Text(field.value);
            }
             Log.Message("Patient Addressline1 " + addressline + "," +suburb);
        }
    } catch (error) {
        Log.Error(": " + error.message);
    }
}

module.exports.setPatientAddress=setPatientAddress;

function clearSubBurb() {
    try {
        var addressParent = addPatientPgLocators.getPatientAddress().FindChildEx("Name", "*WpfObject*WpfNative*,4)", 1);
        var suburbField = addressParent.FindChildEx("Name", "*WpfObject*TextBox*,1)", 20);
        suburbField.Click();
        Delay(globalConstants.shortTimeout);
        suburbField.Clear();
    } catch (error) {
      Log.Error(`An error occurred in clearSubBurb: ${error.message}`);
    }
}

module.exports.clearSubBurb = clearSubBurb;


function selectAllergy(blocknumber,initialAllergy,initialSeverity,allergyToSet, severityToSet) {
 
    try {
            if (blocknumber in addPatientPgLocators.allergyNumberToMap) {
            var alleryMappedValue = addPatientPgLocators.allergyNumberToMap[blocknumber];
            var allergybox = addPatientPgLocators.getAllery().FindChildEx("Name", "*WpfObject*WpfNative*," + alleryMappedValue, 1);
            var selectValue = allergybox.FindChildEx("Name", "*TextBlock," + initialAllergy + "*", 25);
            if (selectValue.Exists) {
                Delay(globalConstants.shortTimeout);
                selectValue.Click();
                Delay(globalConstants.shortTimeout);
                Sys.Keys(allergyToSet);
                Delay(globalConstants.shortTimeout);
                Sys.Keys("[Enter]");
                Log.Message("Allergen selected Successfully : " + allergyToSet);
            }else {
                Log.Error("Allergy value not found.");
            }
            var selectseverity = allergybox.FindChildEx("Name", "*TextBlock," + initialSeverity + "*", 25);
            if (selectseverity.Exists) {
                Delay(globalConstants.shortTimeout);
                selectseverity.Click();
                Delay(globalConstants.shortTimeout);
                Sys.Keys(severityToSet);
                Delay(globalConstants.shortTimeout);
                Sys.Keys("[Enter]");
                Log.Message("Severity selected Successfully: " + severityToSet);
            } else {
                Log.Error("Allergy value not found.");
            }
        }
        else {
 
            Log.Error("Argument not found in the mapping");
        }
    }
    catch (e) {
        Log.Error("An error occurred while selecting allergy: " + e.message);
    }
}
module.exports.selectAllergy=selectAllergy;

function clickonAddnewButtonthirdblock(addNewButtonType) {
    try {
        if (addNewButtonType in addPatientPgLocators.thirdPanelAddNewButton) {
            var addButtonmappedValue = addPatientPgLocators.thirdPanelAddNewButton[addNewButtonType];
            var addNewButtonNumber = addPatientPgLocators.getthirdPanelAddNewButton().FindChildEx("Name", "*WpfObject*WpfNative*" + addButtonmappedValue, 3);
            var addNew = addNewButtonNumber.FindChildEx("Name", "*TextBlock,Add new*", 25);
            if (addNew.Exists) {
                addNew.click();
                Log.Message("Successfully clicked on the AddNew button: " + addNewButtonType);

            } else {
                Log.Error("AddNew button  not found.");
            }
        } else {
            Log.Error("Argument not found in the mapping");
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}

module.exports.clickonAddnewButtonthirdblock=clickonAddnewButtonthirdblock;

function selectCondition(ConditionNumber, conditionType) {
  try {

    if (ConditionNumber in addPatientPgLocators.conditionNumberToMap) {
      var conditionMappedValue = addPatientPgLocators.conditionNumberToMap[ConditionNumber];
      var condition = addPatientPgLocators.getCondition().FindChildEx("Name", "*WpfObject*WpfNative*," + conditionMappedValue, 1);
      var conditionValue = condition.FindChild("Name", "*TextBlock,none*", 25);
      if (conditionValue.Exists) {
        conditionValue.Click();
         Delay(globalConstants.shortTimeout);
        Sys.Keys(conditionType);
         Delay(globalConstants.shortTimeout);
        Sys.Keys("[Enter]");
        Log.Message(" Condition selected successfully : " + conditionType);
      } else {
        Log.Error("Condition value not found.");
      }
    } else {
      Log.Error("Argument not found in the mapping");
    }
  } catch (e) {
    Log.Error("An error occurred while selecting condition: " + e.message);
  }
}
module.exports.selectCondition=selectCondition;


function healthFundBox(fundText, fundValue) {
  try {

    var healthFundTxt = addPatientPgLocators.gethealthFund().findChildEx("Name", "*WpfObject*TextBlock*none*", 20);
    if (healthFundTxt.Exists) {
      healthFundTxt.Click();
      Sys.Keys(fundText);
      Sys.Keys("[Enter]");
      Log.Message("Health fund selected successfully  : " + fundText);
      var healthFundValue = addPatientPgLocators.gethealthFund().findChildEx("Name", "*WpfObject*TextBox*", 20);
      healthFundValue.WaitProperty("Visible", true, 5000);
      if (healthFundValue.Exists) {
        healthFundValue.Click();
        Sys.Keys(fundValue);
        Sys.Keys("[Enter]");
        Log.Message("Health fund value selected successfully  : " + fundValue);
        return true;
      }
      else {
        Log.Error("Health fund value not found.");
        return false;
      }
    } else {
      Log.Error("Health fund not found.");
      return false;
    }
  } catch (error) {
    Log.Error("An error occurred: " + error.message);
  }
}

module.exports.healthFundBox=healthFundBox;

function validateAllergyorConditionOnPatientJacket(datanumber, names, expectednotetext) {
  try {

    var dataMappedValue = addPatientPgLocators.validateDataToMap[datanumber]
    if (dataMappedValue === undefined) {
      Log.Error("Invalid mapped name provided: " + datanumber);
      return null;
    }
    verificationUtils.verifyText(addPatientPgLocators.getAllergyOrConditionDataValue(dataMappedValue), "Name", "*TextBlock," + names + "*", 5, expectednotetext);
  }
  catch (exception) {
    Log.Error("An error occurred: " + exception.message);
  }
}

module.exports.validateAllergyorConditionOnPatientJacket=validateAllergyorConditionOnPatientJacket;

function validateEnteredNoteText(noteType, Searchnotetext, expectednotetext) {
  try {
    var noteMappedValue = addPatientPgLocators.validateEnteredNoteTextToMap[noteType]
    if (noteMappedValue === undefined) {
      Log.Error("Invalid mapped name provided: " + noteType);
      zephyrFunctions.logStep("VFail","Invalid mapped name provided: " + noteType);
 
      throw error;
      return null;
    }
    verificationUtils.verifyText(addPatientPgLocators.getNoteSectionText(noteMappedValue), "Name", "*TextBlock," + Searchnotetext + "*", 17, expectednotetext);
//    zephyrFunctions.logStep(stepno,"Pass","",totalSteps);

  }
  catch (exception) {
    Log.Error("An error occurred: " + exception.message);
    zephyrFunctions.logStep("VFail",exception.message);   
    throw exception;
  }
}
module.exports.validateEnteredNoteText=validateEnteredNoteText;

function validateGeneralNoteTittle(titleName, expectednotetext) {
  try {

    //verificationUtils.verifyText(addPatientPgLocators.getGeneralNoteTitle(), "Name", "*TextBlock," + titleName + "*", 5, expectednotetext);
    zephyrFunctions.logStep("Pass","");
  }
  catch (exception) {
    Log.Error("An error occurred: " + exception.message);
    zephyrFunctions.logStep("VFail",exception.message);
  }
}
module.exports.validateGeneralNoteTittle=validateGeneralNoteTittle;

function setAUIDValue(AUIDVal) {
  try {
    var auidText=addPatientPgLocators.getAUIDValue().FindChildEx("Name", "*WpfObject*TextBox*,1)", 1);
    if (auidText.Exists) {
      auidText.Click();
      auidText.Keys(AUIDVal);
      Log.Message(" AUID value enterd successfully : " + AUIDVal);
      return true;
    }
    else {
      Log.Error("AUID field not found.");
      return false;
    }
  }
  catch (error) {
    Log.Error("An error occurred: " + error.message);
  }
}

module.exports.setAUIDValue=setAUIDValue;

function setMRNValue(MRNValue) {
    try {
        if (addPatientPgLocators.getMrnNumber().Exists) {
            addPatientPgLocators.getMrnNumber().Click();
            Delay(globalConstants.shortTimeout);
            var mrnNumberParts = MRNValue.split("");
            for (var i = 0; i < mrnNumberParts.length; i++) {
                Sys.Keys(mrnNumberParts[i]);
                Delay(globalConstants.shortTimeout);
            }
            Log.Message("MRN Number enterd successfully : " + MRNValue);
            return true;
        }
        else {
            Log.Error("MRN field not found.");
            return false;
        }
    }
    catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}

module.exports.setMRNValue=setMRNValue;

function setIdentifierValue(identifierValue, identifierName = "MRN") {
    try {
        var identifierLocator = addPatientPgLocators.getIdentifier(identifierName);

        if (identifierLocator.Exists) {
            identifierLocator.Click();
            Delay(globalConstants.shortTimeout);
            var identifierParts = identifierValue.split(""); // Split into characters
            for (var i = 0; i < identifierParts.length; i++) {
                Sys.Keys(identifierParts[i]);
                Delay(globalConstants.shortTimeout);
            }
            Log.Message(identifierName + " Number entered successfully: " + identifierValue);
            return true;
        } else {
            Log.Error(identifierName + " field not found.");
            return false;
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.setIdentifierValue=setIdentifierValue;

function validatePopupMessageOnWindow(expectedQue,expectedAns){
   try{          
         var firstTitleMessage=addPatientPgLocators.getYesPopupMessage().FindChildEx("Name","*WpfObject*Run*"+expectedQue + "*", 20);  
         var actualQueText =firstTitleMessage.Text;
         Log.Message("Actual  value is " + actualQueText);
         var secondTitle=addPatientPgLocators.getYesPopupMessage().FindChildEx("Name","*WpfObject*Run*"+expectedAns + "*", 20);
         var actualAnsText =secondTitle.Text;
         Log.Message("Actual  value is " + actualAnsText);     
          if(actualQueText.Equals(expectedQue)&& actualAnsText.Contains(expectedAns)){
            Log.Message("Validation Passed");
          }
           else{
               Log.Error("Message does not match the expected value. Actual Title " + actualQueText + ", Expected Message " + expectedQue);
               Log.Error("Message does not match the expected value. Actual Title " + actualAnsText + ", Expected Message " + expectedAns);
          }  } 
           catch (e) {
        Log.Error("An error occurred " + e.message);
    }            
}
module.exports.validatePopupMessageOnWindow=validatePopupMessageOnWindow;

function clickOnWindowPopupButtonByName(windowButtonName) {
    try {
        var clickButton = addPatientPgLocators.getYesAndNoWindoeButton().FindChildEx("Name", "*TextBlock," + windowButtonName + "*", 25);
        if (clickButton.Exists) {
            clickButton.Click();
             Log.Message("Successfully clicked on button "+ windowButtonName);
        } else {
            Log.Error("Button is not found on window: " + windowButtonName);
        }
    } catch (e) {
        Log.Error("Error occurred while clicking the button: " + e.message);
    }
}
module.exports.clickOnWindowPopupButtonByName=clickOnWindowPopupButtonByName;

function closeButtonOnManagePatientWindow(managePatientWindowButton)
{
  try{
  var closeButton=addPatientPgLocators.getCloseButtonOnManagePatientWindow().FindChild("Name", "*TextBlock," +managePatientWindowButton + "*", 17);
   if (closeButton.Exists)
   {
     closeButton.Click();
      Log.Message("Successfully clicked on button "+ managePatientWindowButton);
   }
   else
   {
     Log.Error("Button is not found on window");    
   } 
    }catch (e) {
        Log.Error("An error occurred while click on close button " + e.message);
    }   
}
module.exports.closeButtonOnManagePatientWindow=closeButtonOnManagePatientWindow;

function validateManagePatientWindowTittle(titleName, expectedTitle) {
  try {

    verificationUtils.verifyText(addPatientPgLocators.getManagePatientTitle(), "Name", "*WpfObject*Run*" + titleName + "*", 20, expectedTitle);
  }
  catch (exception) {
    Log.Error("An error occurred: " + exception.message);
  }
}
module.exports.validateManagePatientWindowTittle=validateManagePatientWindowTittle;

function doubleClickOnRandomPatientData()
{
  try{ 
   if (addPatientPgLocators.getRandomColumn().Exists)
   {
    addPatientPgLocators.getRandomColumn().DblClick();
   }
   else
   {
     Log.Error("Patient data is not found on window");    
   } 
    }catch (e) {
        Log.Error("An error occurred while double click on patient data " + e.message);
    }
}
module.exports.doubleClickOnRandomPatientData=doubleClickOnRandomPatientData;

function validateAddressChildCount()
 {
    try {
        var actualChildCount =addPatientPgLocators.getAddressChildCount().ChildCount;       
        if (actualChildCount === 3) {
            Log.Message("Address saved successfully");
        } else {
            Log.Error("Address not saved successfully");
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.validateAddressChildCount=validateAddressChildCount;

function getPatientCountOnPatientJacket() {
    try {
        var countno = addPatientPgLocators.getPatientCount().FindChildEx("Name", "*TextBlock,ALL PATIENTS*", 2);
        var actualTextCount = countno.Text;
        Log.Message("Actual value is " + actualTextCount);
        var numericValueMatch = String(actualTextCount).match(/\((\d+)\)/);
        if (numericValueMatch && numericValueMatch.length > 1) {
            var numericValue = numericValueMatch[1];
            Log.Message("Extracted numeric value is " + numericValue);
            return parseInt(numericValue);
        } else {
            Log.Error("Numeric value not found in the expected format.");
            return -1;
        }
    } catch (e) {
        Log.Error("Error occurred while getting the patient count: " + e.message);
        return -1;
    }
}

module.exports.getPatientCountOnPatientJacket=getPatientCountOnPatientJacket;

function validateCountOfAllPatient(initialCount) {
    try {        
        var newCount = getPatientCountOnPatientJacket();
        Log.Message("New patient count: " + newCount);
        if (newCount == initialCount + 1) {
            Log.Message("Count increased by 1 as expected. Initial count: " + initialCount + ", New count: " + newCount);
        } else {
            Log.Error("Count did not increase as expected. Initial count: " + initialCount + ", New count: " + newCount);
        }
    } catch (e) {
        Log.Error("Error occurred while validating count of all patients: " + e.message);
    }
}
module.exports.validateCountOfAllPatient=validateCountOfAllPatient;

function addPatientPrecondition(searchByFirstNameAndLastName,sexAtBirth,birthDate,birthMonth,birthYear,ContactNumber,AUID,AddressLine1,Suburb)
{ 
    //zephyrFunctions.logStep(1,"Pass","",totalSteps);
    //<Step 1.2>Navigate to Reception
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    //zephyrFunctions.logStep(2,"Pass","",totalSteps);
    //<Step 1.3>In the search bar on the left hand side, enter firstname, lastname and click on the magnifier icon next to it
    PG_PatientDialogBox.searchPatientByName(searchByFirstNameAndLastName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    //zephyrFunctions.logStep(3,"Pass","",totalSteps);
    //<Step 1.4> Verify that "+ADD PATIENT" button is available
    PG_PatientDialogBox.validatePatientAddButtonText("+ ADD PATIENT");
    //zephyrFunctions.logStep(4,"Pass","",totalSteps);
    //<Step 1.5 Click on the "+ADD PATIENT" button.
    PG_PatientDialogBox.clickOnAddButton();
    //zephyrFunctions.logStep(5,"Pass","",totalSteps);
    //varify add patient
    //zephyrFunctions.logStep(6,"Pass","",totalSteps);
    //step2:Enter the below fields Birth Date,Sex assigned at birth,Add any identifier,Contact Number,Address
   clickOnAddPatientwindowButton("Unprotect");
   setSexAssignedatBirth(sexAtBirth);
    setBirthDate(birthDate,birthMonth,birthYear);
    enterContactNumber(ContactNumber);
    setAUIDValue(AUID);
    setPatientAddress(AddressLine1,Suburb);
   // zephyrFunctions.logStep(7,"Pass","",totalSteps);
}
module.exports.addPatientPrecondition=addPatientPrecondition;

function waitForVisibilityOfAddPatientPopup(buttonName){
addPatientPgLocators.getAddPatientWindowButton(buttonName).WaitProperty("Visible", true, globalConstants.shortTimeout);
}
module.exports.waitForVisibilityOfAddPatientPopup=waitForVisibilityOfAddPatientPopup;


//==========================================================================================================//

function setValuesInKin(kinValue, name, relationship, sequence, mobile, home) {
    const fields = [
        { label: 'Name', value: name, index: 1 },
        { label: 'Relationship', value: relationship, index: 2 },
        { label: 'Sequence', value: sequence, index: 3 },
        { label: 'Mobile', value: mobile, index: 4 },
        { label: 'Home', value: home, index: 5 },
    ];

    try {
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            var childStack = addPatientPgLocators.getKinStackPanel(kinValue).FindChildEx("Name", `*WpfObject*WpfNative,\"\", ${field.index})`, 1);
            var textBox = childStack.FindChildEx("Name", "*WpfObject*TextBox*,1)", 15);
            textBox.set_Text(field.value);
            Log.Message(`Set ${field.label} to ${field.value}`);
        }
    } catch (error) {
        Log.Error("Error in setValuesInKin function: " + error.message);
    }
}

module.exports.setValuesInKin = setValuesInKin;

function setAddressInKin(kinValue, addressLine1, addressLine2, addressLine3, subBurb, postCode, city, state, country) {
    const fields = [
        { label: addressLine1, index: 7 },
        { label: addressLine2, index: 8 },
        { label: addressLine3, index: 9 },
        { label: subBurb, index: 10 },
        { label: postCode, index: 11 },
        { label: city, index: 12 },
        { label: state, index: 13 },
        { label: country, index: 14 }
    ];

    try {
      for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            var childStack = addPatientPgLocators.getKinStackPanel(kinValue).FindChildEx("Name", `*WpfObject*WpfNative,\"\", ${field.index})`, 1);
            if (field.index === 14) {
                var textBox = childStack.FindChildEx("Name", "*WpfObject*TextBlock*none*,1)", 15);
                childStack.Click();
                Sys.Keys(field.label);
                Delay(globalConstants.shortTimeout);
                Sys.Keys("[Down]");
                Sys.Keys("[Enter]");
            } else {
                var textBox = childStack.FindChildEx("Name", "*WpfObject*TextBox*,1)", 15);
                textBox.set_Text(field.label);
                Log.Message(`Set ${field.label} to ${field.index}`);
            }
        }

    } catch (error) {
        Log.Error("Error in setAddressInKin function: " + error.message);
    }
}
module.exports.setAddressInKin = setAddressInKin;

function clickOnSendLetterCheckBox(kinValue) {
    try {
      addPatientPgLocators.getSendLetterCheckBox(kinValue).Click();
    } catch (e) {
        Log.Error("An error occurred while trying to click the send letter checkbox: " + e.message);
    }
}
module.exports.clickOnSendLetterCheckBox = clickOnSendLetterCheckBox;

function clickOnShowAddress() {
    try {
     addPatientPgLocators.getShowAddressButtonOnAddPatient().FindChildEx("Name", "*WpfObject*Button*,1)", 4).Click();
     Log.Message("Sucessfully click on ShowAddress button");   
    } catch (e) {
        Log.Error("An error occurred while trying to click the send letter checkbox: " + e.message);
    }
}
module.exports.clickOnShowAddress = clickOnShowAddress;

//Functions for the Notes Templetes 
function selectMenuOnTheNotes(toolBarToSelect, toolBarMenuName) {
    try {
        var index = addPatientPgLocators.menuNameToIndexMap[toolBarMenuName];
        if (index === undefined) {
            Log.Error("Invalid menu name provided: " + toolBarMenuName);
            return;
        }
      var toolBarNative = addPatientPgLocators.getNotesToolBar(toolBarToSelect).FindChildEx("Name", `*WpfObject*WpfNative*,${index})`, 1);
        var toolBarButton = toolBarNative.FindChildEx("Name", "*WpfObject*Button*,1)", 2);
        toolBarButton.Click();
        Log.Message(`Successfully clicked on the toolbar menu button`);
    } catch (error) {
       Log.Error(`An error occurred while selecting the menu on the notes: ${error.message}`);
    }
}
module.exports.selectMenuOnTheNotes=selectMenuOnTheNotes

function clickOnInternationDocument(documentName) {
    try {
      addPatientPgLocators.getInternalDocumentControl(documentName).Click();
      Log.Message(`Successfully clicked on the internation document panel`);
    } catch (e) {
        Log.Error("An error occurred: " + e.message);
    }
}
module.exports.clickOnInternationDocument=clickOnInternationDocument;


function setTextInInternationDocument(documentName, text) {
    try {
        documentControl=addPatientPgLocators.getInternalDocumentControl(documentName);
        documentControl.Click();
        documentControl.Keys(text);
        Log.Message(`Successfully set text in internation document control:`+text);
        
    } catch (e) {
        Log.Error("An error occurred: " + e.message);
    }
}
module.exports.setTextInInternationDocument=setTextInInternationDocument;

function clickOnSelectNoteTemplateButton(buttonName) {
    try {
        const nameToIndexMap = {
            "Cancel": 3,
            "OK": 4
        };
        var index = nameToIndexMap[buttonName];
        if (index === undefined) {
            Log.Error("Invalid name provided: " + buttonName);
            return;
        }
       var buttonNative = addPatientPgLocators.getButtonsOnSelectNoteTemplete().FindChildEx("Name", `*WpfObject*WpfNative*,${index})`, 2);
        var button = buttonNative.FindChildEx("Name", "*WpfObject*Button*,1)", 2);
       button.Click();
        Log.Message("Sucessfully click on button")
    } catch (e) {
        Log.Error("An error occurred: " + e.message);
    }
}
module.exports.clickOnSelectNoteTemplateButton=clickOnSelectNoteTemplateButton;

function clickOnSaveButtonOnNotes(mappedNotesName) {
    try {
        addPatientPgLocators.getSaveButtonOnNotesNative(mappedNotesName).Click();
        Log.Message("Sucessfully click on button")
    } catch (error) {
        Log.Error("An error occurred:", error);
    }
}
module.exports.clickOnSaveButtonOnNotes=clickOnSaveButtonOnNotes;

function rightClickInsideTheInternationDocControl(mappedNotesName) {
    try {
        var documentControl = addPatientPgLocators.getInternalDocumentControl(mappedNotesName);
        documentControl.ClickR();
        Log.Message(`Successfully right-clicked inside the internal document control for: ${mappedNotesName}`);
    } catch (error) {
        Log.Error(`An error occurred while right-clicking inside the internal document control for ${mappedNotesName}: ${error.message}`);
    }
}
module.exports.rightClickInsideTheInternationDocControl=rightClickInsideTheInternationDocControl;

function rightClickAndPasteInNote(mappedNotesName, menuToSelect) {
    try {
        Sys.Keys("^A");
        selectMenuOnTheNotes(mappedNotesName, menuToSelect);
        Sys.Keys("[Down]");
        rightClickInsideTheInternationDocControl(mappedNotesName);
        Delay(globalConstants.shortTimeout);
        Sys.Keys("[Down]");
        Sys.Keys("[Down]");
        Sys.Keys("[Down]");
        Sys.Keys("[Enter]");
    } catch (error) {
        Log.Error("An error occurred while executing rightClickAndPasteInNote:", error);
        if (typeof Log !== 'undefined' && typeof Log.Error === 'function') {
            Log.Error("An error occurred while executing rightClickAndPasteInNote: " + error.message);
        }
    }
}
module.exports.rightClickAndPasteInNote=rightClickAndPasteInNote;

//functions for data insertion in table on the templete notes
function pressKeyMultipleTimes(key, times) {
    try {
        if (times <= 0) {
            Log.Error("Number of times should be greater than 0.");
            return;
        }

        for (var i = 0; i < times; i++) {
            Sys.Keys(key);
        }

        Log.Message(key + " key pressed " + times + " times successfully.");
    } catch (e) {
        Log.Error("An error occurred: " + e.message);
    }
}
module.exports.pressKeyMultipleTimes=pressKeyMultipleTimes;

function createTableOnNotes(rowNumber, columnNumber) {
    try {
        var insertRow = addPatientPgLocators.getInsertTableGrid().FindChildEx("Name", "*WpfObject*WpfNative*,2)", 2);
        var rowBox = insertRow.FindChildEx("Name", "*WpfObject*TextBox*,1)", 6);
        rowBox.Clear();
        rowBox.Keys(rowNumber);

        var insertColumn = addPatientPgLocators.getInsertTableGrid().FindChildEx("Name", "*WpfObject*WpfNative*,4)", 2);
        var columnBox = insertColumn.FindChildEx("Name", "*WpfObject*TextBox*,1)", 6);
        columnBox.Clear();
        columnBox.Keys(columnNumber);
      
        clickOnSelectNoteTemplateButton("OK");
      
        for (var row = 0; row < rowNumber; row++) {
            for (var col = 0; col < columnNumber; col++) {
                if (row === 0 && col === 0) {
                    Sys.Keys("ABC");
                } else {
                    var randomText = dataGenerator.generateRandomString(3);
                    Sys.Keys(randomText);
                }
                Sys.Keys("[Right]");
            }
            if (row < rowNumber - 1) {
                Sys.Keys("[Down]");
                for (var i = 0; i < columnNumber; i++) {
                    Sys.Keys("[Left]");
                }
            }
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.createTableOnNotes=createTableOnNotes
    

function clearDateMonthYearTextBox() {
    try {
        var enterDay = addPatientPgLocators.getDayTextbox().FindChildEx("Name", "*WpfObject*TextBox*,1)", 7);
        enterDay.Clear();
    } catch (error) {
        console.error('Error clearing day textbox:', error);
    }

    try {
        var enterMonth = addPatientPgLocators.getMonthTextbox().FindChildEx("Name", "*WpfObject*TextBox*,1)", 7);
        enterMonth.Clear();
    } catch (error) {
        console.error('Error clearing month textbox:', error);
    }

    try {
        var enterYear = addPatientPgLocators.getYearTextbox().FindChildEx("Name", "*WpfObject*TextBox*,1)", 7);
        enterYear.Clear();
    } catch (error) {
        console.error('Error clearing year textbox:', error);
    }
}

module.exports.clearDateMonthYearTextBox = clearDateMonthYearTextBox;

function clearDemographicsData() {
    var clearDemographicsDataButton = Sys.Process("KarismaClient").WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Button", "", 1);
    clearDemographicsDataButton.Click();
}
module.exports.clearDemographicsData = clearDemographicsData;

function editPatientPrecondition(searchByFirstNameAndLastName, sexAtBirth, birthDate, birthMonth, birthYear) {
    PG_HomePage.selectTheMenuAndClick("Reception");
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.searchPatientByName(searchByFirstNameAndLastName);
    PG_PatientDialogBox.waitForVisibilityOfAddButton();
    PG_PatientDialogBox.validatePatientAddButtonText("+ ADD PATIENT");
    PG_PatientDialogBox.clickOnAddButton();

    PG_Add_Patient.clickOnAddPatientwindowButton("Unprotect");
    PG_Add_Patient.setSexAssignedatBirth(sexAtBirth);

    if (birthDate !== undefined && birthMonth !== undefined && birthYear !== undefined) {
        PG_Add_Patient.setBirthDate(birthDate, birthMonth, birthYear);
    }
    
    PG_Add_Patient.clickOnAddPatientwindowButton("Save");

    PG_Patient_Jacket.waitForVisibilityOfPatientJacket(searchByFirstNameAndLastName);
    PG_PatientDialogBox.waitForVisibilityOfPatientDialogBox();
    PG_PatientDialogBox.clearPatientSearchBox();
    
    PG_MainPage.clickMenu("Menu");
    PG_HomePage.selectTheMenuAndClick("Reception");
}
module.exports.editPatientPrecondition = editPatientPrecondition;

function setTextInPatientNameBox(textBoxName, valueToSet) {
    var index = addPatientPgLocators.patientNameToIndexMap[textBoxName];
    if (index === undefined) {
        Log.Message(`ERROR: Index for textBoxName "${textBoxName}" not found.`);
        return;
    }
    try {
        var patientNameNative = addPatientPgLocators.getPatientFirstNameLastnameGrid().FindChildEx("Name", "*WpfObject*WpfNative*," + index + ")", 1);
        var textBox = patientNameNative.FindChildEx("FullName", '*[WPFObject]*("TextBox", "", 1)', 50);
        textBox.Click();
        textBox.set_text(valueToSet);
        Log.Message(`INFO: Successfully set text for "${textBoxName}" to "${valueToSet}".`);
    } catch (error) {
        Log.Message(`ERROR: Failed to set text for "${textBoxName}". Error: ${error.message}`);
    }
}
module.exports.setTextInPatientNameBox = setTextInPatientNameBox;

function clearContactNumber() {
    try {
        var contactNumber = addPatientPgLocators.getContactNumber().FindChild("Name", "*WpfObject*TextBox*,1", 10);
        contactNumber.Click();
        contactNumber.Clear();
        Log.Message("Contact number cleared successfully.");
    } catch (error) {
        Log.Message("An error occurred while clearing the contact number:", error);
    }
}
module.exports.clearContactNumber = clearContactNumber;

//-------------

function clickOnIdentifierOrHealthFundRemoveButton(removeButtonName) {
    try {
        var removeButton_Parent;
        switch (removeButtonName) {
            case "HealthFundRemoveButton":
               var removeButton_Parent = addPatientPgLocators.getHealthFundRemoveButton().FindChildEx("Name", "*Button*", 5);             
                break;

            case "IdentifierRemoveButton":
            var removeButton_Parent = addPatientPgLocators.getIdentifierRemoveButton().FindChildEx("Name", "*Button*", 5);             
             break;
            default:
                Log.Error("error", "Invalid type provided: " + removeButtonName);
        }
        if (removeButton_Parent.Exists) {
            removeButton_Parent.Click();
            Log.Message("successfully clicked on remove button" + removeButtonName);
            return true;
        }
        else {
            Log.Error("Remove Button not found.");
            return false;
        }
    }
catch (e) {
        Log.Message("error", "Error occurred while click on remove button " + removeButtonName + ": " + e.message);
    }
    }
module.exports.clickOnIdentifierOrHealthFundRemoveButton = clickOnIdentifierOrHealthFundRemoveButton;


function clickOnRemoveButton(removeButton, cancelButtonName) {
    try {
        var removeData;
        switch (removeButton) {
            case "RemoveButtonNoteSection":
                removeData = addPatientPgLocators.getRemoveButton(cancelButtonName).FindChildEx("Name", "*Button*", 5);
                break;

            case "RemoveButtonContactSection":
                removeData = addPatientPgLocators.getcancelButton(cancelButtonName).FindChildEx("Name", "*Button*", 5);
                break;
            default:
                Log.Error("error", "Invalid button name provided: " + removeButton);
        }
        const removeMapbutton = addPatientPgLocators.removeButtonNamesToMap[cancelButtonName];
        if (removeMapbutton === undefined) {
            Log.Error("Invalid Button name provided: " + removeButton);
            return null;
        }
        if (removeData.Exists) {
            removeData.Click();
            Log.Message("successfully clicked on remove button: " + cancelButtonName);
            return true;
        }
        else {
            Log.Error("Remove Button not found.");
            return false;
        }
    }
    catch (e) {
        Log.Message("Error occurred while click on remove button " + removeButton + ": " + e.message);
    }
}
module.exports.clickOnRemoveButton = clickOnRemoveButton;

 
