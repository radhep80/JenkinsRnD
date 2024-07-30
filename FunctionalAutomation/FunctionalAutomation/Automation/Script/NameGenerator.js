var globalConstants =  require("GlobalConstants");
var numberOfData=0;
function fetchData()
{
    var httpUrl=Project.Variables.Name_URL+"?api_key="+Project.Variables.Name_key+
                  "&endpoint=generate&country_code=AU&results="+numberOfData.toString();
    Log.Message(httpUrl);                  
    var getNamesAPI= aqHttp.CreateGetRequest(httpUrl);
    var httpResponse = getNamesAPI.Send();

    return httpResponse.Text;
}

/*******Not to be used now *****
function generateNamesData()
{
   
    var nameDataFile = Project.ConfigPath+aqFileSystem.IncludeTrailingBackSlash("Data")+
                          "NameData.csv";
    var nameData =  fetchData();
    var jsonData = JSON.parse(nameData);  

    aqFile.WriteToTextFile(nameDataFile,"Firstname,Lastname,Used"+"\n",aqFile.ctANSI,true);
     for(var iCount=0;iCount<jsonData.data.length;iCount++)
     {
        aqFile.WriteToTextFile(nameDataFile,jsonData.data[iCount].name.firstname.name+
                               ","+jsonData.data[iCount].name.lastname.name+",false"+
                               "\n",aqFile.ctANSI,false);
     }

 return jsonData.data[iCount].name.firstname.name+","+
                  jsonData.data[iCount].name.lastname.name;
}
module.exports.generateNamesData = generateNamesData;
***************/


function generateNamesDataArray(numberOfRecords)
{
    numberOfData = numberOfRecords;
    var nameDataFile = Project.ConfigPath+aqFileSystem.IncludeTrailingBackSlash("Data")+
                          "NameData.csv";
    var nameData =  fetchData();
    var jsonData = JSON.parse(nameData);  
     for(var iCount=0;iCount<jsonData.data.length;iCount++)
     {
        globalConstants.lst_Name.push(jsonData.data[iCount].name.lastname.name.toUpperCase()+
                               ", "+jsonData.data[iCount].name.firstname.name);
     }
}
module.exports.generateNamesDataArray = generateNamesDataArray;