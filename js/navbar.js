let counter = 0;
$('#navbar-toggle').click(() => {
  if (counter % 2 === 0) {
    $('#navbar').css({ background: '#000000' });
    $('span').css({ background: 'white' });
    $('.main-nav').css({ 'background-image': '#000000' });
    $('.main-nav').css({ background: '#000000' });
    $('.main-nav').css({ opacity: 1 });
    counter++;
  } else {
    $('#navbar').css({ background: 'white' });
    $('span').css({ background: '#000000' });
    $('.main-nav').css({ background: '#000000' });
    $('.main-nav').css({ opacity: 0 });
    counter++;
  }
  $('.nav-links').toggleClass('hidden');
  $('#navbar-toggle').toggleClass('open');
  $('#nav-logo').toggleClass('hidden');
});

$('#music-link').on({
  mouseenter: () => {
    $('.nav-links').css({ color: 'black' });
    $('.main-nav').css({
      'background-image': 'url(../assets/images/MilesAidan.jpg)',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover'
    });
  },
  mouseleave: () => {
    $('.nav-links').css({ color: 'white' });
    $('.main-nav').css({ background: '#000000' });
    $('.main-nav').css({ 'background-image': '#000000' });
  }
});
$('#videography-link').on({
  mouseenter: () => {
    $('.nav-links').css({ color: 'black' });
    $('.main-nav').css({
      'background-image': 'url(../assets/images/milestai.jpg)',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover'
    });
  },
  mouseleave: () => {
    $('.nav-links').css({ color: 'white' });
    $('.main-nav').css({ background: '#000000' });
    $('.main-nav').css({ 'background-image': '#000000' });
  }
});
$('#lineup-link').on({
  mouseenter: () => {
    $('.main-nav').css({
      'background-image': 'url(../assets/images/IMG_2785.JPG)',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover'
    });
  },
  mouseleave: () => {
    $('.main-nav').css({ background: '#000000' });
    $('.main-nav').css({ 'background-image': '#000000' });
  }
});
$('#contact-link').on({
  mouseenter: () => {
    $('.main-nav').css({
      'background-image': 'url(../assets/images/IMG_2779.JPG)',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover'
    });
  },
  mouseleave: () => {
    $('.main-nav').css({ background: '#000000' });
    $('.main-nav').css({ 'background-image': '#000000' });
  }
});
