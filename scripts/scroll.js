(function($){

  $( window ).on('mousewheel', function(event) {
    if ( window.innerWidth <= 800 ) return;
    var $window = $( window );
    var currentScrollPosition =  $window.scrollLeft();
    var direction = event.originalEvent.wheelDelta < 0 ? -1 : 1;
    $(this).scrollLeft( (currentScrollPosition -= ( 30 * direction )) );
    event.preventDefault();
  });

})(jQuery);
