var globalConstants = require("GlobalConstants");

function getPatientSearchBox()
{
  var patientSearchBox=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1);
  return patientSearchBox;
}
module.exports.getPatientSearchBox=getPatientSearchBox;

function getPatientSearchBoxChild()
{
  return getPatientSearchBox().FindChildEx("FullName", '*[WPFObject]*("TextBox", "", 1)', 20);
  
}
module.exports.getPatientSearchBoxChild=getPatientSearchBoxChild;

function getPatientSearchTextBox()
{
  var searchTextBox=getPatientSearchBoxChild().FindChildEx("FullName", '*[WPFObject]*("TextBox", "", 1)', 1)
  return searchTextBox;
}
module.exports.getPatientSearchTextBox=getPatientSearchTextBox;

function getPatientAddButtonChild()
{
  var patientAddButtonChild =getPatientSearchBox().FindChild("FullName", '*ContentPresenter*["WPFObject"]("WpfNative", "", 1)*["WPFObject"]("WpfFlowItemsControl", "", 1)*["WPFObject"]("WpfFlowItemContainer", "", 2)*["WPFObject"]("WpfNative", "", 1)*["WPFObject"]("Button", "", 1)*["WPFObject"]("WpfNative", "", 1)', 12)
  return patientAddButtonChild;
}
module.exports.getPatientAddButtonChild=getPatientAddButtonChild;


function getAddButton(){
 var patientAddButton = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfFlow", "", 1);
 return patientAddButton;
}
module.exports.getAddButton=getAddButton;


function getPatientCountAfterSearch(){
  var patientCount=getAddButton().WPFObject("WpfFlowItemsControl", "", 1).WPFObject("WpfFlowItemContainer", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
  return patientCount;
}
module.exports.getPatientCountAfterSearch=getPatientCountAfterSearch;

function getPatientWpfFlowItemContainer(){
    var patientWpfFlowItemContainer = getAddButton().FindChildEx("Name", "*WpfObject*WpfFlowItemsControl*,1)", 1);
    return patientWpfFlowItemContainer;
}
module.exports.getPatientWpfFlowItemContainer=getPatientWpfFlowItemContainer;
