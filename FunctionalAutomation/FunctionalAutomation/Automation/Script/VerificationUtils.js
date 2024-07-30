var globalConstants= require("GlobalConstants");
function verifyText(windowHandle,propertyName,propertyValue,depth,expectedText)
{
   try {
        var verifyControl = windowHandle.FindChildEx(propertyName,propertyValue,depth);
        var actualText = verifyControl.Text;
        if (actualText.Equals(expectedText)) {
            Log.Message("Actual text \"" + actualText + "\" equals expected text \"" + expectedText + "\".");
        } else {
            Log.Error("Actual text \"" + actualText + "\" does not equal expected text \"" + expectedText + "\".");
        }
    } catch (error) {
        if (typeof Log !== 'undefined' && typeof Log.Error === 'function') {
            Log.Error("An error occurred while executing verifyText: " + error.message);
            globalConstants.passFlag = "Fail";
            throw error;
        }
    }
}
module.exports.verifyText = verifyText;

function verifyTextConatins(windowHandle,propertyName,propertyValue,depth,expectedText)
{
   try {
        var verifyControl = windowHandle.FindChildEx(propertyName,propertyValue,depth);
        var actualText = verifyControl.Text;
        if (actualText.Contains(expectedText)) {
            Log.Message("Actual text \"" + actualText + "\" equals expected text \"" + expectedText + "\".");
        } else {
            Log.Error("Actual text \"" + actualText + "\" does not equal expected text \"" + expectedText + "\".");
        }
    } catch (error) {
        if (typeof Log !== 'undefined' && typeof Log.Error === 'function') {
            Log.Error("An error occurred while executing verifyText: " + error.message);
        }
    }
}
module.exports.verifyTextConatins = verifyTextConatins;
