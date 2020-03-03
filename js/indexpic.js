//random change picture

var images = [
  "https://images.plurk.com/6xihNXYktZnG6k3hq8YCw4.png",
  "https://images.plurk.com/69NqpqPIPm8xK7FDDRtnwa.png",
  "https://images.plurk.com/3zeDdqEhnFaMix5CEaY2Ua.png",
  "https://images.plurk.com/68EakSvxkxdNLEhQXuo8Bm.png",
  "https://images.plurk.com/tE6Q77wReE1CECC8knbUw.png",
  "https://images.plurk.com/711CHLs9HpSGcwjgdRMf2R.png",
  "https://images.plurk.com/5fLjGndqIWlMApEf8jazlb.png",
  "https://images.plurk.com/49w2YKij8cY3Lp7oZsw9Js.png",
  "https://images.plurk.com/5ze3H1C012o3O6zfi5LBUo.png",
  "https://images.plurk.com/1VWLkODbE6tZ4Jm8szjtnA.png",
  "https://images.plurk.com/7rnCODtiMPp8ZZ3CpjOQs6.png",
  "https://images.plurk.com/5I8cLVHwcnYf6XJDkv80A1.png",
  "https://images.plurk.com/6NPRERH50Ozgc8SiXH2eBM.png",
  "https://images.plurk.com/1CQ4up7TUfwsS6UCMB1ydN.png",
  "https://images.plurk.com/5zzugpbeegkqy3XBk01FPr.png"
];

function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById('image').src = images[x];
}

randImg(); 

// show div when scroll

$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

      /* Check the location of each desired element */
    $('.hideme').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},500);     
      }

    });

  });

});