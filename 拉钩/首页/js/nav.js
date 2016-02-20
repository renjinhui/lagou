/**
 * Created by Administrator on 2016/1/7.
 */



~function(){

    var navLeft = document.getElementById("container-left-T");
    var navDivs = navLeft.getElementsByClassName("div1");
    var oDivs1 = navLeft.getElementsByClassName("div11");
    var oDivs = navLeft.getElementsByClassName("div12");

    var getCss = function (curEle, attr) {
        var val = null;
        if ("getComputedStyle"in window) {
            val = getComputedStyle(curEle, null)[attr];
        } else {
            if (attr === "opacity") {
                var tempVal = curEle.currentStyle["filter"];
                var reg = /^alpha\(opacity=(\d+(\.\d+)?)\)$/;
                val = reg.exec(tempVal)[1] ? reg.exec(tempVal)[1] / 100 : 1;
            } else {
                val = curEle.currentStyle[attr];
            }
        }
        reg = /^-?(\d+(\.\d+)?(px|pm|em)?)$/;
        return val = reg.test(val) ? parseFloat(val) : val;
    };

    for (var i = 0; i < navDivs.length; i++) {
        navDivs[i].topVal = getCss(navDivs[i], "height");
        navDivs[i].Q = i;
        if (i == 0) {
            navDivs[i].onmouseover = function () {
                oDivs1[this.Q].style.backgroundColor="white";
                oDivs1[this.Q].style.border="2px solid silver";
                oDivs1[this.Q].style.width=223+"px";
                oDivs[this.Q].style.display = "block";
                oDivs[this.Q].style.background = "white";
                oDivs[this.Q].style.top = 0+ "px";
                //oDivs[this.Q].style.zIndex=1;
            }
            navDivs[i].onmouseout = function () {
                oDivs1[this.Q].style.backgroundColor="whiteSmoke";
                oDivs1[this.Q].style.border="2px solid whiteSmoke";
                oDivs1[this.Q].style.width=221+"px";
                oDivs[this.Q].style.display = "none";
            }
        }
        else if (i == navDivs.length - 1) {
            navDivs[i].onmouseover = function () {
                oDivs1[this.Q].style.backgroundColor="white";
                oDivs1[this.Q].style.border="2px solid silver";
                oDivs1[this.Q].style.width=223+"px";
                oDivs[this.Q].style.display = "block";
                oDivs[this.Q].style.background = "white";
                oDivs[this.Q].style.bottom = 0+ "px";
                //oDivs[this.Q].style.zIndex=10;
            }
            navDivs[i].onmouseout = function () {
                oDivs1[this.Q].style.backgroundColor="whiteSmoke";
                oDivs1[this.Q].style.border="2px solid whiteSmoke";
                oDivs1[this.Q].style.width=221+"px";
                oDivs[this.Q].style.display = "none";
            }
        }
        else if (i < navDivs.length / 2) {
            navDivs[i].onmouseover = function () {
                oDivs1[this.Q].style.backgroundColor="white";
                oDivs1[this.Q].style.border="2px solid silver";
                oDivs1[this.Q].style.width=223+"px";
                oDivs[this.Q].style.display = "block";
                oDivs[this.Q].style.background = "white";
                oDivs[this.Q].style.top = -this.Q *4* this.topVal / navDivs.length + "px";
                //oDivs[this.Q].style.zIndex=10;
            }
            navDivs[i].onmouseout = function () {
                oDivs1[this.Q].style.backgroundColor="whiteSmoke";
                oDivs1[this.Q].style.border="2px solid whiteSmoke";
                oDivs1[this.Q].style.width=221+"px";
                oDivs[this.Q].style.display = "none";
            }
        }
        else{
            navDivs[i].onmouseover = function () {
                oDivs1[this.Q].style.backgroundColor="white";
                oDivs1[this.Q].style.border="2px solid silver";
                oDivs1[this.Q].style.width=223+"px";
                oDivs[this.Q].style.display = "block";
                oDivs[this.Q].style.background = "white";
                oDivs[this.Q].style.bottom = -this.Q * this.topVal / navDivs.length + "px";
                //oDivs[this.Q].style.zIndex=10;
            }
            navDivs[i].onmouseout = function () {
                oDivs1[this.Q].style.backgroundColor="whiteSmoke";
                oDivs1[this.Q].style.border="2px solid whiteSmoke";
                oDivs1[this.Q].style.width=221+"px";
                oDivs[this.Q].style.display = "none";
            }
        }
    }



}()


