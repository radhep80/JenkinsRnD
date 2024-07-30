var PG_Login = require("PG_Login_Functions");
var waitUtils = require("WaitUtils");
var globalConstants= require("GlobalConstants");
var zephyrFunctions = require("ZephyrUtils");
var dataGenerator =  require("DataGenerator")
function testLogin()
{
   if(!Project.Variables.LocalTestExecution)
   {
       Log.Message("In create")
       zephyrFunctions.createTestCycle("Automation_SmokeSuite_"+dataGenerator.getcurrentDate());
       
   }
    

    aqTestCase.Begin("Login Test");
    PG_Login.Login();
    screen_Name = "WPFObject(\"HwndSource: WpfWindow\", \"Karisma\", 1)";
    waitUtils.waitforScreen(globalConstants.parentHandle,screen_Name,
                              globalConstants.longTimeout);

    var PG_Main = require("PG_Main_Locators");
  
    PG_Main.clickMenu("Menu");
    screen_Name = "WPFObject(\"TextBlock\", \"Menu\", 1)";
    var main_handle=PG_Main.container_Main.WPFObject("WpfNative", "", 2).
                                  WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).
                                  WPFObject("ModalityWpfGrid", "", 1).
                                  WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).
                                  WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).
                                  WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).
                                  WPFObject("ContentPresenter", "", 1).
                                  WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).
                                  WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).
                                  WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1);

    waitUtils.waitforScreen(main_handle,screen_Name,globalConstants.longTimeout);
    aqTestCase.End();
}
