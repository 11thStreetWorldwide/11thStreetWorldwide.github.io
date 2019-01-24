/* eslint-disable func-names */
$(() => {
  // $(document).ready shorthand
  $('#release-one').fadeIn('slow');
});

$(document).ready(() => {
  /* Every time the window is scrolled ... */
  $(window).scroll(() => {
    /* Check the location of each desired element */
    $('.release').each(function(i) {
      let bottomOfObject = $(this).position().top + $(this).outerHeight();
      let bottomOfWindow = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottomOfWindow > bottomOfObject) {
        $(this).animate({ opacity: '1' }, 1000);
      }
    });
  });
});
