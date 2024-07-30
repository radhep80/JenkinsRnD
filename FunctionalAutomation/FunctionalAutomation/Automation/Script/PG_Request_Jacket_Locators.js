﻿var globalConstants= require("GlobalConstants");

function getRegisterRequestListOnRJ(){
var registerRequestList = ["REPORT COMPLETION PRIORITY", "SERVICE COMPLETION PRIORITY", "ACCOUNT TYPE", "WORK SITE", "FINANCIAL SITE", "WARD", "REFERRER"];
return registerRequestList;
}
module.exports.getRegisterRequestListOnRJ=getRegisterRequestListOnRJ;

function getNotesListOnRJ(){
  var actualNotesList = ["CLINICAL","SCHEDULING","IMAGING","ACCOUNTING", "ORDER"];
  return actualNotesList;
}
module.exports.getNotesListOnRJ=getNotesListOnRJ;

function getRegisteredBlock(){
  return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Button", "", 1);
}
module.exports.getRegisteredBlock=getRegisteredBlock;

function getRegisterRequestListForMedicareNumberOnRJ(){
var registerRequestList = ["REPORT COMPLETION PRIORITY", "SERVICE COMPLETION PRIORITY", "ACCOUNT TYPE", "WORK SITE", "FINANCIAL SITE", "WARD","DEBTOR","REFERRER"];
return registerRequestList;
}
module.exports.getRegisterRequestListForMedicareNumberOnRJ=getRegisterRequestListForMedicareNumberOnRJ;
