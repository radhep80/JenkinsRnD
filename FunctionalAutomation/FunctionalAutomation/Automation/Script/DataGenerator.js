function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

module.exports.generateRandomString = generateRandomString;

function generateRandomNumber(maximum) {
    return Math.floor(Math.random() * maximum);
}
module.exports.generateRandomNumber = generateRandomNumber;

function generateRandomNumberBasedOnLength(length) {
    let randomNumber = '';
    for (let i = 0; i < length; i++) {
        randomNumber += Math.floor(Math.random() * 10); 
    }
    return randomNumber;
}

module.exports.generateRandomNumberBasedOnLength = generateRandomNumberBasedOnLength;

function getRandomYear(minYear) {
    const maxYear =2022;
    return Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
}
module.exports.getRandomYear=getRandomYear;
 
function getRandomMonth() {
    const month = Math.floor(Math.random() * 12) + 1;
    return month < 10 ? '0' + month : month.toString();
}
 
module.exports.getRandomMonth = getRandomMonth;
 
function getRandomDayFormatted() {
    const day = Math.floor(Math.random() * 28) + 1; 
    return day < 10 ? '0' + day : day.toString();
}
module.exports.getRandomDayFormatted=getRandomDayFormatted;

function getcurrentDate()
{
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var dateVal=day+""+month+""+year;
    return dateVal;
}
module.exports.getcurrentDate=getcurrentDate;

function generateContactNo(){
  var contactNumber="0"+generateRandomNumberBasedOnLength(9);
  return contactNumber;
}
module.exports.generateContactNo=generateContactNo;