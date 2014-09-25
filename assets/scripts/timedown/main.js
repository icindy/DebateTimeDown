define(function(require,exports,module){
     var $ = require('jquery');//引入jquery
     require('onepage')($);
     // require('boot')($);//共享给jquery
     require('timer')($);//共享给jquery
     require('jplay')($);//共享给jquery
     require('jstorage')($);//共享给jquery
     // require('transit')($);//共享给jquery
     // require('ferroSilder')($);//共享给jquery
     // 
     $("#jquery_jplayer_1").jPlayer({ready: function () {
         $(this).jPlayer("setMedia", {
            volume: 100,
          wav:"assets/res/l30s.mp3"
         });
        },
        swfPath: "assets/res/",
        supplied: "wav,mp3"
     });

     $("#jquery_jplayer_2").jPlayer({ready: function () {
         $(this).jPlayer("setMedia", {
          volume :100,
          wav:"assets/res/l1s.mp3"
         });
        },
        swfPath: "assets/res/",
        supplied: "wav,mp3"
     });

     $("#jquery_jplayer_3").jPlayer({ready: function () {
         $(this).jPlayer("setMedia", {
            volume: 100,
          wav:"assets/res/ht.mp3"
         });
        },
        swfPath: "assets/res/",
        supplied: "wav,mp3"
     });

     // $("#jquery_jplayer_4").jPlayer({ready: function () {
     //     $(this).jPlayer("setMedia", {
     //      volume :100,
     //      wav:"assets/res/ht.wav"
     //     });
     //    },
     //    swfPath: "assets/res/",
     //    supplied: "wav,mp3"
     // });
    $("#play1").click(function(){
        $("#jquery_jplayer_1").jPlayer( "play" );
     });
     $("#play2").click(function(){
        $("#jquery_jplayer_2").jPlayer( "play" );
     });

     $("#play3").click(function(){
        $("#jquery_jplayer_3").jPlayer( "play" );
     });
     $("#play4").click(function(){
        $("#jquery_jplayer_3").jPlayer( "play" );
     });
     $("#btn1").click(function(){
        $("#play1").click();
     });
     $("#btn2").click(function(){
        $("#play2").click();
     });
     $("#btn3").click(function(){
        $("#play3").click();
     });
     $("#btn4").click(function(){
        $("#play4").click();
     });

     $('.main').onepage_scroll({
        sectionContainer: ".container-fluid",
        easing: "ease-in",
        loop: false
        // direction: "horizontal"
     });

    $("#timedown1").custimer({
        time_length:180,
        begin_btn_id:"beginBtn1",
        stop_btn_id:"stopBtn1",
        reset_btn_id: 'resetBtn1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown1_1").custimer({
        time_length:150,
        begin_btn_id:"beginBtn1_1",
        stop_btn_id:"stopBtn1_1",
        reset_btn_id: 'resetBtn1_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#tw1").custimer({
        time_length:15,
        begin_btn_id:"twbeginBtn1",
        stop_btn_id:"twstopBtn1",
        reset_btn_id: 'twresetBtn1',
        voice_type: 1,
        time_ding_dang: [0]
    });
    $("#hd1").custimer({
        time_length:20,
        begin_btn_id:"hdbeginBtn1",
        stop_btn_id:"hdstopBtn1",
        reset_btn_id: 'hdresetBtn1',
        voice_type: 2,
        time_ding_dang: [0]
    });

    var flag2=2;
    $("#twbeginBtn1").on('click',function()
    {
            flag2 =1;
    });
    $("#hdbeginBtn1").on('click',function()
    {
            flag2 =0;
    });
    $("#flag2Btn").on('click',function(){
        $("#twresetBtn1").click();
        $("#hdresetBtn1").click();
        if(flag2 == 1){
            $("#twstopBtn1").click();
            $("#hdbeginBtn1").click();
        }else if(flag2 == 0){
            $("#hdstopBtn1").click();
            $("#twbeginBtn1").click();
        }else{
            $("#beginBtn1_1").click();
            $("#twbeginBtn1").click();
        }
    });
    $("#flag2StopBtn").on('click',function(){
        $("#stopBtn1_1").click();
        $("#hdstopBtn1").click();
        $("#twstopBtn1").click();
        flag2=2;
    });

    

    $("#timedown2").custimer({
        time_length:180,
        begin_btn_id:"beginBtn2",
        stop_btn_id:"stopBtn2",
        reset_btn_id: 'resetBtn2',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown2_1").custimer({
        time_length:150,
        begin_btn_id:"beginBtn2_1",
        stop_btn_id:"stopBtn2_1",
        reset_btn_id: 'resetBtn2_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#tw2").custimer({
        time_length:15,
        begin_btn_id:"twbeginBtn2",
        stop_btn_id:"twstopBtn2",
        reset_btn_id: 'twresetBtn2',
        voice_type: 1,
        time_ding_dang: [0]
    });
    $("#hd2").custimer({
        time_length:20,
        begin_btn_id:"hdbeginBtn2",
        stop_btn_id:"hdstopBtn2",
        reset_btn_id: 'hdresetBtn2',
        voice_type: 2,
        time_ding_dang: [0]
    });

    var flag3=2;
    $("#twbeginBtn2").on('click',function()
    {
            flag3 =1;
    });
    $("#hdbeginBtn2").on('click',function()
    {
            flag3 =0;
    });
    $("#flag3Btn").on('click',function(){
        $("#twresetBtn2").click();
        $("#hdresetBtn2").click();
        if(flag3 == 1){
            $("#twstopBtn2").click();
            $("#hdbeginBtn2").click();
        }else if(flag3 == 0){
            $("#hdstopBtn2").click();
            $("#twbeginBtn2").click();
        }else{
            $("#beginBtn2_1").click();
            $("#twbeginBtn2").click();
        }
    });

    $("#flag3StopBtn").on('click',function(){
        $("#stopBtn2_1").click();
        $("#hdstopBtn2").click();
        $("#twstopBtn2").click();
        flag3=2;
    });


    $("#timedown3").custimer({
        time_length:180,
        begin_btn_id:"beginBtn3",
        stop_btn_id:"stopBtn3",
        reset_btn_id: 'resetBtn3',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown3_1").custimer({
        time_length:150,
        begin_btn_id:"beginBtn3_1",
        stop_btn_id:"stopBtn3_1",
        reset_btn_id: 'resetBtn3_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#tw3").custimer({
        time_length:15,
        begin_btn_id:"twbeginBtn3",
        stop_btn_id:"twstopBtn3",
        reset_btn_id: 'twresetBtn3',
        voice_type: 1,
        time_ding_dang: [0]
    });
    $("#hd3").custimer({
        time_length:20,
        begin_btn_id:"hdbeginBtn3",
        stop_btn_id:"hdstopBtn3",
        reset_btn_id: 'hdresetBtn3',
        voice_type: 2,
        time_ding_dang: [0]
    });

    var flag4=2;
    $("#twbeginBtn3").on('click',function()
    {
            flag4 =1;
    });
    $("#hdbeginBtn3").on('click',function()
    {
            flag4 =0;
    });
    $("#flag4Btn").on('click',function(){
        $("#twresetBtn3").click();
        $("#hdresetBtn3").click();
        if(flag4 == 1){
            $("#twstopBtn3").click();
            $("#hdbeginBtn3").click();
        }else if(flag4 == 0){
            $("#hdstopBtn3").click();
            $("#twbeginBtn3").click();
        }else{
            $("#beginBtn3_1").click();
            $("#twbeginBtn3").click();
            
        }
    });

    $("#flag4StopBtn").on('click',function(){
        $("#stopBtn3_1").click();
        $("#hdstopBtn3").click();
        $("#twstopBtn3").click();
        flag4=2;
    });


    $("#timedown4").custimer({
        time_length:180,
        begin_btn_id:"beginBtn4",
        stop_btn_id:"stopBtn4",
        reset_btn_id: 'resetBtn4',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown4_1").custimer({
        time_length:150,
        begin_btn_id:"beginBtn4_1",
        stop_btn_id:"stopBtn4_1",
        reset_btn_id: 'resetBtn4_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#tw4").custimer({
        time_length:15,
        begin_btn_id:"twbeginBtn4",
        stop_btn_id:"twstopBtn4",
        reset_btn_id: 'twresetBtn4',
        voice_type: 1,
        time_ding_dang: [0]
    });
    $("#hd4").custimer({
        time_length:20,
        begin_btn_id:"hdbeginBtn4",
        stop_btn_id:"hdstopBtn4",
        reset_btn_id: 'hdresetBtn4',
        voice_type: 2,
        time_ding_dang: [0]
    });

    var flag5=2;
    $("#twbeginBtn4").on('click',function()
    {
            flag5 =1;
    });
    $("#hdbeginBtn4").on('click',function()
    {
            flag5 =0;
    });
    $("#flag5Btn").on('click',function(){
        $("#twresetBtn4").click();
        $("#hdresetBtn4").click();
        if(flag5 == 1){
            $("#twstopBtn4").click();
            $("#hdbeginBtn4").click();
        }else if(flag5 == 0){
            $("#hdstopBtn4").click();
            $("#twbeginBtn4").click();
        }else{
            $("#beginBtn4_1").click();
            $("#twbeginBtn4").click();
        }
    });
    $("#flag5StopBtn").on('click',function(){
        $("#stopBtn4_1").click();
        $("#hdstopBtn4").click();
        $("#twstopBtn4").click();
        flag5=2;
    });




    $("#timedown5").custimer({
        time_length:180,
        begin_btn_id:"beginBtn5",
        stop_btn_id:"stopBtn5",
        reset_btn_id: 'resetBtn5',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown5_1").custimer({
        time_length:180,
        begin_btn_id:"beginBtn5_1",
        stop_btn_id:"stopBtn5_1",
        reset_btn_id: 'resetBtn5_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown6").custimer({
        time_length:240,
        begin_btn_id:"beginBtn6",
        stop_btn_id:"stopBtn6",
        reset_btn_id: 'resetBtn6',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown6_1").custimer({
        time_length:240,
        begin_btn_id:"beginBtn6_1",
        stop_btn_id:"stopBtn6_1",
        reset_btn_id: 'resetBtn6_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown7").custimer({
        time_length:240,
        begin_btn_id:"beginBtn7",
        stop_btn_id:"stopBtn7",
        reset_btn_id: 'resetBtn7',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown7_1").custimer({
        time_length:240,
        begin_btn_id:"beginBtn7_1",
        stop_btn_id:"stopBtn7_1",
        reset_btn_id: 'resetBtn7_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    var flag=2;
    $("#beginBtn6").on('click',function()
    {
            flag =1;
    });
    $("#beginBtn6_1").on('click',function()
    {
            flag =0;
    });
    $("#doubleBtn").on('click',function(){
        if(flag == 1){
            $("#stopBtn6").click();
            $("#beginBtn6_1").click();
        }else if(flag == 0){
            $("#stopBtn6_1").click();
            $("#beginBtn6").click();
        }else{
            $("#beginBtn6").click();
        }
    });

    $("#doubleStopBtn").on('click',function(){
        $("#stopBtn6").click();
        $("#stopBtn6_1").click();
        flag=2;
    });
    

     
     

   
     



     var matrix = [
        [
            {full:0},{full:1,moveDirection:'yx'},{full:0}
        ],
        [
            {full:1},{full:1,first:true},{full:1}
        ],
        [
            {full:0},{full:1,moveDirection:'yx'},{full:0}
        ]
    ];
     // $('.slidingSpaces').ferroSlider({
     //    createSensibleAreas     : true,
     //    axis: 'xy'
     // });

   



    //  $.jStorage.set("theme", "现在的社会是不是已经不如以前了？");
    //  $.jStorage.set("square_name", "电子科技大学代表队");
    //  $.jStorage.set("square_image", "uestc_header.png");
    //  $.jStorage.set("opposition_name", "西南交通大学代表队");
    //  $.jStorage.set("opposition_image", "uestc_header.png");
    //  $.jStorage.set("test", [{name:"heheh"},{name:"husaiu"}]);
    //  var index = $.jStorage.index();
    // console.log(index); // ["key1","key2","key3"]
    // var test = $.jStorage.get("test");
    // console.log(test);
    // console.log(test.length);
    // $.jStorage.flush();
    // 
    // 
    // 

        
});

