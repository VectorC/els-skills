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
    var list1 = ["5", "7", "9", "14", "17","20","23","27","28","29", "31", "33", "35", "39", "41", "42", "43", "44", "45", "46", "47", "48", "50", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "91", "93", "94", "95", "96", "97", "98", "100"];
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
    var list3 = ["4", "12", "38", "55", "56", "57", "58", "59", "60", "61", "62", "63"];
    var i3 = list3[Math.floor(Math.random() * list3.length)];
    $('#items').attr('class', 'sprite-item sprite-item-item' + i3);
    $('<i class="got sprite-item sprite-item-item' + i3 +'">').appendTo("#box1");
  } else {
    //console.log("44.86% chance");
    var list4 = ["1", "16", "3", "37", "40", "49", "51", "52", "53", "54", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "99"];
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
    document.getElementById('sound').play();
    burnerAnimation();
    $("#go").attr('disabled', 'disabled');
    $('#items').hide();
    cishu++;
    $("#yicuo").html(cishu);
    $("#kejin").html((cishu * 3.97654).toFixed(2));
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
  
  var item5 = "拜德學院騎士上衣 (希爾)";
  var item9 = "拜德學院騎士手套 (希爾)";
  var item14 = "奇蹟鍊金術士徽章 (希爾)";
  var item17 = "拜德學院騎士帽子 (希爾)";
  var item20 = "納斯德戰場套裝下衣 (希爾)";
  var item23 = "假面舞會武器 (希爾)";
  var item27 = "假面舞會面具 (希爾)";
  var item31 = "奇蹟鍊金術士地陣 (希爾)";
  var item35 = "拜德學院騎士鞋子 (希爾)";
  var item43 = "皇室鐵衛軍上衣 (露)";
  var item46 = "皇室鐵衛軍手套 (露)";
  var item39 = "皇室鐵衛軍披風 (露)";
  var item41 = "皇室鐵衛軍髮型 (露)";
  var item44 = "皇室鐵衛軍下衣 (露)";
  var item42 = "皇室鐵衛軍武器 (露)";
  var item47 = "皇室鐵衛軍髮飾 (露)";
  var item48 = "皇室鐵衛軍手臂護盾 (露)";
  var item45 = "皇室鐵衛軍鞋子 (露)";
  var item79 = "弧光惡魔髮型 (露)";
  var item80 = "拜德學院騎士上衣 (露)";
  var item81 = "弧光惡魔下衣 (露)";
  var item82 = "拜德學院騎士下衣 (露)";
  var item83 = "拜德學院騎士帽子 (露)";
  var item84 = "奇蹟鍊金術士武器 (露)";
  var item85 = "假面舞會羽翼 (露)";
  var item86 = "奇蹟鍊金術士手套 (露)";
  var item87 = "豐饒地靈鞋子 (露)";
  var item88 = "你猜猜是誰的虛翼";
  var item89 = "假面舞會髮型 (希爾)";
  var item90 = "假面舞會上衣 (希爾)";
  var item91 = "拜德學院騎士下衣 (希爾)";
  var item92 = "假面舞會髮型 (希爾)";
  var item93 = "太陽神索雷斯武器 (希爾)";
  var item94 = "奇蹟鍊金術士上衣 (希爾)";
  var item95 = "奇蹟鍊金術士帽子 (露)";
  var item96 = "豐饒地靈紋章 (希爾)";
  var item97 = "假面舞會髮型 (露)";
  var item98 = "奇蹟鍊金術士帽子 (希爾)";
  var item100 = "太陽神索雷斯上衣 (希爾)";
  
  var item7 = "強化符咒Lv.8";
  var item13 = "強化符咒Lv.12";
  var item21 = "強化符咒Lv.11";
  var item25 = "強化符咒Lv.10";
  var item29 = "強化符咒Lv.9";
 
  var item8 = "不滅的鬥志";
  var item10 = "職業時裝 (7天)";
  var item22 = "武器飾品箱子";
  
  var item50 = "熊貓教主の懶惰"
  
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
      
    ///////////////////above stone//////////////////////
      
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
      
    case'sprite-item sprite-item-item43':
      $("#loud2").html(item43);
    break;
      
    case'sprite-item sprite-item-item46':
      $("#loud2").html(item46);
    break;
      
    case'sprite-item sprite-item-item39':
      $("#loud2").html(item39);
    break;
    
    case'sprite-item sprite-item-item41':
      $("#loud2").html(item41);
    break;
      
    case'sprite-item sprite-item-item42':
      $("#loud2").html(item42);
    break;
      
    case'sprite-item sprite-item-item44':
      $("#loud2").html(item44);
    break;
      
    case'sprite-item sprite-item-item47':
      $("#loud2").html(item47);
    break;
      
    case'sprite-item sprite-item-item48':
      $("#loud2").html(item48);
    break;
      
    case'sprite-item sprite-item-item45':
      $("#loud2").html(item45);
    break;
      
    case'sprite-item sprite-item-item79':
      $("#loud2").html(item79);
    break;
      
    case'sprite-item sprite-item-item80':
      $("#loud2").html(item80);
    break;
      
    case'sprite-item sprite-item-item81':
      $("#loud2").html(item81);
    break;
      
    case'sprite-item sprite-item-item82':
      $("#loud2").html(item82);
    break;
      
    case'sprite-item sprite-item-item83':
      $("#loud2").html(item83);
    break;
      
    case'sprite-item sprite-item-item84':
      $("#loud2").html(item84);
    break;
      
    case'sprite-item sprite-item-item85':
      $("#loud2").html(item85);
    break;
      
    case'sprite-item sprite-item-item86':
      $("#loud2").html(item86);
    break;
      
    case'sprite-item sprite-item-item87':
      $("#loud2").html(item87);
    break;
      
    case'sprite-item sprite-item-item88':
      $("#loud2").html(item88);
    break;
      
    case'sprite-item sprite-item-item89':
      $("#loud2").html(item89);
    break;
      
    case'sprite-item sprite-item-item90':
      $("#loud2").html(item90);
    break;
      
    case'sprite-item sprite-item-item91':
      $("#loud2").html(item91);
    break;
      
    case'sprite-item sprite-item-item92':
      $("#loud2").html(item92);
    break;
      
    case'sprite-item sprite-item-item93':
      $("#loud2").html(item93);
    break;
      
    case'sprite-item sprite-item-item94':
      $("#loud2").html(item94);
    break;
      
    case'sprite-item sprite-item-item95':
      $("#loud2").html(item95);
    break;
      
    case'sprite-item sprite-item-item96':
      $("#loud2").html(item96);
    break;
      
    case'sprite-item sprite-item-item97':
      $("#loud2").html(item97);
    break;
      
    case'sprite-item sprite-item-item98':
      $("#loud2").html(item98);
    break;
      
    case'sprite-item sprite-item-item100':
      $("#loud2").html(item100);
    break;
    
    /////////////////////above ice set////////////////////
    case'sprite-item sprite-item-item50':
      $("#loud2").html(item50);
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