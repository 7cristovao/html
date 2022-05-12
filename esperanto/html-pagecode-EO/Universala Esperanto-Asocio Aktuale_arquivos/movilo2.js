             var a = location.href;
             var b = location.pathname;
  jQuery.fn.centro = function () {
        this.css("position","absolute");
        this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
        this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
        return this;
    }
    
                 function viduLarghon() {
        var fenestro = $(window).width();
        if (fenestro > 440) {
            var menid = [];   
        $("#konstanta li").each(function() {menid.push($(this).attr("id"))  });     
  
      var nm = menid.length;  
      var n = parseInt(fenestro / 100) +1;
$("#konstanta li").removeClass("nevidebla");
$(".k").addClass("nevidebla");
   if (n < nm) {
      for(i=n+1;i<nm-1;i++) {
       var kl = '#' + menid[i];  
       $(kl).addClass("nevidebla");
        $("#k_" + menid[i]).removeClass("nevidebla");
        }
        }       
         
        }        
            
        }


  
            $(function() {
    viduLarghon();
   $(window).resize(viduLarghon);
            //$('#serchado').bind('submit', function() {
               //$('html, body').animate({scrollTop:0}, 'fast');
            //$(this).ajaxSubmit({
                //target: 'body'
            //});
              //return false; // <-- grava!
        //});  
  
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.reflugu').fadeIn(duration);
        } else {
            jQuery('.reflugu').fadeOut(duration);
        }
    });
    
    jQuery('.reflugu').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
          
        
        
        
        $('.supren').click(function(){ 
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
          $('.reen').click(function(){ 
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
        $('.menuujo_aktuale > a').click(function(){
                   $('.submenuo a').removeClass('indikita');
            $(this).addClass('indikita');
           });  
        $('.menuujo .submenuo a').click(function(){
            var indiko = $(this).attr('title');
            $('.submenuo a').removeClass('indikita');
            $(this).addClass('indikita');
            $(".landa:visible").hide(); 
             var lando = $('#' + indiko).show();
                 return false;
    });  
    
    $("#konfd").change(function() {
		  if(this.checked) {
      $("#sendu").removeAttr('disabled').removeClass("neaktiva");
    }
    else {
	 $("#sendu").attr('disabled','disabled').addClass("neaktiva");	
	}
		
	});
    
  
$(".ikonetoj img").click(function(e){
        $("#fono").css({"opacity" : "0.7"})
                        .fadeIn("slow");
   $("#kovrilo").html("<img src='/dat/atendu.gif' />");
        $("#kovrilo").html("<img src='"+$(this).parent().attr("href")+
         "' alt='"+$(this).attr("alt")+"' width='345' height='490'/>");
                  $("#pli_granda").centro().fadeIn("slow");
                    $("#plus").show(); $("#minus").show();
        return false;
    });     
    $(".enhavlisto").click(function(e){
        $("#fono").css({"opacity" : "0.7"})
                        .fadeIn("slow");                          
   $("#kovrilo").html("<img src='/dat/atendu.gif' />");
   var revuo = ($(this).attr("rel"));
     $.ajax({
  type: "GET",
  url: "/skriptoj/l.php",
  data: "&enhavo=" + revuo + '&aj=j',
   success: function(rezt){    
     $("#kovrilo").html("<div class='enhavlista'>" + rezt +"</div>");    
                  $("#pli_granda").centro().fadeIn("slow");
                  $("#plus").hide(); $("#minus").hide();
    }   
    }); return false; 
   }); 
   

   
      
    $(document).keypress(function(e){
            if(e.keyCode==27){
                $("#fono").fadeOut("slow");
                $("#pli_granda").fadeOut("slow");
                      }
        });
         $(".plu").click(function(){ 
            var s = $(".signeto").text();
          if (s=="+") {
            $(".signeto").html("&minus;");
                var s0 = $("#mch").position().left; 
                 var s01 = $(this).offset().left;
                  s1 = parseInt(s01)+ parseInt(s0) - 10;          
         $("#mch").css({"left": s1 + "px"});
             $("#mch").show();
                  }
            else {
                $(".signeto").text('+');
                 $("#mch").hide();
                }
      
        }); 
        
          $("#blokaro").click(function(){ 
                 $("#mch").hide();
                      $(".signeto").text('+');
            
            });
          $(".fermu").click(function(){
            $("#forma_fono").hide();
            $(".ensaluta_formo").hide();
              return false;
        });
        
        $("#fono").click(function(){
            $("#fono").fadeOut("slow");
            $("#pli_granda").fadeOut("slow");
        });
        $("#kovrilo").click(function(){
            $("#fono").fadeOut("slow");
            $("#pli_granda").fadeOut("slow");
        }); 
          $("#bferm").click(function(){
            $("#fono").fadeOut("slow");
            $("#pli_granda").fadeOut("slow");
        }); 
        $("#plus").click(function(){
           var largho = $("#kovrilo img").width() * 1.1;
            var alto = $("#kovrilo img").height() * 1.1;
            $("#kovrilo img").css({"width": largho +'px', "height" : alto +'px'});
        }); 
         $("#minus").click(function(){
           var largho = $("#kovrilo img").width() / 1.1;
            var alto = $("#kovrilo img").height() / 1.1;
            $("#kovrilo img").css({"width": largho +'px', "height" : alto +'px'});
        });              
      $(".helpklarigo").click(function(){
     $(this).find(".klarigo").toggleClass("nevidebla");
  $(this).next('div').toggleClass("nevidebla");
  return false;
    });    
      
    $(".piednoto").click(function(){
		
    var noto = $(this).attr("rel");
  $("#" + noto).toggleClass("nevidebla");
  return false;
    });
    
     $(".baloneto").click(function(){	
		  var kv = $(this).children(".anonco_konfirma").length;
	 $('.baloneto > .anonco_konfirma').remove();
	if (kv==0) {	
    var noto = $(this).attr("rel"); 
  var enhavo = $("." + noto).html();
  $(this).append("<div class='noto anonco_konfirma'>" + enhavo + "</div>");
}
    return false;
    });  
  
 
        $(".retadreso").click(function(){
    var nomo = $(this).attr("j");
  var adreso = $(this).attr("rel");
    var temo = $(this).attr("title");
   document.location.href = "mailto:" + nomo +"@" + adreso + "?subject=" + temo;
  return false;
    }); 
      
       $(".klar_montru").hover(function(){
	          $(".helpa").removeClass("informa_noto").text('');
	          $(".informnota_anguleto").addClass("nevidebla");
	            $(".inf_ang").addClass("nevidebla");
		 var tiu = $(this).prev("span");
		 tiu.prev("span").removeClass("nevidebla");
		  tiu.prev("span").prev("span").removeClass("nevidebla");
		 tiu.addClass("informa_noto");
		 var enh = $(this).text();
		 tiu.text(enh);
		  setTimeout(function() { $(".helpa").removeClass("informa_noto").text(''); $(".informnota_anguleto").addClass("nevidebla"); $(".inf_ang").addClass("nevidebla");}, 15000);
        }); 

       $("#alfabeto > span").click(function(){
    var lit = $(this).text(); 
    if (lit=="Ĝ") {lit = 'Gx'}
    else if (lit=="Ĉ") {lit = 'Cx'};
    if (lit == 'ĉiuj') {
        $("#alfabeto > span").removeClass('hela');
     $(".tabelo tr").show();    
        }
        else {
   $("#alfabeto > span").not(this).removeClass('hela');
   $(this).addClass('hela');
   $(".tabelo tr").hide();
   $(".kategvico").show();
   $("." + lit).show();
   }
    });
    
       $("#direktilo > span").click(function(){
    var lit = $(this).text(); 
    if (lit=="Ĝ") {lit = 'Gx'}
    else if (lit=="Ĉ") {lit = 'Cx'};
    if (lit == 'ĉiujn') {
        $("#direktilo > span").removeClass('hela');
     $(".direktila_listo div").show();    
        }
        else {
   $("#direktilo > span").not(this).removeClass('hela');
   $(this).addClass('hela');
   $(".direktila_listo div").hide();
   $("." + lit).show();
   }
    });
    
                });          
