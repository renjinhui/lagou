/**
 * Created by Administrator on 2016/1/8.
 */


/*...........................................................................................图片*/
var bigPic = ["changeImgs/bigPic1.JPG","changeImgs/bigPic2.JPG","changeImgs/bigPic3.JPG"];

var bigPicSma = ["changeImgs/bigPicSma1.JPG", "changeImgs/bigPicSma2.PNG", "changeImgs/bigPicSma3.JPG"];

var litPic = ["changeImgs/little-pic1.png", "changeImgs/little-pic2.jpg", "changeImgs/little-pic3.jpg",
    "changeImgs/little-pic4.jpg", "changeImgs/little-pic5.png", "changeImgs/little-pic6.png"];



/*..............................................................................................数据*/

var dataAry=[
    "<div><h2>小牛计划</h2><i></i><p>一起探索互联网</p></div>",
    "<div><h2>碰碰</h2><i></i><p>游戏社交专用</p></div>",
    "<div><h2>TalkWeb</h2><i></i><p>不知道干吗用的</p></div>",
    "<div><h2>捷通华声</h2><i></i><p>解决人机交互</p></div>",
    "<div><h2>狗头</h2><i></i><p>玩游戏游戏用的</p></div>",
    "<div><h2>白骨精</h2><i></i><p>靠谱理财社区</p></div>"
];


var dataAry2=[
    [
        "<div class='div1'><a><p>WEB前端</p><em>[北京]</em><i>2016-1-10</i><span>丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>经验3-5年/本科</i><span>移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“全国化租赁市场，打造房产市场“淘宝””</p><span><i>年底双薪</i><i>节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端</p><em>[北京]</em><i>2016-1-10</i><span>丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>经验3-5年/本科</i><span>移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“全国化租赁市场，打造房产市场“淘宝””</p><span><i>年底双薪</i><i>节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端</p><em>[北京]</em><i>2016-1-10</i><span>丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>经验3-5年/本科</i><span>移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“全国化租赁市场，打造房产市场“淘宝””</p><span><i>年底双薪</i><i>节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端</p><em>[北京]</em><i>2016-1-10</i><span>丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>经验3-5年/本科</i><span>移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“全国化租赁市场，打造房产市场“淘宝””</p><span><i>年底双薪</i><i>节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端</p><em>[北京]</em><i>2016-1-10</i><span>丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>经验3-5年/本科</i><span>移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“全国化租赁市场，打造房产市场“淘宝””</p><span><i>年底双薪</i><i>节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端</p><em>[北京]</em><i>2016-1-10</i><span>丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>经验3-5年/本科</i><span>移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“全国化租赁市场，打造房产市场“淘宝””</p><span><i>年底双薪</i><i>节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端</p><em>[北京]</em><i>2016-1-10</i><span>丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>经验3-5年/本科</i><span>移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“全国化租赁市场，打造房产市场“淘宝””</p><span><i>年底双薪</i><i>节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端</p><em>[北京]</em><i>2016-1-10</i><span>丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>经验3-5年/本科</i><span>移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“全国化租赁市场，打造房产市场“淘宝””</p><span><i>年底双薪</i><i>节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端</p><em>[北京]</em><i>2016-1-10</i><span>丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>经验3-5年/本科</i><span>移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“全国化租赁市场，打造房产市场“淘宝””</p><span><i>年底双薪</i><i>节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端</p><em>[北京]</em><i>2016-1-10</i><span>丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>经验3-5年/本科</i><span>移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“全国化租赁市场，打造房产市场“淘宝””</p><span><i>年底双薪</i><i>节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
];
var dataAry3=[
    [
        "<div class='div1'><a><p>WEB前端1</p><em>[北京1]</em><i>2016-1-10</i><span>1丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>1经验3-5年/本科</i><span>1移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“1全国化租赁市场，打造房产市场“淘宝””</p><span><i>1年底双薪</i><i>1节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端1</p><em>[北京1]</em><i>2016-1-10</i><span>1丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>1经验3-5年/本科</i><span>1移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“1全国化租赁市场，打造房产市场“淘宝””</p><span><i>1年底双薪</i><i>1节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端1</p><em>[北京1]</em><i>2016-1-10</i><span>1丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>1经验3-5年/本科</i><span>1移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“1全国化租赁市场，打造房产市场“淘宝””</p><span><i>1年底双薪</i><i>1节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端1</p><em>[北京1]</em><i>2016-1-10</i><span>1丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>1经验3-5年/本科</i><span>1移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“1全国化租赁市场，打造房产市场“淘宝””</p><span><i>1年底双薪</i><i>1节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端1</p><em>[北京1]</em><i>2016-1-10</i><span>1丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>1经验3-5年/本科</i><span>1移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“1全国化租赁市场，打造房产市场“淘宝””</p><span><i>1年底双薪</i><i>1节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端1</p><em>[北京1]</em><i>2016-1-10</i><span>1丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>1经验3-5年/本科</i><span>1移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“1全国化租赁市场，打造房产市场“淘宝””</p><span><i>1年底双薪</i><i>1节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端1</p><em>[北京1]</em><i>2016-1-10</i><span>1丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>1经验3-5年/本科</i><span>1移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“1全国化租赁市场，打造房产市场“淘宝””</p><span><i>1年底双薪</i><i>1节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端1</p><em>[北京1]</em><i>2016-1-10</i><span>1丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>1经验3-5年/本科</i><span>1移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“1全国化租赁市场，打造房产市场“淘宝””</p><span><i>1年底双薪</i><i>1节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端1</p><em>[北京1]</em><i>2016-1-10</i><span>1丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>1经验3-5年/本科</i><span>1移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“1全国化租赁市场，打造房产市场“淘宝””</p><span><i>1年底双薪</i><i>1节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
    [
        "<div class='div1'><a><p>WEB前端1</p><em>[北京1]</em><i>2016-1-10</i><span>1丁丁租房</span></a></div>",
        "<div class='div2'><p>20k-38k</p><i>1经验3-5年/本科</i><span>1移动互联网/成熟型（不需要融资）</span></div>",
        "<div class='div3'><p>“1全国化租赁市场，打造房产市场“淘宝””</p><span><i>1年底双薪</i><i>1节日礼物</i><i>薪酬高竞争力</i></span></div>"
    ],
];

var linkBox=["手机软件","中大网校","人人都是产品经理","教师招聘","研究报告",
    "汽车团购 ","创投圈创头条","安卓开发论坛","新疆人才网 ","互联网的一些事爱思英语网 ",
    "徐州英才网","thinkphp","考研网 ","深圳人才网","银行招聘网法律咨询网 ","兼职吧服装人才网 ",
    "安卓软件 ","银湖网创意服务外包","西陆军事","中公公务员网校","老人网","找工作","招聘网",
    "前瞻网","中关村创新创业服务平台  &nbsp 安徽招聘网"," 台州人才网","苏州人才网 ","教师网 ",
    "汇博人才网 ","中国会计网","一品威客","钛媒体网"," 齐鲁人才网","邮编生活网 ",
    "乌鲁木齐人才网","义乌人才网"," PHP100中文网"," 培训网","更多"
]