
// 判断数组中包含element元素
Array.prototype.contains = function (element) {

    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
}
var curURL = String(window.location);
if (curURL.match("thread0806")) {
    //60000是一分钟
    var int = setInterval("reloadPage()", 60000);
    //得到普通主题所在的标签
    //$(".tr2:last").css("background-color", "black");
    //得到普通主题之后的所有标签
    //$(".tr2:last").nextAll().css("background-color", "black");
    //得到普通主题之后的所有标签中取前五个
    //$(".tr2:last").nextAll().slice(0, 5).css("background-color", "black");
    //得到前五个标签中的td>h3>a a 标签 str 就是我们得到的标题的值,是一个字符串数组
    // alert("ddddddddddddddddd");
    var $str = $(".tr2:last").nextAll().slice(0, 5).children("td").children("h3").children("a");
    var str2 = $(".tr2:last").nextAll().slice(0, 5).children().css("background-color", "red");
    $str.each(function () {
        //这里this 要用$包起来
        MatchKey($(this));
    });
    function MatchKey($aLable) {
        var KeyWordArray = Array(2);

        KeyWordArray[0] = "福利";

        KeyWordArray[1] = "发码";

        KeyWordArray[2] = "游客";

        KeyWordArray[2] = "检查";

        for (var i = 0; i < KeyWordArray.length; i++) {
            TxtMatch = $aLable.text().match(KeyWordArray[i]);
            //            if (TxtMatch = null) { 
            //            }
            if (TxtMatch) {
                window.open($aLable.attr("href"));
                //  new window.Audio("http://www.w3school.com.cn/i/song.mp3").play();
                //   clearInterval(int);

            }
            //  else { window.close(); }
        }
    }
}

var arr = new Array("9a5d6ca54ab8b1bc");
//"^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$"。
//if (curURL.match(/^http:\/\/cl\.yyq\.im\/htm_data\/7\/1406\/.+\.html$/)) 
if (curURL.match("htm_data")) {
    var strContent = $(".tpc_content").text() + $("h4").text();// alert(strContent);
    //有个bug  2014-05-31 16:13:35    0844767b0e3006ec  这样匹配到了350844767b0e3006
    var patt1 = /[\da-f]{16}/g;
    var copyText = strContent.match(patt1);
    if (copyText) {
        for (var i = 0; i < copyText.length; i++) {
            //判断定义的数组中是否存储了当前检测到的值,如果存在,不去验证邀请码,如果不存在,验证邀请码
            if (contentText(arr,copyText[i])) {
                checkCode(copyText[i]);
            }
        }
        //for (var i = 0; i < copyText.length; i++) {
        //    window.open("http://cl.yyq.im/register.php?" + copyText[i]);
        //}
    }
    else {
        window.close();
    }
}

//http://184.154.128.246/register.php?9a5d6ca54ab8b1bc
//var invateCodeArr
//if (curURL.match("register")) {
    //invateCodeArr = curURL.split("?");
    //document.getElementById("regname").value = "一天两天三天";
    //document.getElementById("regpwd").value = "yitian123";
    //document.getElementById("regpwdrepeat").value = "yitian123";
    //document.getElementById("regemail").value = "woaimt5@163.com";
    //document.getElementById("invcode").value = invateCodeArr[1];
    //$(".btn:eq(2)").click();
    // alert(invcode);
    //  $(".btn:eq(2)").click();
    //<form name="checkForm_invcode" action="http://cl.yyq.im/register.php?" method="post" target="Checkframe">
    //  <input type="hidden" name="reginvcode">
    //  <input type="hidden" name="action" value="reginvcodeck">
    //</form>
    //<script language="JavaScript1.2">parent.retmsg_invcode('1');</script>
    //<script language="JavaScript1.2">parent.retmsg_invcode(   '   1    '  );</script>
    //$.post("http://cl.yyq.im/register.php?", { action: "reginvcodeck", reginvcode: invateCodeArr[1] }, function (jsonObj) {
       
    //    var strReturn = jsonObj.split("'");
    //    if (strReturn[1]==1) {
    //        //说明被注册了
    //    }
    //    else {
    //        //说明没被注册
    //    }
    //})

//}
//Remote Address:184.154.128.246:80
//Request URL:http://cl.yyq.im/register.php?
//Request Method:POST
//regname:yitian
//regpwd:woaimt4
//regpwdrepeat:woaimt4
//regemail:woaimt5@163.com
//invcode:0844767b0e3006ec
//forward:
//step:2
function reloadPage() {
    window.location.reload();
}
function checkCode(code) {
    $.post("http://cl.yyq.im/register.php?", { action: "reginvcodeck", reginvcode: copyText[i] }, function (jsonObj) {
        var strReturn = jsonObj.split("'");
        if (strReturn[1] == 1) {
            //说明被注册了
            var strReg = this.data.split(/\&|=/);
            arr[arr.length] = astrReg[3]
        }

        else {
            //说明没被注册
            //"action=reginvcodeck&reginvcode=9a5d6ca54ab8b1bc"
            // console.log(this);
            var strReg = this.data.split(/\&|=/);
            goSubmmit(strReg[3]);
        }
    })
}
function goSubmmit(strCode) {
    $.post("http://cl.yyq.im/register.php?", {
        invcode:strCode,
        regname: "一天两天三天",
        regpwd: "yitian123",
        regpwdrepeat: "yitian123",
        regemail: "woaimt5@163.com",
        forward: "",
        step: "2",

    }, function (jsonObj) {
        alert("注册成功");
    })
}
function contentText(arr,code) {
    for(var j=0;j<arr.length;j++){
        if (code==arr[j]) {
            return false
        }
    }
    return true;
}


