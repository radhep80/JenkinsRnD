var com_ut= require("GlobalConstants");
function createTestCycle(cycleName)
{

  var httpUrl=Project.Variables.Rest_URL+"/testcycles";
  var authToken = Project.Variables.REST_AUTH_TOKEN;
  
  var postCreatTestCycle= aqHttp.CreatePostRequest(httpUrl);
  postCreatTestCycle.SetHeader("Authorization", "Bearer " + authToken);
  postCreatTestCycle.SetHeader("Content-Type", "application/json");
  var httpBody = "{\"projectKey\": \"KT\", \"name\": \""+cycleName+"\"}";
  Log.Message(httpBody);
  var httpResponse = postCreatTestCycle.Send(httpBody);
  getCycleKey(httpResponse.Text);
}
module.exports.createTestCycle = createTestCycle;

function getCycleKey(responseText)
{
  var iStartIndex = responseText.indexOf("key") + 6;
  var iEndIndex = responseText.indexOf("}")-1;
  com_ut.testCycleKey =responseText.substring(iStartIndex,iEndIndex);
  
}

function getTestcaseKey(testname)
{
  var iIndex = testname.indexOf("_");
  com_ut.testcaseKey =testname.substring(0,iIndex);
  Log.Message(com_ut.testcaseKey);
}

function updateTestExecution(testname)
{
  try
  {
      getTestcaseKey(testname);
      var httpUrl=Project.Variables.Rest_URL+"/testexecutions";
      var authToken = Project.Variables.REST_AUTH_TOKEN;
  
      var postCreatTestCycle= aqHttp.CreatePostRequest(httpUrl);
      postCreatTestCycle.SetHeader("Authorization", "Bearer " + authToken);
      postCreatTestCycle.SetHeader("Content-Type", "application/json");

      var httpBody = "{\"projectKey\": \"KT\", \"testCycleKey\": \""+com_ut.testCycleKey+"\","+
                      "\"testCaseKey\": \""+com_ut.testcaseKey+"\","+
                      "\"statusName\": \""+com_ut.passFlag+"\","+
                      "\"testScriptResults\": ["+com_ut.lst_Step.toString()+"]}";
      Log.Message(httpBody);
      var httpResponse = postCreatTestCycle.Send(httpBody);
      com_ut.lst_Step.splice(0, com_ut.lst_Step.length);
  }
  catch(e)
  {
    Log.Error(e.essage);
  }

}
module.exports.updateTestExecution = updateTestExecution;

function updateTestExecutionNoSteps(testname)
{
  try
  {
      getTestcaseKey(testname);
      var httpUrl=Project.Variables.Rest_URL+"/testexecutions";
      var authToken = Project.Variables.REST_AUTH_TOKEN;
  
      var postCreatTestCycle= aqHttp.CreatePostRequest(httpUrl);
      postCreatTestCycle.SetHeader("Authorization", "Bearer " + authToken);
      postCreatTestCycle.SetHeader("Content-Type", "application/json");

      var httpBody = "{\"projectKey\": \"KT\", \"testCycleKey\": \""+com_ut.testCycleKey+"\","+
                      "\"testCaseKey\": \""+com_ut.testcaseKey+"\","+
                      "\"statusName\": \""+com_ut.passFlag+"\","+
                      "\"comment\": \""+com_ut.lst_Step.toString()+"\"}";
                      
      Log.Message(httpBody);
      var httpResponse = postCreatTestCycle.Send(httpBody);
      com_ut.lst_Step.splice(0, com_ut.lst_Step.length);
  }
  catch(e)
  {
    Log.Error(e.message);
  }

}
module.exports.updateTestExecutionNoSteps = updateTestExecutionNoSteps;

function logStep(status,message)
{
      var actualResult="";
      if (status=="VFail")
      {
        //actualResult= message; 
        com_ut.passFlag = "Fail";
        com_ut.lst_Step.push(message); 
      }
      else if (status =="Fail")
      {
        com_ut.passFlag = "Fail";
        //actualResult= "{\"statusName\": \"Fail\",\"actualResult\": \""+message+"\"}";
        com_ut.lst_Step.push(message); 
/*        var currentCount=stepNo++;
        for(var iCount = currentCount; iCount<totalNumberOfSteps; iCount++)
        {
          actualResult= "{\"statusName\": \"Not Executed\",\"actualResult\":\"\" }";
          com_ut.lst_Step.push(actualResult); 
        }
*/
      }
      else if(status =="Pass")
      {
        //actualResult= "{\"statusName\": \"Pass\",\"actualResult\":\"\" }";
        //com_ut.lst_Step.push(actualResult); 
      }  
}
module.exports.logStep = logStep;