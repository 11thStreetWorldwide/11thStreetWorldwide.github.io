// Animate smooth scroll
$('#view-lineup-btn').on('click', () => {
  const lineup = $('#lineup').position().top;

  $('html, body').animate(
    {
      scrollTop: lineup
    },
    900
  );
});
