$(document).ready(function() {
	var mdrag, deg, opacityx = 0;
	var max = 1000;
	var min = 70;
	var $card;
	
	$('.card_box .card').addClass("disabled");
	$('.card_box .card:last-child').removeClass("disabled");
	$('.card_box .card:last-child').addClass("active");
	
	function goback() {
	  $(document).off("mousemove touchmove mouseup touchend");
	  $card.addClass("goback");
	  mdrag = 0;
	  $('.active> .accept').css("opacity", 0);
	  $('.active> .reject').css("opacity", 0);
	  $('.nie').css("background-color", "rgba(50,55,65,0)");
	  $('.tak').css("background-color", "rgba(50,55,65,0)");
	};
	
	function release() {
	  $(document).off("mousemove touchmove mouseup touchend");
	  
	  $('.nie').css("background-color", "rgba(50,55,65,0)");
	  $('.tak').css("background-color", "rgba(50,55,65,0)");
	  
	  if (mdrag >= min && mdrag < max) {
		$card.addClass("yes-confirmed");
		setTimeout(function() {
		  $card.remove();
		  $('.card_box .card').addClass("disabled");
		  $('.card_box .card:last-child').removeClass("disabled");
		  $('.card_box .card:last-child').addClass("active");
		}, 400);
		
	  } else if (mdrag <= -min && mdrag > -max) {
		$card.addClass("no-confirmed");
		setTimeout(function() {
		  $card.remove();
		  $('.card_box .card').addClass("disabled");
		  $('.card_box .card:last-child').removeClass("disabled");
		  $('.card_box .card:last-child').addClass("active");
		}, 400);
	  }
	  mdrag = 0;
	};
	
	function dragMove() {
	  deg = mdrag / 15;
	  opacityx = Math.abs(mdrag / 50);
	  $card.removeClass("goback");
	  if(-max < mdrag && mdrag < max ){
		$card.css("transform", "translateX("+ mdrag +"px) rotate("+ deg +"deg)");
	  }
	  else if(mdrag > max || mdrag < -max){
		goback();
	  }
	  
	  if(mdrag > 0){
		$('.active> .accept').css("opacity", opacityx);
		$('.active> .reject').css("opacity", 0);
		$('.tak').css("background-color", "rgba(50,55,65,1)");
		$('.nie').css("background-color", "rgba(50,55,65,0)");
	  }
	  else if(mdrag < 0){
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
		mdrag = (x - startX);
		if (!mdrag) return;
		dragMove();
	}); 
  
	$(document).on( "mouseup touchend", function(){
	  if(mdrag < min && mdrag > -min){
		goback();
	  }
	  else{
		release();
	  }
	});
	});

	$(".nie").hover(
		function(){
			$("#m-no")[0].setAttribute('filter','url(#filter0_i)');
		},
		function(){
			$("#m-no")[0].setAttribute('filter','');
		}
	  );
	
	  $(".tak").hover(
		function(){
			$("#m-yes")[0].setAttribute('filter','url(#filter0_i)');
		},
		function(){
			$("#m-yes")[0].setAttribute('filter','');
		}
	  );

	  

	  $(document).on("click", "#m-no", function(){
		mdrag = -100;
		opacityx = 1;
		$card = $(".card:not(.disabled)");
		dragMove();
		release();
		}
	  );

	  $(document).on("click", "#m-yes", function(){
		mdrag = +100;
		opacityx = 1;
		$card = $(".card:not(.disabled)");
		dragMove();

		release();
		}
	  );


	  $(".nie").hover(
		function(){
			$("#m-no")[0].setAttribute('filter','url(#filter0_i)');
		},
		function(){
			$("#m-no")[0].setAttribute('filter','');
		}
	  );
	
	  $(".tak").hover(
		function(){
			$("#m-yes")[0].setAttribute('filter','url(#filter0_i)');
		},
		function(){
			$("#m-yes")[0].setAttribute('filter','');
		}
	  );

	  

	  $(document).on("click", "#m-no", function(){
		mdrag = -100;
		opacityx = 1;
		$card = $(".card:not(.disabled)");
		dragMove();
		release();
		}
	  );

	  $(document).on("click", "#m-yes", function(){
		mdrag = +100;
		opacityx = 1;
		$card = $(".card:not(.disabled)");
		dragMove();

		release();
		}
	  );
	  

  });



