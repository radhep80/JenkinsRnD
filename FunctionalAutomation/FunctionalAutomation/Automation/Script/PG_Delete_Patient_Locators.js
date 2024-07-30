var waitUtils = require("WaitUtils");
var globalConstants = require("GlobalConstants");

const popupButtonNamesToMap = {
  "New": 1,
  "Edit": 2,
  "Discard": 3,
  "Recover": 4,
  "Delete": 5,
  "Open": 6

};
module.exports.popupButtonNamesToMap = popupButtonNamesToMap;

function getDeletePatientSearchBoxParent() {
  var searchBoxParent = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1);
  return searchBoxParent;
}
module.exports.getDeletePatientSearchBoxParent = getDeletePatientSearchBoxParent;


function getDeletePatientSearchTextBox() {
  var searchTextBox = getDeletePatientSearchBoxParent().FindChildEx("Name", "*WpfObject*TextBox*,1)", 5);
  return searchTextBox;
}
module.exports.getDeletePatientSearchTextBox = getDeletePatientSearchTextBox;

function getDeletePatientDataMenuToClick() {
  var dataMenuList = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("UniformGrid", "", 1);
  return dataMenuList;
}
module.exports.getDeletePatientDataMenuToClick = getDeletePatientDataMenuToClick;

function getDeletePatientSearchBoxByName() {
  var searchName = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
  return searchName;
}
module.exports.getDeletePatientSearchBoxByName = getDeletePatientSearchBoxByName;

function getSearchBoxByName() {
  var searchTextBox = getDeletePatientSearchBoxByName().FindChildEx("Name", "*WpfObject*TextBox*,1)", 20);
  return searchTextBox;
}
module.exports.getSearchBoxByName = getSearchBoxByName;

function getPatientNameGrid() {
  var gridname = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DataGridExtended", "", 1);
  return gridname;
}
module.exports.getPatientNameGrid = getPatientNameGrid;

function getDeleteCancelButton() {
  var getDeleteCancelButton_Parent = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
  return getDeleteCancelButton_Parent;
}
module.exports.getDeleteCancelButton = getDeleteCancelButton;

function getPopupButtonParent(PopupbuttonName) {
  const buttonType = popupButtonNamesToMap[PopupbuttonName];
  var PopupButtonParent = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ToolBarTray", "", 1).WPFObject("ToolBar", "", 1);
  return PopupButtonParent;
}
module.exports.getPopupButtonParent = getPopupButtonParent;

function getDeletePatientWindowTitle() {
  var deletePatientWindowTitle = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1)
  return deletePatientWindowTitle;
}
module.exports.getDeletePatientWindowTitle = getDeletePatientWindowTitle;

function getPatientGridList() {
 
  var nameList = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfNative", "", 3);
  return nameList;
}

module.exports.getPatientGridList = getPatientGridList;






