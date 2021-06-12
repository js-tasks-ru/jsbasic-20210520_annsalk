function checkSpam(str) {
  var newStr = str.toLowerCase();
  var subStr = "1XbeT";
  var subStr2 = "xxxxx";
  var newSubStr = subStr.toLowerCase();
  var newSubStr2 = subStr2.toLowerCase();


  if (newStr.includes(newSubStr) || newStr.includes(newSubStr2)) {
    return true;
  }
  else {
    return false;
  }
}
