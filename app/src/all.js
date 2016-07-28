var $ = global.jQuery = require('jquery');
require('bootstrap');
var LogUtil = require('./bean/LogUtil');
var log = new LogUtil(true);//Set can out log.

var StoreData = require('./bean/StoreData');
var data = new StoreData();

log.showLog("Test Log");



$(function(){
  //initTopPosi();
  //$(window).scroll(function(){
  //  var top = $(document).scrollTop();
  //  getTopIndex(top);
  //});
  data.initData($,'#thumb-template','#case-frame');
});





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




