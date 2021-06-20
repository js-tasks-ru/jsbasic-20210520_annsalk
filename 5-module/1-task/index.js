function hideSelf() {
  //let btn = document.getElementsByClassName('hide-self-button');

  let btn = document.querySelector('.hide-self-button');

  btn.addEventListener('click', event => {
    btn.hidden = true;
  });
}
