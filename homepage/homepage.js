var Expand = (function() {
	var tile = $('.main__side');
	var tileLink = $('.main__side > .side__content');
	var sideClose = $('.side__close');
	var svg = $('.side__svg');
	
	var expanded  = false;
  
	var open = function() {
		
	  var tile = $(this).parent();
  
		if (!expanded) {
		  tile.addClass('main__side--expanded');
		  svg.addClass('main__side--expanded');
		  sideClose.addClass('side__close--show');
		  expanded = true;
		} 
	};
	
	var close = function() {
	  if (expanded) {
		tile.removeClass('main__side--expanded');
		sideClose.removeClass('side__close--show');
		expanded = false;
	  }
	}
  
	  var bindActions = function() {
		tileLink.on('click', open);
		sideClose.on('click', close);
	  };
  
	  var init = function() {
		bindActions();
	  };
  
	  return {
		init: init
	  };
  
	}());
  
  Expand.init();
  
  $(document).on("click", "#movie-collection-icon", function(){
	}
  );

  $(document).on("click", "#book-collection-icon", function(){
	}
);