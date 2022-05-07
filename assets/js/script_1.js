$(document).ready(function(){
  $('#nav-icon1').click(function(){
	 $(this).toggleClass('open');	
      if($('#nav_menu .menu_list').is(":visible")){
     			$("#nav_menu .menu_list").slideUp(500);
   		}else {
     			$("#nav_menu .menu_list").slideDown(500);
   	}
});
$('.dropdown').hover(function(){
  $(this).children('.submenu').stop(true, true).slideDown(500);
  $(this).find('.fa-caret-down').css({'transform':'rotate(180deg)', 'transition': '0.5s ease-in-out'});
},
function(){
  $(this).children('.submenu').stop(true, true).slideUp(500);
  $(this).find('.fa-caret-down').css({'transform':'rotate(0deg)', 'transition': '0.5s ease-in-out'});
}
);
	//$('#nav_menu .menu_list li').each(function(){
    //	if(window.location.href.indexOf($(this).find('a:first').attr('href'))>-1){
    	//	$(this).addClass('active').siblings().removeClass('active');
    	//}
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
//$('ul.tabs li').click(function(){
   // var tab_id = $(this).attr('data-tab');

  //  $('ul.tabs li').removeClass('current');
  //  $('.tab-content').removeClass('current');

  //  $(this).addClass('current');
  //  $("#"+tab_id).addClass('current');
  //})
});
$(window).load(function() {
 wow = new WOW({
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      });
  wow.init();
});