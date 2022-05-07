var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("wrapper").style.display = "block";
}

$(document).ready(function(){

$('.dropdown').hover(function(){
  $(this).children('.submenu').stop(true, true).slideDown(500);
  $(this).find('.fa-caret-down').css({'transform':'rotate(180deg)', 'transition': '0.5s ease-in-out'});
},
function(){
  $(this).children('.submenu').stop(true, true).slideUp(500);
  $(this).find('.fa-caret-down').css({'transform':'rotate(0deg)', 'transition': '0.5s ease-in-out'});
});

$('#nav-icon1').click(function(){
	$(this).toggleClass('open');	
	if($('#nav_menu .menu_list').is(":visible")){
    			$("#nav_menu .menu_list").slideUp();
  		}else {
    			$("#nav_menu .menu_list").slideDown();
  	}
});

  //$('ul.tabs li').click(function(){
   // var tab_id = $(this).attr('data-tab');

   // $('ul.tabs li').removeClass('current');
   // $('.tab-content').removeClass('current');

   // $(this).addClass('current');
   // $("#"+tab_id).addClass('current');
 // })

//	$('#nav_menu .menu_list li').each(function(){
  //  	if(window.location.href.indexOf($(this).find('a:first').attr('href'))>-1){
    //		$(this).addClass('active').siblings().removeClass('active');
    //	}
	//});

    //$('#footer_1 .footer_left ul li').each(function(){
      //if(window.location.href.indexOf($(this).find('a:first').attr('href'))>-1){
        //$(this).addClass('active').siblings().removeClass('active');
      //}
  //});

    //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  $(window).load(function() {
        $('#slider').nivoSlider({
        effect:'random',
    });

   // $('#slider_1').nivoSlider({
     // effect:'boxRainReverse',
        
    //});

    //$('#bath_slider').nivoSlider({
      //effect:'boxRainReverse',
    //});
    });
       
//var containerEl = document.querySelector('.tiles');

//var mixer = mixitup(containerEl);


$(".fancybox").fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
image : {

      preload : "auto",
      protect : false
  }
});

$(".fancybox1").fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
image : {

      preload : "auto",
      protect : false
  }
});

  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: true,
    slideshowSpeed:3500,
    animationSpeed:3500,
    itemWidth: 262,
    pauseOnHover: true,
    itemMargin: 3,
    pauseOnAction: true, 
  });




$("#gform_2").validationEngine();

});
$(window).load(function() {
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
  });

(function($) {
  "use strict";
  
  $(window).load(function(){
      $('#loader-container').fadeOut("slow");
  });
});