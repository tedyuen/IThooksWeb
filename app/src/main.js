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
