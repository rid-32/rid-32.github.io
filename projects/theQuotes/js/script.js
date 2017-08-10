"use strict";

var headerMenuButton = document.getElementById( 'menuButton' );

var headerMenu = document.getElementById( 'headerMenu' );

var closeHeaderMenu = document.getElementById( 'closeHeaderMenu' );

var homeReferer = document.getElementById( 'homeReferer' );

//если мобильные устройства, где на кнопку МЕНЮ должно быть нажатие;
//для ПК будет работать hover
//10 - это полоса прокрутки
if ( window.innerWidth + 10 < 1200 ) {
	headerMenuButton.addEventListener( 'click', function() {
		headerMenu.style.display = 'block';
	});
} else {
	//если десктопный экран, то при наведении на кнопку МЕНЮ
	//появляется МЕНЮ
	headerMenuButton.addEventListener( 'mouseover', function() {
		headerMenu.style.display = 'block';
	});
}

//скрыть появляющееся меню при нажатии на крестик
closeHeaderMenu.addEventListener( 'click', function() {
		headerMenu.style.display = 'none';
});

homeReferer.addEventListener( 'click', function() {
	headerMenu.style.display = 'none';
});

//слайдеры на jQuery
( function( $ ) {
	
  //слайдер шапки сайта
  $( document ).ready( function(){
    $( '#pageHeader' ).backgroundSlider( {
      images: [
        'img/header-bg-image.png',
        'img/header-bg-image2.jpg',
        'img/header-bg-image3.jpg'
      ],
      bgColors: [
        '#000'
      ],
      bgSize: [
        'cover',
        'cover',
        'cover'
      ],
      bgPosition: [
        'left center',
        'center top',
        'center top'
      ],
      bgRepeat: [
        'no-repeat',
        'no-repeat',
        'no-repeat'
      ],
      autoRun: true,
      sticker: '#sliderStickers',
      activeClass: '.active-sticker',
      stickerClick: true,
      leftPtr: '#leftPointer',
      rightPtr: '#rightPointer',
      slideOther: {                  
        changeParent: '#sliderContent',        
        changeTarget: '.header-title',        
        insertFrom: 'sliderContent.html'           
      }
    } );
  } );
  
	//слайдер цитат
	( function() {
		
		var quotesArr = [
	
			'I love people who make me laugh. I honestly think it’s the thing \
			I like most, to laugh. It cures a multitude of ills. \
			It is probably the most important thing in a person.',
			
			'Your life is a result of the choices you make. If you don\`t like \
			your life it\`s time to start making better choices',
			
			'I\`m thankfull for all of those who said No to me. It\`s becouse \
			of them I\`m doing if myself',
			
			'Often the difference between a successful person and a failure \
			is not one has better abilities of ideas, but the courage that one \
			has to bet on one\`s ideas, to take a calculated risk and to act'
		];
		
		var quotesAuthors = [
			'Audrey Hepburn',
			
			'Michelle Fennh',
			
			'Albert Einstein',
			
			'Andre Malraux'
			
		];
		
		var frames = 4;
		
		var frame = 1;
		
		var timerId;
		
		var allStickers = $( '#quotesSliderStickers' ).find( 'li' );
		
		function setQuotesFrame( frame ) {
			
			var elems = document.getElementById( 'quotesSliderStickers' ).getElementsByTagName( 'li' );
		
			$( '#quotesSliderStickers' ).find( 'li' ).removeClass( 'quotesActive' );
			
			$( elems[ frame - 1 ] ).addClass( 'quotesActive' );
			
			$( '#quoteContent' ).find( 'p' ).text( quotesArr[ frame - 1 ] );
			
			$( '#quoteContent' ).find( 'span' ).text( quotesAuthors[ frame - 1 ] );
		}
		
		//переключение слайда по нажатию на стикер
		allStickers.click( function() {
			
			frame = + this.dataset.description;
			
			setQuotesFrame( frame );
			
			clearTimeout( timerId );
			
			runTimer();
			
			return false;
		} );
		
		//автоматический запуск слайдера цитат
		function runTimer() {
		
			timerId = setTimeout( function tick() {
				
				frame == frames ? frame = 1 : ++frame;
				
				setQuotesFrame( frame );
				
				timerId = setTimeout( tick, 7000 );
			}, 7000 );
		}
		
		runTimer();
	} )();
	
  
} )( jQuery );

