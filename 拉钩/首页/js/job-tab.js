/**
 * Created by Administrator on 2016/1/11.
 */

(function(){

    var hotJob=document.getElementById("hot-job-content");
    var newJob=document.getElementById("newest-job-content");
    var li1=document.getElementById("hot-job");
    var li1H=li1.getElementsByTagName("h2")[0];
    var div1=document.getElementById("hot-job-content");
    var li2=document.getElementById("newest-job");
    var li2H=li2.getElementsByTagName("h2")[0];
    var div2=document.getElementById("newest-job-content");
    function dataBind(){
        var str="";
        for(var i=0;i<dataAry2.length;i++){
            var ary=dataAry2[i];
            str+="<div class='hot-job-content-inner'>";
            for(var j=0;j<ary.length;j++){
                str+=ary[j];
            }
            str+="</div>";
        }
        str+="<div class='more'><span><a>查看更多<i></i></a></span></div>";
        hotJob.innerHTML=str;

        str="";
        for(var k=0;k<dataAry3.length;k++){
            var ary=dataAry3[k];
            str+="<div class='hot-job-content-inner' >";
            for(var t=0;t<ary.length;t++){
                str+=ary[t];
            }
            str+="</div>";
        }
        str+="<div class='more'><span><a>查看更多<i></i></a></span></div>";
        newJob.innerHTML=str;
    }
    dataBind();

    li1.onclick=function(){
        li2.style.backgroundColor= "whiteSmoke";
        li2H.style.backgroundColor= "whiteSmoke";
        li2H.style.borderTop= "3px solid whiteSmoke";
        li2.style.color="darkgrey";

        li1H.style.borderTop= "3px solid #00b38a";
        li1H.style.background= "white";
        li1.style.color="black";

        div1.style.display="block";
        div2.style.display="none";
    };
    li2.onclick=function(){
        li1.style.backgroundColor= "whiteSmoke";
        li1H.style.backgroundColor= "whiteSmoke";
        li1H.style.borderTop= "3px solid whiteSmoke";
        li1.style.color="darkgrey";

        li2H.style.borderTop= "3px solid #00b38a";
        li2H.style.background= "white";
        li2.style.color="black";

        div1.style.display="none";
        div2.style.display="block";
    }

})()
