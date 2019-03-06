var mapLink = document.querySelector(".map-link");
var formLink = document.querySelector(".callback-link");

var popupMap = document.querySelector(".popup-map");
var popupForm = document.querySelector(".popup-callback");
var popupBasket = document.querySelector(".popup-basket-success");

var popupClose = document.querySelectorAll(".popup-close");
var itemBuy = document.querySelectorAll(".item-buy");


var toggleShow = function(arg) {
  arg.classList.toggle("popup-show");
};

if (mapLink != null) {
  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();  
    toggleShow(popupMap);
  });
};

if (formLink != null) {
  formLink.addEventListener("click", function(evt) {
    evt.preventDefault();  
    toggleShow(popupForm);
  });
};

for (var i = 0, l = popupClose.length; i < l; i++) {
  popupClose[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    this.parentNode.classList.remove("popup-show");      
  });
} 


for (var i = 0, l = itemBuy.length; i < l; i++) {
  itemBuy[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBasket.classList.add("popup-show");      
  });
}
