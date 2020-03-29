//random change picture

var images = [
  "https://images.plurk.com/1mVJf90QHSRemW9HhXU91a.png", //by maltoseslime
  "https://images.plurk.com/2CcHWYBCSrXABvW1HbzE94.png" //by kumo
];

function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById('image').src = images[x];
}

randImg(); 