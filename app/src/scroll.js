
var topOffset = 130;


$('#menu-nav .navbar-collapse a').click(function (e) {
  var href = $(this).attr('href');
  var tabId = $(this).attr('data-tab');
  if ('#' !== href) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop:$(href).offset().top-topOffset
    }, 600);
    if (tabId) {
      $('#tab-develop').tab('show');
      $("#feature-tab a[href='#" + tabId + "']").tab('show');

    }
  }
});




