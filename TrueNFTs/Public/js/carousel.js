const navButtons = document.getElementsByClassName('carouselNavBTN');
const carouselItem = document.getElementsByClassName('dropIntroductionCarouselItem');


var currentImageIndex = 1;
var nextImageIndex = 1;
var translateX = -200;

for(var i = 0; i < navButtons.length; i++) {
  const button = navButtons[i];
  button.addEventListener('click', (e) => {
    let buttonId = button.id;
    if (buttonId === 'b1') {
      nextImageIndex = 1;
    } else if (buttonId === "b2") {
      nextImageIndex = 2;
    } else if (buttonId === "b3") {
      nextImageIndex = 3;
    } else if (buttonId === "b4") {
      nextImageIndex = 4;
    }

    if ((nextImageIndex) === currentImageIndex) {
      return;
    }
    currentImageIndex = nextImageIndex;

    if (nextImageIndex === 1) {
      translateX = 0;
    } else if (nextImageIndex === 2) {
      translateX = -100;
    } else if (nextImageIndex === 3) {
      translateX = -200;
    } else if (nextImageIndex === 4) {
      translateX = -300;
    }

    setNewImage(translateX, nextImageIndex);
  });
};

function setNewImage(position, index) {
  navButtons[0].style.background = 'none';
  navButtons[0].style.backgroundColor = 'white';
  navButtons[0].style.opacity = '0.33';
  navButtons[1].style.background = 'none';
  navButtons[1].style.backgroundColor = 'white';
  navButtons[1].style.opacity = '0.33';
  navButtons[2].style.background = 'none';
  navButtons[2].style.backgroundColor = 'white';
  navButtons[2].style.opacity = '0.33';
  navButtons[3].style.background = 'none';
  navButtons[3].style.backgroundColor = 'white';
  navButtons[3].style.opacity = '0.33';

  navButtons[index - 1].style.backgroundImage = 'linear-gradient(to right, #FFFF00 50%, #008080 50%)';
  navButtons[index - 1].style.opacity = '0.6';

  carouselItem[0].style.transform = 'translateX('+position+'%)';
  carouselItem[1].style.transform = 'translateX('+position+'%)';
  carouselItem[2].style.transform = 'translateX('+position+'%)';
  carouselItem[3].style.transform = 'translateX('+position+'%)';
}
