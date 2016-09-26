var hoverPreview = function(){
  //load global skill variables
  $.getScript("../vars.js");

  $(".branch").hover(function(){
      var target=$(this).attr('id');

      switch(target){
        case'enhanced':
          var preview=$("<div class='mdetail'>").append(enhanced);
        break;

        case'cd':
          var preview=$("<div class='mdetail'>").append(cd);
        break;

        case'last':
          var preview=$("<div class='mdetail'>").append(last);
        break;

        case'last1':
          var preview=$("<div class='mdetail'>").append(last1);
        break;

        case'last0':
          var preview=$("<div class='mdetail'>").append(last0);
        break;

        case'enhanced5':
          var preview=$("<div class='mdetail'>").append(enhanced5);
        break;

        case'buffamount':
          var preview=$("<div class='mdetail'>").append(buffamount);
        break;

        case'buffamount0':
          var preview=$("<div class='mdetail'>").append(buffamount0);
        break;

        case'buffamount1':
          var preview=$("<div class='mdetail'>").append(buffamount1);
        break;

        case'enhanced4':
          var preview=$("<div class='mdetail'>").append(enhanced4);
        break;

        case'bufftime':
          var preview=$("<div class='mdetail'>").append(bufftime);
        break;

        case'bufftime3':
          var preview=$("<div class='mdetail'>").append(bufftime3);
        break;

        case'bufftime2':
          var preview=$("<div class='mdetail'>").append(bufftime2);
        break;

        case'bufftime1':
          var preview=$("<div class='mdetail'>").append(bufftime1);
        break;

        case'enhanced3':
          var preview=$("<div class='mdetail'>").append(enhanced3);
        break;

        case'zaisheng':
          var preview=$("<div class='mdetail'>").append(zaisheng);
        break;

        case'zaisheng1':
          var preview=$("<div class='mdetail'>").append(zaisheng1);
        break;

          case'zaisheng2':
          var preview=$("<div class='mdetail'>").append(zaisheng2);
        break;

        case'zaisheng3':
          var preview=$("<div class='mdetail'>").append(zaisheng3);
        break;

        case'zaisheng4':
          var preview=$("<div class='mdetail'>").append(zaisheng4);
        break;

        case'zaisheng5':
          var preview=$("<div class='mdetail'>").append(zaisheng5);
        break;

        case'enhanced2':
          var preview=$("<div class='mdetail'>").append(enhanced2);
        break;

        case'transform':
          var preview=$("<div class='mdetail'>").append(transform);
        break;

        case'transform0':
          var preview=$("<div class='mdetail'>").append(transform0);
        break;

        case'transform10':
          var preview=$("<div class='mdetail'>").append(transform10);
        break;

        case'transform9':
          var preview=$("<div class='mdetail'>").append(transform9);
        break;

        case'transform7':
          var preview=$("<div class='mdetail'>").append(transform7);
        break;

        case'transform8':
          var preview=$("<div class='mdetail'>").append(transform8);
        break;

        case'transform6':
          var preview=$("<div class='mdetail'>").append(transform6);
        break;

        case'transform5':
          var preview=$("<div class='mdetail'>").append(transform5);
        break;

        case'transform4':
          var preview=$("<div class='mdetail'>").append(transform4);
        break;

        case'transform1':
          var preview=$("<div class='mdetail'>").append(transform1);
        break;

        case'transform2':
          var preview=$("<div class='mdetail'>").append(transform2);
        break;

        case'transform3':
          var preview=$("<div class='mdetail'>").append(transform3);
        break;

        case'enhanced1':
          var preview=$("<div class='mdetail'>").append(enhanced1);
        break;

        case'tough':
          var preview=$("<div class='mdetail'>").append(tough);
        break;

        case'tough5':
          var preview=$("<div class='mdetail'>").append(tough5);
        break;

        case'tough6':
          var preview=$("<div class='mdetail'>").append(tough6);
        break;

        case'tough7':
          var preview=$("<div class='mdetail'>").append(tough7);
        break;

        case'tough4':
          var preview=$("<div class='mdetail'>").append(tough4);
        break;

        case'tough3':
          var preview=$("<div class='mdetail'>").append(tough3);
        break;

        case'tough2':
          var preview=$("<div class='mdetail'>").append(tough2);
        break;

        case'tough1':
          var preview=$("<div class='mdetail'>").append(tough1);
        break;

        case'ruthless':
          var preview=$("<div class='mdetail'>").append(ruthless);
        break;

        case'absorb':
          var preview=$("<div class='mdetail'>").append(absorb);
        break;

        case'absorb8':
          var preview=$("<div class='mdetail'>").append(absorb8);
        break;

        case'absorb9':
          var preview=$("<div class='mdetail'>").append(absorb9);
        break;

        case'absorb7':
          var preview=$("<div class='mdetail'>").append(absorb7);
        break;

        case'absorb6':
          var preview=$("<div class='mdetail'>").append(absorb6);
        break;

        case'absorb5':
          var preview=$("<div class='mdetail'>").append(absorb5);
        break;

        case'absorb4':
          var preview=$("<div class='mdetail'>").append(absorb4);
        break;

        case'absorb3':
          var preview=$("<div class='mdetail'>").append(absorb3);
        break;

        case'absorb2':
          var preview=$("<div class='mdetail'>").append(absorb2);
        break;

        case'absorb1':
          var preview=$("<div class='mdetail'>").append(absorb1);
        break;

        case'reversal':
          var preview=$("<div class='mdetail'>").append(reversal);
        break;

        case'reversal8':
          var preview=$("<div class='mdetail'>").append(reversal8);
        break;

        case'reversal9':
          var preview=$("<div class='mdetail'>").append(reversal9);
        break;

        case'reversal10':
          var preview=$("<div class='mdetail'>").append(reversal10);
        break;

        case'reversal11':
          var preview=$("<div class='mdetail'>").append(reversal11);
        break;

        case'reversal13':
          var preview=$("<div class='mdetail'>").append(reversal13);
        break;

        case'reversal12':
          var preview=$("<div class='mdetail'>").append(reversal12);
        break;

        case'reversal7':
          var preview=$("<div class='mdetail'>").append(reversal7);
        break;

        case'reversal6':
          var preview=$("<div class='mdetail'>").append(reversal6);
        break;

        case'reversal1':
          var preview=$("<div class='mdetail'>").append(reversal1);
        break;

        case'reversal2':
          var preview=$("<div class='mdetail'>").append(reversal2);
        break;

        case'reversal5':
          var preview=$("<div class='mdetail'>").append(reversal5);
        break;

        case'reversal3':
          var preview=$("<div class='mdetail'>").append(reversal3);
        break;

        case'reversal4':
          var preview=$("<div class='mdetail'>").append(reversal4);
        break;

        case'confirm':
          var preview=$("<div class='mdetail'>").append(confirm);
        break;

        case'confirm4':
          var preview=$("<div class='mdetail'>").append(confirm4);
        break;

        case'confirm5':
          var preview=$("<div class='mdetail'>").append(confirm5);
        break;

        case'confirm6':
          var preview=$("<div class='mdetail'>").append(confirm6);
        break;

        case'confirm1':
          var preview=$("<div class='mdetail'>").append(confirm1);
        break;

        case'confirm2':
          var preview=$("<div class='mdetail'>").append(confirm2);
        break;

        case'confirm3':
          var preview=$("<div class='mdetail'>").append(confirm3);
        break;

        case'relentless':
          var preview=$("<div class='mdetail'>").append(relentless);
        break;

        case'jidao':
          var preview=$("<div class='mdetail'>").append(jidao);
        break;

        case'jidao0':
          var preview=$("<div class='mdetail'>").append(jidao0);
        break;

        case'jidao1':
          var preview=$("<div class='mdetail'>").append(jidao1);
        break;

        case'jidao2':
          var preview=$("<div class='mdetail'>").append(jidao2);
        break;

        case'jidao3':
          var preview=$("<div class='mdetail'>").append(jidao3);
        break;

        case'relentless8':
          var preview=$("<div class='mdetail'>").append(relentless8);
        break;

        case'relentless7':
          var preview=$("<div class='mdetail'>").append(relentless7);
        break;

        case'relentless6':
          var preview=$("<div class='mdetail'>").append(relentless6);
        break;

        case'relentless5':
          var preview=$("<div class='mdetail'>").append(relentless5);
        break;

        case'relentless4':
          var preview=$("<div class='mdetail'>").append(relentless4);
        break;

        case'relentless3':
          var preview=$("<div class='mdetail'>").append(relentless3);
        break;

        case'relentless2':
          var preview=$("<div class='mdetail'>").append(relentless2);
        break;

        case'relentless1':
          var preview=$("<div class='mdetail'>").append(relentless1);
        break;

        case'lighter':
          var preview=$("<div class='mdetail'>").append(lighter);
        break;

        case'lighter5':
          var preview=$("<div class='mdetail'>").append(lighter5);
        break;

        case'lighter4':
          var preview=$("<div class='mdetail'>").append(lighter4);
        break;

        case'lighter3':
          var preview=$("<div class='mdetail'>").append(lighter3);
        break;

        case'lighter2':
          var preview=$("<div class='mdetail'>").append(lighter2);
        break;

        case'play1':
          var preview=$("<div class='mdetail'>").append(play1);
        break;

        case'play0':
          var preview=$("<div class='mdetail'>").append(play0);
        break;

        case'play5':
          var preview=$("<div class='mdetail'>").append(play5);
        break;

        case'play6':
          var preview=$("<div class='mdetail'>").append(play6);
        break;

        case'play7':
          var preview=$("<div class='mdetail'>").append(play7);
        break;

        case'play8':
          var preview=$("<div class='mdetail'>").append(play8);
        break;

        case'play9':
          var preview=$("<div class='mdetail'>").append(play9);
        break;

        case'play10':
          var preview=$("<div class='mdetail'>").append(play10);
        break;

        case'play11':
          var preview=$("<div class='mdetail'>").append(play11);
        break;

        case'play12':
          var preview=$("<div class='mdetail'>").append(play12);
        break;

        case'play13':
          var preview=$("<div class='mdetail'>").append(play13);
        break;

        case'play14':
          var preview=$("<div class='mdetail'>").append(play14);
        break;

        case'play15':
          var preview=$("<div class='mdetail'>").append(play15);
        break;

        case'play16':
          var preview=$("<div class='mdetail'>").append(play16);
        break;

        case'play17':
          var preview=$("<div class='mdetail'>").append(play17);
        break;

        case'play18':
          var preview=$("<div class='mdetail'>").append(play18);
        break;

        case'play2':
          var preview=$("<div class='mdetail'>").append(play2);
        break;

        case'play4':
          var preview=$("<div class='mdetail'>").append(play4);
        break;

        case'play':
          var preview=$("<div class='mdetail'>").append(play);
        break;

        case'play3':
          var preview=$("<div class='mdetail'>").append(play3);
        break;

        case'maximum':
          var preview=$("<div class='mdetail'>").append(maximum);
        break;

        case'maximum0':
          var preview=$("<div class='mdetail'>").append(maximum0);
        break;

        case'maximum2':
          var preview=$("<div class='mdetail'>").append(maximum2);
        break;

        case'maximum1':
          var preview=$("<div class='mdetail'>").append(maximum1);
        break;

        case'accelerated':
          var preview=$("<div class='mdetail'>").append(accelerated);
        break;

        case'accelerated6':
          var preview=$("<div class='mdetail'>").append(accelerated6);
        break;

        case'accelerated5':
          var preview=$("<div class='mdetail'>").append(accelerated5);
        break;

        case'accelerated4':
          var preview=$("<div class='mdetail'>").append(accelerated4);
        break;

        case'accelerated1':
          var preview=$("<div class='mdetail'>").append(accelerated1);
        break;

        case'accelerated2':
          var preview=$("<div class='mdetail'>").append(accelerated2);
        break;

        case'accelerated3':
          var preview=$("<div class='mdetail'>").append(accelerated3);
        break;

        case'useful':
          var preview=$("<div class='mdetail'>").append(useful);
        break;

        case'hit':
          var preview=$("<div class='mdetail'>").append(hit);
        break;

        case'hit1':
          var preview=$("<div class='mdetail'>").append(hit1);
        break;

        case'hit2':
          var preview=$("<div class='mdetail'>").append(hit2);
        break;

        case'hit3':
          var preview=$("<div class='mdetail'>").append(hit3);
        break;

        case'useful3':
          var preview=$("<div class='mdetail'>").append(useful3);
        break;

        case'useful2':
          var preview=$("<div class='mdetail'>").append(useful2);
        break;

        case'useful1':
          var preview=$("<div class='mdetail'>").append(useful1);
        break;

        case'heavily':
          var preview=$("<div class='mdetail'>").append(heavily);
        break;

        case'attcd':
          var preview=$("<div class='mdetail'>").append(attcd);
        break;

        case'attcd0':
          var preview=$("<div class='mdetail'>").append(attcd0);
        break;

          case'attcd1':
          var preview=$("<div class='mdetail'>").append(attcd1);
        break;

        case'attcd2':
          var preview=$("<div class='mdetail'>").append(attcd2);
        break;

        case'attcd3':
          var preview=$("<div class='mdetail'>").append(attcd3);
        break;

        case'attcd4':
          var preview=$("<div class='mdetail'>").append(attcd4);
        break;

        case'heavily8':
          var preview=$("<div class='mdetail'>").append(heavily8);
        break;

        case'heavily7':
          var preview=$("<div class='mdetail'>").append(heavily7);
        break;

        case'heavily6':
          var preview=$("<div class='mdetail'>").append(heavily6);
        break;

        case'heavily5':
          var preview=$("<div class='mdetail'>").append(heavily5);
        break;

        case'heavily4':
          var preview=$("<div class='mdetail'>").append(heavily4);
        break;

        case'heavily3':
          var preview=$("<div class='mdetail'>").append(heavily3);
        break;

        case'heavily2':
          var preview=$("<div class='mdetail'>").append(heavily2);
        break;

        case'heavily1':
          var preview=$("<div class='mdetail'>").append(heavily1);
        break;

        case'evil':
          var preview=$("<div class='mdetail'>").append(evil);
        break;

        case'evil0':
          var preview=$("<div class='mdetail'>").append(evil0);
        break;

        case'evil7':
          var preview=$("<div class='mdetail'>").append(evil7);
        break;

        case'evil6':
          var preview=$("<div class='mdetail'>").append(evil6);
        break;

        case'evil5':
          var preview=$("<div class='mdetail'>").append(evil5);
        break;

        case'evil4':
          var preview=$("<div class='mdetail'>").append(evil4);
        break;

        case'evil3':
          var preview=$("<div class='mdetail'>").append(evil3);
        break;

        case'evil1':
          var preview=$("<div class='mdetail'>").append(evil1);
        break;

        case'evil2':
          var preview=$("<div class='mdetail'>").append(evil2);
        break;

        case'fatal':
          var preview=$("<div class='mdetail'>").append(fatal);
        break;

        case'fatal1':
          var preview=$("<div class='mdetail'>").append(fatal1);
        break;

        case'fatal2':
          var preview=$("<div class='mdetail'>").append(fatal2);
        break;

        case'fatal3':
          var preview=$("<div class='mdetail'>").append(fatal3);
        break;

        case'fatal4':
          var preview=$("<div class='mdetail'>").append(fatal4);
        break;

        case'fatal5':
          var preview=$("<div class='mdetail'>").append(fatal5);
        break;

        case'fatal6':
          var preview=$("<div class='mdetail'>").append(fatal6);
        break;

        case'huge':
          var preview=$("<div class='mdetail'>").append(huge);
        break;

        case'huge0':
          var preview=$("<div class='mdetail'>").append(huge0);
        break;

        case'huge1':
          var preview=$("<div class='mdetail'>").append(huge1);
        break;

        case'huge3':
          var preview=$("<div class='mdetail'>").append(huge3);
        break;

        case'huge2':
          var preview=$("<div class='mdetail'>").append(huge2);
        break;

        default:
      }
        var px=$(this).offset().left;
        var py=$(this).offset().top - 40;
        $(preview).css({"left":px, "top":py});
        $(preview).hide().appendTo("body");
        setTimeout(function(){
            $(preview).show();
        }, 100);

    }, function(){
        $("body").find(".mdetail").remove();
    });

  $(".skill").hover(function(){
    var sid=$(this).attr('sid');
    var jin=$(this).attr('jin');
    var sname=$(this).attr('sname');
    var mp=$(this).attr('mp');
    var cd=$(this).attr('cd');
    var description1=$(this).attr('description1');
    var description2=$(this).attr('description2');
    var description3=$(this).attr('description3');
    var description4=$(this).attr('description4');
    var description5=$(this).attr('description5');
    var description6=$(this).attr('description6');
    var description7=$(this).attr('description7');
    var description8=$(this).attr('description8');
    var description9=$(this).attr('description9');
    var description10=$(this).attr('description10');

    var preview=$("<div class='sdetail'>")
            .append($("<div class='jin'>" + jin + "</div>"))
            .append($("<div class='sname'>" +sname + "</div>"))
            .append($("<div class='sid'>" + sid + "</div>"))
            .append($("<div class='mp'>" + mp + "</div>"))
            .append($("<div class='cd'>" + cd + "</div>"))
            .append($("<div class='description1'>" + description1 + "</div>"))
            .append($("<div class='description2'>" + description2 + "</div>"))
            .append($("<div class='description3'>" + description3 + "</div>"))
            .append($("<div class='description4'>" + description4 + "</div>"))
            .append($("<div class='description5'>" + description5 + "</div>"))
            .append($("<div class='description6'>" + description6 + "</div>"))
            .append($("<div class='description7'>" + description7 + "</div>"))
            .append($("<div class='description8'>" + description8 + "</div>"))
            .append($("<div class='description9'>" + description9 + "</div>"))
            .append($("<div class='description10'>" + description10 + "</div>"));

        var px= $(this).offset().left;
        var py=$(this).offset().top + 85;
        $(preview).css({"left":px, "top":py});
        $(preview).hide().appendTo("body");
        setTimeout(function(){
          $(preview).show();
          //auto resize-------------------------------------
          if (description10 == ""){
          if (description9 == ""){
          if (description8 == ""){
          if (description7 == ""){
          if (description6 == ""){
          if (description5 == ""){
            if(description4 == ""){
              if(description3 == ""){
                if(description2 == ""){
                } else {
                  $("body").find(".sdetail").css("height", "165px");
                }
              } else {
                $("body").find(".sdetail").css("height", "195px");
              }
            } else {
              $("body").find(".sdetail").css("height", "237px");
            }
          } else {
            $("body").find(".sdetail").css("height", "290px");
          }
          } else {
            $("body").find(".sdetail").css("height", "310px");
          }
          } else {
            $("body").find(".sdetail").css("height", "350px");
          }
          } else {
            $("body").find(".sdetail").css("height", "415px");
          }
          } else {
            $("body").find(".sdetail").css("height", "475px");
          }
        } else {
            $("body").find(".sdetail").css("height", "520px");
          }

          //auto resize--------------------------------------

          //----------------auto position--------------------------
          if($(".sdetail").visible(false, false, 'vertical')){
            //console.log("visible!");
          } else {
            var newpy = py - parseInt($(".sdetail").css("height")) - 85;
            $(".sdetail").css("top", newpy + "px");
          }

          if($(".sdetail").visible(false, false, 'horizontal')){
            //console.log("visible!");
          } else {
            var newpx = px - parseInt($(".sdetail").css("width")) + 115;
            $(".sdetail").css("left", newpx + "px");
          }
          //----------------auto position--------------------------
        }, 100);

    }, function(){
        $("body").find(".sdetail").remove();
    });
}

var toggleClick = function(){
  $(".branch").click(function(){
    //check if the one we click has a prev or next
    if($(this).prev().hasClass("branch")){
      //this is the second icon
      //console.log("two");
      if($(this).attr("class")!== "branch sprite-global sprite-global-branch_click"){
        // check if the first one was clicked
        if($(this).prev().attr("class") !== "branch sprite-global sprite-global-branch_click"){
          $(this).attr("class", "branch sprite-global sprite-global-branch_click");
        } else {
          $(this).prev().attr("class", "branch sprite-global sprite-global-branch");
          $(this).attr("class", "branch sprite-global sprite-global-branch_click");
        }
      } else {
        $(this).attr("class", "branch sprite-global sprite-global-branch");
      }
    } else {
      //this is the first icon
      //console.log("one");
      if($(this).attr("class") !== "branch sprite-global sprite-global-branch_click"){
        // check if the second one was clicked
        if($(this).next().attr("class") !== "branch sprite-global sprite-global-branch_click"){
          $(this).attr("class", "branch sprite-global sprite-global-branch_click");
        } else {
          $(this).next().attr("class", "branch sprite-global sprite-global-branch");
          $(this).attr("class", "branch sprite-global sprite-global-branch_click");
        }
      } else {
        $(this).attr("class", "branch sprite-global sprite-global-branch");
      }
    }
  })
}

var replaceWithData = function(){
  var path = "";

  if (window.location.href.indexOf("CharacterSkill_Pages") > -1){
    path = "../img";
  } else {
    path = "./img";
  }

  //红毛
  $("#lkhead").attr("src", path + "/imgHead/lkhead.jpg");
  $("#rshead").attr("src", path + "/imgHead/rshead.jpg");
  $("#ishead").attr("src", path + "/imgHead/ishead.jpg");

  //紫毛
  $("#emhead").attr("src", path + "/imgHead/emhead.jpg");
  $("#vphead").attr("src", path + "/imgHead/vphead.jpg");
  $("#dwhead").attr("src", path + "/imgHead/dwhead.jpg");

  //绿毛
  $("#wshead").attr("src", path + "/imgHead/wshead.jpg");
  $("#gahead").attr("src", path + "/imgHead/gahead.jpg");
  $("#nwhead").attr("src", path + "/imgHead/nwhead.jpg");

  //雷叔
  $("#bmhead").attr("src", path + "/imgHead/bmhead.jpg");
  $("#rfhead").attr("src", path + "/imgHead/rfhead.jpg");
  $("#vchead").attr("src", path + "/imgHead/vchead.jpg");

  //钢板
  $("#cnhead").attr("src", path + "/imgHead/cnhead.jpg");
  $("#cehead").attr("src", path + "/imgHead/cehead.jpg");
  $("#cbshead").attr("src", path + "/imgHead/cbshead.jpg");

  //呆毛
  $("#iphead").attr("src", path + "/imgHead/iphead.jpg");
  $("#dchead").attr("src", path + "/imgHead/dchead.jpg");
  $("#tthead").attr("src", path + "/imgHead/tthead.jpg");

  //艾拉
  $("#yrhead").attr("src", path + "/imgHead/yrhead.jpg");
  $("#sdhead").attr("src", path + "/imgHead/sdhead.jpg");
  $("#aahead").attr("src", path + "/imgHead/aahead.jpg");

  //红毛姐
  $("#gmhead").attr("src", path + "/imgHead/gmhead.jpg");
  $("#bhhead").attr("src", path + "/imgHead/bhhead.jpg");
  $("#cahead").attr("src", path + "/imgHead/cahead.jpg");

  //一方
  $("#lphead").attr("src", path + "/imgHead/lphead.jpg");
  $("#mmhead").attr("src", path + "/imgHead/mmhead.jpg");
  $("#dehead").attr("src", path + "/imgHead/dehead.jpg");

  //雌雄同体
  $("#dlhead").attr("src", path + "/imgHead/dlhead.jpg");
  $("#nbhead").attr("src", path + "/imgHead/nbhead.jpg");
  $("#lnhead").attr("src", path + "/imgHead/lnhead.jpg");

  //黄毛
  $("#crhead").attr("src", path + "/imgHead/crhead.jpg");
  $("#fyhead").attr("src", path + "/imgHead/fyhead.jpg");
  $("#omhead").attr("src", path + "/imgHead/omhead.jpg");
  $("#sthead").attr("src", path + "/imgHead/sthead.jpg");
}

var changeImage = function(){
  $(".head").hover(function() {
    var path = $(this).attr('src');
    var newPath = path.slice(0, -4) + "2" + path.slice(-4);
    $(this).attr("src", newPath);

    if($("#skillsbody").length < 1 ){
      $(this).next(".default").show();
      $(this).nextAll().eq(1).hide();
    }
  }, function() {
    var path = $(this).attr('src');
    var newPath = path.replace("2", "");

    if($("#skillsbody").length < 1 ){
      $(this).next(".default").hide();
      $(this).nextAll().eq(1).show();
    }
    $(this).attr("src", newPath);
  });
}

var slotSkills = function(){

  //create slots
  var slots =$("<div class='skillslots' data-placement='left' data-toggle='tooltip' title='技能欄'>");
  for(var i = 0; i < 10; i++){
    $(slots).append('<div class="dropbox" id="box' + i +'" />');
  }
  $(slots).appendTo("body");

  //create the minimize button
  $("<span id='close' toggle='show' class='glyphicon glyphicon-remove-circle' aria-hidden='true'>").appendTo("body");
  //set position for slot
  var slotX = $(window).width();
  $(".skillslots").css("right", (slotX - $(".skillslots").width()) / 2);
  $("#close").css("right", ((slotX - $("#close").width()) / 2) - 310);

  //when click show slot
  $(".dropbox").click(function(){
    $(".dropbox").animate({
      width: "117px",
      height: "87px"
  }, 500 );
    $("#close").animate({
      bottom: "170px"
  }, 500 );
    $("#close").attr("toggle", "show");
  });
  //when click hide
  $("#close").click(function(){
      $(this).animate({
      bottom: "-30px"
  }, 500);
      $(this).attr("toggle", "hide");
      $(".dropbox").animate({
      width: "10px",
      height: "10px"
  }, 500);
    });

  //when user resize window set position again
  $(window).resize(function(){
    var slotX = $(window).width();
    $(".skillslots").css("right", (slotX - $(".skillslots").width()) / 2);
    $("#close").css("right", ((slotX - $("#close").width()) / 2) - 245);
  })

  $("i[sid='[主動]']").draggable({
    helper: "clone",
    zIndex: 10,
    appendTo: "body",
  });

  $(".dropbox").droppable({
    //activeClass: "ui-state-default",
    //hoverClass: "ui-state-hover",
    //accept: ":not(.ui-sortable-helper)",
    drop: function(event, ui){
      if($(this).children().length == 0){
        ui.draggable.clone(true).appendTo(this).draggable("disable");
        $(this).css("opacity", "1");
      }
    }
  });
}

var removeSkill = function(){
  $(".dropbox").mousedown(function(){
    if($("#close").attr("toggle") == "show"){
      $(this).css("opacity", "0.6");
      $(this).children().draggable("enable");
      $(this).empty();
      $(".sdetail").remove();
    }
  });
}

var allFunctions = function(){
  if($("#skillsbody").length >0 ){
    //cutIn();//刪了他！
    hoverPreview();
    toggleClick();
    slotSkills();
    removeSkill();
    $(".anotherskill1").hide();
    $(".anotherskill2").hide();
    $(".arrow1").click(function(){
       $('.anotherskill1').toggle();
});
    $(".arrow2").click(function(){
       $('.anotherskill2').toggle();
});
    $('[data-toggle="tooltip"]').tooltip();
  }
}

$(document).ready(function() {
  replaceWithData();
  changeImage();
});

$(window).load(allFunctions)
