define(function(require,exports,module){
     var $ = require('jquery');//引入jquery
     
     var util = require('./util');//引入工具类
    
     
     // var helloSeaJS = document.getElementById('hello-seajs');
     var helloSeaJS = $('#hello-seajs');
     helloSeaJS.css({
          color: util.randomColor()
     });
     // helloSeaJS.style.color = util.randomColor();
     window.setInterval(function(){
          helloSeaJS.css({
               color: util.randomColor()
           });
     },1500);
});

