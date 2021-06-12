function truncate(str, maxlength) {
  var resalt = str;
  if (str.length > maxlength){
    resalt = str.slice(0, maxlength-1) + "…";
    return resalt;
  }
  return resalt;
}
