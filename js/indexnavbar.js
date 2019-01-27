let counter = 0;
$('#navbar-toggle').click(() => {
  if (counter % 2 === 0) {
    $('#navbar').css({ 'z-index': 100 });
    $('.main-nav').css({ 'z-index': 100 });
    $('.main-nav').css({ background: '#000000' });
    $('.main-nav').css({ 'background-image': '#000000' });
    $('span').css({ background: 'white' });
    $('#navbar').css({ 'background-image': '#000000' });
    $('#navbar').css({ background: '#000000' });
    $('.main-nav').css({ opacity: 1 });
    $('#cover').css({ height: '100vh', background: '#000000' });
    counter++;
  } else {
    $('.main-nav').css({ 'z-index': -1 });
    $('#navbar').css({ background: 'white' });
    $('span').css({ background: '#000000' });
    $('#navbar').css({ background: 'white' });
    $('.main-nav').css({ opacity: 0 });
    $('#cover').css({ height: 'auto', background: 'white' });
    counter++;
  }
  $('.nav-links').toggleClass('hidden');
  $('#navbar-toggle').toggleClass('open');
  $('#nav-logo').toggleClass('hidden');
});

$('#music-link').on({
  mouseenter: () => {
    $('#navbar').css({
      'background-image': 'url(assets/images/IMG_2779.JPG)',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover',
      height: '100vh'
    });
    $('.main-nav').css({
      'background-image': 'none',
      background: 'none'
    });
  },
  mouseleave: () => {
    $('.main-nav').css({
      'background-image': '#000000',
      background: '#000000'
    });
    $('.nav-links').css({ color: 'white' });
    $('#navbar').css({ background: '#000000', 'background-image': '#000000', height: 'auto' });
  }
});
$('#videography-link').on({
  mouseenter: () => {
    $('#navbar').css({
      'background-image': 'url(assets/images/milestai.jpg)',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover',
      height: '100vh'
    });
    $('.main-nav').css({
      'background-image': 'none',
      background: 'none'
    });
  },
  mouseleave: () => {
    $('.main-nav').css({
      'background-image': '#000000',
      background: '#000000'
    });
    $('#navbar').css({ background: '#000000', 'background-image': '#000000', height: 'auto' });
  }
});
$('#lineup-link').on({
  mouseenter: () => {
    $('#navbar').css({
      'background-image': 'url(assets/images/IMG_2785.JPG)',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover',
      height: '100vh'
    });
    $('.main-nav').css({
      'background-image': 'none',
      background: 'none'
    });
  },
  mouseleave: () => {
    $('.main-nav').css({
      'background-image': '#000000',
      background: '#000000'
    });
    $('#navbar').css({ background: '#000000', 'background-image': '#000000', height: 'auto' });
  }
});
