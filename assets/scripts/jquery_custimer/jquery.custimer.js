/* 
* cusTimerDown 0.1 
* Copyright (c) 2014 Zhangdi http://cindyfn.com/ 
* Date: 2014-09-16 
* 输入秒数，转换成分钟＋秒，然后进行倒计时
* 主要方法:时间转换，倒计时，暂停计时，启动计时，声音点设置。
*/ 
;
define(function(require,exports,moudles){
     return function(jquery){
            /*
             *插件类别：1.类级别的插件开发。2.对象级别插件开发。
             *
             * 1.类级别：$.post()
             * 2.对象级别：$("#Me").插件名称();
             *
             * 以下是开发对象级别插件的步骤：
             *1.定义一个带有个名为“$”参数的匿名函数。将jQuery这个全局变量传入匿名函数，并执行匿名函数。
             *
             *2.$.fn或者jQuery.fn本质上可以等于jQuery.prototype。实际上给jQuery扩展了一个名为"插件名"的方法,调用方法：$("#Me").插件名称();
             *
             *3.$.extend(defaultSettings,settings);的含义是，使用settings来覆盖defaultSettings（同名键值）,
             *或者 settings = $.extend({},defaultSettings,settings);即不去覆盖defaultSettings（默认参数），而是合并到一个空的Object。
             *or settings = $.extend(true,{},defaultSettings, settings);当$.extend的第一个参数为true时，会开启深层拷贝
             *
             *4.this在插件内部指向当前通过选择器选择的jquery对象，而非传统意义上的对象的引用。this.each遍历所有的元素。return JQuery对象保证插件的链式操作。
             *
             *5.插件中定义的所有方法/函数的末尾都必须带有一个 “;”（分号），否则将不利于代码的最小化。
             * 
             * 参考:http://www.iteye.com/topic/545971
             * 参考:http://developer.51cto.com/art/201108/286391.htm
             * 参考:http://www.cnblogs.com/fromearth/archive/2009/07/08/1519054.html
             * 参考:http://www.36ria.com/2768
             * 参考:http://www.cnblogs.com/RascallySnake/archive/2010/05/07/1729563.html
             * 参考:http://www.36ria.com/2765
             * 参考:http://vanessa.b3log.org/jQuery-plugin-architecture
             * 参考:http://docs.jquery.com/Plugins/Authoring
             */

            /* 创建一个闭包 */
            ;(function ($) {
                /* 插件的定义 */
                
                $.fn.custimer = function (options) {
                    debug(this);

                    var altolTime;//总时间和剩余事件
                    var stimeClock;//timeOut循环记录
                    var contentDiv;//时间容器
                    var beginBtn;//开始按钮
                    var stopBtn;//停止按钮
                    var resetBtn;//停止按钮
                    var timeDingDang = [];
                    var voiceBtn;
                    var voiceType;

                    // build main options before element iteration
                    var opts = $.extend({}, $.fn.custimer.defaults, options);
                    // iterate and reformat each matched element
                    
                    return this.each(function () {
                        $this = $(this);
                        // build element specific options
                        var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
                        // update element styles
                        altolTime = o.time_length;
                        timeDingDang = o.time_ding_dang;

                        // contentDiv = $("#"+o.show_ele_id);
                        contentDiv = $(this);
                        $(this).addClass('timedownclass');
                        beginBtn = $("#"+o.begin_btn_id);
                        stopBtn = $("#"+o.stop_btn_id);
                        resetBtn = $("#"+o.reset_btn_id);

                        voiceBtn = $("#"+o.voice_btn_id);
                        voiceType = o.voice_type;
                        contentDiv.html(sencondToTimer(o.time_length));//显示在容器中的内容
                        //开始的按钮绑定事件
                        beginBtn.on('click',function(){
                            if(altolTime < 10){
                                contentDiv.css({"color":"red"});
                            }else{
                                contentDiv.css({"color":"white"});
                            }
                            clearTimeout(stimeClock);
                            stimeClock = setTimeout(timeDownFn,1000);

                        });
                        //停止的按钮绑定事件
                        stopBtn.on('click',function(){
                            if(altolTime < 10){
                                contentDiv.css({"color":"red"});
                            }else{
                                contentDiv.css({"color":"white"});
                            }
                            clearTimeout(stimeClock);
                        });

                        //重置参数
                        resetBtn.on('click',function(){
                            if(altolTime < 10){
                                contentDiv.css({"color":"red"});
                            }else{
                                contentDiv.css({"color":"white"});
                            }
                            altolTime = o.time_length;
                            contentDiv.html(sencondToTimer(altolTime));//显示在容器中的内容
                            clearTimeout(stimeClock);
                        });
                        function sencondToTimer(sec){
                            var s = parseInt(sec);
                            minuite = parseInt(s/60);
                            if(minuite < 10){
                                minuite = "0"+minuite;
                            }
                            second = parseInt(s%60);
                            if(second < 10){
                                second = "0"+second;

                            }
                            return minuite+" : "+ second;
                        }
                        //循环倒计时
                        function timeDownFn(){

                            o.onFlagTime();
                            if(altolTime == 30){
                                    $("#play1").click();//响铃
                                
                            }else if(altolTime == 1){
                                if(voiceType ==0){
                                    $("#play2").click();//响铃
                                }else if(voiceType ==1){
                                    $("#play3").click();//提问结束响铃
                                }else if(voiceType ==2){
                                     $("#play4").click();//回答结束响铃
                                }
                            }
                            // if(timeDingDang.indexOf(altolTime)>=0){
                            //     $(voiceBtn).click();//响铃
                            //     $("#jp_audio_0").play();
                            // }
                            if(altolTime<=0){
                                clearTimeout(stimeClock);
                                return false;
                            }

                            altolTime = altolTime -1;
                            if(altolTime < 10){
                                contentDiv.css({"color":"red"});
                            }else{
                                contentDiv.css({"color":"white"});
                            }
                            contentDiv.html(sencondToTimer(altolTime));//显示在容器中的内容
                            stimeClock = setTimeout(timeDownFn,1000);
                        }
                    });
                };
                // 私有函数：debugging
                function debug($obj) {
                    if (window.console && window.console.log)
                        window.console.log('obj size: ' + $obj.size());
                }

                /* 定义暴露format函数 */
                $.fn.custimer.format = function (txt) {
                };
                // 插件的defaults
                $.fn.custimer.defaults = {
                    show_ele_id: "timedown",//显示的容器
                    time_length: 170, //输入的秒数
                    begin_btn_id: 'beginBtn',
                    stop_btn_id: 'stopBtn',
                    reset_btn_id: 'resetBtn',
                    time_ding_dang: [30,1,0],
                    voice_type: 0,
                    voice_btn_id: "voiceplay",
                    onFlagTime:function(){}//当到设定时间时候触发事件
                };
                /* 设置版本号 */
                $.fn.custimer.version = 1.0;
                //  时间转换函数
                
            })(jQuery);


     }
 
});
