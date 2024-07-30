function launchKarismaAPP()
{
    try
    {
        if (Sys.WaitProcess("KarismaClient").Exists)
          Sys.Process("KarismaClient").Close();  
        WshShell.Run(aqFileSystem.IncludeTrailingBackSlash(Project.Variables.App_Folder)+
                                                        "KarismaClient.exe");
        Delay(1000);                                                
     }
     catch (e)
     {
       Log.Error(e.message);
     }
    //var childName=Sys.Process("KarismaClient").WaitWPFObject("HwndSource: WpfWindow", "",0,60000); 
    var childName=Sys.Process("KarismaClient").WPFObject("HwndSource: WpfWindow", "");
    while(!childName.Exists)
    {
      Delay(1000);
    }
}
module.exports.launchKarismaAPP = launchKarismaAPP;
