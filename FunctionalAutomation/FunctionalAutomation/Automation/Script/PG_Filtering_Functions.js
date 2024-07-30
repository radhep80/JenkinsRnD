var filteringPgLocators = require("PG_Filtering_Locators");
var verificationUtils = require("VerificationUtils");
var actionUtils = require("ActionUtils");
var globalConstants = require("GlobalConstants");
var PG_HomePage = require("PG_HomePage_Functions");
var PG_Add_Patient = require("PG_Add_Patient_Functions");
var PG_PatientDialogBox = require("PG_Patient_Dialog_Functions");

function clickOnConfigurationPaneicon() {
    try {
        if (filteringPgLocators.getConfigurationPaneicon().Exists) {
            filteringPgLocators.getConfigurationPaneicon().Click();
            Log.Message("Successfully clicked on the configuration pane icon");
        } else {
            Log.Error("Configuration pane icon not found");
        }
    } catch (error) {
        Log.Error("An error occurred in clickOnConfigurationPaneicon " + error.message);
    }
}
module.exports.clickOnConfigurationPaneicon = clickOnConfigurationPaneicon;

function waitForVisibilityOfConfigurationPaneicon() {
    filteringPgLocators.getConfigurationPaneicon().WaitProperty("Visible", true, globalConstants.shortTimeout);
}
module.exports.waitForVisibilityOfConfigurationPaneicon = waitForVisibilityOfConfigurationPaneicon;

function clickOnFilteringOptions(filterName) {
    try {
        actionUtils.clickOnButtonByName("Textblock", filterName, 100);
        Delay(globalConstants.shortTimeout);
    }
    catch (error) {
        Log.Error("An error occurred in clickOnConfigurationPaneicon " + error.message);
    }
}
module.exports.clickOnFilteringOptions = clickOnFilteringOptions;

function validateFilteringWindowTitle(expectedTitle) {
    try {
        verificationUtils.verifyText(globalConstants.parentHandle, "Name", "*Run*" + expectedTitle + "*", 100, expectedTitle);
    }
    catch (exception) {
        Log.Error("An error occurred: " + exception.message);
    }
}
module.exports.validateFilteringWindowTitle = validateFilteringWindowTitle;

function getPatientCountOnPatientJacket(gridTitle) {
    try {
       var actualTextCount = actionUtils.getTextByObjectType("Textblock", gridTitle, 70);
        Log.Message("Actual value is " + actualTextCount);
        var numericValueMatch = String(actualTextCount).match(/\((\d+)\)/);
        if (numericValueMatch && numericValueMatch.length > 1) {
            var numericValue = numericValueMatch[1];
            Log.Message("Todays patient count is  " + numericValue);
            return parseInt(numericValue);
        } else {
            Log.Error("Numeric value not found in the expected format.");
            return -1;
        }
    } catch (e) {
        Log.Error("Error occurred while getting the patient count: " + e.message);
        return -1;
    }
}
module.exports.getPatientCountOnPatientJacket = getPatientCountOnPatientJacket;


function validateFilterIconVisibility() {
    try {
        if (filteringPgLocators.getFilterIcon().VisibleOnScreen) {
            Log.Message("Filter icon is available")
        }
        else {
            Log.Error("Filter icon not available");
        }
    }
    catch (exception) {
        Log.Error("An error occurred: " + exception.message);
    }
}
module.exports.validateFilterIconVisibility = validateFilterIconVisibility;

function validateFilterOptionNames(filterType, expectedFilterNameText) {
    try {
        var filterOptionName = filteringPgLocators.filterOptionNamesToMap[filterType]
        if (filterOptionName === undefined) {
            Log.Error("Invalid mapped name provided: " + filterType);
        }
        verificationUtils.verifyText(filteringPgLocators.getTextofFilterOption(filterOptionName), "Name", "*TextBlock," + expectedFilterNameText + "*", 25, expectedFilterNameText);
    }
    catch (exception) {
        Log.Error("An error occurred: " + exception.message);
    }
}
module.exports.validateFilterOptionNames = validateFilterOptionNames;

function checkExistingFilterAndClickOnNew() {
    try {
        var deletetext = actionUtils.getObjectByType("Textblock", "Delete", 100);
        while (deletetext.Enabled) {
            clickOnFilteringOptions("Delete");
            PG_Add_Patient.clickOnWindowPopupButtonByName("DELETE");
            Delay(globalConstants.shortTimeout);
        }
        clickOnFilteringOptions("New");
    }
    catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.checkExistingFilterAndClickOnNew = checkExistingFilterAndClickOnNew;

function clickAndEnterTextOnSearchBar(actionType, fieldText) {
    try {
        let textBoxData;
        switch (actionType) {
            case "caption":
                textBoxData = filteringPgLocators.getCaptionFieldTextBox();
                break;
            case "CheckWindow":
                textBoxData = filteringPgLocators.getCheckContextTextBox();
                break;
            case "FilterSerachBar":
                textBoxData = filteringPgLocators.getfilterTextBox();
                break;
            default:
                Log.Error("Unsupported action type: " + actionType);
                return;
        }
        if (textBoxData.Exists) {
            textBoxData.Click();
            textBoxData.keys(fieldText);
            Log.Message("Successfully set text in " + actionType + " field: " + fieldText);
        } else {
            Log.Error("Search box not found within the child object.");
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.clickAndEnterTextOnSearchBar = clickAndEnterTextOnSearchBar;

function clickOnPopupWindowButtons(buttonText) {
    try {
        var popupButton = filteringPgLocators.getWindowPopupButtons().FindChildEx("Name", "*TextBlock," + buttonText + "*", 25);
        if (popupButton.Exists) {
            popupButton.Click();
            Log.Message("Successfully clicked on button " + buttonText);
        } else {
            Log.Error("Button is not found on window: " + buttonText);
        }
    } catch (e) {
        Log.Error("Error occurred while clicking the button: " + e.message);
    }
}
module.exports.clickOnPopupWindowButtons = clickOnPopupWindowButtons;

function clickAndSetValueOnCustomFilterFields(fieldType, fieldName, selectOption) {
    try {
        let fieldNames;
        let fieldButton;
        switch (fieldType) {
            case "Service":
                fieldNames = filteringPgLocators.customeFilterRelatedNamesToMap[fieldName];
                fieldButton = filteringPgLocators.getServiceFieldNames().FindChildEx("Name", "*WpfObject*WpfNative," + fieldNames, 10);
                break;
            case "Related":
                fieldNames = filteringPgLocators.customeFilterRelatedNamesToMap[fieldName];
                fieldButton = filteringPgLocators.getRelatedFieldName().FindChildEx("Name", "*WpfObject*WpfNative," + fieldNames, 10);
                break;
            default:
                throw new Error("Unsupported field type: " + fieldType);
        }
        if (fieldNames === undefined) {
            throw new Error("Invalid service field key: " + fieldName);
        }
        var showall = fieldButton.FindChildEx("Name", "*TextBlock,Show all*", 25);
        showall.Click();
        Log.Message("Successfully clicked on the button: " + fieldName);
        Sys.Keys(selectOption);
        Delay(globalConstants.shortTimeout);
        Sys.Keys("[Enter]");
        Log.Message("Successfully set dropdown value: " + selectOption);
    } catch (error) {
        Log.Error("Error occurred while trying to click on the button: " + fieldName + ". " + error.message);
    }
}
module.exports.clickAndSetValueOnCustomFilterFields = clickAndSetValueOnCustomFilterFields;

function clickOnMagnierIcon(iconFieldType, magnifierIcon) {
    try {
        var searchBarFieldNames;
        var magnifierIcon;
        switch (iconFieldType) {
            case "Related":
                searchBarFieldNames = filteringPgLocators.customeFilterRelatedNamesToMap[magnifierIcon];
                magnifierIconParent = filteringPgLocators.getRelatedSearchFieldName().FindChildEx("Name", "*WpfObject*WpfNative," + searchBarFieldNames + "*", 10);
                break;

            case "Filtering Options":
                searchBarFieldNames = filteringPgLocators.filterOptionNamesToMap[magnifierIcon];
                magnifierIconParent = filteringPgLocators.getFilterOptionsMagnifierIcon().FindChildEx("Name", "*WpfObject*WpfFrame," + searchBarFieldNames + "*", 10);
                break;

            default:
                throw new Error("Unsupported field type: " + iconFieldType);
        }
        if (searchBarFieldNames === undefined) {
            throw new Error("Invalid service field key: " + magnifierIcon);
        }
        var magnifierIconButton = magnifierIconParent.FindChildEx("Name", "*WpfObject*Button,1", 10);
        if (magnifierIconButton.Exists) {
            magnifierIconButton.Click();
            Log.Message("Successfully clicked on the Magnifier icon: " + magnifierIcon);
        } else {
            Log.Error("Magnifier icon not found  " + magnifierIcon);
        }
    } catch (error) {
        Log.Error("Error occurred while trying to click on the button: " + magnifierIcon + ". " + error.message);
    }
}
module.exports.clickOnMagnierIcon = clickOnMagnierIcon;

function selectTheOptionOnCheckContextWindow(OptionName) {
    try {
        filteringPgLocators.getCheckContextWindowOptions().WaitProperty("Visible", true, globalConstants.shortTimeout);
        var ocrText = OCR.Recognize(filteringPgLocators.getCheckContextWindowOptions());
        var textBlockName = ocrText.BlockByText(OptionName);
        if (textBlockName !== null) {
            textBlockName.Click();
            Log.Message("Successfully clicked on the option: " + OptionName);
        } else {
            Log.Error("Option with name '" + OptionName + "' not found.");
        }
    } catch (error) {
        Log.Error("An error occurred while attempting to click on the Option " + error.message);
    }
}
module.exports.selectTheOptionOnCheckContextWindow = selectTheOptionOnCheckContextWindow;

function validateCountOfTodaysPatients(gridNameType) {
    try {
        var expectedRecordCount, actualRecordCount;

        switch (gridNameType) {
            case "Include":
                expectedRecordCount = 1;
                break;

            case "Exclude":
                expectedRecordCount = 0;
                break;

            default:
                Log.Error("error", "Invalid type provided: " + type);
        }
        var actualRecordCount = getPatientCountOnPatientJacket("TODAY'S PATIENTS");
        if (actualRecordCount == expectedRecordCount) {
            Log.Message("Filter working as expected ");
        } else {
            Log.Error("Filter not working as expected");
        }
    } catch (error) {
        Log.Error("An error occurred: " + error.message);
    }
}
module.exports.validateCountOfTodaysPatients = validateCountOfTodaysPatients;

function clickOnFilterByName(filterButton, filterButtonText) {
    try {
        var filterOptionsButtonName = filteringPgLocators.filterOptionNamesToMap[filterButton];
        if (filterOptionsButtonName === undefined) {
            Log.Error("Invalid mapped name provided: " + filterButton);
        }
        var optionsName = filteringPgLocators.getTextofFilterOption(filterOptionsButtonName).FindChildEx("Name", "*TextBlock," + filterButtonText + "*", 25);
            if (optionsName.Exists) {
            optionsName.Click();
            Log.Message("Successfully clicked on filtering option:  " + filterButtonText);
        } else {
            Log.Error("filtering option not found on window: " + filterButtonText);
        }
    } catch (e) {
        Log.Error("Error occurred while clicking on the button: " + e.message);
    }    
}
module.exports.clickOnFilterByName = clickOnFilterByName;

function selectOptionOnWindow(selectOption) {
    try {
        //<Step >In the window, check the relevant option and click on Ok button
        clickAndEnterTextOnSearchBar("FilterSerachBar", selectOption);
        actionUtils.pressKeyMultipleTimes("[Enter]", "1");
        Delay(globalConstants.shortTimeout);
        actionUtils.pressKeyMultipleTimes("[Tab]", "2");
        clickOnFilteringOptions("OK");
    }
    catch (e) {
        Log.Error("Error occurred while clicking the button: " + e.message);
    }
}
module.exports.selectOptionOnWindow = selectOptionOnWindow;

function waitForVisibilityOfSearchBarOnWindow() {
    filteringPgLocators.getCheckContextTextBox().WaitProperty("Visible", true, globalConstants.shortTimeout);
}
module.exports.waitForVisibilityOfSearchBarOnWindow = waitForVisibilityOfSearchBarOnWindow;



