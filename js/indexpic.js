//random change picture

var images = [
  "https://images.plurk.com/66ZfAUsOYPNROkIgvJcZQ4.png", //by maltoseslime
  "https://images.plurk.com/3Ypb2sOc3NlXYZHlisrlBW.png", //by kumo
  "https://images.plurk.com/15bN3U5xVYezMS10UL2AF9.png", //by ゾウリムシ
  "https://images.plurk.com/44gVDWMUkEuTj87SnxevCp.png" //by 山下幸々
];

function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById('image').src = images[x];
}

randImg(); 