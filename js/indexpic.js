//random change picture

var images = [
  "https://images.plurk.com/xHdKNEwqMKqVQx8gb1F5.png", //by maltoseslime
  "https://images.plurk.com/2qnYcMhmlQQvb8a1c8RQ1p.png", //by kumo
  "https://images.plurk.com/3JbyAT52bnBx0sstc9gv1P.png" //by ゾウリムシ
];

function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById('image').src = images[x];
}

randImg(); 