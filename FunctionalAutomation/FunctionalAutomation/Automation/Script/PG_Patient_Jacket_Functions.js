var patientJacketPg = require("PG_Patient_Jacket_Locators");
var addPatientPgLocators = require("PG_Add_Patient_Locators");
var verificationUtils = require("VerificationUtils");
var waitUtils = require("WaitUtils");
var globalConstants = require("GlobalConstants");
var zephyrFunctions =  require("ZephyrUtils");
var actionUtils = require("ActionUtils");


function waitForVisibilityOfPatientJacket(name) {
    waitUtils.waitforControl(patientJacketPg.getPatientJacket(),"Name",`*TextBlock*,*${name}*`,50,globalConstants.shortTimeout);
}

module.exports.waitForVisibilityOfPatientJacket=waitForVisibilityOfPatientJacket;

function checkPatientNameOnTopOfJacket(name, expectedPatientNameOnJacket) {
    try {
        verificationUtils.verifyText(patientJacketPg.getPatientJacket(), "Name", "*TextBlock*," + name + "*", 50, expectedPatientNameOnJacket);
    } catch (error) {
        Log.Error("An error occurred while verifying patient name on the top of the jacket: " + error.message);
        return false;
    }
}
module.exports.checkPatientNameOnTopOfJacket=checkPatientNameOnTopOfJacket;

function validateDOBOnPatientJacket(expectedDOB) {
    try {
        var DOB = patientJacketPg.getPatientJacket().FindChild("Name", `*Run*,*${expectedDOB}*`, 50);
        var actualDOB = DOB.Text;
        if (actualDOB.Contains(expectedDOB)) {
            Log.Message(`Validation Successful: Expected DOB '${expectedDOB}' matches Actual DOB '${actualDOB}'.`);
        } else {
            Log.Error(`Validation Failed: Expected DOB '${expectedDOB}' does not match Actual DOB '${actualDOB}'.`);
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.validateDOBOnPatientJacket=validateDOBOnPatientJacket;

function validateTextOnPatientJacketByTextName(searchKeyword, expectedValue) {    
    try {
        var searchPattern = "*Run*," + searchKeyword + "*";
        verificationUtils.verifyText(patientJacketPg.getPatientJacket(), "Name", searchPattern,50, expectedValue);
        //zephyrFunctions.logStep(stepno,"Pass","",totalSteps);

        
    } catch (exception) {
        Log.Error("An error occurred: " + exception.message);
             zephyrFunctions.logStep("VFail","An error occurred: "+exception.message);
             
 
    }
}
module.exports.validateTextOnPatientJacketByTextName=validateTextOnPatientJacketByTextName;

function validateTextOnPatientJacketByTextContains(expectedValue) {    
    try {
        var searchPattern = "*Run*," + expectedValue + "*";
        verificationUtils.verifyTextConatins(patientJacketPg.getPatientJacket(), "Name", searchPattern,50, expectedValue);
        
    } catch (exception) {
        Log.Error("An error occurred: " + exception.message);
    }
}
module.exports.validateTextOnPatientJacketByTextContains=validateTextOnPatientJacketByTextContains;

function validatePatientIdentifier(expectedIdentifier) {
    try {
        verificationUtils.verifyText(patientJacketPg.getPatientJacket(), "Name", "*TextBlock*," + expectedIdentifier + "*", 50, expectedIdentifier);
    } catch (e) {
        Log.Error("An error occurred: " + e.message);
        return false;
    }
}

module.exports.validatePatientIdentifier=validatePatientIdentifier;

function validateHealthFundValue(expectedHealthFundValue) {
  try {

    verificationUtils.verifyText(patientJacketPg.getHealthFundValues(), "Name", "*TextBlock," + expectedHealthFundValue + "*", 6, expectedHealthFundValue);
  }
  catch (exception) {
    Log.Error("An error occurred: " + exception.message);
  }
}
module.exports.validateHealthFundValue=validateHealthFundValue;


function ValidateRandomIdentifiers(partialIdentifier_arg, expectedIdentifier)
{
  verificationUtils.verifyText(patientJacketPg.getPatientJacket(),"Name","*TextBlock*," + partialIdentifier_arg,50,expectedIdentifier);
}
module.exports.ValidateRandomIdentifiers=ValidateRandomIdentifiers;

//============================================================================================//
function verifyNextToKinOnPatientJacket(childIndexText, expectedText) {
    try {
        if (!(childIndexText in patientJacketPg.indexMappings)) {
            throw new Error("Invalid index key: " + childIndexText);
        }
        var childIndex = patientJacketPg.indexMappings[childIndexText];
        var gridNative = patientJacketPg.getNextKinPatientJacketGrid().FindChildEx("Name", `*WpfObject*WpfNative,"", ${childIndex})`, 1);
        verificationUtils.verifyText(gridNative, "Name", "*WpfObject*Run*,1)", 2, expectedText);
 
    } catch (error) {
        Log.Error("An error occurred while executing verifyNextToKinOnPatientJacket: " + error.message);
    }
}
 
module.exports.verifyNextToKinOnPatientJacket=verifyNextToKinOnPatientJacket;

function validateConatinsTextOnPatientJacketByTextName(searchKeyword, expectedValue) {    
    try {
        var searchPattern = "*Run*," + searchKeyword + "*";
        verificationUtils.verifyTextConatins(patientJacketPg.getPatientJacket(), "Name", searchPattern,50, expectedValue);
    } catch (exception) {
        Log.Error("An error occurred: " + exception.message);
    }
}
module.exports.validateConatinsTextOnPatientJacketByTextName=validateConatinsTextOnPatientJacketByTextName;

function clickOnDemographicsButtonOnPJ() {
    try {
        patientJacketPg.getDemographicsOnPJ().Click();
        Log.Message("Sucessfully click on Demographics button on patient jacket");
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.clickOnDemographicsButtonOnPJ = clickOnDemographicsButtonOnPJ;

function getKarishmaNumberFromPJ(){
  var karsimaNo= patientJacketPg.getKarismaNoOnPJ();
  var textBox = karsimaNo.findChildEx("Name", "*WpfObject*TextBlock*", 1).Text;
  return textBox;
}
module.exports.getKarishmaNumberFromPJ=getKarishmaNumberFromPJ;


//------------------------------------------------------------------------------------------
function validateCount(type, initialCount) {
    try {
        var expectedCount,updatedCount;
        
        switch (type) {
            case "RemoveAddress":
                expectedCount = addPatientPgLocators.getAddressChildCount().ChildCount;
                updatedCount = initialCount - 1;
                break;

            case "IdentifierOrHealthFund":
                expectedCount = patientJacketPg.getIdentifierChildCount().ChildCount;
                updatedCount = initialCount - 2;
                break;

            case "Contact":
                expectedCount = patientJacketPg.getContactChildCount().ChildCount;
                updatedCount = initialCount - 3;
                break;

            case "KIN":
                expectedCount = patientJacketPg.getNextKinPatientJacketGrid().ChildCount;
                updatedCount = initialCount - 8;
                break;

            case "AllergyOrCondition":
                expectedCount = addPatientPgLocators.getAllergyOrConditionData().ChildCount;
                updatedCount = initialCount - 1;
                break;

            default:
                Log.Error("error", "Invalid type provided: " + type);
        }
        if (expectedCount == updatedCount) {
            Log.Message(type +": Record Sucessfully removed from the Patient jacket");
        } else {
            Log.Error(type +": Failed to removed record from the Patient jacket");
        }
    } catch (e) {
        Log.Message("error", "Error occurred while validating Record for remove patient " + type + ": " + e.message);
    }
}
module.exports.validateCount = validateCount;

function clickOnImageByName(imageName) {
    try {
        if (!patientJacketPg.imageNameMappingOnPJ.hasOwnProperty(imageName)) {
            throw new Error("Invalid key provided: " + imageName);
        }
        var imageIndex = patientJacketPg.imageNameMappingOnPJ[imageName];
        var imageNameByIndex = patientJacketPg.getMenuListOnPJ().FindChildEx("Name", "*WpfObject*WpfNative*," + imageIndex + ")", 1);
        var image = imageNameByIndex.FindChildEx("Name", "*WpfObject*WpfGraphic*,1)", 2);
        image.WaitProperty("Enable", true, globalConstants.shortTimeout);
        image.Click();
        Log.Message("Sucessfully click on Image"+imageName);
    } catch (error) {
        Log.Error("Error in imagesClick function: " + error.message);
    }
}
module.exports.clickOnImageByName=clickOnImageByName;

function verifyPoPName(expectedPopUpTitle) {
    verificationUtils.verifyText(globalConstants.parentHandle, "Name", "*WpfObject*Run*" + expectedPopUpTitle + "*", 50, expectedPopUpTitle)
}
module.exports.verifyPoPName=verifyPoPName;

function verifyNoteTextOnPatientVersionHistory(expectedGeneralNoteText) {
    try {
        patientJacketPg.getInternationalDocOnPatientHistory().Click();
        Sys.Keys(globalConstants.SELECT_ALL);
        Sys.Keys(globalConstants.COPY);
        var updatedGeneralNotesTextOnPatientVersionHistory = Sys.Clipboard.trim();
        if (updatedGeneralNotesTextOnPatientVersionHistory === expectedGeneralNoteText.trim()) {
            Log.Message("Verification Passed: Actual text \"" + updatedGeneralNotesTextOnPatientVersionHistory + "\" equals expected text \"" + expectedGeneralNoteText + "\".");
        } else {
            Log.Error("Verification Failed: Actual text \"" + updatedGeneralNotesTextOnPatientVersionHistory + "\" does not equal expected text \"" + expectedGeneralNoteText + "\".");
            throw new Error("Verification Failed: Actual text does not match expected text.");
        }
    } catch (e) {
        Log.Error("Error occurred: " + e.message);
        throw e;
    }
}

module.exports.verifyNoteTextOnPatientVersionHistory=verifyNoteTextOnPatientVersionHistory;


function selectToolBarOnPatientHistory(toolBarName) {
    try {
        if (!patientJacketPg.toolBarNameMapping.hasOwnProperty(toolBarName)) {
            throw new Error("Invalid key provided: " + toolBarName);
        }
        var toolBarNativeIndex = patientJacketPg.toolBarNameMapping[toolBarName];
        var toolBarNative = patientJacketPg.getPatientVersionHistToolBar().FindChildEx("Name", "*WpfObject*WpfNative*," + toolBarNativeIndex + ")", 1);
        var toolBarMenu = toolBarNative.FindChildEx("Name", "*WpfObject*WpfGraphic*,1)", 4);
        toolBarMenu.WaitProperty("Enable", true, globalConstants.shortTimeout);
        toolBarMenu.Click();
        Log.Message("Sucessfully click on toolbar menu: " + toolBarName);
    } catch (error) {
        Log.Error("Error in selectToolBarOnPatientHistory function: " + error.message);
    }
}
module.exports.selectToolBarOnPatientHistory=selectToolBarOnPatientHistory;

function clickOnButton(buttonName){
actionUtils.clickOnButtonByName("Textblock",buttonName,50);
}
module.exports.clickOnButton=clickOnButton;

function clickOnPatientRevisionListItem(name) {
    try {
        var index = patientJacketPg.revisionListToolBarMapping[name];
        if (index === undefined) {
            Log.Error("Invalid name: " + name);
            return;
        }
        var revisionList = patientJacketPg.getRevisionListToolBar().FindChildEx("Name", "*WpfObject*WpfNative*," + index, 1);
        var revisionListName = revisionList.FindChild("Name", "*TextBlock*", 10);
        revisionListName.Click();
        Log.Message("Successfully clicked on revision list item: " + name);
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.clickOnPatientRevisionListItem=clickOnPatientRevisionListItem;

function validateContactNumber(expectedContactNumber) {
    try {
        var actualValue = actionUtils.getObjectByType("Run", expectedContactNumber, 70).Text;
        var contactsection = String(actualValue);
        var contactNumber = contactsection.replace(/\s/g, '');
        var expectedValue = expectedContactNumber;
        if (contactNumber.includes(expectedValue)) {
            Log.Message("validation passed : Contact Number is matching ");
        } else {
            Log.Error("Contact number not matching  \"" + contactNumber + "\" with expected text \"" + expectedContactNumber + "\".");
        }
    }
    catch (error) {
        Log.Error("An error occurred: " + error.message);
        zephyrFunctions.logStep("VFail","An error occurred: "+error.message);
    }
}

module.exports.validateContactNumber=validateContactNumber;