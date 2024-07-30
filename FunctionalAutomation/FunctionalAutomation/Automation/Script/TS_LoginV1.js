var PG_Login = require("PG_Login_Functions");
var waitUtils = require("WaitUtils");
var globalConstants= require("GlobalConstants");
var zephyrFunctions = require("ZephyrUtils");
var dataGenerator =  require("DataGenerator")
  
function testLoginV1()
{
   if(!Project.Variables.LocalTestExecution)
   {
       Log.Message("In create")
       zephyrFunctions.createTestCycle("Automation_SmokeSuite_"+dataGenerator.getcurrentDate());
       
   }
    aqTestCase.Begin("Login Test");
    waitUtils.retryForWindow(10, 10000,"Login");
    PG_Login.Login();
    waitUtils.retryForWindow(10, 20000,"Which location is to be used for this session?");
    PG_Login.selectWorkSiteAndWSG("IC","Demo Worksite");
    var PG_Main = require("PG_Main_Locators");
    PG_Main.clickMenu("Menu");
    screen_Name = "WPFObject(\"TextBlock\", \"Menu\", 1)";
    waitUtils.waitforScreen(PG_Main.waitForVisibilityOfMenu(),screen_Name,globalConstants.longTimeout);
    aqTestCase.End();
}
