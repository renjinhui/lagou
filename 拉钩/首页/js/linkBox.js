/**
 * Created by Administrator on 2016/1/12.
 */

(function(){
    var link=document.getElementById("linkBox");
    function dataBind(){
        var str="";
        for(var i=0;i<linkBox.length-1;i++){
            str+="<a>"+linkBox[i]+"</a>";
        }
        str+="<em><a>更多</a></em>"
        link.innerHTML=str;
    }
    dataBind();
})();
