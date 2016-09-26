var cutIn = function(){

  var randomImage = Math.floor((Math.random() * 13) + 1);
  var imagePath = $(".chacracter").attr('id');

  switch (imagePath){
      case'eve':
        $(".chacracter").addClass("sprite-cutin sprite-cutin-cutin"+randomImage);
      break;

      case'chung':
        $(".chacracter").addClass("sprite-cutin sprite-cutin-cutin"+randomImage);
      break;

      case'raven':
        $(".chacracter").addClass("sprite-cutin sprite-cutin-cutin"+randomImage);
      break;

      case'rena':
        $(".chacracter").addClass("sprite-cutin sprite-cutin-cutin"+randomImage);
      break;

      case'aisha':
        $(".chacracter").addClass("sprite-cutin sprite-cutin-cutin"+randomImage);
      break;

      case'elsword':
        $(".chacracter").addClass("sprite-cutin sprite-cutin-cutin"+randomImage);
      break;

      case'ara':
        $(".chacracter").addClass("sprite-cutin sprite-cutin-cutin"+randomImage);
      break;

      case'add':
        $(".chacracter").addClass("sprite-cutin sprite-cutin-cutin"+randomImage);
      break;

      default:
  }

  //check windows size
  var x = $(window).width();
  var y = $(window).height();

  //set background to windows size
  $('#back').css({
    "width": x,
    "height": y
  });

  // move cutin in and out-----------------------------------
  $('.chacracter').animate({
    "bottom": 0,
    "left": 0,
    "opacity": 1
  }, 300);
  setTimeout(function(){
    $('.chacracter').animate({
    "left": 100,
    "opacity": 0
  }, 800);
  }, 500)
  // move cutin in and out----------------------------------

  //$('#back').fadeIn(500).delay(300).fadeOut(500);//刪了他！
  //hide cut in
  setTimeout(function(){
    $('.chacracter').css({"display": "none"});
  }, 1400)
}
