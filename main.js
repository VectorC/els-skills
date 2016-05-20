var hoverPreview = function(){
  var enhanced = "技能攻擊力增加到120%";
  var enhanced1 = "技能攻擊力增加到115%";
  var enhanced2 = "技能攻擊力增加到130%";
  var enhanced3 = "技能攻擊力增加到110%";
  var enhanced4 = "技能攻擊力增加到200%";
  var enhanced5 = "技能攻擊力增加到125%";
  
  var last = "射程距離 / 持續力增加到133%";
  var last0 = "射程距離 / 持續力增加到150%";
  var last1 = "射程距離 / 持續力增加到130%";
  
  var maximum = "100%暴擊, 但攻擊力變爲原來的80%";
  var maximum0 = "100%暴擊, 但攻擊力變爲原來的85%";
  var maximum1 = "100%暴擊, 但攻擊力變爲原來的90%";
  var maximum2 = "100%暴擊, 但攻擊力變爲原來的70%";
  
  var lighter = "資源消耗減少至50%";
  var lighter2 = "資源消耗減少至80%";
  var lighter3 = "資源消耗減少至90%";
  var lighter4 = "資源消耗減少至70%";
  var lighter5 = "資源消耗減少至85%";
  
  var play = "發動時, 低概率恢復消耗MP的33%";
  var play1 = "機率恢復200%MP";
  var play2 = "發動時, 低概率恢復消耗MP的50%";
  var play3 = "發動時, 低概率恢復消耗MP的40%";
  var play4 = "發動時, 低概率恢復消耗MP的100%";
  var play0 = "發動時, 低概率恢復消耗MP的60%";
  
  var zaisheng = "發動時, 低概率技能冷卻時間變成0%";
  var zaisheng1 = "發動時, 低概率技能冷卻時間變成50%";
  var zaisheng2 = "發動時, 低概率技能冷卻時間變成33%";
  
  var accelerated1 = "技能冷卻時間減少至70%";
  var accelerated2 = "技能冷卻時間減少至80%";
  var accelerated3 = "技能冷卻時間減少至85%";
  var accelerated = "技能冷卻時間減少至130%";
  var accelerated4 = "技能冷卻時間減少至90%";
  var accelerated5 = "技能冷卻時間減少至50%";
  var accelerated6 = "技能冷卻時間減少至75%";
  var cd = "技能冷卻時間減少至50%";
  
  var useful = "連擊數大約增加2倍, 攻擊力下降爲70%";
  var useful1 = "連擊數大約增加2倍, 攻擊力下降爲60%";
  var useful2 = "連擊數大約增加2倍, 攻擊力下降爲65%";
  var useful3 = "連擊數大約增加2倍, 攻擊力下降爲57.5%%";
  var hit = "連擊數大約增加2倍, 攻擊力下降爲67.5%";
  var hit1 = "連擊數大約增加2倍, 攻擊力下降爲80%";
  var hit2 = "連擊數大約增加2倍, 攻擊力下降爲85%";
  
  var heavily = "攻擊力上升至140%, 技能冷卻時間增加到150%";
  var heavily1 = "攻擊力上升至150%, 技能冷卻時間增加到125%";
  var heavily2 = "攻擊力上升至130%, 技能冷卻時間增加到200%";
  var heavily3 = "攻擊力上升至140%, 技能冷卻時間增加到200%";
  var heavily4 = "攻擊力上升至120%, 技能冷卻時間增加到120%";
  var heavily5 = "攻擊力上升至130%, 技能冷卻時間增加到150%";
  var heavily6 = "攻擊力上升至100%, 技能冷卻時間增加到80%";
  var heavily7 = "攻擊力上升至125%, 技能冷卻時間增加到160%";
  var heavily8 = "攻擊力上升至125%, 技能冷卻時間增加到140%";
  var attcd = "攻擊力上升至130%, 技能冷卻時間增加到130%";
  var attcd0 = "攻擊力上升至150%, 技能冷卻時間增加到160%";
  var attcd1 = "攻擊力上升至130%, 技能冷卻時間增加到125%";
  var attcd2 = "攻擊力上升至115%, 技能冷卻時間增加到110%";
  var attcd3 = "攻擊力上升至130%, 技能冷卻時間增加到140%";
  var attcd4 = "攻擊力上升至150%, 技能冷卻時間增加到140%";
  
  var evil = "打擊時扣除目標5MP";
  var evil1 = "打擊時扣除目標10MP";
  var evil2 = "打擊時扣除目標2MP";
  var evil3 = "打擊時扣除目標25MP";
  var evil4 = "打擊時扣除目標7MP";
  var evil5 = "打擊時扣除目標15MP";
  var evil6 = "打擊時扣除目標3MP";
  var evil7 = "打擊時扣除目標1MP";
  var evil0 = "打擊時扣除目標20MP";
  
  var fatal = "資源消耗增加至125%, 技能變爲無視防禦和防禦效果";
  var fatal1 = "資源消耗增加至120%, 技能變爲無視防禦和防禦效果";
  var fatal2 = "資源消耗增加至150%, 技能變爲無視防禦和防禦效果";
  var fatal3 = "資源消耗增加至130%, 技能變爲無視防禦和防禦效果";
  var fatal4 = "資源消耗增加至110%, 技能變爲無視防禦和防禦效果";
  var fatal5 = "資源消耗增加至115%, 技能變爲無視防禦和防禦效果";
  var fatal6 = "資源消耗增加至140%, 技能變爲無視防禦和防禦效果";
  
  var huge2 = "增加技能的攻擊範圍/大小130%";
  var huge1 = "增加技能的攻擊範圍/大小120%";
  var huge = "增加技能的攻擊範圍/大小150%";
  var huge3 = "增加技能的攻擊範圍/大小110%";
  var huge0 = "增加技能的攻擊範圍/大小115%";

  var relentless = "擊倒值減少40";
  var relentless1 = "擊倒值減少10";
  var relentless2 = "擊倒值減少3";
  var relentless3 = "擊倒值減少25";
  var relentless4 = "擊倒值減少50";
  var relentless5 = "擊倒值減少20";
  var relentless6 = "擊倒值減少2.5";
  var relentless7 = "擊倒值減少5";
  var relentless8 = "擊倒值減少1";
  var jidao = "擊倒值減少4";
  var jidao0 = "擊倒值減少7";
  var jidao1 = "擊倒值減少7.5";
  var jidao2 = "擊倒值減少15";
  
  var confirm = "賦予效果的持續時間增加至130%";
  var confirm1 = "賦予效果的持續時間增加至100%";
  var confirm4 = "賦予效果的持續時間增加至110%";
  var confirm6 = "賦予效果的持續時間增加至120%";
  var bufftime = "賦予效果的持續時間增加至150%";
  var bufftime1 = "賦予效果的持續時間增加至140%";
  var bufftime2 = "賦予效果的持續時間增加至115%";
  var bufftime3 = "賦予效果的持續時間增加至133%";
  
  var confirm3 = "賦予效果的性能增強爲130%";
  var confirm2 = "賦予效果的性能增強爲115%";
  var confirm5 = "賦予效果的性能增強爲110%";
  var buffamount = "賦予效果的性能增強到50%";
  var buffamount1 = "賦予效果的性能增強到120%";
  var buffamount0 = "賦予效果的性能增強到140%";
  
  var reversal = "MP消耗減少爲60%, 冷卻時間增加到150%";
  var reversal1 = "MP消耗減少爲50%, 冷卻時間增加到200%";
  var reversal2 = "MP消耗減少爲70%, 冷卻時間增加到150%";
  var reversal3 = "MP消耗減少爲50%, 冷卻時間增加到125%";
  var reversal4 = "MP消耗減少爲50%, 冷卻時間增加到150%";
  var reversal5 = "MP消耗減少爲80%, 冷卻時間增加到150%";
  var reversal6 = "MP消耗減少爲75%, 冷卻時間增加到150%";
  var reversal7 = "MP消耗減少爲70%, 冷卻時間增加到130%";
  var reversal8 = "MP消耗減少爲0%, 冷卻時間增加到200%";
  var reversal9 = "MP消耗減少爲80%, 冷卻時間增加到120%";
  var reversal10 = "MP消耗減少爲80%, 冷卻時間增加到115%";
  var reversal11 = "MP消耗減少爲85%, 冷卻時間增加到120%";
  var reversal12 = "MP消耗減少爲60%, 冷卻時間增加到130%";
  var reversal13 = "MP消耗減少爲60%, 冷卻時間增加到140%";
  
  var absorb = "技能MP回收量上升至160%";
  var absorb2 = "技能MP回收量上升至130%";
  var absorb1 = "技能MP回收量上升至140%";
  var absorb3 = "技能MP回收量上升至200%";
  var absorb4 = "技能MP回收量上升至120%";
  var absorb5 = "技能MP回收量上升至150%";
  var absorb6 = "技能MP回收量上升至175%";
  var absorb7 = "技能MP回收量上升至250%";
  var absorb8 = "技能MP回收量上升至133%";
  var absorb9 = "技能MP回收量上升至300%";
  
  var ruthless = "打斷對方的斷魔";
  
  var tough = "使用技能時霸體, 技能冷卻時間增加到130%";
  var tough1 = "使用技能時霸體, 技能冷卻時間增加到150%";
  var tough2 = "使用技能時霸體, 技能冷卻時間增加到120%";
  var tough3 = "使用技能時霸體, 技能冷卻時間增加到300%";
  var tough4 = "使用技能時霸體, 技能冷卻時間增加到140%";
  var tough5 = "使用技能時霸體, 技能冷卻時間增加到200%";
  var tough6 = "使用技能時霸體, 技能冷卻時間增加到110%";
  
  var transform = "形態變化 (能量飛針 - 前進)";
  var transform1 = "形態變化 (千星 - 巨大衝擊)";
  var transform2 = "形態變化 (千星 - 雙重射擊)";
  var transform3 = "形態變化 (爆頭射擊 - 綜合繁星)";
  var transform4 = "形態變化 (流星炮擊 - 雷霆模式)";
  var transform5 = "形態變化 (加農激射 - 輔助槍彈)";
  var transform6 = "形態變化 (電磁飛彈 - 快速充能)";
  var transform7 = "形態變化 (炎王 - 榴彈)";
  var transform8 = "形態變化 (嬌小的安古勒 - 重石)";
  var transform9 = "形態變化 (魔力轉換)";
  var transform10 = "形態變化 - 前段旋轉攻擊力增加到241%，引力增加";
  var transform0 = "形態變化 (無盡)<br>炎疾走: 497% x ∞ (第8下開始每下消耗20MP)<br>最初打擊傷害: 1290%";
  
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
      console.log("one");
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

/*var cutIn = function(){
  
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
}*/

var replaceWithData = function(){
  var path = "";

  if (window.location.href.indexOf("CharacterSkill_Pages") > -1){
    path = "../img";
  } else {
    path = "./img";
  }
  
  //红毛
  $("#lkhead").attr("src", path + "/imgElsword/lkhead.jpg");
  $("#rshead").attr("src", path + "/imgElsword/rshead.jpg");
  $("#ishead").attr("src", path + "/imgElsword/ishead.jpg");
  
  //紫毛
  $("#emhead").attr("src", path + "/imgAisha/emhead.jpg");
  $("#vphead").attr("src", path + "/imgAisha/vphead.jpg");
  $("#dwhead").attr("src", path + "/imgAisha/dwhead.jpg");
  
  //绿毛
  $("#wshead").attr("src", path + "/imgRena/wshead.jpg");
  $("#gahead").attr("src", path + "/imgRena/gahead.jpg");
  $("#nwhead").attr("src", path + "/imgRena/nwhead.jpg");
  
  //雷叔
  $("#bmhead").attr("src", path + "/imgRaven/bmhead.jpg");
  $("#rfhead").attr("src", path + "/imgRaven/rfhead.jpg");
  $("#vchead").attr("src", path + "/imgRaven/vchead.jpg");
  
  //钢板
  $("#cnhead").attr("src", path + "/imgEve/cnhead.jpg");
  $("#cehead").attr("src", path + "/imgEve/cehead.jpg");
  $("#cbshead").attr("src", path + "/imgEve/cbshead.jpg");
  
  //呆毛
  $("#iphead").attr("src", path + "/imgChung/iphead.jpg");
  $("#dchead").attr("src", path + "/imgChung/dchead.jpg");
  $("#tthead").attr("src", path + "/imgChung/tthead.jpg");
  
  //艾拉
  $("#yrhead").attr("src", path + "/imgAra/yrhead.jpg");
  $("#sdhead").attr("src", path + "/imgAra/sdhead.jpg");
  $("#aahead").attr("src", path + "/imgAra/aahead.jpg");
  
  //红毛姐
  $("#gmhead").attr("src", path + "/imgElesis/gmhead.jpg");
  $("#bhhead").attr("src", path + "/imgElesis/bhhead.jpg");
  $("#cahead").attr("src", path + "/imgElesis/cahead.jpg");
  
  //一方
  $("#lphead").attr("src", path + "/imgAdd/lphead.jpg");
  $("#mmhead").attr("src", path + "/imgAdd/mmhead.jpg");
  $("#dehead").attr("src", path + "/imgAdd/dehead.jpg");
  
  //雌雄同体
  $("#dlhead").attr("src", path + "/imgLuCiel/dlhead.jpg");
  $("#nbhead").attr("src", path + "/imgLuCiel/nbhead.jpg");
  $("#lnhead").attr("src", path + "/imgLuCiel/lnhead.jpg");
  
  //黄毛
  $("#crhead").attr("src", path + "/imgRose/crhead.png");
  $("#fyhead").attr("src", path + "/imgRose/fyhead.png");
  $("#omhead").attr("src", path + "/imgRose/omhead.png");
  $("#sthead").attr("src", path + "/imgRose/sthead.png");
}

var slotSkills = function(){
  
  //create slots
  var slots =$("<div class='skillslots' data-placement='left' data-toggle='tooltip' title='技能欄'>");
  for(var i = 0; i < 8; i++){
    $(slots).append('<div class="dropbox" id="box' + i +'" />');
  }
  $(slots).appendTo("body");
  
  //create the minimize button
  $("<span id='close' toggle='show' class='glyphicon glyphicon-remove-circle' aria-hidden='true'>").appendTo("body");
  //set position for slot
  var slotX = $(window).width();
  $(".skillslots").css("right", (slotX - $(".skillslots").width()) / 2);
  $("#close").css("right", ((slotX - $("#close").width()) / 2) - 245);
  
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

var animsitionMain = function(){
  $(".animsitionMain").animsition({
    inClass: 'flip-in-x-fr',
    outClass: 'flip-out-x-fr'
  });
}

var animsitionUp = function(){
  $(".animsitionUp").animsition({
    inClass: 'fade-in-up',
    outClass: 'fade-out-up',
    inDuration: 2800
  });
}

var animsitionThumb = function(){
  $(".animsitionThumb").animsition({
    inClass: 'fade-in-down',
    outClass: 'fade-out-down',
    inDuration: 2800
  });
}

var animsitionLeft = function(){
  $(".animsitionLeft").animsition({
    inClass: 'fade-in-left',
    outClass: 'fade-out-left',
    inDuration: 2800
  });
}

var animsitionR = function(){
  $(".animsitionR").animsition({
    inClass: 'fade-in-right',
    outClass: 'fade-out-right',
    inDuration: 2800
  });
}

var allFunctions = function(){
  if($("#skillsbody").length >0 ){
    //cutIn();//刪了他！
    hoverPreview();
    toggleClick();
    slotSkills();
    removeSkill();
    $('[data-toggle="tooltip"]').tooltip();
  }
}

$(document).ready(function() {
  replaceWithData();
  animsitionMain();
  animsitionThumb();
  animsitionLeft();
  animsitionR();
  animsitionUp();
});

$(window).load(allFunctions)