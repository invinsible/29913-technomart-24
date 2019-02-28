var mapLink = document.querySelector(".map-link");
var formLink = document.querySelector(".callback-link");

var popupMap = document.querySelector(".popup-map");
var popupForm = document.querySelector(".popup-callback");

//var popup = document.querySelectorAll(".popup");
var popupClose = document.querySelectorAll(".popup-close");


var toggleShow = function(arg) {
  arg.classList.toggle("popup-show");
};

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();  
  toggleShow(popupMap);
});

formLink.addEventListener("click", function(evt) {
  evt.preventDefault();  
  toggleShow(popupForm);
});


for (var i = 0, l = popupClose.length; i < l; i++) {
  popupClose[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    this.parentNode.classList.remove("popup-show");      
  });
} 





// for (var c = 0, b = popupClose.length; c <= b; c++) {
//   popupClose[c].addEventListener("click", function(evt) {    
//   });





// formLink.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   if (popupForm.classList.contains("popup-show")) {
//     popupForm.classList.remove("popup-show");
//   } else {
//     popupForm.classList.add("popup-show");
//   }  
// });

// for (var i = 0, l = popupClose.length; i <= l; i++) {
//   popupClose[i].addEventListener("click", function(evt) {    
//   });
// }

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     evt.preventDefault();
//     if (popup.classList.contains("popup-show")) {
//       popup.classList.remove("popup-show");
//     }
//   }
// });