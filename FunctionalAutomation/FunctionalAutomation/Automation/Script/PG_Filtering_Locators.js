var globalConstants= require("GlobalConstants");
var verificationUtils = require("VerificationUtils");

function getConfigurationPaneicon()
{
   return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfNative", "", 2);
  
}
module.exports.getConfigurationPaneicon=getConfigurationPaneicon;

var customeFilterRelatedNamesToMap = {
      
        "Hospital":10,
        "Ward":14,
        "Worksite":18,
        "RequestingUnit":22,
        "ResponsibleUnit":26,
        "Account Type":30,
        "CurrentWorksite":6,
         "Context":8,
         "HospitalMagnifierIcon":12,
        "WorkArea":36,
        "WardEntityGroup":40,
        "WardMagnifierIcon":16,
        "Service":6,
        "WorksiteMagnifierIcon":20,
        "RequestingUnitMagnifierIcon":24
        
    };
    
module.exports.customeFilterRelatedNamesToMap=customeFilterRelatedNamesToMap;

function getRelatedFieldName(relatedFieldName)
{
  const fieldName=customeFilterRelatedNamesToMap[relatedFieldName];
  return fieldNameParent=globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1); 
}
module.exports.getRelatedFieldName=getRelatedFieldName;

function getFilterIcon()
{
  return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfStack", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfStack", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfStack", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfButton", "", 1).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfGraphic", "", 1);
}
module.exports.getFilterIcon=getFilterIcon;

var filterOptionNamesToMap = {
      
        "All":1,
        "Allocated resource":2,
        "Service Department":3,
        "Work Site":4       
    };
    
module.exports.filterOptionNamesToMap=filterOptionNamesToMap;

function getFilterOptions(filterValue)
{
 const datamappedvalue = filterOptionNamesToMap[filterValue];
  return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfStack", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfStack", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfStack", "", 1).WPFObject("StackPanel", "", 1);
}
module.exports.getFilterOptions=getFilterOptions;

function getFilterOptionsMagnifierIcon()
{
  return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfStack", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfStack", "", 4).WPFObject("StackPanel", "", 1).WPFObject("WpfStack", "", 1).WPFObject("StackPanel", "", 1);
}
module.exports.getFilterOptionsMagnifierIcon=getFilterOptionsMagnifierIcon;

function getTextofFilterOption(filterOptionMappedName)
{
 return getFilterOptions().FindChildEx("Name", "*WpfObject*WpfDock," + filterOptionMappedName + "*", 10); 
}
module.exports.getTextofFilterOption=getTextofFilterOption;

function getcaptionField()
{
 return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1); 
}
module.exports.getcaptionField=getcaptionField;

function getCaptionFieldTextBox() {
  return getcaptionField().FindChildEx("Name", "*WpfObject*TextBox*,1)", 10); 
}
module.exports.getCaptionFieldTextBox = getCaptionFieldTextBox;

function getRelatedSearchFieldName(relatedFieldSearchBarName)
{
  const searchFieldName=customeFilterRelatedNamesToMap[relatedFieldSearchBarName];
  return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1); 
}
module.exports.getRelatedSearchFieldName=getRelatedSearchFieldName;

function getMagnifierIcon(searchBarMappedName)
{
 return getRelatedSearchFieldName().FindChildEx("Name", "*WpfObject*WpfNative," + searchBarMappedName + "*", 10);
}
module.exports.getMagnifierIcon=getMagnifierIcon;

function getCheckContextSearchBox()
{
 return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
}
module.exports.getCheckContextSearchBox=getCheckContextSearchBox;

function getCheckContextTextBox() {
  var checkContextTextBox = getCheckContextSearchBox().FindChildEx("Name", "*WpfObject*TextBox*,1)", 10);
  return checkContextTextBox;
}
module.exports.getCheckContextTextBox = getCheckContextTextBox;

function getWindowPopupButtons()
{
 return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 4).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1); 
}
module.exports.getWindowPopupButtons=getWindowPopupButtons;

function getServiceFieldNames()
{
 return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1); 
}
module.exports.getServiceFieldNames=getServiceFieldNames;

function getCheckContextWindowOptions()
{
  return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1);
}
module.exports.getCheckContextWindowOptions=getCheckContextWindowOptions;

function getFilterSearchBox()
{
 return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfDock", "", 1).WPFObject("WpfDockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1);
}
module.exports.getFilterSearchBox=getFilterSearchBox;

function getfilterTextBox() {
return getFilterSearchBox().FindChildEx("Name", "*WpfObject*TextBox*,1)", 10);

}
module.exports.getfilterTextBox = getfilterTextBox;








