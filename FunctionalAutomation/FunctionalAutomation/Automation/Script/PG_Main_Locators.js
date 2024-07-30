var waitUtils =  require("WaitUtils");          
var container_App = Sys.Process("KarismaClient").WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1);

var container_Main = container_App.WPFObject("Border", "", 1).
                                WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).
                                WPFObject("WpfNative", "", 1).
                                WPFObject("ModalityWpfGrid", "", 1).
                                WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).
                                WPFObject("DockPanel", "", 1);
module.exports.container_Main = container_Main;                              
var container_mainMenu = container_Main.WPFObject("WpfNative", "", 1).
                                WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).
                                WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).
                                WPFObject("StackPanel", "", 1);

var lst_Menu = {
                  "Menu" : 5,
                  "Refresh" : 1 ,
                  "Back" : 2 ,
                  "Find" : 4 };
              
function getToolbarMenu(menuName)
{
   var menuID = lst_Menu[menuName];
   var toolbar =container_mainMenu.findChildEx("Name","*WPFObject*WpfButton*,"+menuID+")");
   if (toolbar.Exists)
     return toolbar;
}
module.exports.getToolbarMenu = getToolbarMenu;

function clickMenu(menuName)
{
  getToolbarMenu(menuName).Click();
}

module.exports.clickMenu = clickMenu;

function waitForVisibilityOfMenu(){
 return container_Main.WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).
                                  WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).
                                  WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).
                                  WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).
                                  WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1);
}
module.exports.waitForVisibilityOfMenu=waitForVisibilityOfMenu;