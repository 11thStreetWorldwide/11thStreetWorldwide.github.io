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
      const topOfObject = $(this).position().top;
      const bottomOfWindow = $(window).scrollTop() + $(window).height();

      /* If the object is visible in window */
      if (bottomOfWindow > topOfObject) {
        $(this).animate({ opacity: '1' }, 1000);
      }
    });
  });
});
