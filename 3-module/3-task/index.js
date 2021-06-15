function camelize(str) {
  if (str !== "") {
    let resalt = str.split('-').map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
    return resalt;
  }
  return str;
}
