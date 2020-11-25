jQuery(function() {
  var topmenu = $('#top_menu');
  topmenu.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() >100) {
      topmenu.fadeIn();
    } else {
      topmenu.fadeOut();
    }
  });
  topmenu.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
    });
});
