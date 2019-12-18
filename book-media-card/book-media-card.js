$(document).ready(function() {
	var bdrag, deg, opacityx = 0;
	var max = 1000;
	var min = 70;
	var $card;
	
	$('.card_box .card').addClass("disabled");
	$('.card_box .card:last-child').removeClass("disabled");
	$('.card_box .card:last-child').addClass("active");
	
	function goback() {
	  $(document).off("mousemove touchmove mouseup touchend");
	  $card.addClass("goback");
	  bdrag = 0;
	  $('.active> .accept').css("opacity", 0);
	  $('.active> .reject').css("opacity", 0);
	  $('.b-no-grazie').css("background-color", "rgba(50,55,65,0)");
	  $('.b-si-grazie').css("background-color", "rgba(50,55,65,0)");
	};
	
	function release() {
	  $(document).off("mousemove touchmove mouseup touchend");
	  
	  $('.b-no-grazie').css("background-color", "rgba(50,55,65,0)");
	  $('.b-si-grazie').css("background-color", "rgba(50,55,65,0)");
	  
	  if (bdrag >= min && bdrag < max) {
		$card.addClass("yes-confirmed");
		setTimeout(function() {
		  $card.remove();
		  $('.card_box .card').addClass("disabled");
		  $('.card_box .card:last-child').removeClass("disabled");
		  $('.card_box .card:last-child').addClass("active");
		}, 400);
		
	  } else if (bdrag <= -min && bdrag > -max) {
		$card.addClass("no-confirmed");
		setTimeout(function() {
		  $card.remove();
		  $('.card_box .card').addClass("disabled");
		  $('.card_box .card:last-child').removeClass("disabled");
		  $('.card_box .card:last-child').addClass("active");
		}, 400);
	  }
	  bdrag = 0;
	};
	
	function dragMove() {
	  deg = bdrag / 15;
	  opacityx = Math.abs(bdrag / 50);
	  $card.removeClass("goback");
	  if(-max < bdrag && bdrag < max ){
		$card.css("transform", "translateX("+ bdrag +"px) rotate("+ deg +"deg)");
	  }
	  else if(bdrag > max || bdrag < -max){
		goback();
	  }
	  
	  if(bdrag > 0){
		$('.active> .accept').css("opacity", opacityx);
		$('.active> .reject').css("opacity", 0);
		$('.b-si-grazie').css("background-color", "rgba(50,55,65,1)");
		$('.b-no-grazie').css("background-color", "rgba(50,55,65,0)");
	  }
	  else if(bdrag < 0){
		$('.active> .reject').css("opacity", opacityx);
		$('.active> .accept').css("opacity", 0);
		$('.b-no-grazie').css("background-color", "rgba(50,55,65,1)");
		$('.b-si-grazie').css("background-color", "rgba(50,55,65,0)");
	  }
	};
	
  $(document).on( "mousedown touchstart", ".card:not(.disabled)", function(e){
	 console.log(bdrag)
	$card = $(this);
	var startX =  e.pageX || e.originalEvent.touches[0].pageX;
	
	$(document).on( "mousemove touchmove", function(e){
	  var x = e.pageX || e.originalEvent.touches[0].pageX;
		bdrag = (x - startX);
		if (!bdrag) return;
		dragMove();
	}); 
  
	$(document).on( "mouseup touchend", function(){
	  if(bdrag < min && bdrag > -min){
		goback();
	  }
	  else{
		release();
	  }
	});
	});

	$(".b-no-grazie").hover(
		function(){
			$("#b-no")[0].setAttribute('filter','url(#filter0_i)');
		},
		function(){
			$("#b-no")[0].setAttribute('filter','');
		}
	  );
	
	  $(".b-si-grazie").hover(
		function(){
			$("#b-yes")[0].setAttribute('filter','url(#filter0_i)');
		},
		function(){
			$("#b-yes")[0].setAttribute('filter','');
		}
	  );

	  

	  $(document).on("click", "#b-no", function(){
		bdrag = -100;
		opacityx = 1;
		$card = $(".card:not(.disabled)");
		dragMove();
		release();
		}
	  );

	  $(document).on("click", "#b-yes", function(){
		bdrag = +100;
		opacityx = 1;
		$card = $(".card:not(.disabled)");
		dragMove();
		release();
		}
	  );


	  $(".b-no-grazie").hover(
		function(){
			$("#b-no")[0].setAttribute('filter','url(#filter0_i)');
		},
		function(){
			$("#b-no")[0].setAttribute('filter','');
		}
	  );
	
	  $(".b-si-grazie").hover(
		function(){
			$("#b-yes")[0].setAttribute('filter','url(#filter0_i)');
		},
		function(){
			$("#b-yes")[0].setAttribute('filter','');
		}
	  );

	  

	  $(document).on("click", "#b-no", function(){
		bdrag = -100;
		opacityx = 1;
		$card = $(".card:not(.disabled)");
		dragMove();
		release();
		}
	  );

	  $(document).on("click", "#b-yes", function(){
		bdrag = +100;
		opacityx = 1;
		$card = $(".card:not(.disabled)");
		dragMove();

		release();
		}
	  );
	  

  });



