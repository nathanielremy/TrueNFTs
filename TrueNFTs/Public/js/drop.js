const lightBox = document.createElement('div');
lightBox.id = 'lightBox';
document.body.appendChild(lightBox);
const lightBoxItems = document.getElementsByClassName('lightBoxItem');
for (var item = 0; item < lightBoxItems.length; item++) {
  const selectedItem = lightBoxItems[item];
  selectedItem.addEventListener('click', (e) => {
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
  lightBox.removeC
});
