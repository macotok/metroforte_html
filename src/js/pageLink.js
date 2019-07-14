import $ from 'jquery';

export default function pageLink() {
  $('a[href^="#"]').on('click', function () {
    const speed = 1000;
    const href = $(this).attr('href');
    const target = $(href === '#' || href === '' ? 'html' : href).offset().top;
    $('body, html').animate({
      scrollTop: target,
    }, speed, 'swing');
    return false;
  });
}
