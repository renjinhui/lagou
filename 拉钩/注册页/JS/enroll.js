/**
 * Created by Administrator on 2016/1/18.
 */

(function(){
    var navPhone=document.getElementById("navPhone");
    var navPhoneI=navPhone.getElementsByTagName("i");
    var navMail=document.getElementById("navMail");
    var navMailEm=navMail.getElementsByTagName("em");
    var phone=document.getElementById("phone");
    var mail=document.getElementById("mail");
    var botLine=document.getElementById("botLine");
    var check=document.getElementById("check");
    var check1=document.getElementById("check1");

    function sel(ele){
        var l=0;
        return ele.onclick=function(){
            if(l>=0){
                ele.style.backgroundPositionX=-13+"px";
                l=parseFloat(ele.style.backgroundPositionX);
            }else{
                ele.style.backgroundPositionX=0+"px";
                l=parseFloat(ele.style.backgroundPositionX);
            }
        }
    };
    sel(check);
    navPhone.onclick=function(){
        phone.style.display="block";
        navPhone.style.color="#00b38a";
        //navPhoneI.style.background="../img/phone.png";


        mail.style.display="none";
        navMail.style.color="black";
        //navMailEm.style.background="../img/mail2.png";
        animate(botLine,{left:0},200);
        sel(check);
    };
    navMail.onclick=function(){
        phone.style.display="none";
        navPhone.style.color="black";
        //navPhoneI.style.background="url(../img/phone2.png)";


        mail.style.display="block";
        navMail.style.color="#00b38a";
        //navMailEm.style.background="url(../img/mail.png)";
        animate(botLine,{left:150},200);
        sel(check1);
    }


})();
