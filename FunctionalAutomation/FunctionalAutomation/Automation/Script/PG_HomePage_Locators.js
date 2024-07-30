var waitUtils = require("WaitUtils");
var globalConstants = require("GlobalConstants");

const menuNamesToMap = {
    "Approval": 1,
    "Imaging": 2,
    "Reception": 3,
    "Reporting": 4,
    "Accounting": 5,
    "Archive": 6,
    "Communication": 7,
    "DataManagement": 8,
    "Dairy": 9,
    "Imaging2": 10,
    "Orders": 11,
    "PracticeManagement": 12,
    "Trasport": 13,
    "WaitLists": 14
};

function getMenuPage(menuName) {
    const number = menuNamesToMap[menuName];
    var menuPage_Parent = globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1);
    return menuPage_Parent;
}
module.exports.menuNamesToMap = menuNamesToMap;
module.exports.getMenuPage = getMenuPage;

