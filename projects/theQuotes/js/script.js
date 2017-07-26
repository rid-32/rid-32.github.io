"use strict";

var headerMenuButton = document.getElementById( 'menuButton' );

var headerMenu = document.getElementById( 'headerMenu' );

var closeHeaderMenu = document.getElementById( 'closeHeaderMenu' );

var homeReferer = document.getElementById( 'homeReferer' );

var leftPointer = document.getElementById( 'leftPointer' );

var rightPointer = document.getElementById( 'rightPointer' );

//конструктор слайдера шапки
var HeaderSlider = function() {
	var FRAME_NUM = 3;
	
	var sliderContentArr = [
		'it costs you nothing',
		'can make a dark day brighter',
		'can bring a rainbow to the skies'
	];
	
	var bgWallpapers = [
		'img/header-bg-image.png',
		'img/header-bg-image2.jpg',
		'img/header-bg-image3.jpg'
	];
	
	var pageHeader = document.getElementById( 'pageHeader' );
	
	var sliderContent = document.getElementById( 'sliderContent' );
	
	var sliderStickers = document.getElementById( 'sliderStickers' ).querySelectorAll( 'li' );
	
	var frame = 0;
	
	function setFrame() {
		var activeTag = 'active-sticker';
		
		var prevTag = ( frame == 0 ) ? FRAME_NUM -1 : frame - 1;
		
		var nextTag = ( frame == FRAME_NUM - 1 ) ? 0 : frame + 1;
		
		pageHeader.style.backgroundImage = 'url(' + bgWallpapers[ frame ] + ')';
		
		sliderContent.querySelector( 'span' ).innerHTML = sliderContentArr[ frame ];
		
		sliderStickers[ prevTag ].classList.remove( activeTag );
		sliderStickers[ nextTag ].classList.remove( activeTag );
		sliderStickers[ frame ].classList.add( activeTag );
	}
	
	this.init = function() {
		setFrame();
	};
	
	this.rightClick = function() {
		frame == FRAME_NUM - 1 ? frame = 0 : frame++;
		
		setFrame();
	};
	
	this.leftClick = function() {
		frame == 0 ? frame = FRAME_NUM - 1 : frame--;
		
		setFrame();
	};
};

//конструктор слайдера цитат
var QuotesSlider = function() {
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
	
	var quotePhrase = document.getElementById( 'quoteContent' ).querySelector( 'p' );
	
	var quoteAuthor = document.getElementById( 'quoteContent' ).querySelector( 'span' );
	
	var quotesSliderStickers = document.getElementById( 'quotesSliderStickers' ).getElementsByTagName( 'li' );
	
	var frames = quotesArr.length;
	
	var frame = frames - 1;
	
	function setFrame( frame ) {
		var prevFrame = frame == 0 ? frames - 1 : frame - 1;
		
		var activeTag = 'quotesActive';
		
		quotePhrase.innerHTML = quotesArr[ frame ];
		
		quoteAuthor.innerHTML = quotesAuthors[ frame ];
		
		quotesSliderStickers[ prevFrame ].classList.remove( activeTag );
		
		quotesSliderStickers[ frame ].classList.add( activeTag );
		
	}
	
	this.init = function() {
		setFrame( 0 );
	}
	
	this.run = function() {
		var timerId = setTimeout( function tick() {
			frame == frames - 1 ? frame = 0 : frame++;
			
			setFrame( frame );
			
			timerId = setTimeout( tick, 8000 );
		}, 8000 );
	}
};

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

var headerSlider = new HeaderSlider();

rightPointer.addEventListener( 'click', function( event ) {
	event.preventDefault();
	
	headerSlider.rightClick();
});

leftPointer.addEventListener( 'click', function( event ) {
	event.preventDefault();
	
	headerSlider.leftClick();
});

headerSlider.init();

var quotesSlider = new QuotesSlider;

quotesSlider.init();

quotesSlider.run();
