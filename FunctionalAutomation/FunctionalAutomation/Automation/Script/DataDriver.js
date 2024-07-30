//Data Driven functions

// Function to set Data driver with module name same as file name (without extension) 
//  and sheetname 
function setDataDriver(moduleName,sheetname)
{
   
   DDT.ExcelDriver(Project.ConfigPath+aqFileSystem.IncludeTrailingBackSlash("Data")
                                                      +(moduleName)+".xlsx", sheetname, false);
   Log.Message(Project.ConfigPath+aqFileSystem.IncludeTrailingBackSlash("Data")
                                                                +(moduleName)+".xlsx");
}
module.exports.setDataDriver = setDataDriver;

// Function to get column id for column name 
function getColumnID(colName)
{
  var iColCnt;
  var totalColCnt = DDT.CurrentDriver.ColumnCount; 
  for(iColCnt=0;iColCnt<totalColCnt;iColCnt++)
  {
    var actColName=DDT.CurrentDriver.ColumnName(iColCnt);
    if(actColName==colName)
    {
      return iColCnt;
      break;
    }
  }
}

// Function to get value of selected column
function getValue(colName)
{
  columnId= getColumnID(colName);    
  return DDT.CurrentDriver.Value(columnId);
}
module.exports.getValue = getValue;

// Function to get data by rowid and columnname 
function getValueByRowOld(rowid,colName)
{
  var iColCnt,iRowCnt;
  iRowCnt =0;
  while(rowid>iRowCnt && ! DDT.CurrentDriver.EOF())
  {
      DDT.CurrentDriver.Next();
      iRowCnt = iRowCnt+1;
  }    
  return getValue(colName);
}

function getValueByRow(rowid, colName) {
     DDT.CurrentDriver.First();
    for (var i = 1; i < rowid; i++) {
        DDT.CurrentDriver.Next();
    }
    
    return getValue(colName);
}
module.exports.getValueByRow=getValueByRow;