
 var x;
 var y;
 var str2 = "6d2e";
 var str3 = "04d8";
 var str4 = "11186f";
var invcode = document.getElementById("invcode").value;
 var regname = document.getElementById("regname").value="一天两天三天";
 var regpwd = document.getElementById("regpwd").value="yitian123";
 var regpwdrepeat = document.getElementById("regpwdrepeat").value = "yitian123";
 var regemail = document.getElementById("regemail").value="woaimt5@163.com";
 var bl;
   document.getElementById("invcode").value = (str2 + x + str3 + y + str4).toString();
    $("#invcode").next().click();

 alert("1");
	  var CurURL = String(window.location);
   
        if (CurURL == "http:\/\/184.154.128.246/htm_data/7/1302/869202.html") {
            var int = setInterval("reloadPage()", 10000);
			([\da-f]{16})
			var str="Is this  8cc620b5d165a3fc    ?";
             var patt1=/[\da-f]{16}/g;
            alert(str.match(patt1));
			}
  var invcode = document.getElementById("invcode").value;

 var msg_invcode = new Array(
    "可以注册","无法注册"
 ); 
 function retmsg_invcode(id) {
     document.getElementById("check_info_invcode").innerHTML = "haha";
      }
 for (var i = 0; i < 16; i++) {
     var str = i.toString(16);
     x = str.toString();
     for (var j = 0; j < 16; j++) {
         var str1 = j.toString(16);
         y = str1.toString();
       

        
         do {
             var txt = $("#check_info_invcode").text(); alert(txt);
         } while(txt=="邀請碼不存在或已被使用，您無法注冊！"||txt=="恭喜您，您可以使用這個邀請碼註冊！");

         do {
             bl = $("#Checkframe").text();
             alert(b1);
         } while (bl);

         if ($("#Checkframe").text()) { }

  }

 }
 function sleep(milliSeconds) {
    
     var startTime = new Date().getTime(); // get the current time
    
     while (new Date().getTime() < startTime + milliSeconds); // hog cpu
     
 }
      var int = self.setInterval("clock()", 1000);
      function clock() {

          alert("1");
          $(function () {

              if ($("#check_info_invcode").text() = "邀請碼不存在或已被使用，您無法注冊！")
              { alert("1"); window.clearInterval(int); bl = false; }
              if ($("#check_info_invcode").text() = "恭喜您，您可以使用這個邀請碼註冊！")
              { window.clearInterval(int); bl = true; }


          });
          z
          if (bl) {
              return false;
          }
          else {
              return true;
          }

      }
     
      


//      <input class="btn" type="button" value="檢查邀請碼" onclick="return invcodecheck();">
      
  }
//  var msg_invcode=new Array("JJJ","JJJJ")