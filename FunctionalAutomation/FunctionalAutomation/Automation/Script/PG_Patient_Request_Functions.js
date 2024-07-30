﻿var verificationUtils = require("VerificationUtils");
var actionUtils = require("ActionUtils");
var globalConstants = require("GlobalConstants");
var patientRequestPg = require("PG_Patient_Request_Locators");


function selectTheTabOnServiceRequestPopUp(tabName)
{
    try {
        patientRequestPg.getServiceRequestPopUp().WaitProperty("Visible", true, globalConstants.shortTimeout);
        var ocrResult = OCR.Recognize(patientRequestPg.getServiceRequestPopUp());
        var textBlock = ocrResult.BlockByText(tabName);
        if (textBlock !== null) {
            textBlock.Click();
            Log.Message("Successfully clicked on the tab: " + tabName);
        } else {
            Log.Error("Tab with name '" + tabName + "' not found.");
        }
    } catch (error) {
        Log.Error("An error occurred while attempting to click on the tab: " + error.message);
    }
}
module.exports.selectTheTabOnServiceRequestPopUp=selectTheTabOnServiceRequestPopUp;

function clickOnServiceRequestMenu(serviceName) {
    actionUtils.clickOnButtonByName("Textblock", serviceName, 50);
    Delay(globalConstants.shortTimeout);
}
module.exports.clickOnServiceRequestMenu = clickOnServiceRequestMenu;

function clickOnOKButton() {
    actionUtils.clickOnButtonByName("Textblock", "OK", 50);
}
module.exports.clickOnOKButton = clickOnOKButton;

function fillMandatoryFieldsOnServiceRequestPopUP(serviceNameToAdd) {
    try {
        patientRequestPg.getReceivedEvent().Click();
        Sys.Keys("[F4]");
        patientRequestPg.getAccountService().Click();
        Sys.Keys("^s");
        Sys.Keys(serviceNameToAdd);
        Sys.Keys("[F4]");
        actionUtils.pressKeyMultipleTimes("[Tab]",2);
        Delay(globalConstants.shortTimeout);
        actionUtils.clickOnButtonByName("Textblock", "OK", 50);
        Log.Message("Sucessfully fill the mandetory fields")
    } catch (error) {
        Log.Error("An error occurred while filling mandatory fields on the Service Request popup: " + error.message);
    }
}
module.exports.fillMandatoryFieldsOnServiceRequestPopUP = fillMandatoryFieldsOnServiceRequestPopUP;

function setRequestedDetails() {
    try {
        patientRequestPg.getRequestedOnRegisterRequest().Click();
        actionUtils.pressKeyMultipleTimes("[F4]",1);
        Log.Message("Requested details set successfully.");
    } catch (e) {
        Log.Error("An error occurred while setting requested details: " + e.message);
        throw e;
    }
}

function setThePractitionerDetails() {
    try {
        patientRequestPg.getRequestingPractitioner().Click();
        actionUtils.pressKeyMultipleTimes("[F4]",1);
        actionUtils.pressKeyMultipleTimes("[Tab]",1);
        clickOnOKButton();
        Log.Message("Requesting practitioner details set successfully.");
    } catch (e) {
        Log.Error("An error occurred while setting requesting practitioner details: " + e.message);
        throw e;
    }

    try {
        Delay(globalConstants.shortTimeout);
    } catch (e) {
        Log.Error("An error occurred during the delay: " + e.message);
        throw e;
    }

    try {
        patientRequestPg.getResponsiblePractitioner().Click();
        actionUtils.pressKeyMultipleTimes("[F4]",1);
        actionUtils.pressKeyMultipleTimes("[Tab]",1);
        clickOnOKButton();
        Log.Message("Responsible practitioner details set successfully.");
    } catch (e) {
        Log.Error("An error occurred while setting responsible practitioner details: " + e.message);
        throw e;
    }
}

function setAccountServiceDetails(setServiceName) {
    patientRequestPg.getAccountService().Click();
    Sys.Keys(setServiceName);
}
function setAccountType(accountType) {
     patientRequestPg.getAccountType().Click();
     actionUtils.pressKeyMultipleTimes(accountType,1)
    //Sys.Keys(accountType);
}

function fillMandetoryFieldsOnRegisterRequestDetails(serviceName, accountType) {
    setRequestedDetails();
    setThePractitionerDetails();
    setAccountServiceDetails(serviceName);
    setAccountType(accountType);
}
module.exports.fillMandetoryFieldsOnRegisterRequestDetails = fillMandetoryFieldsOnRegisterRequestDetails;

function clickOnOkOrCancelButtonOnServiceRequest(buttonName) {
    try {
        var indexVal = patientRequestPg.serviceRequestButtonNameMapping[buttonName];
        if (indexVal === undefined) {
            throw new Error("Invalid button key: " + buttonName);
        }
        button = patientRequestPg.getOkOrCancelButtonOnRequestDeatilsPopUp(indexVal);
        button.WaitProperty("Enable", true, globalConstants.shortTimeout);
        button.Click();
        Log.Message("Successfully clicked on the button: " + buttonName);
    } catch (error) {
        Log.Error("Error occurred while trying to click on the button: " + buttonName);
    }
}
module.exports.clickOnOkOrCancelButtonOnServiceRequest = clickOnOkOrCancelButtonOnServiceRequest;

function validateReciveRequestText(expectedText) {
    verificationUtils.verifyText(globalConstants.parentHandle, "Name", "*TextBlock," + expectedText + "*", 50, expectedText);
}
module.exports.validateReciveRequestText = validateReciveRequestText;
/*
function verifyRequestDetailsPop(popUpTitle) {
    try {
        var ocrResult = OCR.Recognize(patientRequestPg.getReceiveRequestDetailsPop());
        ocrResult.CheckText(popUpTitle);
    } catch (error) {
        Log.Error("An error occurred while receiving request details: " + error.message);
    }
}
*/
function verifyRequestDetailsPop(popUpTitle) {
    try {
        var receiveRequestDetailsPop = patientRequestPg.getReceiveRequestDetailsPop();
        if (receiveRequestDetailsPop.WaitProperty("Visible", true, 20000)) {
            var ocrResult = OCR.Recognize(receiveRequestDetailsPop);
            ocrResult.CheckText(popUpTitle);
        } else {
            Log.Error("The pop-up did not become visible within the specified time.");
        }
    } catch (error) {
        Log.Error("An error occurred while receiving request details: " + error.message);
    }
}
module.exports.verifyRequestDetailsPop = verifyRequestDetailsPop; 

function enterTextInNotesTemplate(tabName, text) {
  try {
    var textTemplate = patientRequestPg.getEnterNotesTextObj(tabName);
    textTemplate.Click();
    textTemplate.Keys(text);
    Log.Message("Text '" + text + "' entered successfully in tab '" + tabName + "'.");
  } catch (error) {
    Log.Error("Error occurred while entering text in notes:");
  }
}
module.exports.enterTextInNotesTemplate=enterTextInNotesTemplate;

function setConditionValue(){
  patientRequestPg.getCondition().Click();
  actionUtils.pressKeyMultipleTimes("B",1);
  actionUtils.pressKeyMultipleTimes(" ",1);
  actionUtils.pressKeyMultipleTimes("C",1);
  actionUtils.pressKeyMultipleTimes(" ",1);
  actionUtils.pressKeyMultipleTimes("D",1);
}
module.exports.setConditionValue=setConditionValue;

function verifyRequestRecipientPopUpTitle(expectedPopUpTitle) { 
    let titlePattern = "*Run*," + expectedPopUpTitle + "*";
    verificationUtils.verifyText(globalConstants.parentHandle, "Name", titlePattern, 50, expectedPopUpTitle);
}
module.exports.verifyRequestRecipientPopUpTitle=verifyRequestRecipientPopUpTitle;

function clickOnManageRecipients() {
  try {
    patientRequestPg.getManageRecipients().Click();
    Log.Message("Sucessfully click on Manage Recipients")
  } catch (e) {
    Log.Error("An error occurred while attempting to click on 'Manage Recipients': " + e.message);
  }
}
module.exports.clickOnManageRecipients=clickOnManageRecipients;

function selectItemOnRequestRecipientByName(menuName) {
  try {
     var menuNameObj = actionUtils.getObjectByType("Run", menuName, 50);
     var parentOfMenuName = menuNameObj.Parent;
     parentOfMenuName.Click();
     Log.Message("Sucessfully click on Recipient " +menuName)
  } catch (e) {
     Log.Error("An error occurred while attempting to select the item '" + menuName + "': " + e.message);
  }
}
module.exports.selectItemOnRequestRecipientByName=selectItemOnRequestRecipientByName;

function setDeliveryMethodValue(deliveryDetailsMenuName, deliveryValue) {
  try {
    patientRequestPg.getdeliveryDetails(deliveryDetailsMenuName).Click();
    Delay(globalConstants.shortTimeout);
    Sys.Keys(deliveryValue);
    actionUtils.pressKeyMultipleTimes("[Enter]",1);
  } catch (e) {
    Log.Error("An error occurred while attempting to set the delivery method value '" + deliveryValue + "' for menu '" + deliveryDetailsMenuName + "': " + e.message);
  }
}
module.exports.setDeliveryMethodValue=setDeliveryMethodValue;

function setDocumentDesignText(documentDesignText) {
  try {
    patientRequestPg.getDocumentDesignSearch().Click();
    Delay(globalConstants.shortTimeout);
    Sys.Keys("^s");
    Sys.Keys(documentDesignText);
    Delay(globalConstants.shortTimeout);
    actionUtils.pressKeyMultipleTimes("[Tab]",1);
    actionUtils.pressKeyMultipleTimes("[Enter]",1);    
    Log.Message("Sucessfully selected document text" +documentDesignText);
    Delay(globalConstants.shortTimeout);
  } catch (e) {
    Log.Error("An error occurred while setting the document design text '" + documentDesignText + "': " + e.message);
  }
}
module.exports.setDocumentDesignText=setDocumentDesignText;

function setEmailAddress(emailID) {
  try {
    patientRequestPg.usePredefineMailCheckbox().Click();
    patientRequestPg.emailTextBox().Click();
    Delay(globalConstants.shortTimeout);
    patientRequestPg.emailTextBox().set_Text(emailID);
    Log.Message("Sucessfully set emailID in text box :"+emailID)
    Delay(globalConstants.shortTimeout);
  } catch (e) {
    Log.Error("An error occurred while setting the email address '" + emailID + "': " + e.message);
  }
}

module.exports.setEmailAddress=setEmailAddress;

function clickOkButtonOnNewRequestRecipient(){
patientRequestPg.getOkButtonOnNewRequestRecipient().Click();
}
module.exports.clickOkButtonOnNewRequestRecipient=clickOkButtonOnNewRequestRecipient;

function verifyManageRecipientValueOnTab(searchByLastNameAndFirstName, deliveryDefultMethodval, deliveryEmailMethodval) {
  try {
    var actualText = patientRequestPg.getManageRecipientValue(searchByLastNameAndFirstName, deliveryDefultMethodval, deliveryEmailMethodval).Text;
    var expectedText = patientRequestPg.expectedRecipientValue(searchByLastNameAndFirstName, deliveryDefultMethodval, deliveryEmailMethodval);

    if (actualText === expectedText) {
      Log.Message("Validation: Texts match as expected.");
    } else {
      Log.Error("Validation Failed: Actual text does not match expected text.");
     }
  } catch (e) {
    Log.Error("An error occurred during verification: " + e.message);
  }
}
module.exports.verifyManageRecipientValueOnTab=verifyManageRecipientValueOnTab;

function checkedContextCheckBox() {
  try {
    patientRequestPg.getOverrideContextCheckBox().Click();
    Log.Message("Override context checkbox clicked successfully.");
  } catch (e) {
     Log.Error("An error occurred while clicking the override context checkbox: " + e.message);
  }
}
module.exports.checkedContextCheckBox=checkedContextCheckBox;


function selectValueFromComboBox(selection) {
  try {
    patientRequestPg.getOverrideContextComboBox().Click();
    if (selection === "Inpatient") {
        patientRequestPg.getOverrideContextComboBox().Keys("[Up]");
        patientRequestPg.getOverrideContextComboBox().Keys("[Enter]");
      Log.Message("Value 'Inpatient' selected successfully.");
    } else if (selection === "Emergency") {
        patientRequestPg.getOverrideContextComboBox().Keys("[Down]");
        patientRequestPg.getOverrideContextComboBox().Keys("[Enter]");
      Log.Message("Value 'Emergency' selected successfully.");
    } else {
      Log.Error("Invalid selection value provided. Please provide 'Inpatient' or 'Emergency'.");
    }
  } catch (e) {
    Log.Error("An error occurred while selecting the value: " + e.message);
  }
}
module.exports.selectValueFromComboBox=selectValueFromComboBox;

function selectHospital(hospitalName) {
    patientRequestPg.getHospital().Click();
    actionUtils.pressKeyMultipleTimes("[F4]",1);
    verifyRequestRecipientPopUpTitle(globalConstants.hospitalPopUpTitile);
    actionUtils.pressKeyMultipleTimes("[Esc]",1);
    actionUtils.pressKeyMultipleTimes(hospitalName,1);
    Delay(globalConstants.shortTimeout);
    clickOnOKButton();
}
module.exports.selectHospital=selectHospital;

function selectWard(wardName) {
    patientRequestPg.getWard().Click();
    actionUtils.pressKeyMultipleTimes("[F4]",1);
    verifyRequestRecipientPopUpTitle(globalConstants.wardPopUpTitile);
    actionUtils.pressKeyMultipleTimes(wardName,1);
    Delay(globalConstants.shortTimeout);
    clickOnOKButton();
}
module.exports.selectWard=selectWard;

function seletWorkSite(worksiteCode){
  patientRequestPg.getWorksite().Click();
  verifyRequestRecipientPopUpTitle(globalConstants.selectWorksitePopUpTitle);
  actionUtils.pressKeyMultipleTimes("[Del]",1);
  Delay(globalConstants.shortTimeout);
  actionUtils.pressKeyMultipleTimes(worksiteCode,1);
  actionUtils.pressKeyMultipleTimes("[Enter]",1);
  clickOnOKButton();
}
module.exports.seletWorkSite=seletWorkSite;

function seletFinancialSite(financialSiteCode){
  patientRequestPg.getFinancialSite().Click();
  verifyRequestRecipientPopUpTitle(globalConstants.selectFinancialSitePopUpTitle);
  actionUtils.pressKeyMultipleTimes("[Del]",1);
  Delay(globalConstants.shortTimeout);
  actionUtils.pressKeyMultipleTimes(financialSiteCode,1);
  actionUtils.pressKeyMultipleTimes("[Enter]",1);
  clickOnOKButton();
}
module.exports.seletFinancialSite=seletFinancialSite;

function clickOnRequestingUnit() {
    try {
        var requestingUnit = patientRequestPg.getRequestingUnit(); 
        requestingUnit.Click(); 
        Log.Message("Clicked on requesting unit successfully.");
    } catch (e) {
        Log.Error("Failed to click on requesting unit: " + e.message);
    }
}
module.exports.clickOnRequestingUnit=clickOnRequestingUnit;

function selectRequestingUnit(requestingUnitValue){
  verifyRequestRecipientPopUpTitle(globalConstants.selectUnitPopupTitle);;
  actionUtils.pressKeyMultipleTimes("[Del]",1);
  Delay(globalConstants.shortTimeout);
  actionUtils.pressKeyMultipleTimes(requestingUnitValue,1);
  actionUtils.pressKeyMultipleTimes("[Enter]",1);
  clickOnOKButton();
}
module.exports.selectRequestingUnit=selectRequestingUnit;

function clickOnReportCompletionPriority(){
   try {
        var reportCompletionPriority = patientRequestPg.getReportCompletionPriority(); 
        reportCompletionPriority.Click(); 
        Log.Message("Clicked on Report Completion Priority successfully.");
    } catch (e) {
        Log.Error("Failed to click on Report Completion Priority: " + e.message);
    }
}
module.exports.clickOnReportCompletionPriority=clickOnReportCompletionPriority;

function selectRequestPriorityType(requestingPriority){
  verifyRequestRecipientPopUpTitle(globalConstants.selectRequestPriorityTypePopupTitle);;
  Delay(globalConstants.shortTimeout);
  actionUtils.pressKeyMultipleTimes(requestingPriority,1);
  actionUtils.pressKeyMultipleTimes("[Enter]",1);
  clickOnOKButton();
}
module.exports.selectRequestPriorityType=selectRequestPriorityType;

function clickOnServiceCompletionPriority(){
   try {
        var serviceCompletionPriority = patientRequestPg.getServiceCompletionPriority(); 
        serviceCompletionPriority.Click(); 
        Log.Message("Clicked on Service Completion Priority successfully.");
    } catch (e) {
        Log.Error("Failed to click on Service Completion Priority: " + e.message);
    }
}
module.exports.clickOnServiceCompletionPriority=clickOnServiceCompletionPriority;

function selectServiceRequestPriorityType(serviceRequestPriority){
  verifyRequestRecipientPopUpTitle(globalConstants.selectRequestPriorityTypePopupTitle);
  Delay(globalConstants.shortTimeout);
  actionUtils.pressKeyMultipleTimes(serviceRequestPriority,1);
  actionUtils.pressKeyMultipleTimes("[Enter]",1);
  clickOnOKButton();
}
module.exports.selectServiceRequestPriorityType=selectServiceRequestPriorityType;

function setCondition(condtionName){
  patientRequestPg.getCondition().Click();
  actionUtils.pressKeyMultipleTimes("[F4]",1);
  verifyRequestRecipientPopUpTitle(globalConstants.checkRequestConditionTypePopupTitle);
  Delay(globalConstants.shortTimeout);
  actionUtils.pressKeyMultipleTimes(condtionName,1);
  Delay(globalConstants.shortTimeout);
  actionUtils.pressKeyMultipleTimes("[Tab]",2);
  clickOnOKButton();
}
module.exports.setCondition=setCondition;

function validateRequestIssueReportPOPupTiitle(){
actionUtils.validateTextUsingOCRCheckText(patientRequestPg.getRequestIssueReport(),globalConstants.requestIssueReportPopUpTitle);  
}
module.exports.validateRequestIssueReportPOPupTiitle=validateRequestIssueReportPOPupTiitle;

function validateErrorMessageOnRequestIssueReportPOPup(){
  actionUtils.validateTextUsingOCRCheckText(patientRequestPg.getErrorMessageForMedicareNumber(),globalConstants.errorForMedicareNumber);
}
module.exports.validateErrorMessageOnRequestIssueReportPOPup=validateErrorMessageOnRequestIssueReportPOPup;

function clickOnCloseButton() {
    try {
        var closeButton = patientRequestPg.getCloseButton();
        if (closeButton.Exists && closeButton.Enabled) {
            closeButton.Click();
            Log.Message("Successfully clicked the close button.");
        } else {
            Log.Error("Close button does not exist or is not enabled.");
        }
    } catch (e) {
        Log.Error("An error occurred while clicking the close button: " + e.message);
    }
}
module.exports.clickOnCloseButton=clickOnCloseButton;