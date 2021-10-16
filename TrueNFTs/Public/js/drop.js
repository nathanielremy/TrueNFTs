//Show Lightbox of NFT when NFT clicked
const lightBox = document.createElement('div');
const lightBoxItems = document.getElementsByClassName('lightBoxItem');
for (var item = 0; item < lightBoxItems.length; item++) {
  const selectedItem = lightBoxItems[item];
  selectedItem.addEventListener('click', (e) => {
    lightBox.id = 'lightBox';
    document.body.appendChild(lightBox);
    lightBox.classList.add('active');
    const lightBoxImage = document.createElement('img');
    lightBoxImage.src = selectedItem.src;

    while(lightBox.firstChild) {
      lightBox.removeChild(lightBox.firstChild);
    };

    lightBox.appendChild(lightBoxImage);
  });
};

lightBox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) {
    return;
  };
  lightBox.classList.remove('active');
});

//Show Suicide Gang roadmap when button clicked
const gangPlanLB = document.querySelector('.gangPlanLB');
gangPlanLB.addEventListener('click', e => {
  if (e.target !== e.currentTarget) {
    return;
  };
  gangPlanLB.classList.remove('active');
});

const gangPlan = document.querySelector('.gangPlanButton');
gangPlan.addEventListener('click', e => {
  gangPlanLB.classList.add('active');
});
