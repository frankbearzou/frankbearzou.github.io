/**
 * Created by yuzezou on 2017-01-20.
 */
$(function() {
  $('.link').click(function() {
    var id = $(this).attr('href');
    $('html,body').animate({ scrollTop: $(id).offset().top }, 'slow');
    // Prevent default behavior of link
    return false;
  });
});