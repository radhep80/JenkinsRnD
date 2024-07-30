var waitUtils = require("WaitUtils");
var homePgLocators = require("PG_HomePage_Locators");

function selectTheMenuAndClick(menuName) {
    try {
        const number = homePgLocators.menuNamesToMap[menuName];
        if (number === undefined) {
            Log.Error("Invalid menu name provided: " + menuName);
            return null;
        }
        var childItem = homePgLocators.getMenuPage(menuName).FindChild("FullName", '*[WPFObject]*("UniformGrid", "", 1)', 1);
        if (!childItem.Exists) {
            Log.Error("Child object not found for menu: " + menuName);
            return null;
        }
        var homePGMenu = childItem.FindChild("FullName", `*[WPFObject]*("WPFNative", "", ${number})`, 14);
        if (!homePGMenu.Exists) {
            Log.Error("Menu item not found for the given number: " + number);
            return null;
        }
        homePGMenu.Click();
        Log.Message("Successfully clicked on the menu item: " + menuName);
        return homePGMenu;
    } catch (error) {
        Log.Error("An error occurred in selectTheMenuAndClick: " + error.message);
        return null;
    }
}

module.exports.selectTheMenuAndClick = selectTheMenuAndClick;