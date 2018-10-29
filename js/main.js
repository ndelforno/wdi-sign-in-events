document.addEventListener('DOMContentLoaded', function(){
//signin
  function displayModal() {
    var modal = document.querySelector('.modal')
    modal.style.display = "block"
  };
  var buttonSignin = document.querySelector('.signin');
  buttonSignin.addEventListener('click', displayModal)
//close signin

  var buttonClose = document.querySelector('.close')
  buttonClose.addEventListener('click', closeSignin)
  function closeSignin(){
    var modal = document.querySelector('.modal')
    modal.style.display = "none"
  }

  var submit = document.querySelector('.submit')
  submit.addEventListener('click', errorToInput)
  function errorToInput(){
    var inputs = document.querySelectorAll('input')
    for (i=0; i<inputs.length; i++){
      inputs[i].className = "error"
      console.log(inputs[i]);
      inputs[i].addEventListener('click', removeError)
    }
  }

  function removeError(){
    console.log('its ok');
    var inputs = document.querySelectorAll('input');
    for (i=0; i<inputs.length; i++){
      inputs[i].classList.remove("error")
    }
  }

})
