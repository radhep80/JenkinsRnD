﻿﻿var globalConstants = require("GlobalConstants");

var addPatientWindowButtonNamesToMap = {
        "Cancel": 1,
        "Unprotect": 4,
        "Save": 2
    };
    
module.exports.addPatientWindowButtonNamesToMap=addPatientWindowButtonNamesToMap;

const patientNameToIndexMap = {
        "firstName": 2,
        "lastName": 1,
    };
 module.exports.patientNameToIndexMap=patientNameToIndexMap;

function getAddPatientWindowButton(buttonName)
{
  const buttonNumber=addPatientWindowButtonNamesToMap[buttonName];
  var windowButton_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1); 
  return windowButton_Parent;
}


module.exports.getAddPatientWindowButton=getAddPatientWindowButton;

 function getDemographicValue()
{
   var demographic_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1);
   return demographic_Parent;
}
module.exports.getDemographicValue=getDemographicValue;

function getDobParent()
{
  var dob_Parent=getDemographicValue().FindChildEx("Name", "*WpfObject*WpfNative*,1", 1);
  return dob_Parent;
}
module.exports.getDobParent=getDobParent;

function getDobValueParent()
{
  var dobValue_Parent=getDobParent().FindChildEx("Name", "*WpfObject*StackPanel*,1)", 10);
  return dobValue_Parent;
}
module.exports.getDobValueParent=getDobValueParent;

function getDayTextbox()
{
  var day_Parent =getDobValueParent().FindChildEx("Name", "*WpfObject*WpfNative*,1", 4);
  return day_Parent;
}
module.exports.getDayTextbox=getDayTextbox;

function getMonthTextbox()
{
  var month_Parent =getDobValueParent().FindChildEx("Name", "*WpfObject*WpfNative*,3", 3);
  return month_Parent;
}
module.exports.getMonthTextbox=getMonthTextbox;

function getYearTextbox()
{
  var year_Parent =getDobValueParent().FindChildEx("Name", "*WpfObject*WpfNative*,5", 5);
  return year_Parent;
}
module.exports.getYearTextbox=getYearTextbox;

function getSexAssignedatBirth()
{
  var sexAssignedatBirth_Parent=getDemographicValue().FindChildEx("Name", "*WpfObject*WpfNative*,2", 2);
  return sexAssignedatBirth_Parent;
}
module.exports.getSexAssignedatBirth=getSexAssignedatBirth;

function getDeceasedCheckBox()
{
  var deceasedCheckBox=getDemographicValue().WPFObject("WpfNative", "", 6).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Button", "", 1);
  return deceasedCheckBox;
}
module.exports.getDeceasedCheckBox=getDeceasedCheckBox; 

function getDeceasedDeath(){
  var deceasedDeathStack = PG_Add_Patient_Locators.getDemographicValue().WPFObject("WpfNative", "", 7).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1);
  return deceasedDeathStack;
}
module.exports.getDeceasedDeath=getDeceasedDeath;

function getAUIDValue()
{
 var auidValue_Parent= globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1)
 return auidValue_Parent;
}

module.exports.getAUIDValue=getAUIDValue;

function getNoteType()
{
   var noteSection_Parent = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1);
   return noteSection_Parent;
}

module.exports.getNoteType=getNoteType;

 function getGeneralNoteDocument()
{
   var generaNoteDocument_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
   return generaNoteDocument_Parent;
}
module.exports.getGeneralNoteDocument=getGeneralNoteDocument;

var contactButtonNameToMap = {
        
        "Addhomephone": 2,
        "Addemail":3
    };
 module.exports.contactButtonNameToMap=contactButtonNameToMap;

function getContactButton(contactButton)
{
   const contactButtonNumber=contactButtonNameToMap[contactButton];
   var contactButton_Parent=Sys.Process("KarismaClient").WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1);
   return contactButton_Parent;
}
 module.exports.getContactButton=getContactButton;
 
 function getEmailAddress()
{
  
   var emailAddress_Parent = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1);
   return emailAddress_Parent;
}

 module.exports.getEmailAddress=getEmailAddress;
 
 function getContactNumber()
{
    var contactNumber_Parent = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1);
    return contactNumber_Parent;
    
}

module.exports.getContactNumber=getContactNumber;


 function getPatientAddress()
 {
   var address_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1);
   return address_Parent;
 }
 
 module.exports.getPatientAddress=getPatientAddress;
 
 var allergyNumberToMap = {
        "AddAllergyFirst": 2,
        "AddAllergySecond": 3
        
    };
  module.exports.allergyNumberToMap=allergyNumberToMap;
 
 function getAllery(allergyValue)
{
   const allergyNumber=allergyNumberToMap[allergyValue];
   var allery_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1);
   return allery_Parent;
}
module.exports.getAllery=getAllery;  
   
 var thirdPanelAddNewButton= {
        "AllergyAddnewButton": 3,
        "ConditionAddnewButton": 4,
        "KinAddnewButton": 5
    }; 
 module.exports.thirdPanelAddNewButton=thirdPanelAddNewButton;
   
  function getthirdPanelAddNewButton(addNewButton)
{
   const addNewButtonValue=thirdPanelAddNewButton[addNewButton];
   var thirdPanelAddNewButton_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1);
   return thirdPanelAddNewButton_Parent;
}
  module.exports.getthirdPanelAddNewButton=getthirdPanelAddNewButton; 
  
 var conditionNumberToMap = {
        "ConditionFirst": 2,
        "ConditionSecond": 3
    };
 module.exports.conditionNumberToMap=conditionNumberToMap;
 
 function getCondition(conditionValue)
{
   const conditionNumber=conditionNumberToMap[conditionValue];
   var condition_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1);
   return condition_Parent;
}
 module.exports.getCondition=getCondition;
 
  function getHealthFundBox()
{
   var healthFundBox_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1);
   return healthFundBox_Parent;
}
 module.exports.getHealthFundBox=getHealthFundBox;
 
 function gethealthFund()
 {
   var healthFund_Parent =getHealthFundBox().FindChildEx("Name", "*WpfObject*WpfNative*,4", 4);
   return healthFund_Parent;
 }
  module.exports.gethealthFund=gethealthFund;
  
  var validateDataToMap = {
      "ValidateAllergyorConditionFirst": 2,
      "ValidateAllergyorConditionSecond": 1
   };
 module.exports.validateDataToMap=validateDataToMap;

 function getAllergyOrConditionData(dataValue)
{
   const dataBoxNumber=validateDataToMap[dataValue];
   var allergyorCondition_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Button", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfStack", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfTable", "", 1).WPFObject("Grid", "", 1);
   return allergyorCondition_Parent;
}

module.exports.getAllergyOrConditionData=getAllergyOrConditionData;
       
function getAllergyOrConditionDataValue(dataBoxNumber){
  
var firstalleryorCondition = getAllergyOrConditionData().FindChildEx("Name", "*WpfObject*WpfDock," + dataBoxNumber, 1);
return firstalleryorCondition;
}
module.exports.getAllergyOrConditionDataValue=getAllergyOrConditionDataValue;

 var validateEnteredNoteTextToMap = {
        "GeneralNoteText": 1,
        "AccountNoteText": 2,
        "MedicalAlertNoteTxt": 3,
        "RegisterdNoteTxt": 4
    };
module.exports.validateEnteredNoteTextToMap=validateEnteredNoteTextToMap;

function getEnteredNotetext(noteValue)
{
   const noteTextNumber=validateEnteredNoteTextToMap[noteValue];
  var EnteredNotetext_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1);
  return EnteredNotetext_Parent;
}
module.exports.getEnteredNotetext=getEnteredNotetext;

function getNoteSectionText(noteTextNumber)
{
  var notesSectionTextbox=getEnteredNotetext().FindChildEx("Name", "*WpfObject*WpfNative*," + noteTextNumber, 2);
   return notesSectionTextbox;
}

module.exports.getNoteSectionText=getNoteSectionText;

function getGeneralNoteTitle()
{
  var generalNoteTitle=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
  return generalNoteTitle;
}
module.exports.getGeneralNoteTitle=getGeneralNoteTitle;

function getMrnNumber()
{
  var mrnNumber_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 6).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("StackPanel", "", 1);
  return mrnNumber_Parent;
}
module.exports.getMrnNumber=getMrnNumber;

function getIdentifier(identifierName) {
  const number = identifierNameMap[identifierName];
  return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", +number).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("StackPanel", "", 1);
}
module.exports.getIdentifier=getIdentifier;

const identifierNameMap = {
    "MRN": 6,
    "MedicareNumber": 10
};


const addNewButtonContactBlockToMap = {
        "ContactAddNewButton": 1,
        "AddressAddNewButton": 3
    };
module.exports.addNewButtonContactBlockToMap=addNewButtonContactBlockToMap;

function getAddNewButtonContactBlock(buttonName)
{
   const buttonNumber = addNewButtonContactBlockToMap[buttonName];
   var secondAddnew_Parent= globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1);
   return secondAddnew_Parent;
}
module.exports.getAddNewButtonContactBlock=getAddNewButtonContactBlock;

function getSecondAddress()
{
  var secondAddress_Parent= globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1);
  return secondAddress_Parent;
}

module.exports.getSecondAddress=getSecondAddress;

 function getYesPopupMessage()
{
   var yesPopupMessage_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("TextBlock", "", 1);
   return yesPopupMessage_Parent;
}
module.exports.getYesPopupMessage=getYesPopupMessage;

 function getYesAndNoWindoeButton()
{
   var getYesAndNoWindoeButton_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1);
   return getYesAndNoWindoeButton_Parent;
}
module.exports.getYesAndNoWindoeButton=getYesAndNoWindoeButton;

 function getCloseButtonOnManagePatientWindow()
{
   var closeButton_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Button", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
   return closeButton_Parent;
}
module.exports.getCloseButtonOnManagePatientWindow=getCloseButtonOnManagePatientWindow;

 function getManagePatientTitle()
{
   var managePatient_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
   return managePatient_Parent;
}
module.exports.getManagePatientTitle=getManagePatientTitle;

 function getRandomColumn()
{
   var randomColumn_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Button", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("TextBlock", "", 1);
   return randomColumn_Parent;
}
module.exports.getRandomColumn=getRandomColumn;

 function getAddressChildCount()
{
   var addressChildCount_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1);
   return addressChildCount_Parent;
}
module.exports.getAddressChildCount=getAddressChildCount;

 function getPatientCount()
{
   var PatientCount_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfFlow", "", 1).WPFObject("WpfFlowItemsControl", "", 1).WPFObject("WpfFlowItemContainer", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
   return PatientCount_Parent;
}
module.exports.getPatientCount=getPatientCount;



//=================================================================================//
const kinNumberToMap = {
    "kin2": 2,
    "kin3": 3

}; 
module.exports.kinNumberToMap=kinNumberToMap;

function getKinStackPanel(name) {
    const number = kinNumberToMap[name];
    var stackPanel = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 5).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", +number).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1);
    return stackPanel;
}
module.exports.getKinStackPanel=getKinStackPanel;

function getSendLetterCheckBox(name){
        var kinStackPanelChild = getKinStackPanel(name).FindChildEx("Name", `*WpfObject*WpfNative,\"\", 6)`, 1);
        var sendLetterBtnNative = kinStackPanelChild.FindChildEx("Name", "*WpfObject*WpfNative*,2)", 7);
        var sendLetterButton = sendLetterBtnNative.FindChildEx("Name", "*WpfObject*Button*,1)", 4);
        return sendLetterButton;
}
module.exports.getSendLetterCheckBox=getSendLetterCheckBox;

function getShowAddressButtonOnAddPatient(){
var showAddressButton = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 5).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3);
return showAddressButton;
}
module.exports.getShowAddressButtonOnAddPatient=getShowAddressButtonOnAddPatient;

const notesNumberToMap = {
    "generalNote": 1,
    "accountNote": 2,
    "MedicalAleartNote": 3,
    "registationNote": 4,
};
module.exports.notesNumberToMap=notesNumberToMap;

function getNotesToolBar(toolBarName) {
    const toolBarNumber = notesNumberToMap[toolBarName];
    var toolBar = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", +toolBarNumber).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("ToolBarTray", "", 1).WPFObject("ToolBar", "", 1);
    return toolBar;
}
module.exports.getNotesToolBar=getNotesToolBar;

function getSaveButtonOnNotesNative(buttonName) {
    const saveButtonNumber = notesNumberToMap[buttonName];
    var saveButtonNative = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", +saveButtonNumber).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3);
    return saveButtonNative;
}
module.exports.getSaveButtonOnNotesNative=getSaveButtonOnNotesNative;

const menuNameToIndexMap = {
            "undo": 6,
            "redo": 7,
            "cut": 9,
            "copy": 10,
            "paste": 11,
            "pasteSpecial": 12,
            "insertNoteTemplate": 14,
            "find": 17,
            "findOrReplace": 18,
            "font": 21,
            "fontName": 21,
            "fontSize": 22
        };
module.exports.menuNameToIndexMap=menuNameToIndexMap;

function getInternalDocumentControl(notesName) {
    const docNotesNumber = notesNumberToMap[notesName];
    var internalDocumentControlDocPanel = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", +docNotesNumber).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
    var documentControlNative=internalDocumentControlDocPanel.FindChildEx("Name", "*WpfObject*WpfNative*,1)", 2);
    var docControlButton =documentControlNative.FindChildEx("Name", "*WpfObject*InternalDocumentControl*,1)", 2);
    return docControlButton;
}
module.exports.getInternalDocumentControl=getInternalDocumentControl;

function getButtonsOnSelectNoteTemplete(){
var buttonsOnSlectTemplate = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
return buttonsOnSlectTemplate;
}
module.exports.getButtonsOnSelectNoteTemplete=getButtonsOnSelectNoteTemplete;

function getInsertTableGrid(){
 var insertTableGrid = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1);
 return insertTableGrid;
}   
module.exports.getInsertTableGrid=getInsertTableGrid;

function getPatientFirstNameLastnameGrid() {
   var patientNameGrid = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1);
   return patientNameGrid;
}
module.exports.getPatientFirstNameLastnameGrid = getPatientFirstNameLastnameGrid;


//-----------------------------------------------------


function getcancelButton(cancelButtonBlock) {
    const number = removeButtonNamesToMap[cancelButtonBlock];
    var cancelButton_Parent = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", +number).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1);
    return cancelButton_Parent;
}
module.exports.getcancelButton=getcancelButton;

var removeButtonNamesToMap = {
         "RemoveContact": 1,
        "RemoveAddress": 3,
        "RemoveAllergy": 3,
        "RemoveCondition": 4,
         "RemoveKin": 5,
    };
    
module.exports.removeButtonNamesToMap=removeButtonNamesToMap;

function getRemoveButton(removeButtonBlock) {
    const number = removeButtonNamesToMap[removeButtonBlock];
    var removeButton_Parent = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", +number).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2)

return removeButton_Parent;
}
module.exports.getRemoveButton=getRemoveButton;

function getIdentifierRemoveButton()
{
   var identifierRemoveButton_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1);
   return identifierRemoveButton_Parent;
}
module.exports.getIdentifierRemoveButton=getIdentifierRemoveButton;

function getHealthFundRemoveButton()
{
   var healthFundRemoveButton_Parent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1);
   return healthFundRemoveButton_Parent;
}
module.exports.getHealthFundRemoveButton=getHealthFundRemoveButton;

         

         
         