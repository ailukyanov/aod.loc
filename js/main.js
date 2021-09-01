$('.wrapper').addClass('loaded');

/*------------------------------ <MENU-BURGER> ------------------------------*/
$('.icon-menu').click(function(event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
});
/*------------------------------ </MENU-BURGER> -----------------------------*/

/*------------------------------ <ADAPTIVE IMAGES> ------------------------------*/
function ibg(){
   $.each($('.ibg'), function(index, val) {
      if($(this).find('img').length>0){
         $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
   });
}
ibg();
/*------------------------------ </ADAPTIVE IMAGES> -----------------------------*/