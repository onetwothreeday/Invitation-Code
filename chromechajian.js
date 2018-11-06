        var CurURL = String(window.location);
        //alert(CurURL);
        //设置定时器


        if (CurURL == "http:\/\/184.154.128.246/thread0806.php?fid=7") {
            var int = setInterval("reloadPage()", 10000);
             $("a:eq(115)").css("background-color", "black");
             $("tr:eq(22)").css("background-color", "red");
             var URL = $("a:eq(115)").attr("href");

            //$("a:eq(115)").click(function);
            var popup = window.open("http://184.154.128.246/"+URL);
            //popup.location.href = "http://www.baidu.com/";
            //setTimeout(function() {popup.close();}, 5000);
            }
//        if (CurURL == "http:\/\/184.154.128.246/htm_data/7/") {
//        alert("abc");
        //           }/// <reference path="http://localhost:20445/Scripts/12306_ticket_helper.user.js" />

     
        var TxtMatch;
        var ContentTxt = $(".tpc_content").text() + $("h4").text();
//           var patt1 = new RegExp("&#x9AD8;&#x8840;&#x538B;");
        //           var hehe = patt1.test(ContentTxt);
        var KeyWordArray = Array(2);
        var i;
        KeyWordArray[0] = "词汇";

        KeyWordArray[1] = "什么";

        KeyWordArray[2] = "随机";
        
        for (i = 0; i <KeyWordArray.length; i++) {
            TxtMatch = ContentTxt.match(KeyWordArray[i]);
//            if (TxtMatch = null) { 
//            }
            if (TxtMatch) {

                new window.Audio("http://www.w3school.com.cn/i/song.mp3").play();
                clearInterval(int);

            }
            else { window.close(); }

        }

       
        function reloadPage() {
            window.location.reload();
        }
//            for (i = 0; i < KeyWordArray.length; i++) {
////                alert(i);
//                TxtMatch = ContentTxt.match(KeyWordArray[i]);
//                TxtMatchBool = TxtMatch.toString();
//                continue;
//                            if (TxtMatchBool) {

//                                new window.Audio("http://www.w3school.com.cn/i/song.mp3").play();

//                            };


//            }
////        function getAudioUrl() {
////            return "http://www.w3school.com.cn/i/song.mp3";

////        }
