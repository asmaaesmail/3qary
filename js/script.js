$(document).ready(function () {


	var scroltopbtn = $("#top");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			scroltopbtn.fadeIn();
		} else {
			$(scroltopbtn).fadeOut();
		}
	});
	scroltopbtn.on('click', function () {
		$('html , body').animate({
			scrollTop: 0
		}, 600);
	});

});


/*slider1*/

   function moveTo(el) {
  if (el == "fifth") {
    var selected = $(".six").next();
  } else if (el == "third") {
    var selected = $(".second").prev();
  } else {
    var selected = el;
  }
  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();
  $(selected).removeClass().addClass("fourth");
  $(prev).removeClass().addClass("third");
  $(next).removeClass().addClass("fifth");
  $(nextSecond).removeClass().addClass("six");
  $(prevSecond).removeClass().addClass("second");
  $(nextSecond).nextAll().removeClass().addClass('seventh');
  $(prevSecond).prevAll().removeClass().addClass('first');

}



/*owl*/

  $('.owl-carousel').owlCarousel({
         rtl:true,
         loop:true,
         margin:0,
         nav:true,
         autoplay:true,
         autoplayTimeout:5000,
         responsive:{
         0:{
         items:1
         },
         600:{
         items:2
         },
         1000:{
         items:2
         }
         }
         })

/*wow*/
$('#scroll div').click(function() {
  moveTo($(this));
});
  wow = new WOW(
      {
          animateClass: 'animated',
          offset:       100,
          rtl:true,
          callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();


/********slider**************/

$(function(){

	var sliderWidth = $('.slider').width();
	var nowLi = 3;
	var li_count = $('.slider li').length;

	$('.slider ul').css({width:li_count * sliderWidth});
	$('.slider li').css({width:sliderWidth});

	for(var i=0; i<li_count;i++){
		$('.sliderControl').append('<a></a>');
	}


	$('.sliderControl a, .slider li').click(function(){
		nowLi = $(this).index();
		sliderChange();
		$('.sliderControl a').eq(nowLi).css({'background-color':'#Fff'});
		$('.sliderControl a').eq(nowLi).siblings().css({'background-color':'#333'});
		$('.slider li').eq(nowLi).css({'transform':'rotateY(0)'});
		$('.slider li').eq(nowLi).prevAll().css({'transform':'rotateY(60deg)'});
		$('.slider li').eq(nowLi).nextAll().css({'transform':'rotateY(-60deg)'});
		$('.slider li').eq(0).css({'left':'-60px'});
	})


	function sliderChange(){
		$('.slider ul').stop(true, false).animate({left: sliderWidth * nowLi * -1}, 500);
	}

	var timer = setInterval(perpic, 5000);

	function perpic(){		
		console.log( 'nowLi = ' + nowLi)
		nowLi++;
		if(nowLi>=li_count){
			nowLi=0;
		};
		sliderChange();
		$('.sliderControl a').eq(nowLi).css({'background-color':'#Fff'});
		$('.sliderControl a').eq(nowLi).siblings().css({'background-color':'#333'});
		$('.slider li').eq(nowLi).css({'transform':'rotateY(0)'});
		$('.slider li').eq(nowLi).prevAll().css({'transform':'rotateY(60deg)'});
		$('.slider li').eq(nowLi).nextAll().css({'transform':'rotateY(-60deg)'});
	}

	$('.slider').hover(function(){
		clearInterval(timer);
		$('.timer .percentage').removeClass('gogo');
	},function(){
		timer = setInterval(perpic, 5000);
		$('.timer .percentage').addClass('gogo');
	})

})
    




   var swiper = new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 1,
        loop: true,
        effect: 'fade',
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    $('.gallery-wrap').masonry({
        itemSelector: '.gallery-grid'
    });

    /*wow*/
$('#scroll div').click(function() {
  moveTo($(this));
});
  wow = new WOW(
      {
          animateClass: 'animated',
          offset:       100,
          callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();