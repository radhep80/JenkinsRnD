﻿var globalConstants= require("GlobalConstants");

function getObjectByType(objectType, textName, depth) {
  var object = null;

  switch (objectType) {
    case 'Textblock': 
      object = globalConstants.parentHandle.FindChildEx("Name", "*TextBlock," + textName + "*", depth);
      break;
    case 'Textbox':
      object = globalConstants.parentHandle.FindChildEx("Name", "*TextBox," + textName + "*", depth);
      break;
    case 'Run':
      object = globalConstants.parentHandle.FindChildEx("Name", "*Run," + textName + "*", depth);
      break;
    default:
      Log.Error("Invalid object type: " + objectType);
      return null;
  }
  if (object != null) {
    Log.Message(objectType + " element found: " + object.Name);
  } else {
    Log.Warning(objectType + " element not found with text: " + textName);
  }
  return object;
}
module.exports.getObjectByType=getObjectByType;


function getTextByObjectType(objectType, textName, depth) {
  var object = null;

  switch (objectType) {
    case 'Textblock': 
      object = globalConstants.parentHandle.FindChildEx("Name", "*TextBlock," + textName + "*", depth).Text;
      break;
    case 'Textbox':
      object = globalConstants.parentHandle.FindChildEx("Name", "*TextBox," + textName + "*", depth).Text;
      break;
    case 'Run':
      object = globalConstants.parentHandle.FindChildEx("Name", "*Run," + textName + "*", depth).Text;
      break;
    default:
      Log.Error("Invalid object type: " + objectType);
      return null;
  }
  if (object != null) {
    Log.Message(objectType + " element found: " + object);
  } else {
    Log.Error(objectType + " element not found with text: " + textName);
  }
  return object;
}
module.exports.getTextByObjectType=getTextByObjectType;


function clickOnButtonByName(objectType, buttonName, depth) {
  try {
    var button = getObjectByType(objectType, buttonName, depth);
    if (button) {
      button.Click();
      Log.Message("Clicked on " + objectType + " with text: " + buttonName);
    } else {
      Log.Warning("Could not find " + objectType + " with text: " + buttonName + " to click.");
    }
  } catch (e) {
    Log.Error("An error occurred while trying to click on " + objectType + " with text: " + buttonName + ". Error: " + e.message);
  }
}
module.exports.clickOnButtonByName=clickOnButtonByName;


function clickOnTextBlockButtonByName(buttonName) {
   try {
    var button = getObjectByType("Textblock", buttonName, 100);
    if (button) {
      button.WaitProperty("Visible", true, globalConstants.shortTimeout);
      button.Click();
      Log.Message("Sucesssfully clicked on " + buttonName);
    } else {
      Log.Error("Could not find " + buttonName + " to click.");
    }
  } catch (e) {
    Log.Error("An error occurred while trying to click on " + objectType + " with text: " + buttonName + ". Error: " + e.message);
  }
}
module.exports.clickOnTextBlockButtonByName=clickOnTextBlockButtonByName;4

function selectReportRecord(requestNo)
{
 var dataGridReport = Sys.Process("KarismaClient").
                      WPFObject("HwndSource: WpfWindow", "Karisma", 1).
                      WPFObject("WpfWindow", "Karisma", 1).
                      WPFObject("DataGridExtended", "", 1) ;
   
   var performedColumn = OCR.Recognize(dataGridReport).BlockByText("PERFORMED");
   performedColumn.Click();
   performedColumn.Click();
   delay(100);
   var reportTable = OCR.Recognize(dataGridReport).AsTable(true);

   for(var iCount=0;iCount<reportTable.RowCount;iCount++)
   {
     var Cell = reportTable.Cell(iCount, 5);
     Log.Message( Cell.Text);
     if(aqString.StrMatches(requestNo,Cell.Text.trim()))
     {
       Cell.DblClick();
       break;
     }
   }
}
module.exports.selectReportRecord=selectReportRecord;

function pressKeyMultipleTimes(key, times) {
    try {
        if (times <= 0) {
            Log.Error("Number of times should be greater than 0.");
            return;
        }
        for (var i = 0; i < times; i++) {
            Sys.Keys(key);
        }
        Log.Message(key + " key pressed " + times + " times successfully.");
    } catch (e) {
        Log.Error("An error occurred: " + e.message);
    }
}
module.exports.pressKeyMultipleTimes=pressKeyMultipleTimes;

function recognizeUniqueTextUsingOCR(parentHandle, textToRecognize) {
    try {
        parentHandle.WaitProperty("Visible", true, globalConstants.shortTimeout);
        Log.Message("Attempting to recognize text using OCR.");
        var ocrRecognize = OCR.Recognize(parentHandle);
        var text = ocrRecognize.BlockByText("*" + textToRecognize + "*");
        if (text) {
            Log.Message("Text block found: " + text.Text);
        } else {
            Log.Error("Text block containing '" + textToRecognize + "' not found.");
        }
    } catch (e) {
        Log.Error("Exception occurred during OCR processing: " + e.message);
    }
}
module.exports.recognizeUniqueTextUsingOCR=recognizeUniqueTextUsingOCR;

function validateTextUsingOCRCheckText(parentHandle, expectedText) {
    try {
        aqObject.CheckProperty(parentHandle, "Enabled", cmpEqual, true);
        var recognizedText = OCR.Recognize(parentHandle);
        recognizedText.CheckText("*" + expectedText + "*");
        Log.Message("Validation passed: The expected error message is present.");
    } catch (e) {
        Log.Error("An error occurred while validating the error message: " + e.message);
    }
}
module.exports.validateTextUsingOCRCheckText=validateTextUsingOCRCheckText;