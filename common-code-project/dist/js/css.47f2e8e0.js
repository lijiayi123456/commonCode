(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["css"],{"3d23":function(a,d,e){},"582e":function(a,d,e){"use strict";e("91b7")},"5b07":function(a,d,e){"use strict";e("9b32")},"601a":function(a,d,e){"use strict";e.r(d);var t=e("7a23"),c=function(a){return Object(t["pushScopeId"])("data-v-6735c5ea"),a=a(),Object(t["popScopeId"])(),a},i={class:"webs-wrap"},l={class:"side-nav"},n=c((function(){return Object(t["createElementVNode"])("footer",null,null,-1)}));function s(a,d,e,c,s,b){var v=Object(t["resolveComponent"])("Header");return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",i,[Object(t["createElementVNode"])("header",null,[Object(t["createVNode"])(v)]),Object(t["createElementVNode"])("main",null,[Object(t["createElementVNode"])("ul",l,[Object(t["createElementVNode"])("li",{onClick:d[0]||(d[0]=function(d){return a.gotoRouter("./verticalAlign")})},"text-align"),Object(t["createElementVNode"])("li",{onClick:d[1]||(d[1]=function(d){return a.gotoRouter("./cssSlider")})},"轮播图")])]),n])}var b=e("6c02"),v=e("0418"),o=Object(t["defineComponent"])({name:"Home",components:{Header:v["a"]},setup:function(){var a=Object(b["c"])(),d=function(d){a.push(d)};return{gotoRouter:d}}}),f=(e("b47d"),e("6b0d")),r=e.n(f);const p=r()(o,[["render",s],["__scopeId","data-v-6735c5ea"]]);d["default"]=p},"7f23":function(a,d,e){"use strict";e.r(d);var t=e("7a23"),c=Object(t["createTextVNode"])(" 一、手动切换的轮播图 "),i=Object(t["createTextVNode"])(" 二、自动切换的轮播图 ");function l(a,d,e,l,n,s){var b=Object(t["resolveComponent"])("slide"),v=Object(t["resolveComponent"])("slide-auto");return Object(t["openBlock"])(),Object(t["createElementBlock"])(t["Fragment"],null,[Object(t["createElementVNode"])("div",null,[c,Object(t["createVNode"])(b)]),Object(t["createElementVNode"])("div",null,[i,Object(t["createVNode"])(v)])],64)}var n={class:"slide",style:{"margin-top":"80px"}},s=Object(t["createStaticVNode"])('<input type="radio" name="sildeInput" value="0" id="sildeInput1" checked hidden data-v-7aa4b6f7><label for="sildeInput1" data-v-7aa4b6f7>1</label><input type="radio" name="sildeInput" value="1" id="sildeInput2" hidden data-v-7aa4b6f7><label for="sildeInput2" data-v-7aa4b6f7>2</label><input type="radio" name="sildeInput" value="1" id="sildeInput3" hidden data-v-7aa4b6f7><label for="sildeInput3" data-v-7aa4b6f7>3</label><ul data-v-7aa4b6f7><li data-v-7aa4b6f7>one-点击切换</li><li data-v-7aa4b6f7>two-点击切换</li><li data-v-7aa4b6f7>three-点击切换</li></ul>',7),b=[s];function v(a,d,e,c,i,l){return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",n,b)}var o=Object(t["defineComponent"])({setup:function(){}}),f=(e("c451"),e("6b0d")),r=e.n(f);const p=r()(o,[["render",v],["__scopeId","data-v-7aa4b6f7"]]);var h=p,u=function(a){return Object(t["pushScopeId"])("data-v-1f423f7d"),a=a(),Object(t["popScopeId"])(),a},m={class:"slide"},x=u((function(){return Object(t["createElementVNode"])("ul",{class:"slide-auto"},[Object(t["createElementVNode"])("li",null,"one"),Object(t["createElementVNode"])("li",null,"two"),Object(t["createElementVNode"])("li",null,"three")],-1)})),j=[x];function O(a,d,e,c,i,l){return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",m,j)}var g=Object(t["defineComponent"])({setup:function(){}});e("5b07");const N=r()(g,[["render",O],["__scopeId","data-v-1f423f7d"]]);var V=N,E=Object(t["defineComponent"])({components:{Slide:h,SlideAuto:V},setup:function(){}});const I=r()(E,[["render",l]]);d["default"]=I},"91b7":function(a,d,e){},"9b32":function(a,d,e){},b430:function(a,d,e){"use strict";e.r(d);var t=e("7a23"),c={class:"wrap_main"},i=Object(t["createStaticVNode"])('<div style="vertical-align:left;" data-v-11bfb764>text-align的使用</div><span data-v-11bfb764>一、text-align:baseline-----------------------------------------------------</span><section class="vertical-align-baseline" data-v-11bfb764><span data-v-11bfb764>1、正常布局，三个子元素设置display:inline-block</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764></div><div class="child ch3" data-v-11bfb764></div></div></section><section class="vertical-align-baseline" data-v-11bfb764><span data-v-11bfb764>2、第三个子元素中加入xxx字符</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764></div><div class="child ch3" data-v-11bfb764> xxx </div></div></section><section class="vertical-align-baseline" data-v-11bfb764><span data-v-11bfb764>3、第二个子元素中加入xxx字符</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764> xxx </div><div class="child ch3" data-v-11bfb764></div></div></section><span data-v-11bfb764>vertical-align:middle-----------------------------------------------------</span><section class="vertical-align-middle ch1-middle" data-v-11bfb764><span data-v-11bfb764>1. 第一个元素设置middle</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764></div><div class="child ch3" data-v-11bfb764></div></div></section><section class="vertical-align-middle ch1-middle" data-v-11bfb764><span data-v-11bfb764>2. 第一个元素设置middle,ch3中加入xxx</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764></div><div class="child ch3" data-v-11bfb764> xxx </div></div></section><section class="vertical-align-middle ch1-middle" data-v-11bfb764><span data-v-11bfb764>2. 第一个元素设置middle,第二个中加入xxx</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764>xxx</div><div class="child ch3" data-v-11bfb764></div></div></section><section class="vertical-align-middle ch2-middle" data-v-11bfb764><span data-v-11bfb764>3. 第二个元素设置middle</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764></div><div class="child ch3" data-v-11bfb764></div></div></section><section class="vertical-align-middle ch2-middle" data-v-11bfb764><span data-v-11bfb764>4. 第二个元素设置middle,ch3中加入xxx</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764></div><div class="child ch3" data-v-11bfb764> xxx </div></div></section><section class="vertical-align-middle ch2-middle" data-v-11bfb764><span data-v-11bfb764>4. 第二个元素设置middle,ch2中加入xxx</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764>xxx</div><div class="child ch3" data-v-11bfb764></div></div></section><section class="vertical-align-middle ch3-middle" data-v-11bfb764><span data-v-11bfb764>5. 第三个元素设置middle</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764></div><div class="child ch3" data-v-11bfb764></div></div></section><section class="vertical-align-middle ch3-middle" data-v-11bfb764><span data-v-11bfb764>6. 第三个元素设置middle,ch3中加入xxx</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764></div><div class="child ch3" data-v-11bfb764> xxx </div></div></section><section class="vertical-align-middle ch3-middle" data-v-11bfb764><span data-v-11bfb764>6. 第三个元素设置middle,ch2中加入xxx</span><div class="parent" data-v-11bfb764><div class="child ch1" data-v-11bfb764></div><div class="child ch2" data-v-11bfb764>xxx</div><div class="child ch3" data-v-11bfb764></div></div></section><span data-v-11bfb764>三、span 和 小图标垂直对齐：同时设置vertical-align:middle;</span><section class="span-i-vertical-middle" data-v-11bfb764><span data-v-11bfb764>微博</span><span class="iconfont icon-icon-test48" data-v-11bfb764></span><span data-v-11bfb764>xxx</span></section>',17),l=[i];function n(a,d){return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",c,l)}e("582e");var s=e("6b0d"),b=e.n(s);const v={},o=b()(v,[["render",n],["__scopeId","data-v-11bfb764"]]);d["default"]=o},b47d:function(a,d,e){"use strict";e("3d23")},c451:function(a,d,e){"use strict";e("ed94")},ed94:function(a,d,e){}}]);
//# sourceMappingURL=css.47f2e8e0.js.map