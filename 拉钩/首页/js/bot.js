/**
 * Created by Administrator on 2016/1/13.
 */

(function () {
    var footer=document.getElementById("footer");
    var bot=document.getElementById("bot");
    var backtop=document.getElementById("backtop");
    //console.log(backtop);
    (function(){
        var t=(document.documentElement.scrollTop||document.body.scrollTop)
            +(document.documentElement.clientHeight||document.body.clientHeight);
        if(t>=2297){
            animate(bot,{bottom:67},100);
            //bot.style.bottom=67+"px";
        }

    })()


    window.onscroll = function () {
        var st=document.documentElement.scrollTop||document.body.scrollTop;
        var ch=document.documentElement.clientHeight||document.body.clientHeight;
        var t=st+ch;
        if(st>0){
            backtop.style.display="block";
        }else{
            backtop.style.display="none";
        }
        if(t>=2297){
            animate(bot,{bottom:67},100);
            //bot.style.bottom=67+"px";
        }else{
            bot.style.bottom=0+"px";
        }
    };
    backtop.onclick=function(){
        var st=document.documentElement.scrollTop||document.body.scrollTop;
        var timer2=setInterval(function(){
            if(st>0){
                st=st-20<0?0:st-20;
                document.documentElement.scrollTop=st;
                document.body.scrollTop=st;
                // st=document.documentElement.scrollTop||document.body.scrollTop;
            }
            else{
                clearInterval(timer2);
            }
        },10)


    }



})()
