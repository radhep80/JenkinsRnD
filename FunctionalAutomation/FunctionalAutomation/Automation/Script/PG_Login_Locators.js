var globalConstants = require("GlobalConstants");
var container_Login = Sys.Process("KarismaClient").WPFObject("HwndSource: WpfWindow", "").
                                                   WPFObject("WpfWindow", "", 1);

var panel_Main  = container_Login.WPFObject("Border", "", 1).WPFObject("Grid", "", 1).
                      WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).
                      WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).
                      WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).
                      WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 2).
                      WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).
                      WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).
                      WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).
                      WPFObject("WpfNative", "", 2).WPFObject("Grid", "", 1);

                   
                      
function getLoginPanel(panelid)
{
    return panel_Main.findChildEx("Name","*WPFObject*WpfNative*,"+panelid+")");
}
module.exports.getLoginPanel=getLoginPanel;                      

function getDomainTextbox()
{
    try
    {
        var txt_Domain = getLoginPanel(2).findChildEx("Name","*WPFObject*TextBox*,1)",7);
        return txt_Domain;
    }
    catch (e)
    {
       Log.Error("Unable to locate Domain textbox" +e.message);
       return null;
    }
}
module.exports.getDomainTextbox=getDomainTextbox;

function getUserNameTextbox()
{
    try
    {
        var txt_UserName = getLoginPanel(4).findChildEx("Name","*WPFObject*TextBox*,1)",7);
        return txt_UserName;
    }
    catch (e)
    {
        Log.Error("Unable to locate Username textbox" +e.message);
        return null;
    }
}
module.exports.getUserNameTextbox=getUserNameTextbox;

function getPasswordTextbox()
{
    try
    {
        var txt_Password = getLoginPanel(6).
                                        findChildEx("Name","*WPFObject*PasswordBox*,1)",7);
        return txt_Password;
    }
    catch (e)
    {
        Log.Error("Unable to locate Password textbox" +e.message);
        return null;
    }
}
module.exports.getPasswordTextbox=getPasswordTextbox;


function getLoginButton()
{
    try
    {
        var btn_Login = getLoginPanel(7).findChildEx("Name","*WPFObject*Button*,1)",2);
        return btn_Login;
    }
    catch (e)
    {
        Log.Error("Unable to locate Login button" +e.message);
        return null;
    }
}
module.exports.getLoginButton=getLoginButton;


 function checkMarkOnWSG(){
   
   return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 2).WPFObject("WrapPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Button", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfGraphic", "", 1).WPFObject("Image", "", 1);
 }
module.exports.checkMarkOnWSG=checkMarkOnWSG;

 function checkMarkOnWS(){
   return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("DockPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WpfNative", "", 1).WPFObject("WpfScroll", "", 1).WPFObject("WpfScrollViewer", "", 1).WPFObject("WpfNative", "", 1).WPFObject("StackPanel", "", 1).WPFObject("WpfNative", "", 3).WPFObject("WrapPanel", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Button", "", 1).WPFObject("WpfNative", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfGraphic", "", 1).WPFObject("Image", "", 1);
 }
module.exports.checkMarkOnWS=checkMarkOnWS;

 function  worksiteSelectionPopUp(){
return globalConstants.parentHandle.WPFObject("HwndSource: WpfWindow", "Karisma", 1).WPFObject("WpfWindow", "Karisma", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("WpfNative", "", 1).WPFObject("WpfNative", "", 1).WPFObject("ModalityWpfGrid", "", 1);    
 }
module.exports.worksiteSelectionPopUp=worksiteSelectionPopUp;

