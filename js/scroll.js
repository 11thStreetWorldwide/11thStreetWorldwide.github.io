// Animate smooth scroll
$('#view-work-btn').on('click', () => {
  const work = $('#work').position().top;

  $('html, body').animate(
    {
      scrollTop: work
    },
    900
  );
});
