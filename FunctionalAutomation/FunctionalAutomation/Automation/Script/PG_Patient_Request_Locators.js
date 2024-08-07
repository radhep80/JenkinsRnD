﻿var globalConstants= require("GlobalConstants");

const serviceRequestButtonNameMapping = {
    "Cancel": 1,
    "Ok": 2
};
module.exports.serviceRequestButtonNameMapping=serviceRequestButtonNameMapping;

function getServiceRequestPopUp(){
  return globalConstants.parentHandle.VCLObject("TKarismaConsoleProperty_RequestRecord").VCLObject("pnlClient").Window("THakPageControl", "", 1);
}
module.exports.getServiceRequestPopUp=getServiceRequestPopUp;

//parent of request pop
function getRequestsParent(){
  return globalConstants.parentHandle.VCLObject("TKarismaConsoleProperty_RequestRecord").VCLObject("pnlClient").Window("THakPageControl", "", 1).Window("THakTabsheet", "Details", 1);
}

function getReceivedEvent(){
  return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 2).Window("THakGroupBox", "Date/Time of Events", 4).Window("THakPanel", "Recei&ved", 9).VCLObject("TCMSDateTimePicker").Window("THakCodeEdit", "", 1); 
}
module.exports.getReceivedEvent=getReceivedEvent;

function getAccountService(){
  return getRequestsParent().Window("THakGroupBox", "Request Details", 1).Window("THakPanel", "S&ervices", 1).VCLObject("TRequestServiceSelector").Window("THakCodeEdit", "", 1); 
}
module.exports.getAccountService=getAccountService;

function getOkOrCancelButtonOnRequestDeatilsPopUp(indexVal){
  return globalConstants.parentHandle.VCLObject("TKarismaConsoleProperty_RequestRecord").VCLObject("pnlBottom").Window("THakPanel", "", 2).Window("THakPanel", "", indexVal);
}
module.exports.getOkOrCancelButtonOnRequestDeatilsPopUp=getOkOrCancelButtonOnRequestDeatilsPopUp;

function getReceiveRequestDetailsPop(){
  return globalConstants.parentHandle.VCLObject("TKarismaConsoleProperty_RequestRecord").Window("THakPanel", "", 3);
}
module.exports.getReceiveRequestDetailsPop=getReceiveRequestDetailsPop;

function getRequestedOnRegisterRequest(){
  return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 2).Window("THakGroupBox", "Date/Time of Events", 4).Window("THakPanel", "Re&quested", 10).VCLObject("TCMSDateTimePicker").Window("THakCodeEdit", "", 1);
}
module.exports.getRequestedOnRegisterRequest=getRequestedOnRegisterRequest;

function getRequestingPractitioner(){
  return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 1).Window("THakGroupBox", "Practitioners and Units", 1).Window("THakPanel", "", 3).Window("THakPanel", "Requesting &Practitioner", 6).VCLObject("TPractitionerAssignmentPicker").Window("THakCodeEdit", "", 1);
}
module.exports.getRequestingPractitioner=getRequestingPractitioner;

function getResponsiblePractitioner(){
return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 1).Window("THakGroupBox", "Practitioners and Units", 1).Window("THakPanel", "", 3).Window("THakPanel", "Responsible Practitioner", 5).VCLObject("TPractitionerAssignmentPicker").Window("THakCodeEdit", "", 1)
}
module.exports.getResponsiblePractitioner=getResponsiblePractitioner;

function getAccountType(){
  return getRequestsParent().Window("THakPanel", "", 1).Window("THakPanel", "", 4).Window("THakGroupBox", "Account", 2).Window("THakPanel", "&Account Type", 1).VCLObject("TAccountDefinitionPicker").Window("THakCodeEdit", "", 1);
}
module.exports.getAccountType=getAccountType;

 function getEnterNotesTextObj(tabName){
   return globalConstants.parentHandle.VCLObject("TKarismaConsoleProperty_RequestRecord").VCLObject("pnlClient").Window("THakPageControl", "", 1).Window("THakTabsheet", tabName + " Notes", 1).VCLObject("TCMSWordProcessorFrame").VCLObject("pnlClient").Window("THakAdvancedPanel", "", 1).Window("THakAdvancedPanel", "", 1).Window("TWPSpeechMagic", "", 1);
 }
module.exports.getEnterNotesTextObj=getEnterNotesTextObj;

function getCondition(){
  return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 2).Window("THakGroupBox", "Special Conditions", 2).Window("THakPanel", "Con&ditions", 7).VCLObject("TRequestConditionDefinitionSelector").Window("THakCodeEdit", "", 1);
}
module.exports.getCondition=getCondition;

function getManageRecipients(){
  return getRequestsParent().Window("THakGroupBox", "Request Details", 1).Window("THakPanel", "", 2).Window("THakButton", "Manage Recipients", 1)
}
module.exports.getManageRecipients=getManageRecipients

const deliveryNameToMap = {
    "DeliveryMethod": 2,
    "Printer": 6,
    "PrinterTray" :8

}
module.exports.deliveryNameToMap=deliveryNameToMap;

function getdeliveryDetails(deliveryDetailsMenuName) {
    const number = deliveryNameToMap[deliveryDetailsMenuName];
    return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "").WPFObject("WpfWindow", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", +number).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Button", "", 1);
}
module.exports.getdeliveryDetails=getdeliveryDetails;

function getDocumentDesignSearch(){
  return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "", 1).WPFObject("WpfWindow", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 28).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Button", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfGraphic", "", 1).WPFObject("Image", "", 1);
}
module.exports.getDocumentDesignSearch=getDocumentDesignSearch;

function usePredefineMailCheckbox(){
return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "", 1).WPFObject("WpfWindow", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 20).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("CheckBox", "", 1)
}
module.exports.usePredefineMailCheckbox=usePredefineMailCheckbox;

function emailTextBox(){
  return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "").WPFObject("WpfWindow", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 22).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("TextBox", "", 1);
}
module.exports.emailTextBox=emailTextBox;

function getOkButtonOnNewRequestRecipient(){
return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "", 1).WPFObject("WpfWindow", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("Button", "", 1);
}
module.exports.getOkButtonOnNewRequestRecipient=getOkButtonOnNewRequestRecipient;

function expectedRecipientValue(searchByLastNameAndFirstName,deliveryDefultMethodval,deliveryEmailMethodval){
  return "+" + searchByLastNameAndFirstName + " [" + deliveryDefultMethodval + "], +LCTest [" + deliveryEmailMethodval + "]";
}
module.exports.expectedRecipientValue=expectedRecipientValue;

function getManageRecipientValue(searchByLastNameAndFirstName,deliveryDefultMethodval,deliveryEmailMethodval){
return getRequestsParent().Window("THakGroupBox", "Request Details", 1).Window("THakPanel", "", 2).Window("THakEdit", +expectedRecipientValue(searchByLastNameAndFirstName,deliveryDefultMethodval,deliveryEmailMethodval), 1);
}
module.exports.getManageRecipientValue=getManageRecipientValue;


function getOverrideContextCheckBox(){
return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 4).Window("THakGroupBox", "Locations", 1).Window("THakPanel", "", 5).Window("THakCheckBox", "", 1);
}
module.exports.getOverrideContextCheckBox=getOverrideContextCheckBox;

function getOverrideContextComboBox(){
return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 4).Window("THakGroupBox", "Locations", 1).Window("THakPanel", "", 5).Window("THakImageComboBox", "", 1);
}
module.exports.getOverrideContextComboBox=getOverrideContextComboBox;

function getHospital(){
  return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 4).Window("THakGroupBox", "Locations", 1).Window("THakPanel", "&Hospital", 7).VCLObject("THospitalPicker").Window("THakCodeEdit", "", 1);
}
module.exports.getHospital=getHospital;

function getWard(){
  return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 4).Window("THakGroupBox", "Locations", 1).Window("THakPanel", "&Ward / Location", 6).VCLObject("TWardPicker").Window("THakCodeEdit", "", 1);
}module.exports.getWard=getWard;

function getWorksite(){
  return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 2).Window("THakGroupBox", "Workflow Information", 3).Window("THakPanel", "Wor&k Site", 2).VCLObject("TWorkSitePicker").Window("THakMenuButton", "...", 1);
}
module.exports.getWorksite=getWorksite;

function getFinancialSite(){
 return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 2).Window("THakGroupBox", "Workflow Information", 3).Window("THakPanel", "&Financial Site", 1).VCLObject("TFinancialSitePicker").Window("THakMenuButton", "...", 1);
}
module.exports.getFinancialSite=getFinancialSite;

function getRequestingUnit(){
  return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 1).Window("THakGroupBox", "Practitioners and Units", 1).Window("THakPanel", "", 3).Window("THakPanel", "Requesting &Unit", 4).VCLObject("TUnitPicker").Window("THakMenuButton", "...", 1);
}
module.exports.getRequestingUnit=getRequestingUnit;

function getReportCompletionPriority(){
  return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 2).Window("THakGroupBox", "Special Conditions", 2).Window("THakPanel", "Report Completion Priority", 4).VCLObject("TRequestPriorityTypePicker").Window("THakMenuButton", "...", 1);
}
module.exports.getReportCompletionPriority=getReportCompletionPriority;

function getServiceCompletionPriority(){
  return getRequestsParent().Window("THakPanel", "", 2).Window("THakPanel", "", 2).Window("THakGroupBox", "Special Conditions", 2).Window("THakPanel", "Service Completion Priority", 5).VCLObject("TRequestPriorityTypePicker").Window("THakMenuButton", "...", 1);
}
module.exports.getServiceCompletionPriority=getServiceCompletionPriority;

function getErrorMessageForMedicareNumber(){
  return globalConstants.parentHandle.VCLObject("TConsoleIssueReportDialog").VCLObject("pnlClient").VCLObject("TConsoleIssueReportFrame").VCLObject("pnlClient").Window("THakAdvancedPanel", "", 1).VCLObject("View");
}
module.exports.getErrorMessageForMedicareNumber=getErrorMessageForMedicareNumber;

function getRequestIssueReport(){
return globalConstants.parentHandle.VCLObject("TConsoleIssueReportDialog").Window("THakPanel", "", 3);
}
module.exports.getRequestIssueReport=getRequestIssueReport;

function getCloseButton(){
  return globalConstants.parentHandle.VCLObject("TConsoleIssueReportDialog").VCLObject("pnlBottom").Window("THakPanel", "", 2).Window("THakPanel", "", 1);
}
module.exports.getCloseButton=getCloseButton;