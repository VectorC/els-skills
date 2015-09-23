var openBrowser = function() {
  var gui = require('nw.gui');
  $('#targetlink1').click(function() {
    gui.Shell.openExternal('http://tieba.baidu.com/p/3982981598');
  });

  $('#targetlink2').click(function() {
    //console.log('adad');
    gui.Shell.openExternal('http://tieba.baidu.com/p/3983171302');
  });

  $('#targetlink3').click(function() {
    //console.log('adad');
    gui.Shell.openExternal('http://talent.elsword.club/');
  });

  $('#targetlink4').click(function() {
    //console.log('adad');
    gui.Shell.openExternal('http://elsword.club/');
  });
}

var allFunctions = function() {
  particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  //console.log('callback - particles.js config loaded');
});

  var isNode = (typeof process !== "undefined" && typeof require !== "undefined");

  if (isNode) {
    //console.log("Yes");
    $(".targetlink").removeAttr("target");
    openBrowser();
  } else {
    $("#targetlink1").attr("href", "http://tieba.baidu.com/p/3982981598");
    $("#targetlink2").attr("href", "http://tieba.baidu.com/p/3983171302");
    $("#targetlink3").attr("href", "http://talent.elsword.club/");
    $("#targetlink4").attr("href", "http://elsword.club/");
  }
  //cause error in nodewebkit
  try {
    Waves.attach('.col-xs-2', ['waves-block']);
    Waves.init();

    $('.col-xs-2').mouseenter(function() {
      Waves.ripple(this, {
        wait: null
      });
    }).mouseleave(function() {
      Waves.calm(this);
    });
  } catch (e) {}
  
  $('[data-toggle="tooltip"]').tooltip();
}

$(document).ready(allFunctions);