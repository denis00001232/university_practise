const imagesLinks = [
  "https://img.freepik.com/free-photo/black-cat-crossing-neon-city-street_23-2152005296.jpg",
  "https://i.pinimg.com/originals/c4/4a/74/c44a74f0553bcf43d178c64a65d52779.jpg",
  "https://i.pinimg.com/originals/5f/6a/c3/5f6ac3a0fc195b11b5fac2ad03bc7f7c.jpg",
  "https://i.pinimg.com/736x/41/04/28/410428969f7180efb67f5743246280d9.jpg",
  "https://i.pinimg.com/originals/a3/29/a1/a329a1a27a1684e05c0ce73c01ddd14a.jpg",
]

const backButton = document.querySelector('.back');
const image = document.querySelector('.image');
const imageRangeValue = document.querySelector('.image-range-value');
const forwardButton = document.querySelector('.forward');

backButton.addEventListener('click', () => {
  clickBack()
})

forwardButton.addEventListener('click', () => {
  clickForward()
})

let currentImage = 0

updateImageRangeValue()
image.setAttribute('src', imagesLinks[currentImage])

function clickBack() {
  currentImage--
  if (currentImage === -1) {
    currentImage = imagesLinks.length - 1
  }
  image.setAttribute('src', imagesLinks[currentImage])
  updateImageRangeValue()
}

function clickForward() {
  currentImage++
  if (currentImage === imagesLinks.length) {
    currentImage = 0
  }
  image.setAttribute('src', imagesLinks[currentImage])
  updateImageRangeValue()
}

function updateImageRangeValue() {
  imageRangeValue.textContent = `Изображение ${currentImage + 1} из ${imagesLinks.length}`
}




