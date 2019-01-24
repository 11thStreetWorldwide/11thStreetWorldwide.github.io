/* eslint-disable func-names */
$(() => {
  // $(document).ready shorthand
  $('#video-one').fadeIn('slow');
  $('#video-two').fadeIn('slow');
});

$(document).ready(() => {
  /* Every time the window is scrolled ... */
  $(window).scroll(() => {
    /* Check the location of each desired element */
    $('.video').each(function(i) {
      const bottomOfObject = $(this).position().top + $(this).outerHeight();
      const bottomOfWindow = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottomOfWindow > bottomOfObject) {
        $(this).animate({ opacity: '1' }, 1000);
      }
    });
  });
});
