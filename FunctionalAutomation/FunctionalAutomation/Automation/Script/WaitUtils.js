
var globalConstants = require("GlobalConstants");
function waitforKarismaMainWindow()
{
  
  var process;
  process = Sys.Process("KarismaClient");
  var childName=  process.WaitChild("WPFObject(\"HwndSource: WpfWindow\", \"Karisma\", 1)",globalConstants.longTimeout);
  while(!childName.Exists)
  {
     Delay(globalConstants.mediumTimeout);
  }

}
module.exports.waitforKarismaMainWindow=waitforKarismaMainWindow;

function waitforScreen(handle_Parent,screenName,timeout)
{
  
    var childScreen=  handle_Parent.WaitChild(screenName,timeout);
    while(!childScreen.Exists)
    {
        Delay(timeout);
    }
    return childScreen;

}
module.exports.waitforScreen=waitforScreen;

function waitforControl(handle_Parent,propertyName,propertyValue,depth,timeout)
{
    var childScreen=  handle_Parent.FindChildEx(propertyName,propertyValue,depth,true,timeout);
    if(childScreen.Exists)
      return childScreen
    else
      return null;  
}
module.exports.waitforControl = waitforControl;

function isSuppressibleError(errorMessage) {
    return errorMessage.indexOf("The object does not exist. See Details for additional information.") !== -1;
}


function retryForWindow(maxRetries, delayBetweenRetries, windowName) {
    var retries = 0;
    var textOnPopUp;
    var found = false;

    while (retries < maxRetries) {
        try {
            if (globalConstants.parentHandle) {
                textOnPopUp = globalConstants.parentHandle.FindChildEx("Name", "*TextBlock," + windowName + "*", 50);
                if (textOnPopUp && textOnPopUp.Exists) {
                    Log.Message("Element found and visible on retry #" + (retries + 1) + ": " + textOnPopUp.Text);
                    found = true;
                    break; 
                }
            } else {
                Log.Error("Parent handle is not defined.");
                break; 
            }
        } catch (e) {
            if (!isSuppressibleError(e.message) || retries === maxRetries - 1) {
                Log.Error("Exception occurred on retry #" + (retries + 1) + ": " + e.message);
            }
        }
        aqUtils.Delay(delayBetweenRetries);
        retries++;
    }

    if (!found) {
        Log.Warning("Element not found or not visible after " + maxRetries + " retries.");
    }
}

module.exports.retryForWindow=retryForWindow;