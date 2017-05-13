(function($){

  $( window ).on('mousewheel', function(event) {
    if ( window.innerWidth <= 800 ) return;
    var $window = $( window );
    var currentScrollPosition =  $window.scrollLeft();
    $(this).scrollLeft( (currentScrollPosition -= event.originalEvent.wheelDelta) );
    event.preventDefault();
  });
  
})(jQuery);
