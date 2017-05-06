var clickedbutton = document.getElementById('buttonClick');


function init() {
  clickedbutton.addEventListener('mouseover', catchTheButton);
}

function catchTheButton() {

  var randomNum = Math.random();

  if(randomNum < 0.25){

    clickedbutton.style.left = (clickedbutton.offsetLeft +
      clickedbutton.offsetWidth) + 'px';
  } else if (randomNum < 0.5){

  clickedbutton.style.left = (clickedbutton.offsetLeft -
    clickedbutton.offsetWidth) + 'px';

  } else if (randomNum < 0.75){

    clickedbutton.style.top = (clickedbutton.offsetTop +
      clickedbutton.offsetHeight) + 'px';

  } else {
    clickedbutton.style.top = (clickedbutton.offsetTop -
    clickedbutton.offsetHeight) + 'px';
  }
}
init()
