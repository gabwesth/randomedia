$(document).ready(function() {
	var drag, deg, opacityx = 0;
	var max = 1000;
	var min = 70;
	var $card;
	
	$('.card_box .card').addClass("disabled");
	$('.card_box .card:last-child').removeClass("disabled");
	$('.card_box .card:last-child').addClass("active");
	
	function goback() {
	  $(document).off("mousemove touchmove mouseup touchend");
	  $card.addClass("goback");
	  drag = 0;
	  $('.active> .accept').css("opacity", 0);
	  $('.active> .reject').css("opacity", 0);
	  $('.nie').css("background-color", "rgba(50,55,65,0)");
	  $('.tak').css("background-color", "rgba(50,55,65,0)");
	};
	
	function release() {
	  $(document).off("mousemove touchmove mouseup touchend");
	  
	  $('.nie').css("background-color", "rgba(50,55,65,0)");
	  $('.tak').css("background-color", "rgba(50,55,65,0)");
	  
	  if (drag >= min && drag < max) {
		$card.addClass("yes-confirmed");
		setTimeout(function() {
		  $card.remove();
		  $('.card_box .card').addClass("disabled");
		  $('.card_box .card:last-child').removeClass("disabled");
		  $('.card_box .card:last-child').addClass("active");
		}, 400);
		
	  } else if (drag <= -min && drag > -max) {
		$card.addClass("no-confirmed");
		setTimeout(function() {
		  $card.remove();
		  $('.card_box .card').addClass("disabled");
		  $('.card_box .card:last-child').removeClass("disabled");
		  $('.card_box .card:last-child').addClass("active");
		}, 400);
	  }
	};
	
	function dragMove() {
	  deg = drag / 15;
	  opacityx = Math.abs(drag / 50);
	  $card.removeClass("goback");
	  if(-max < drag && drag < max ){
		$card.css("transform", "translateX("+ drag +"px) rotate("+ deg +"deg)");
	  }
	  else if(drag > max || drag < -max){
		goback();
	  }
	  
	  if(drag > 0){
		$('.active> .accept').css("opacity", opacityx);
		$('.active> .reject').css("opacity", 0);
		$('.tak').css("background-color", "rgba(50,55,65,1)");
		$('.nie').css("background-color", "rgba(50,55,65,0)");
	  }
	  else if(drag < 0){
		$('.active> .reject').css("opacity", opacityx);
		$('.active> .accept').css("opacity", 0);
		$('.nie').css("background-color", "rgba(50,55,65,1)");
		$('.tak').css("background-color", "rgba(50,55,65,0)");
	  }
	};
	
  $(document).on( "mousedown touchstart", ".card:not(.disabled)", function(e){
	 
	$card = $(this);
	var startX =  e.pageX || e.originalEvent.touches[0].pageX;
	
	$(document).on( "mousemove touchmove", function(e){
	  var x = e.pageX || e.originalEvent.touches[0].pageX;
		drag = (x - startX);
		if (!drag) return;
		dragMove();
	}); 
  
	$(document).on( "mouseup touchend", function(){
	  if(drag < min && drag > -min){
		goback();
	  }
	  else{
		release();
	  }
	});
	});
  });