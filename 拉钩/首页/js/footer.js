/**
 * Created by Administrator on 2016/1/13.
 */

(function(){
    var footer=document.getElementById("footer");
    var App=document.getElementById("App");
    var wei=document.getElementById("wei");
    var oDiv1=App.getElementsByTagName("img")[0];
    var oDiv2=wei.getElementsByTagName("img")[0];

    App.onmouseover=function(){
        footer.style.zIndex=310;
        oDiv1.style.display="block";
    }
    App.onmouseout=function(){
        footer.style.zIndex=300;
        oDiv1.style.display="none";
    }

    wei.onmouseover=function(){
        footer.style.zIndex=310;
        oDiv2.style.display="block";
    }
    wei.onmouseout=function(){
        footer.style.zIndex=300;
        oDiv2.style.display="none";
    }







})()
