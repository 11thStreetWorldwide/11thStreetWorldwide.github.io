/* eslint-disable func-names */
$(() => {
  // $(document).ready shorthand
  $('#member-one').fadeIn('slow');
  $('#member-two').fadeIn('slow');
  $('#member-three').fadeIn('slow');
  $('#member-four').fadeIn('slow');
});

$(document).ready(() => {
  /* Every time the window is scrolled ... */
  $(window).scroll(() => {
    /* Check the location of each desired element */
    $('.member-container').each(function(i) {
      let topOfObject = $(this).position().top;
      let bottomOfWindow = $(window).scrollTop() + $(window).height();

      /* If the object is visible in window */
      if (bottomOfWindow > topOfObject) {
        $(this).animate({ opacity: '1' }, 1000);
      }
    });
  });
});
