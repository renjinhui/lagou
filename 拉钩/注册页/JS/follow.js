/**
 * Created by Administrator on 2016/1/18.
 */


(function(){
    var li1=document.getElementById("li1");
    /*var div1=li1.getElementsByTagName("div");*/

    var li2=document.getElementById("li2");
   /* var div2=li2.getElementsByTagName("div");*/

    var li3=document.getElementById("li3");
  /*  //var div3=li3.getElementsByTagName("div");*/


    var  offset=function(curEle) {
        var l = curEle.offsetLeft, t = curEle.offsetTop;
        var p = curEle.offsetParent;
        while (p) {
            if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
                l += p.clientLeft;
                t += p.clientTop;
            }
            l += p.offsetLeft;
            t += p.offsetTop;
            p = p.offsetParent;
        }
        return {l: l, t: t};
    };
    function flw(ele){
       /* var offTop=offset(ele).t-ele.scrollTop,offLeft=offset(ele).l-ele.scrollLeft;*/
        ele.onmouseenter=function(e){
            e=e||window.event;
            var mark=document.createElement("div");
            mark.id="mark";
            switch (ele){
                case li1:mark.innerHTML="使用新浪微博帐号登录";
                    break;
                case li2:mark.innerHTML="使用腾讯QQ账号登录";
                    break;
                default :mark.innerHTML="使用微信账号登录";
            }
            this.appendChild(mark);
            /* mark.style.top = e.pageY - offTop +20+ "px";
             mark.style.left = e.pageX - offLeft +20+ "px";*/
            mark.style.opacity=0;
            mark.style.filter="alpha(opacity=0)";
            animate(mark,{opacity:1},400);
            //console.log(mark.opacity);
        };
        ele.onmouseleave=function(e){
            e = e || window.event;
            var mark = document.getElementById("mark");
            if (mark) {
                this.removeChild(mark);
            }
        }
    }
    flw(li1);
    flw(li2);
    flw(li3);

})();
