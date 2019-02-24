var mapLink = document.querySelector(".map-link");
var formLink = document.querySelector(".callback-link");
var popupMap = document.querySelector(".popup-map");
var popupForm = document.querySelector(".popup-callback");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup-close");


mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();  
  if (popupMap.classList.contains("popup-show")) {
    popupMap.classList.remove("popup-show");
  } else {
    popupMap.classList.add("popup-show");
  }  
});

formLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (popupForm.classList.contains("popup-show")) {
    popupForm.classList.remove("popup-show");
  } else {
    popupForm.classList.add("popup-show");
  }  
});

popupClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
    }
  }
});