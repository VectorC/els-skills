var burnerAnimation = function(){
  var numImgs = 16;
  var count = 1;
  var animation1 = setInterval(function(){
    $('.ice').attr('class', 'ice sprite sprite-ice' + count);
    
    count++;
    if(count == numImgs){
      clearInterval(animation1);
      $('#items').css('display', 'block');
      itemAnimation();
    }
},150);
}

var itemAnimation = function(){
  var numImgs = 36;
  var count = 1;
  var min = 18;
  var max = 36
  var num = Math.floor((Math.random() * (max - min + 1) + min));
  var animation2 = setInterval(function(){
    $('#items').attr('class', 'sprite-item sprite-item-item' + count);
    
    count++;
    if(count == num){
      clearInterval(animation2);
      $("#go").removeAttr('disabled');
      $("#go").html('再來一發');
      drawItem();
    }
},100);
}

var drawItem = function(){
  var random = Math.random() * 100;
  //console.log(random);
  
  if(random < 0.14){
    //console.log("0.14% chance");
    var min = 1;
    var max = 2
    var num = Math.floor((Math.random() * (max - min + 1) + min));
    
    if(num == 1){
      $('#items').attr('class', 'sprite-item sprite-item-item13');
      $("<i class='got sprite-item sprite-item-item13'>").appendTo("#box1");
    } else {
      $('#items').attr('class', 'sprite-item sprite-item-item21');
      $("<i class='got sprite-item sprite-item-item21'>").appendTo("#box1");
    }
  } else if(random < 0.4){
    //console.log("0.4% chance");
    $('#items').attr('class', 'sprite-item sprite-item-item25');
    $("<i class='got sprite-item sprite-item-item25'>").appendTo("#box1");
  } else if(random < 7.5){
    //console.log("7.5% chance");
    var list1 = ["5", "7", "9", "14", "17","20","23","27","28","29", "31", "33", "35"];
    var i1 = list1[Math.floor(Math.random() * list1.length)];
    $('#items').attr('class', 'sprite-item sprite-item-item' + i1);
    $('<i class="got sprite-item sprite-item-item' + i1 +'">').appendTo("#box1");
  } else if(random < 14.1){
    //console.log("14.1% chance");
    var list2 = ["8", "10", "2", "6", "11","15","18","19","22","24","26", "30", "32", "34", "36"];
    var i2 = list2[Math.floor(Math.random() * list2.length)];
    $('#items').attr('class', 'sprite-item sprite-item-item' + i2);
    $('<i class="got sprite-item sprite-item-item' + i2 +'">').appendTo("#box1");
  } else if (random < 33){
    //console.log("33% chance");
    var list3 = ["4", "12"];
    var i3 = list3[Math.floor(Math.random() * list3.length)];
    $('#items').attr('class', 'sprite-item sprite-item-item' + i3);
    $('<i class="got sprite-item sprite-item-item' + i3 +'">').appendTo("#box1");
  } else {
    //console.log("44.86% chance");
    var list4 = ["1", "16", "3"];
    var i4 = list4[Math.floor(Math.random() * list4.length)];
    $('#items').attr('class', 'sprite-item sprite-item-item' + i4);
    $('<i class="got sprite-item sprite-item-item' + i4 +'">').appendTo("#box1");
  }
  itemName();
}

var button = function(){
  var cishu = 0;
  var rmb = 0;
  $("#confirm").click(function(){
    if($('#id').val().length !== 0){
      $("#confirm").attr('class', 'fa fa-lock fa-2x');
      $('#id').attr('disabled', 'disabled');
      $("#go").removeAttr('disabled');
    } else {
      $('#id').css('border','1px solid red');
      $('#id').attr('placeholder', 'ID 不能爲空');
    }
  });
  
  $("#go").click(function(){
    burnerAnimation();
    $("#go").attr('disabled', 'disabled');
    $('#items').hide();
    cishu++;
    $("#yicuo").html(cishu);
    $("#kejin").html(Math.round(cishu * 3.9));
    $(".info").hide();
    $("#loud2").html('');
    $('.ice').attr('class', 'ice sprite sprite-ice1');
  });
}

var itemName = function(){
  var item2 = "減傷特級魔法石";
  var item11 = "暴擊特級魔法石";
  var item6 = "速度特級魔法石";
  var item19 = "追傷特級魔法石";
  
  var item5 = "皇室鐵衛軍上衣 (露)";
  var item9 = "皇室鐵衛軍手套 (露)";
  var item14 = "皇室鐵衛軍披風 (露)";
  var item17 = "皇室鐵衛軍髮型 (露)";
  var item20 = "皇室鐵衛軍下衣 (露)";
  var item23 = "皇室鐵衛軍武器 (露)";
  var item27 = "皇室鐵衛軍髮飾 (露)";
  var item31 = "皇室鐵衛軍手臂護盾 (露)";
  var item35 = "皇室鐵衛軍鞋子 (露)";
  
  var item7 = "強化符咒Lv.8";
  var item13 = "強化符咒Lv.12";
  var item21 = "強化符咒Lv.11";
  var item25 = "強化符咒Lv.10";
  var item29 = "強化符咒Lv.9";
 
  var item8 = "不滅的鬥志";
  var item10 = "職業時裝 (7天)";
  var item22 = "武器飾品箱子";
  
  var target = $('#items').attr('class');
  switch(target){
    case'sprite-item sprite-item-item2':
      $("#loud2").html(item2);
    break;
      
    case'sprite-item sprite-item-item15':
      $("#loud2").html(item2);
    break;
      
    case'sprite-item sprite-item-item24':
      $("#loud2").html(item2);
    break;
      
    case'sprite-item sprite-item-item11':
      $("#loud2").html(item11);
    break;
      
    case'sprite-item sprite-item-item26':
      $("#loud2").html(item11);
    break;
      
    case'sprite-item sprite-item-item30':
      $("#loud2").html(item11);
    break;
      
    case'sprite-item sprite-item-item6':
      $("#loud2").html(item6);
    break;
      
    case'sprite-item sprite-item-item34':
      $("#loud2").html(item6);
    break;
      
    case'sprite-item sprite-item-item18':
      $("#loud2").html(item6);
    break;
      
    case'sprite-item sprite-item-item19':
      $("#loud2").html(item19);
    break;
      
    case'sprite-item sprite-item-item32':
      $("#loud2").html(item19);
    break;
      
    case'sprite-item sprite-item-item36':
      $("#loud2").html(item19);
    break;
      
    /////////////////////////////////////////
      
    case'sprite-item sprite-item-item5':
      $("#loud2").html(item5);
    break;
    
    case'sprite-item sprite-item-item9':
      $("#loud2").html(item9);
    break;
      
    case'sprite-item sprite-item-item14':
      $("#loud2").html(item14);
    break;
      
    case'sprite-item sprite-item-item17':
      $("#loud2").html(item17);
    break;
      
    case'sprite-item sprite-item-item20':
      $("#loud2").html(item20);
    break;
      
    case'sprite-item sprite-item-item23':
      $("#loud2").html(item23);
    break;
      
    case'sprite-item sprite-item-item27':
      $("#loud2").html(item27);
    break;
      
    case'sprite-item sprite-item-item31':
      $("#loud2").html(item31);
    break;
      
    case'sprite-item sprite-item-item35':
      $("#loud2").html(item35);
    break;
      
    case'sprite-item sprite-item-item7':
      $("#loud2").html(item7);
    break;
      
    case'sprite-item sprite-item-item13':
      $("#loud2").html(item13);
    break;
      
    case'sprite-item sprite-item-item21':
      $("#loud2").html(item21);
    break;
      
    case'sprite-item sprite-item-item25':
      $("#loud2").html(item25);
    break;
      
    case'sprite-item sprite-item-item29':
      $("#loud2").html(item29);
    break;
      
    case'sprite-item sprite-item-item8':
      $("#loud2").html(item8);
    break;
      
    case'sprite-item sprite-item-item10':
      $("#loud2").html(item10);
    break;
      
    case'sprite-item sprite-item-item22':
      $("#loud2").html(item22);
    break;
      
    default:
  }
  
  if ($("#loud2").html().length > 0){
    var user = $('#id').val();
    $("#loud1").html('"' + user + '"');
    $(".info").show();
  }
}

var allFunctions = function(){
  button();
  $("#id").removeAttr('disabled');
  $('#id').val('');
}

$(window).load(allFunctions)