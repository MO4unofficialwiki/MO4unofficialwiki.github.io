//random change picture

var images = [
  "https://images.plurk.com/mU5h61kIWs0v0zcBaFFQH.png",
  "https://images.plurk.com/2CcHWYBCSrXABvW1HbzE94.png"
];

function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById('image').src = images[x];
}

randImg(); 