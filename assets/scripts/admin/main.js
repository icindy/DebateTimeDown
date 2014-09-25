define(function(require,exports,module){
     var $ = require('jquery');//引入jquery
     require('boot')($);
     require('jstorage')($);//共享给jquery

     
     $.jStorage.set("theme", "现在的社会是不是已经不如以前了？");
     $.jStorage.set("square_name", "电子科技大学代表队");
     $.jStorage.set("square_image", "uestc_header.png");
     $.jStorage.set("opposition_name", "西南交通大学代表队");
     $.jStorage.set("opposition_image", "uestc_header.png");
     $.jStorage.set("test", [{name:"heheh"},{name:"husaiu"}]);
     var index = $.jStorage.index();
    console.log(index); // ["key1","key2","key3"]
    var test = $.jStorage.get("test");
    console.log(test);
    console.log(test.length);
    $.jStorage.flush();
});