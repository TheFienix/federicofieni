(function($){

  var dragscroll = document.querySelectorAll('.dragscroll');
  if ( dragscroll.length === 0 ) return;

  $( window ).on('mousewheel', function(event) {
    if ( window.innerWidth <= 800 ) return;
    // event.preventDefault();
    var $window = $( window );
    var currentScrollPosition =  $window.scrollLeft();
    $(this).scrollLeft( (currentScrollPosition -= ( 45 * event.deltaY )) );
  });

})(jQuery);
