"use strict";

( function( $ ) {
  
  //слайдер шапки
	( function () {
				
		var sliderLabels = [
      'Handmade Bycicle',
      'Custom Bycicle',
      'Standart Bycicle',
      'VIP Bycicle',
      'OldSchool Bycicle'
    ];
    
    var sliderMeanings = [
      'You <span>create</span> the <span>journey</span>, we supply the <span>parts.',
      'You <span>create</span> design, we <span>assemble</span> the bysicle',
      'You pay <span>the money</span>, we <span>deliver</span> bisycle',
      'Best <span>bycicles</span> in the <span>world!</span>',
      'Best then <span>VIP</span> bycicles'
    ];
		
		var frames = 5;
		
		var frame = 1;
		
		var allStickers = $( '#headerSliderStickers' ).find( 'li' );
		
		var timerId;
		
		function setHeaderFrame( frame ) {
			
			var elems = document.getElementById( 'headerSliderStickers' ).getElementsByTagName( 'li' );
		
			allStickers.removeClass( 'active-sticker' );
			
			$( elems[ frame - 1 ] ).addClass( 'active-sticker' );
			
			$( '#headerTitle' ).text( sliderLabels[ frame - 1 ] );
      
      $( '#headerContent' ).html( sliderMeanings[ frame - 1 ] );
		}
		
		//переключение слайда по нажатию на стикер
		allStickers.click( function() {
			
			frame = + this.dataset.description;
      
			setHeaderFrame( frame );
			
			clearTimeout( timerId );
			
			runTimer();
			
			return false;
		} );
		
		//по нажатию на левый указатель
		$( '#leftPointer' ).click( function() {
			
			frame == 1 ? frame = frames : --frame;
			
			setHeaderFrame( frame );
			
			clearTimeout( timerId );
			
			runTimer();
      
      return false;
		} );
		
		//по нажатию на правый указатель
		$( '#rightPointer' ).click( function() {
			
			frame == frames ? frame = 1 : ++frame;
			
			setHeaderFrame( frame );
			
			clearTimeout( timerId );
			
			runTimer();
      
      return false;
		} );
		
		//автоматический запуск слайдера шапки
		function runTimer() {
			
			timerId = setTimeout( function tick() {
				
				frame == frames ? frame = 1 : ++frame;
				
				setHeaderFrame( frame );
				
				timerId = setTimeout( tick, 5000 );
			}, 5000 );
		}
		
		runTimer();
	
	} )();
  
  //~ Стилизация Select
  
  $(document).ready(function(){
    
    $( '.styled' ).customSelect();
    
  });
  
} ) ( jQuery );
