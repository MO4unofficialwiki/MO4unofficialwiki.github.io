//random change picture

var images = [
  "https://images.plurk.com/7eX31mCAIglm7fdGJmW7TD.png",
  "https://images.plurk.com/4tHO33nUjuafO3UjpKQpzY.png",
  "https://images.plurk.com/1gnsOU8zuE1er2hjDZaDPZ.png",
  "https://images.plurk.com/JhkSB5GaJ70mu7s4Dha1w.png",
  "https://images.plurk.com/7mKIRqNtKinyFzhwauqILS.png",
  "https://images.plurk.com/3neBFmauo8XyktQzDJANnY.png",
  "https://images.plurk.com/7iNPgpTtC92e5dVmVi1awX.png",
  "https://images.plurk.com/1WbzwQHKPsDkoxyQWs9j1k.png",
  "https://images.plurk.com/3n01CncwiLAPm1haPFXirT.png",
  "https://images.plurk.com/3TIhiEigudeQ7cjtEWgyRc.png",
  "https://images.plurk.com/2QwejqDFiURaIPaUrkJXwS.png",
  "https://images.plurk.com/aaSnxHDs56iqdAeoakRPz.png",
  "https://images.plurk.com/4Mp5Xhy46wfPcDduY2qAH5.png",
  "https://images.plurk.com/iXJM9upA1yUjDpInIbif3.png",
  "https://images.plurk.com/59JAzy0YwaOUfZD4VMWxjg.png",
  "https://images.plurk.com/MLM6y2n2BXp6tcq65oyZ3.png",
  "https://images.plurk.com/4qq6fQk0ood1ZcJ431AOGg.png"
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