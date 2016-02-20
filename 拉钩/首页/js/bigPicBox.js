/**
 * Created by Administrator on 2016/1/7.
 */

~function(){

    var bigPicDiv=document.getElementById("big-pic-middleB");
    var bigPicInner=document.getElementById("big-pic-middleB-inner");
    var aList=bigPicInner.getElementsByTagName("a");
    var list=bigPicInner.getElementsByTagName("li");
    var bigPicNav=document.getElementById("big-pic-littleB");
    var oLis=bigPicNav.getElementsByTagName("li");
    var oIs=bigPicNav.getElementsByTagName("i");
    var littleBox=document.getElementsByTagName("span");



    function bPicBind(){
        var str="";
        for(var i=0;i<bigPic.length;i++){
            str+="<li  trueImg="+bigPic[i]+"><a></a></li>";
        }
        str+="<li  trueImg="+bigPic[0]+"><a></a></li>";
        bigPicInner.innerHTML=str;

        str="";
        str+="<span class='littleBox'></span>";
        str+="<li trueImg="+bigPicSma[0]+"><i style='display: none'></i></li>";
        for(var i=1;i<bigPic.length;i++){
            str+="<li trueImg="+bigPicSma[i]+"><i></i></li>";
        }
        bigPicNav.innerHTML=str;

    }
    bPicBind();

    function delayImg(){
        for(var i=0;i<aList.length;i++){
            ~function(i){
                var trueImgB=list[i].getAttribute("trueImg");
                var tempImgB=new Image;
                tempImgB.src=trueImgB;
                tempImgB.onload=function(){
                    aList[i].appendChild(tempImgB);
                    tempImgB=null;
                }

                if(i<oLis.length){
                    var trueImgL=oLis[i].getAttribute("trueImg");
                    var tempImgL=new Image;
                    tempImgL.src=trueImgL;
                    tempImgL.onload=function(){
                        oLis[i].appendChild(tempImgL);
                        tempImgL=null;
                    }
                }
            }(i);
        }
    }
    delayImg();

    (function(){
        var step=0;
        function autoMove(){

            step++;
            if(step> aList.length-1){
                bigPicInner.style.top=0;
                step=1;
            }
            animate(bigPicInner,{top:-168*step},300);
            changeLitBox();

            for(var i=0;i<oIs.length;i++){
                if(step==3){
                    oIs[0].style.display="none";
                }else if(step==i){
                    oIs[i].style.display="none";
                }else{
                    oIs[i].style.display="block";
                }
            }
        }
        var timer1=window.setInterval(autoMove,2000);


        function changeLitBox(){
            if(step>oLis.length-1){
                littleBox[8].style.top=0;
            }else{
                var tempStep=step;
                animate(littleBox[8],{top:tempStep*(50+7)},300);
            }
            //var tempStep=step>oLis.length-1?0:step;
            ////littleBox[8].style.top=(7+tempStep*52)+"px";
            //animate(littleBox[8],{top:7+tempStep*52},500);
        }
        for(var i=0;i<oLis.length;i++){
            oLis[i].Q=i;
            oLis[i].onmouseenter=function(){
                window.clearInterval(timer1);
                step=this.Q-1;
                autoMove();
                window.clearInterval(timer1);
            }
            oLis[i].onmouseleave=function(){
                timer1=window.setInterval(autoMove,2000);
            }
        }
        for(var i=0;i<aList.length;i++){
            aList[i].onmouseenter=function(){
                window.clearInterval(timer1);
            }
            aList[i].onmouseleave=function(){
                timer1=window.setInterval(autoMove,2000);
            }
        }
    })();



}()

