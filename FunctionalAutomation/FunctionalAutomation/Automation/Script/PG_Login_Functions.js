var PG_Login_Loc = require("PG_Login_Locators");
var waitUtils =  require("WaitUtils");                      
var globalConstants = require("GlobalConstants");
var actionUtils = require("ActionUtils");

function Login()
{
  var screen_Name;
  try
  {
      PG_Login_Loc.getDomainTextbox().Clear();
      PG_Login_Loc.getDomainTextbox().Keys(Project.Variables.Domain);
      PG_Login_Loc.getUserNameTextbox().Keys(Project.Variables.UserName);
      PG_Login_Loc.getPasswordTextbox().SetText(Project.Variables.Password);
      PG_Login_Loc.getLoginButton().Click();
  }
  catch (e)
  {
      Log.Error("Error while login"+e.message);
  }
}
module.exports.Login=Login;

 function waitForVisibilityOfWSSelectionPopUp(){
 PG_Login_Loc.worksiteSelectionPopUp().WaitProperty("Visible", true, globalConstants.longTimeout);
 }
 
 function selectWorkSiteAndWSG(workSite,WorkGroup) {
      if (PG_Login_Loc.worksiteSelectionPopUp().Exists) {
        Log.Message("Work site pop up element exists");
        if (PG_Login_Loc.worksiteSelectionPopUp().VisibleOnScreen) {
            Log.Message("Work site pop up is present");
            var textOnPopUp = actionUtils.getObjectByType("Textblock", "Which location is to be used for this session?", 50);
            if (textOnPopUp.Exists) {
                textOnPopUp.WaitProperty("Visible", true, 10000);
                selectWSG(workSite);
                selectWS(WorkGroup);
                clickOnStartButton();
            } else {
                Log.Message("Text block object not found on the pop up");
            }
        } else {
            Log.Message("Work site pop up is not visible");
        }
    } else {
        Log.Error("Work site pop up element does not exist.Please update setting from data management");
    }
}
module.exports.selectWorkSiteAndWSG=selectWorkSiteAndWSG;

function selectWSG(workSiteGroup) {
    if (PG_Login_Loc.checkMarkOnWSG().isVisible) {
        Log.Message("Work site group Already selected :"+workSiteGroup);
    } else {
        try {
            var icButton = actionUtils.getObjectByType("Run", workSiteGroup, 100); 
            var parent = icButton.Parent; 
            parent.Click(); 
            Log.Message("Work site group sucessfuly selected"+workSiteGroup);
        } catch (e) {
            Log.Error("Error occurred while selecting work site:", e.message);
        }
    }
}


function selectWS(workSite) {
    if (PG_Login_Loc.checkMarkOnWS().isVisible) {
        Log.Message("Work site Already selected :"+workSite);
    } else {
        try {
            var wsButton = actionUtils.getObjectByType("Run", workSite, 100); 
            var parent = wsButton.Parent; 
            parent.Click(); 
            Log.Message("Work site sucessfuly selected"+workSite);
        } catch (e) {
            Log.Error("Error occurred while selecting work site:", e.message);
        }
    }
}

function clickOnStartButton(){
  var startButton = actionUtils.getObjectByType("Run","START",50).Parent;
  startButton.WaitProperty("Enable", true, globalConstants.shortTimeout);
  startButton.Click();
}
