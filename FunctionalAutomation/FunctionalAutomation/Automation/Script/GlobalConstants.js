var dataGenerator= require("DataGenerator");

var parentHandle =Sys.Process("KarismaClient"); 
module.exports.parentHandle = parentHandle;
var longTimeout = 60000;
module.exports.longTimeout = longTimeout;
var mediumTimeout = 30000;
module.exports.mediumTimeout = mediumTimeout;
var shortTimeout = 2000;
module.exports.shortTimeout = shortTimeout;
var lst_Step = new Array();
var lst_Name = new Array();
var testCycleKey, testcaseKey;
var passFlag = "Pass";

var windowTitle = "Are you sure you want to delete this patient?";
const onlyShow ="Only Show Current worksite";
const DontShow ="Don't Show Current worksite";
const manageWindowTitle="MANAGE CUSTOM FILTERS";
const wardOnly="Ward Only Show";
const worksiteOnly="Worksite Only Show";
const worksiteExclude="Worksite Exclude";
const requestingUnitOnly="Requesting unit Only Show";
const requestingUnitExclude="Requesting unit Exclude";
const worksite="Work Site";
const serviceDepartment="Service Department";
const allocatedResource="Allocated resource";
const all="All";

module.exports.wardOnly=wardOnly;
module.exports.worksiteOnly=worksiteOnly;
module.exports.worksiteExclude=worksiteExclude;
module.exports.requestingUnitOnly=requestingUnitOnly;
module.exports.requestingUnitExclude=requestingUnitExclude;
module.exports.worksite=worksite;
module.exports.all=all;
module.exports.allocatedResource=allocatedResource;
module.exports.serviceDepartment=serviceDepartment;




//Keyboard Keys
const SELECT_ALL = "^A";
const COPY = "^C";

const receiveRequestPOPupTitle="Receive Request Details";
const registerRequestPOPupTitle="Register Request Details";
const newRequestRecipientPopupTitle="NEW REQUEST RECIPIENT";
const selectWorksitePopUpTitle="SELECT WORK SITE";
const selectFinancialSitePopUpTitle="SELECT FINANCIAL SITE";
const selectUnitPopupTitle="SELECT UNIT";
const selectRequestPriorityTypePopupTitle="SELECT REQUEST PRIORITY TYPE";
const checkRequestConditionTypePopupTitle="CHECK REQUEST CONDITION TYPE";

module.exports.receiveRequestPOPupTitle=receiveRequestPOPupTitle;
module.exports.registerRequestPOPupTitle=registerRequestPOPupTitle;
module.exports.newRequestRecipientPopupTitle=newRequestRecipientPopupTitle;
module.exports.selectWorksitePopUpTitle=selectWorksitePopUpTitle;
module.exports.selectFinancialSitePopUpTitle=selectFinancialSitePopUpTitle;
module.exports.selectUnitPopupTitle=selectUnitPopupTitle;
module.exports.selectRequestPriorityTypePopupTitle=selectRequestPriorityTypePopupTitle;
module.exports.checkRequestConditionTypePopupTitle=checkRequestConditionTypePopupTitle;

const clinicalNotesText = "Clinical Notes Text " + dataGenerator.generateRandomNumberBasedOnLength(2);
const schedulingNotesText = "Scheduling Note Text " + dataGenerator.generateRandomNumberBasedOnLength(2);
const imagingNotesText = "Imaging Notes " + dataGenerator.generateRandomNumberBasedOnLength(2);
const accountingNotesText = "Accounting Notes Text " + dataGenerator.generateRandomNumberBasedOnLength(2);
const orderNotesText = "Order Notes Text " + dataGenerator.generateRandomNumberBasedOnLength(2);

module.exports.clinicalNotesText=clinicalNotesText
module.exports.schedulingNotesText=schedulingNotesText
module.exports.imagingNotesText=imagingNotesText
module.exports.accountingNotesText=accountingNotesText
module.exports.orderNotesText=orderNotesText

const hospitalPopUpTitile= "SELECT HOSPITAL";
const wardPopUpTitile= "SELECT WARD";
module.exports.hospitalPopUpTitile=hospitalPopUpTitile;
module.exports.wardPopUpTitile=wardPopUpTitile;

module.exports.testCycleKey=testCycleKey;
module.exports.lst_Step = lst_Step;
module.exports.testcaseKey = testcaseKey;
module.exports.passFlag =passFlag;
module.exports.lst_Name = lst_Name;
module.exports.windowTitle = windowTitle;
module.exports.SELECT_ALL=SELECT_ALL;
module.exports.COPY=COPY;
module.exports.onlyShow=onlyShow;
module.exports.DontShow=DontShow;
module.exports.manageWindowTitle=manageWindowTitle;

const requestIssueReportPopUpTitle="REQUEST ISSUE REPORT";
module.exports.requestIssueReportPopUpTitle=requestIssueReportPopUpTitle;
const errorForMedicareNumber="does not have identifiers of identifier type(s) 'MedicareNo'"
module.exports.errorForMedicareNumber=errorForMedicareNumber