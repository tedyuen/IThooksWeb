var StoreData = function(){
  this.typeData=[
    "移动APP(IOS/Android)",//0:
    "移动APP(IOS)",//1:
    "移动APP(Android)",//2:
    "移动HTML5",//3:
    "微信公众号",//4:
    "HTML5网站"//5:
  ],
  this.topClass=[
    "top-20",
    "top-0"
  ],
  this.sData = {
    thumb : [
      {
        tUrl:"images/case/shcourt/index.png",
        proName:"上海高级法院",
        type:this.typeData[0],
        topClass:this.topClass[0]
      },
      {
        tUrl:"images/case/wuliu/index.jpg",
        proName:"中远物流官网",
        type:this.typeData[5],
        topClass:this.topClass[1]
      },
      {
        tUrl:"images/case/cnyfast/index.png",
        proName:"国际金融资产交易平台",
        type:this.typeData[5],
        topClass:this.topClass[1]
      },
      {
        tUrl:"images/case/cnyfast/weixin_1.png",
        proName:"外汇交易中心微信站",
        type:this.typeData[4],
        topClass:this.topClass[0]
      },
      {
        tUrl:"images/case/rm/index.png",
        proName:"亿投传媒管理后台",
        type:this.typeData[5],
        topClass:this.topClass[1]
      },
      {
        tUrl:"images/case/eap/index.png",
        proName:"建行心融客户端",
        type:this.typeData[0],
        topClass:this.topClass[0]
      },
      {
        tUrl:"images/case/shfire/index.png",
        proName:"上海市消防局微信站",
        type:this.typeData[4],
        topClass:this.topClass[1]
      },
      {
        tUrl:"images/case/wuliu/index_mb.png",
        proName:"中远物流移动站",
        type:this.typeData[3],
        topClass:this.topClass[1]
      },
      {
        tUrl:"images/case/lenze/index.png",
        proName:"伦茨(中国)装配指导系统",
        type:this.typeData[5],
        topClass:this.topClass[1]
      },
      {
        tUrl:"images/case/sh12345/index.jpg",
        proName:"上海市民热线",
        type:this.typeData[2],
        topClass:this.topClass[0]
      },
      {
        tUrl:"images/case/macaw/index.png",
        proName:"脉歌音乐播放器",
        type:this.typeData[2],
        topClass:this.topClass[0]
      },
      {
        tUrl:"images/case/youai/index.png",
        proName:"有爱提醒",
        type:this.typeData[0],
        topClass:this.topClass[0]
      },
      {
        tUrl:"images/case/tiluo/index.png",
        proName:"提洛美容美发",
        type:this.typeData[0],
        topClass:this.topClass[0]
      },
      {
        tUrl:"images/case/kadou/index.jpg",
        proName:"卡兜商城",
        type:this.typeData[0],
        topClass:this.topClass[0]
      },
      {
        tUrl:"images/case/fengshang/index.png",
        proName:"风尚购物",
        type:this.typeData[0],
        topClass:this.topClass[0]
      },
      {
        tUrl:"images/case/tef/innder_1.png",
        proName:"T.E.F",
        type:this.typeData[0],
        topClass:this.topClass[0]
      },
      {
        tUrl:"images/case/wanfu/index.png",
        proName:"万服家政",
        type:this.typeData[0],
        topClass:this.topClass[0]
      },




    ]
  }
}

StoreData.prototype.initData = function($,template,frame){
  var tempData = this.sData.thumb;
  var html = $(template).html();
  var arr = [];
  $.each(tempData, function(i, o) {
    arr.push(this.formatTemplate(o, html));
  }.bind(this));
  $(frame).append(arr.join(''));
  $('[rel="tooltip"]').tooltip();
}


StoreData.prototype.formatTemplate = function(dta, tmpl){
  var format = {
    name: function(x) {
      return x
    }
  };
  return tmpl.replace(/{(\w+)}/g, function(m1, m2) {
    if (!m2)
      return "";
    return (format && format[m2]) ? format[m2](dta[m2]) : dta[m2];
  });
}

module.exports = StoreData;
