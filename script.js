 // Global scope variable
 let animationState = false;

 // Function to animate the box
 function animateBox(elementId) {
  const element = document.getElementById(elementId);
  element.classList.toggle('box-animate');
  return element.classList.contains('box-animate'); // Return the new state
 }

 // Function to flip the card
 function flipCard(cardElement) {
  cardElement.classList.toggle('flip');
 }

 // Function to update loading bar width
 function updateLoadingBar(barElement, width) {
  barElement.style.width = width + '%';
 }

 // Function to show/hide popup
 function togglePopup(popupElement, show) {
  popupElement.classList.toggle('show', show);
 }

 document.addEventListener('DOMContentLoaded', function() {
  const animatedButton = document.getElementById('animatedButton');
  const animatedBox = document.getElementById('animatedBox');
  const card = document.querySelector('.card');
  const loadingBar = document.getElementById('loadingBar');
  const startLoadingButton = document.getElementById('startLoading');
  const stopLoadingButton = document.getElementById('stopLoading');
  const popup = document.getElementById('popup');
  const showPopupButton = document.getElementById('showPopup');
  const closeButton = document.querySelector('.close-button');

  // Event listeners
  animatedButton.addEventListener('click', function() {
  animationState = animateBox('animatedBox');
  console.log('Animation State:', animationState);
  });

  card.addEventListener('click', function() {
  flipCard(this);
  });

  startLoadingButton.addEventListener('click', function() {
  let width = 0;
  const intervalId = setInterval(function() {
  if (width >= 100) {
  clearInterval(intervalId);
  } else {
  width += 10;
  updateLoadingBar(loadingBar, width);
  }
  }, 300);
  });

  stopLoadingButton.addEventListener('click', function() {
  updateLoadingBar(loadingBar, 0);
  });

  showPopupButton.addEventListener('click', function() {
  togglePopup(popup, true);
  });

  closeButton.addEventListener('click', function() {
  togglePopup(popup, false);
  });
 });
