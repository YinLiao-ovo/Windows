webpackJsonp([3],{"+yHD":function(t,e,r){t.exports=r.p+"img/ani-per.15762a9.png"},"/TYz":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("WyKy"),o=r("iA8U"),n=!1;var a=function(t){n||(r("u3AQ"),r("8okU"),r("9N5Z"),r("WLbb"),r("P5iY"))},s=r("VU/8")(i.a,o.a,!1,a,null,null);s.options.__file="pages\\index.vue",e.default=s.exports},"01Sk":function(t,e,r){t.exports=r.p+"img/spr-header.6405a43.png"},"2fBE":function(t,e,r){var i=r("kxFB");(t.exports=r("FZ+f")(!1)).push([t.i,".nav{justify-content:center;display:flex;height:115px;align-items:center}.nav a{display:block;width:80px;text-align:center;color:#7f7f7f;font-size:14px;position:relative}.ico-nav{width:32px;height:32px;display:block;background:url("+i(r("01Sk"))+") 0 -999em no-repeat;margin:0 auto;background-size:100% auto}.ico-nav img{width:100%}.ico-movie{background-position:0 0}.ico-tv{background-position:-40px 0}.ico-game{background-position:-79px 0}.ico-show{background-position:-120px 0}.ico-vip{background-position:-160px 0}.ico-lx{background-position:-200px 0}.ico-sjxl{background-position:-240px 0}.ico-personal{width:30px;background:url("+i(r("+yHD"))+") no-repeat;animation:ani-home 3.1s steps(31) infinite}.ico-act{width:40px;overflow:hidden}.ico-act:after{display:block;width:1280px;height:100%;background:url("+i(r("XbMm"))+') no-repeat;background-size:1320px auto;content:"";pointer-events:none;animation:nav-act 3.5s both steps(31) infinite}a:hover .ico-act:after{animation:none;background-position:-1280px 0}@keyframes nav-act{0%{transform:translateZ(0)}70%,to{transform:translate3d(-1240px,0,0)}}.ico-feature{background-position:-400px 0}@keyframes ani-home{0%{background-position:0 0}to{background-position:-992px 0}}.ico-article{background-position:-360px 0}a:hover .ico-vip{background-position:-160px -30px}a:hover .ico-movie{background-position:0 -30px}a:hover .ico-tv{background-position:-40px -30px}a:hover .ico-game{background-position:-79px -30px}a:hover .ico-show{background-position:-120px -30px}a:hover .ico-lx{background-position:-200px -30px}a:hover .ico-sjxl{background-position:-240px -30px}.ico-home{background-position:-280px 0}a:hover .ico-home{background-position:-280px -30px}a:hover .ico-feature{background-position:-400px -30px}a:hover .ico-article{background-position:-360px -30px}.index-x .link-report-top{position:absolute;top:2px;right:-10px;width:60px;text-align:center;transform:rotate(45deg)}.link-report-top:hover .link-report-text1{background:#ff8080}.link-report-top:hover .link-report-text2{color:#ff8080}.link-report-text1{display:block;height:17px;line-height:17px;color:#fff;background:#ff4848;transition:.2s}.link-report-text2{color:#ff4848;transition:.2s}.tag-new{position:absolute;right:12px;top:-2px;z-index:8;width:21px;height:13px;background:url('+i(r("2iyD"))+") no-repeat;background-size:21px auto}",""])},"2iyD":function(t,e,r){t.exports=r.p+"img/icon-new.51d7f0a.png"},"5X0l":function(t,e,r){t.exports=r.p+"img/defaulticon.1baa329.png"},"7Jn1":function(t,e,r){"use strict";var i=r("QoKh"),o=r("garV"),n=r("VU/8")(i.a,o.a,!1,null,null,null);n.options.__file="components\\XlBadge.vue",e.a=n.exports},"8okU":function(t,e,r){var i=r("zODv");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("3fa9a3e9",i,!1)},"9N5Z":function(t,e,r){var i=r("XcHK");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("0f089c4a",i,!1)},CcrQ:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".index-wrap{overflow:hidden}",""])},FKCV:function(t,e,r){"use strict";var i=r("GWQg"),o=r("lfQx"),n=r("VU/8")(i.a,o.a,!1,null,null,null);n.options.__file="components\\XlHeader.vue",e.a=n.exports},GWQg:function(t,e,r){"use strict";var i=r("Xxa5"),o=r.n(i),n=r("exGp"),a=r.n(n),s=r("Gu7T"),c=r.n(s),l=r("eLLv"),p=r("OnMG");e.a={components:{XlIcon:p.a},data:function(){return{show:!1,defaultIcon:r("5X0l")}},computed:{icons:function(){var t=[].concat(c()(this.$store.state.home.navConfig));return this.isBlock&&t.forEach(function(e,r){"movie_home"===e.buttonId&&"feature"===e.class&&t.splice(r,1)}),t},isBlock:function(){return!("isBlock"in this.$store.state.home)||this.$store.state.home.isBlock}},methods:{imgError:function(t){t.target.src=this.defaultIcon},clickNav:function(){var t=a()(o.a.mark(function t(e){var r,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.icons[e],i=r.shouldLogin,this.reportNavClick(e,r.buttonId),t.t0=i,!t.t0){t.next=8;break}return t.next=7,this.$account.isLogined();case 7:t.t0=!t.sent;case 8:if(!t.t0){t.next=11;break}return t.next=11,this.$account.login();case 11:Object(l.a)(r.url,r.buttonId);case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),reportNavClick:function(t,e){this.$stat("download_detail","dltab_startup_navigation_click",{buttonid:e,rn:t+1})},linkReport:function(){var t=a()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$account.isLogined();case 2:if(t.sent){t.next=5;break}return t.next=5,this.$account.login();case 5:Object(l.a)("http://pc.xunlei.com/pages/#/report","report");case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},NQag:function(t,e,r){"use strict";function i(t,e){for(var r=t.toString().length;r<e;)t="0"+t,r++;return t}e.a=function(t){var e=new Date(t);return"Invalid Date"===e.toString()?"":e.getFullYear()+"-"+i(e.getMonth()+1,2)+"-"+i(e.getDate(),2)}},OnMG:function(t,e,r){"use strict";var i=r("WCBf"),o=r("YnST"),n=r("VU/8")(i.a,o.a,!1,null,null,null);n.options.__file="components\\XlIcon.vue",e.a=n.exports},P5iY:function(t,e,r){var i=r("CcrQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("4b8f7826",i,!1)},QoKh:function(t,e,r){"use strict";e.a={props:{entryPage:{type:String,default:""},entry:{type:String,default:""},uid:{type:[String,Number],default:""},size:{type:String,default:"sm"}},computed:{user:function(){return this.$store.state.users.all[this.uid]||{}},kinds:function(){return this.$sget(this.user,"kinds")||[]},reviewNum:function(){return this.kinds.includes("review_num")&&"lg"===this.size?"影评号":""},signer:function(){return this.kinds.includes("signer")&&"lg"===this.size?"签约写手":""},reviewExpert:function(){return this.kinds.includes("review_expert")&&"lg"===this.size?"影评达人":""}},methods:{badgeClick:function(t){this.$stat("authentic","authentic_page_entry_click",{identity:t,entrypage:this.entryPage,entry:this.entry})}}}},WCBf:function(t,e,r){"use strict";e.a={props:{icon:{type:Object,required:!0}},data:function(){return{show:!1,defaultIcon:r("5X0l")}},methods:{imgError:function(t){t.target.src=this.defaultIcon}}}},WLbb:function(t,e,r){var i=r("uFYg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("8b4a8cb0",i,!1)},WyKy:function(t,e,r){"use strict";var i=r("7Jn1"),o=r("FKCV"),n=r("NQag"),a=r("Nwvo"),s=r.n(a),c=r("Zew7"),l=(r.n(c),r("vGiC")),p=r("LF7Y"),d=r("Rhsk");e.a={components:{XlBadge:i.a,XlHeader:o.a},mixins:[l.a],props:{showCustom:{type:Boolean,default:!0}},data:function(){return{current:0,praising:!1,customIndex:0,showTip:!1,uid:null}},computed:{banners:function(){return this.$store.state.reviews.banners},act:function(){return this.$store.state.home.configModules.reviewAct||{}},list:function(){var t=this,e=Object(n.a)(new Date),r=this.banners.slice(0,4);if(this.act.startDate<=e&&this.act.endDate>=e){var i=r.findIndex(function(e){return e.online_time===t.act.startDate});r[i=i>=0?i:r.length>0?r.length-1:0]=this.act}return r},banner:function(){return this.list[this.current]||{}},review:function(){return this.$store.state.reviews.all[this.banner.review_id]||{}},time:function(){return this.$sget(this.banner,"online_time")?this.$sget(this.banner,"online_time"):this.$sget(this.banner,"startDate")||""},year:function(){return this.time.split("-")[0]},month:function(){var t=+this.time.split("-")[1]-1;return["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][t]},day:function(){return this.time.split("-")[2]},recommends:function(){return this.$store.state.reviews.recommends||[]},materialList:function(){return this.$store.state["custom-home"].materialList},publisherInfo:function(){return this.$store.state["custom-home"].publisherInfo},custom:{get:function(){var t=this.$store.state.home.custom;return void 0!==t&&null!==t||(t=!0),t&&this.customHomeEnable},set:function(t){this.$store.commit("home/setCustom",!(!t||!this.customHomeEnable)),Object(p.e)(t)}},customHomeEnable:function(){return this.$store.state.home.configModules.customHomeEnable}},created:function(){var t=this;this.$store.dispatch("home/getNavConfig"),this.$store.dispatch("reviews/getBanners"),this.$store.dispatch("reviews/getReviewSelection"),this.$store.dispatch("home/getIPBlockInfo"),this.$stat("download_detail","dltab_startup_filmlib_recommend_show"),Object(p.c)().then(function(e){e?(t.uid=e,t.$store.dispatch("custom-home/fetchCustomList",e).then(function(r){t.$stat("download_detail","dltab_startup_page_show",{type:t.custom&&r.length?"Individualization_home_page":"official_home_page",uid:e}),Object(p.d)(t.custom&&r.length)}),t.$store.dispatch("custom-home/fetchPublisherInfo",e)):(t.$stat("download_detail","dltab_startup_page_show",{type:"official_home_page"}),Object(p.d)(!1))}),Object(p.a)().then(function(e){return t.$store.commit("home/setCustom",e)})},mounted:function(){var t=this;s.a.api.attach("OnTabVisibleChange",function(e,r){e&&r&&(t.current>=3?t.current=0:t.current+=1,t.$stat("download_detail","dltab_startup_filmlib_show",{gcid:t.list[t.current].review_id}))})},methods:{resolveUrl:function(t){return t&&!/^http/.test(t)&&(t=/^\/\//.test(t)?"http:"+t:"http://"+t),t},changeCustom:function(){this.materialList.length?this.custom=!this.custom:Object(d.j)(function(t){"close"!==t&&window.open("https://vip.xunlei.com/thunder-x-custom-editon/")}),this.$stat("download_detail","dltab_startup_Individualization_click",{uid:this.uid,button:this.materialList.length?this.custom?"to_Individualization_home_page":"to_official_home_page":"Initialization"})},praise:function(){var t=this;this.review.have_fav||this.praising||(this.praising=!0,this.$store.dispatch("reviews/praise",this.review.id).then(function(){t.praising=!1}),this.reportBannerClick(this.current,this.banner.review_id,"like"))},reportBannerClick:function(t,e,r){this.$stat("download_detail","dltab_startup_filmlib_click",{rn:t+1,gcid:e,button:r})},bannerHover:function(t,e){this.$stat("download_detail","dltab_startup_filmlib_hover",{rn:t+1,gcid:e})},filmClick:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments[2];this.$stat("download_detail","dltab_startup_filmlib_pic_click",{rn:t+1,gcid:e,button:r})},recommendHover:function(t,e){this.$stat("download_detail","dltab_startup_filmlib_recommend_hover",{rn:t+1,gcid:e})},recommendClick:function(t,e,r){this.$stat("download_detail","dltab_startup_filmlib_pic_recommend_click",{rn:e+1,gcid:r,button:t})}}}},XZBC:function(t,e,r){t.exports=r.p+"fonts/icon-custom.b1c4f67.woff"},XbMm:function(t,e,r){t.exports=r.p+"img/ani-activity.7e890c0.png"},XcHK:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".xmp{background:#202020;display:flex;align-items:center;justify-content:center;height:100vh}.xmp .header{display:none}.xmp .index-article h1 a{color:#fff}.xmp .index-article h1 a:hover{color:var(--colorLight)}.xmp .index-article p{display:none}.xmp .from-info .user-name{color:#afafaf}.xmp .from-info .user-name:hover{color:var(--colorLight)}@media only screen and (max-height:650px),only screen and (max-width:860px){.xmp .index-article{margin-top:3px}.xmp .index-article h1{line-height:46px}.xmp .from-info{margin:0}}",""])},YnST:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.icon.iconDisplay?r("a",{attrs:{href:t.icon.url,target:"_blank"}},[r("span",{staticClass:"ico-nav",on:{mouseover:function(e){t.show=!0},mouseleave:function(e){t.show=!1}}},[t.show?r("img",{attrs:{src:t.$sget(t.icon,"coverHover")||t.defaultIcon,alt:t.icon.text},on:{errpr:t.imgError}}):r("img",{attrs:{src:t.$sget(t.icon,"cover")||t.defaultIcon,alt:t.icon.text},on:{error:t.imgError}}),r("i",{directives:[{name:"show",rawName:"v-show",value:t.$sget(t.icon,"isShowNew"),expression:"$sget(icon, 'isShowNew')"}],staticClass:"tag-new"})]),r("span",{staticClass:"text"},[t._v(t._s(t.icon.text))])]):t._e()};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},ZbHq:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,":root{--color-danger:#ff4848;--side-width:354px;--background-hover:#f0f3fa}.is-theme{--color-primary:rgb(var(--color-primary-control-1));--color-primary-hover:rgb(var(--color-primary-control-1));--button-default-fill:rgb(var(--color-primary-control-1));--button-default-fill-hover:rgb(var(--color-primary-control-2));--button-secondary-fill:rgb(var(--color-primary-control-4));--button-secondary-fill-hover:rgb(var(--color-primary-control-3));--color-primary-gray-1:rgba(var(--color-primary-control-1),.6);--color-primary-gray-2:rgba(var(--color-primary-control-1),.5);--color-primary-gray-3:rgba(var(--color-primary-control-1),.3);--background-main:linear-gradient(-45deg,rgba(var(--color-gradient-background-1),1),rgba(var(--color-gradient-background-2),1));--background-front:linear-gradient(rgba(var(--color-gradient-foreground-1),var(--default-opacity-1)),rgba(var(--color-gradient-foreground-2),var(--default-opacity-2)));--browser-background-current:rgba(var(--color-gradient-foreground-1),var(--default-opacity-1));--browser-background:rgba(var(--color-search),.4);--tab-text:rgba(var(--color-primary-text),.7);--tab-text-current:rgb(var(--color-primary-text));--tab-text-hover:rgb(var(--color-primary-text));--tab-more:rgba(var(--color-secondary),.2);--tab-more-hover:rgba(var(--color-secondary),.3);--tab-more-checked:rgba(var(--color-search),.4);--color-icon-oparate:rgba(var(--color-primary-text),.8);--background-icon-oparate:rgba(var(--color-primary-theme),.3);--search-background:rgba(var(--color-search),.4);--search-icon:rgba(var(--color-primary-text),.7);--search-color:rgb(var(--color-primary-text));--personal-color-text:rgb(var(--color-primary-text));--side-background-item:linear-gradient(270deg,rgba(var(--color-accordion-1),.25),rgba(var(--color-accordion-2),.1));--side-background-item-hover:linear-gradient(90deg,rgba(var(--color-accordion-1),.25),rgba(var(--color-accordion-2),.1));--side-color-main:rgb(var(--color-primary-theme));--side-text-color:rgb(var(--color-primary-text));--side-text-color-1:rgba(var(--color-primary-text),.5);--icon-color:linear-gradient(45deg,rgb(var(--color-primary-gradient-1)),rgb(var(--color-primary-gradient-2)));--side-color-item:rgb(var(--color-secondary));--side-background-title:linear-gradient(90deg,rgba(var(--color-accordion-1),.16),rgba(var(--color-accordion-2),.16),rgba(var(--color-accordion-2),0));--side-background-title-hover:linear-gradient(90deg,rgba(var(--color-accordion-1),.3),rgba(var(--color-accordion-2),.3),rgba(var(--color-accordion-2),0));--side-thumb:rgba(var(--color-secondary),.3);--side-thumb-hover:rgba(var(--color-secondary),.5);--side-background-drag:rgba(var(--color-gradient-background-2),.3);--side-background-number:rgba(var(--color-gradient-foreground-2),.6);--side-background-search:rgb(var(--color-gradient-foreground-2));--side-background-record:rgba(var(--color-secondary),.16);--side-result-text:rgb(var(--color-primary-theme));--tree-background:rgb(var(--color-primary-control-4));--background-hover:rgb(var(--color-primary-control-4));--suspension-progress:rgb(var(--color-primary-control-3));--index-color-nav:rgba(var(--color-primary-text),.6);--index-color-title:rgba(var(--color-primary-text),1);--index-color-sub:rgba(var(--color-primary-text),.5);--index-color-hover:rgba(var(--color-primary-text),.8);--home-background-tab:rgba(var(--color-gradient-foreground-1),var(--default-opacity-1));--home-color-tab:rgba(var(--color-primary-text),.8);--home-color-tab-active:rgb(var(--color-primary-text));--home-arrow:rgba(var(--color-primary-control-1),.5);--home-thumb:rgba(var(--color-secondary),.3);--home-thumb-hover:rgba(var(--color-secondary),.5);--file-color-border:rgba(var(--color-secondary),.14);--file-background:transparent;--file-background-row:rgba(var(--color-primary-theme),.05);--color-text:rgb(var(--color-primary-text));--file-color-disable:rgba(var(--color-primary-text),.4);--file-link:rgb(var(--color-primary-theme));--file-link-hover:rgb(var(--color-primary-theme));--file-background-checkbox:transparent;--file-background-footer:rgba(var(--color-gradient-foreground-2),var(--default-opacity-2));--file-button-fill:rgba(var(--color-primary-control-1),.8);--file-button-fill-hover:rgb(var(--color-primary-control-1));--chart-background:linear-gradient(90deg,rgba(var(--color-primary-gradient-1),.2),rgba(var(--color-primary-gradient-2),.2));--color-chart-line:rgba(var(--color-primary-theme),.2);--chart-color:rgb(var(--color-primary-theme));--chart-button-fill:rgba(var(--color-primary-control-1),.8);--chart-button-fill-hover:rgb(var(--color-primary-control-1));--chart-text:rgba(var(--color-secondary),.8);--chart-tips:rgba(var(--color-primary-theme),.2);--chart-line:rgba(var(--color-secondary),.8);--chart-speed:linear-gradient(45deg,rgb(var(--color-primary-theme)),rgb(var(--color-primary-theme)));--comment-line:rgba(var(--color-secondary),.3);--comment-link:rgba(var(--color-secondary),.8);--comment-color:rgb(var(--color-primary-text));--comment-quote-color:rgba(var(--color-secondary),.7);--comment-quote-background:rgba(var(--color-secondary),.08);--comment-color-main:rgba(var(--color-primary-text),.8);--comment-fast:rgba(var(--color-secondary),.8);--comment-placeholder:rgba(var(--color-secondary),.5);--comment-name:rgb(var(--color-secondary));--speed-background:rgba(var(--color-secondary),.1);--speed-color:rgba(var(--color-primary-text),.5);--speed-text:rgb(var(--color-primary-text));--speed-text-secondary:rgba(var(--color-secondary),.6);--speed-primary:rgb(var(--color-primary-text));--speed-null:rgba(var(--color-secondary),.3);--speed-num:rgba(var(--color-primary-theme),1);--attribute-color:rgba(var(--color-primary-text),.8);--attribute-color-hover:rgba(var(--color-primary-text),.8);--attribute-color-1:rgb(var(--color-primary-text));--attribute-color-2:rgba(var(--color-secondary),.4);--attribute-color-3:rgb(var(--color-secondary));--attribute-color-4:rgba(var(--color-secondary),.6);--attribute-background-bar:rgba(var(--color-secondary),.1);--attribute-background-inner:rgba(var(--color-primary-theme),.4);--attribute-background-vip:rgb(var(--color-primary-theme));--promote-background:rgba(var(--color-primary-control-1),.2);--promote-background-hover:rgba(var(--color-primary-control-1),.5);--promote-text:rgb(var(--color-primary-text));--promote-text-sub:rgba(var(--color-primary-theme),.6);--promote-active:rgb(var(--color-primary-theme));--movie-title:rgba(var(--color-secondary),.8);--movie-text:rgba(var(--color-secondary),.5);--movie-text-hover:rgb(var(--color-primary-text));--movie-background:rgba(var(--color-secondary),.08)}",""])},Zew7:function(t,e,r){var i=r("ZbHq");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("7406dbd1",i,!1)},eLLv:function(t,e,r){"use strict";e.a=function(t,e){s.a.promiseApi("getTabIdByContext",e).then(null,function(){return""}).then(function(r){r.length>0?s.a.promiseApi("selectTab",r):s.a.promiseApi("openNewTab",a()({},{url:t,selected:!0,mainTab:!1},e?{context:e}:{})).then(function(t){if(!t)return o.a.reject(new Error("no tab Id"))}).then(null,function(){window.open(t,e)})})};var i=r("//Fk"),o=r.n(i),n=r("woOf"),a=r.n(n),s=r("Cb+C")},garV:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.kinds.includes("review_num")?r("a",{class:"sm"===t.size?"ico-label label-media":"label-media",attrs:{href:"http://movie.xunlei.com/auth/signMedia?type=0&entrypage="+t.entryPage+"&entry="+t.entry,target:"_blank",title:"sm"===t.size?"影评号":""},on:{click:function(e){t.badgeClick("critic")}}},["lg"===t.size?r("i",{staticClass:"ico-media"}):t._e(),t._v(t._s(t.reviewNum)+"\n")]):t.kinds.includes("signer")?r("a",{class:"sm"===t.size?"ico-label label-sign":"label-sign",attrs:{href:"http://movie.xunlei.com/auth/signWriter?type=2&entrypage="+t.entryPage+"&entry="+t.entry,target:"_blank",title:"sm"===t.size?"签约写手":""},on:{click:function(e){t.badgeClick("writer")}}},["lg"===t.size?r("i",{staticClass:"ico-sign"}):t._e(),t._v(t._s(t.signer)+"\n")]):t.kinds.includes("review_expert")?r("a",{class:"sm"===t.size?"ico-label label-talent":"label-talent",attrs:{href:"http://movie.xunlei.com/auth/signExpert?type=1&entrypage="+t.entryPage+"&entry="+t.entry,target:"_blank",title:"sm"===t.size?"影评达人":""},on:{click:function(e){t.badgeClick("expert")}}},["lg"===t.size?r("i",{staticClass:"ico-talent"}):t._e(),t._v(t._s(t.reviewExpert)+"\n")]):"lg"===t.size&&t.kinds.includes("film_review")?r("span",{staticClass:"label-identity label-official"},[r("i",{staticClass:"ico-official"}),t._v("官方号")]):"sm"===t.size&&t.kinds.includes("film_review")?r("span",{staticClass:"ico-official",attrs:{title:"官方号"}}):t._e()};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},iA8U:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["index-wrap",t.custom&&t.materialList.length&&"index-wrap--custom","xmp"===t.$route.query.from&&"xmp"]},[r("div",{staticClass:"index-x"},[r("xl-header"),t.custom&&t.materialList.length?r("div",{key:"custom",staticClass:"wrap-x"},[r("div",{staticClass:"banner-x"},[r("a",{staticClass:"bg-pic",style:"background-image:url("+t.$sget(t.materialList[t.customIndex],"image")+")",attrs:{href:t.resolveUrl(t.$sget(t.materialList[t.customIndex],"url"))||"javascript:;",target:"_blank"}}),r("div",{staticClass:"banner-opt"},[r("div",{staticClass:"banner-opt__list"},t._l(t.materialList,function(e,i){return r("a",{key:i,class:{cur:t.customIndex===i},attrs:{href:t.resolveUrl(t.$sget(t.materialList[t.customIndex],"url"))||"javascript:;",target:"_blank"},on:{mouseenter:function(e){t.customIndex=i}}},[r("img",{attrs:{src:e.image}})])}))]),r("a",{staticClass:"user-info",attrs:{href:"http://pc.xunlei.com/#/users/"+t.publisherInfo.uid,target:"_blank"}},[r("span",{staticClass:"user-avatar"},[r("img",{attrs:{src:t.publisherInfo.portrait_url}})]),r("span",{staticClass:"user-name"},[t._v(t._s(t.publisherInfo.nick_name))])])]),r("div",{staticClass:"banner-info"},[r("h1",{staticClass:"banner-title"},[r("a",{attrs:{target:"_blank",href:t.resolveUrl(t.$sget(t.materialList[t.customIndex],"url"))||"javascript:;"}},[t._v(t._s(t.$sget(t.materialList[t.customIndex],"title")))])]),r("p",{staticClass:"banner-abstract"},[t._v("\n          "+t._s(t.$sget(t.materialList[t.customIndex],"desc"))+"\n        ")]),r("p",{staticClass:"banner-copyright"},[r("span",[t._v("©版权说明")]),t._v("当前内容由"),r("a",{attrs:{href:"http://pc.xunlei.com/#/users/"+t.publisherInfo.uid,target:"_blank"}},[t._v(t._s(t.publisherInfo.nick_name))]),t._v("提供")])])]):r("div",{key:"default",staticClass:"wrap-x"},[r("div",{staticClass:"banner-x"},[r("a",{staticClass:"bg-pic",style:{"background-image":"url("+(t.banner.review_cover_xlx||t.banner.review_cover)+")"},attrs:{href:"activity"===t.banner.review_id?t.banner.url:t.$url.getReviewUrl(t.banner.review_id),target:"_blank"},on:{click:function(e){t.reportBannerClick(t.current,t.banner.review_id,"picture")}}}),r("div",{staticClass:"banner-info"},[r("div",{staticClass:"time"},[r("p",[t._v(t._s(t.day))]),r("span",{staticClass:"line"}),r("p",[t._v(t._s(t.month))])]),r("p",[t._v("每日影评")])]),r("h1",[t._v(t._s(t.banner.review_title))]),r("div",{staticClass:"banner-opt"},[r("div",{staticClass:"banner-opt__list"},t._l(t.list,function(e,i){return r("a",{key:i,class:{cur:i===t.current},attrs:{href:"activity"===e.review_id?e.url:t.$url.getReviewUrl(e.review_id),target:"_blank"},on:{click:function(r){t.filmClick(i,e.review_id,"pic")},mouseenter:function(r){t.current=i,t.bannerHover(i,e.review_id)}}},[r("img",{attrs:{src:e.review_cover_xlx||e.review_cover}})])})),r("a",{staticClass:"banner-opt__link",attrs:{href:"http://movie.xunlei.com/reviews/excellentreviews",target:"_blank"},on:{click:function(e){t.filmClick(0,0,"dailybest")}}},[t._v("天天精评>")])])]),r("div",{staticClass:"index-list"},[r("ul",t._l(t.recommends,function(e,i){return r("li",{key:i,staticClass:"index-list__item",on:{click:function(r){t.recommendClick("flimlib",i,e.review_id)},mouseenter:function(r){t.recommendHover(i,e.review_id)}}},[r("a",{staticClass:"title",attrs:{href:t.$url.getReviewUrl(e.review_id),target:"_blank"}},[t._v(t._s(e.review_title))]),r("div",{staticClass:"index-list__info"},[r("a",{staticClass:"user-info",attrs:{href:t.$url.getUserUrl(e.review_author_id),target:"_blank"}},[r("span",{staticClass:"user-avatar"},[r("img",{attrs:{src:e.review_author_avatar,alt:"用户名"}})]),r("span",{staticClass:"user-name"},[t._v(t._s(e.review_author))])]),r("span",{staticClass:"info-from"},[t._v("\n                评《\n                "),r("a",{staticClass:"movie-name",class:{"article-link-text":!e.review_media_id},attrs:{href:t.$url.getMovieUrl(e.review_media_id),target:"_blank"}},[t._v("\n                  "+t._s(e.review_name)+"\n                ")]),t._v("》\n              ")])])])})),r("div",{staticClass:"index-list__more"},[r("a",{attrs:{href:"http://movie.xunlei.com",target:"_blank"},on:{click:function(e){t.recommendClick("flimlib",0,0)}}},[t._v("更多影评>")])])])]),t.customHomeEnable&&t.showCustom?r("a",{staticClass:"switch-btn custom",attrs:{href:"javascript:;"},on:{mouseenter:function(e){t.showTip=!0},mouseleave:function(e){t.showTip=!1},click:t.changeCustom}},[r("i",{class:t.materialList.length&&t.custom?"icon-custom":"icon-custom-magic"})]):t._e(),t.customHomeEnable&&t.showCustom?r("div",{directives:[{name:"show",rawName:"v-show",value:t.showTip,expression:"showTip"}],staticClass:"td-tooltip is-left",staticStyle:{position:"fixed",top:"auto",right:"47px",bottom:"11px"}},[r("p",{staticClass:"td-tooltip__inner"},[t._v("\n        "+t._s(t.materialList.length?t.custom?"切换至默认首页":"切换至个性化首页":"获取您的个性化迅雷X")+"\n      ")]),r("span",{staticClass:"td-poper__arrow"})]):t._e()],1)])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},lfQx:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("nav",{staticClass:"nav"},t._l(t.icons,function(e,i){return r("xl-icon",{key:e.text,attrs:{icon:e},nativeOn:{click:function(e){e.preventDefault(),t.clickNav(i)}}})})),r("a",{staticClass:"link-report-top",attrs:{href:"javascript:;"},on:{click:t.linkReport}},[r("span",{staticClass:"link-report-text1"},[t._v("举报")]),r("span",{staticClass:"link-report-text2"},[t._v("有害信息")])])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},u3AQ:function(t,e,r){var i=r("2fBE");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("0676b472",i,!1)},uFYg:function(t,e,r){var i=r("kxFB");(t.exports=r("FZ+f")(!1)).push([t.i,"@font-face{font-family:icon-custom;src:url("+i(r("XZBC"))+') format("truetype")}[class*=" icon-custom-"],[class^=icon-custom]{font-family:icon-custom!important;font-size:16px;font-style:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-custom-user:before{content:"\\E626"}.icon-custom-control:before{content:"\\E627"}.icon-custom-add:before{content:"\\E628"}.icon-custom-home-solid:before{content:"\\E629"}.icon-custom-show:before{content:"\\E62A"}.icon-custom-home:before{content:"\\E62B"}.icon-custom-active:before{content:"\\E62C"}.icon-custom-magic:before{content:"\\E62D"}.icon-custom-total:before{content:"\\E62E"}.icon-custom-click:before{content:"\\E62F"}:root{--button-switch:rgba(75,135,255,.1);--button-switch-hover:rgba(75,135,255,.2);--color-switch-icon:#4b87ff}.is-theme{--button-switch:rgba(var(--color-primary-theme),.1);--button-switch-hover:rgba(var(--color-primary-theme),.2);--color-switch-icon:rgb(var(--color-primary-theme))}.index-wrap--custom .banner-x .bg-pic{width:100%;height:100%;margin-left:0;background-position:top}.index-wrap--custom .banner-opt{left:0;right:0;bottom:20px;width:100%}.index-wrap--custom .banner-opt .banner-opt__list{overflow:hidden;font-size:0;text-align:center}.index-wrap--custom .banner-opt .banner-opt__list a{display:inline-block;width:140px;height:62px;margin:0 10px;box-sizing:border-box;border-radius:2px;overflow:hidden}.index-wrap--custom .banner-opt .banner-opt__list a:first-child:last-child,.index-wrap--custom .banner-x:before{display:none}.index-wrap--custom .banner-x .user-info{position:absolute;left:0;top:0;display:flex;align-items:center;padding:10px 10px 12px;color:#fff;background-color:rgba(0,0,0,.2);border-radius:10px 0 10px 0;overflow:hidden}.index-wrap--custom .banner-x .user-info:hover{background-color:rgba(0,0,0,.4)}.index-wrap--custom .banner-x .user-info:active{background-color:rgba(0,0,0,.2)}.index-wrap--custom .banner-x .user-avatar{display:block;width:40px;height:40px;box-sizing:border-box;border:1px solid #fff;border-radius:100%;overflow:hidden}.index-wrap--custom .banner-x .user-avatar>img{width:100%;height:100%;object-fit:cover}.index-wrap--custom .banner-x .user-name{margin-left:6px;font-size:16px;max-width:16em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.index-wrap--custom .banner-info{text-align:center}.index-wrap--custom .banner-info .banner-title{margin:24px 0;font-size:40px;line-height:52px;-webkit-line-clamp:2;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.index-wrap--custom .banner-info .banner-title a{color:var(--index-color-title);transition:color .2s}.index-wrap--custom .banner-info .banner-title a:hover{color:var(--color-primary)}.index-wrap--custom .banner-info .banner-abstract{font-size:20px;line-height:37px;color:var(--index-color-title);-webkit-line-clamp:2;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.index-wrap--custom .banner-info .banner-copyright{margin-top:40px;font-size:20px;line-height:37px;color:var(--index-color-sub)}.index-wrap--custom .banner-info .banner-copyright>span{margin-right:4px}.index-wrap--custom .banner-info .banner-copyright>a{margin:0 4px;color:var(--color-primary)}.index-wrap--custom .banner-info .banner-copyright>a:hover{color:var(--color-primary-hover)}.switch-btn{position:fixed;right:0;bottom:0;width:40px;height:40px;overflow:hidden;background-color:var(--button-switch);border-radius:100% 0 0 0}.switch-btn .icon-custom,.switch-btn .icon-custom-magic{position:absolute;right:8px;bottom:8px;z-index:2;color:var(--color-switch-icon);opacity:.6}.switch-btn .icon-custom-magic:before,.switch-btn .icon-custom:before{content:"\\E62D"}.switch-btn:hover{background-color:var(--button-switch-hover)}.switch-btn:hover .icon-custom{opacity:1}.switch-btn:hover .icon-custom:before{content:"\\E62D"}.switch-btn:hover .icon-custom-magic{opacity:1}.switch-btn.custom .icon-custom:before{content:"\\E62B"}.switch-btn.custom:hover .icon-custom{right:6px;bottom:6px;font-size:20px}.switch-btn.custom:hover .icon-custom:before{content:"\\E629"}@media only screen and (max-height:860px),only screen and (min-width:1101px) and (max-width:1400px){.index-wrap--custom .banner-opt .banner-opt__list a{width:120px;height:53px;margin:0 8px}.index-wrap--custom .banner-x .user-avatar{width:34px;height:34px}.index-wrap--custom .banner-x .user-name{font-size:14px;max-width:14em}.index-wrap--custom .banner-info .banner-title{font-size:35px;line-height:46px}.index-wrap--custom .banner-info .banner-abstract,.index-wrap--custom .banner-info .banner-copyright{font-size:18px;line-height:34px}}@media only screen and (max-height:770px),only screen and (min-width:800px) and (max-width:1100px){.index-wrap--custom .banner-opt .banner-opt__list a{width:110px;height:48px;margin:0 6px}.index-wrap--custom .banner-x .user-avatar{width:26px;height:26px}.index-wrap--custom .banner-x .user-name{font-size:12px;max-width:12em}.index-wrap--custom .banner-info .banner-title{font-size:28px;line-height:37px}.index-wrap--custom .banner-info .banner-abstract,.index-wrap--custom .banner-info .banner-copyright{font-size:16px;line-height:30px}}@media only screen and (max-height:650px),only screen and (max-width:860px){.index-wrap--custom .banner-opt .banner-opt__list a{width:100px;height:44px;margin:0 5px}.index-wrap--custom .banner-x .user-avatar{width:20px;height:20px}.index-wrap--custom .banner-x .user-name{font-size:12px;max-width:10em}.index-wrap--custom .banner-info .banner-title{font-size:23px;line-height:30px}.index-wrap--custom .banner-info .banner-abstract,.index-wrap--custom .banner-info .banner-copyright{font-size:14px;line-height:26px}}',""])},vGiC:function(t,e,r){"use strict";var i=r("Xxa5"),o=r.n(i),n=r("exGp"),a=r.n(n),s=r("p6+B"),c=r("Rhsk"),l=!1;e.a={mounted:function(){var t=a()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!l){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(c.a)();case 4:Object(s.a)("download_detail","dltab_startup_page_load_time",{time:performance.timing.loadEventEnd-performance.timing.navigationStart}),l=!0;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},zODv:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,':root{--index-color-title:#1a1a1a;--index-color-hover:#69f;--index-color-sub:#a8a8a8;--index-color-nav:#7f7f7f}body{color:#1a1a1a;--innerWidth:1250px}.index-wrap{height:100vh;--color-primary:var(--index-color-hover);--color-primary-hover:var(--index-color-hover)}.index-wrap .nav a{color:var(--index-color-nav)}.index-x{position:relative}.wrap-x{width:var(--innerWidth);margin:0 auto}.banner-x{height:450px;position:relative;transition:.3s;overflow:hidden;border-radius:10px}.banner-x h1{left:28px;bottom:20px;z-index:5;width:calc(100% - 150px);line-height:1.2;-webkit-line-clamp:2;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;font-size:40px;color:#fff}.banner-x:before,.banner-x h1{position:absolute;pointer-events:none}.banner-x:before{height:80px;background:linear-gradient(0deg,transparent,rgba(0,0,0,.7))}.banner-x:after,.banner-x:before{width:100%;content:"";z-index:2;top:0;left:0}.banner-x:after{height:100%;position:absolute;background:linear-gradient(transparent 50%,rgba(0,0,0,.7));pointer-events:none}.banner-x .bg-pic{width:125%;height:125%;background-size:cover;background-position:50%;display:block;overflow:hidden;border-radius:10px;margin-left:-12.5%}.banner-x .banner-info{display:flex;flex-direction:column;justify-content:center;width:92px;height:55px;position:absolute;top:16px;left:28px;font-size:18px;line-height:1.2;text-align:center;color:#fff;border:1px solid hsla(0,0%,100%,.4);pointer-events:none;z-index:4}.banner-x .time{display:flex;justify-content:center;align-items:center;font-size:20px}.banner-x .day{font-size:78px;margin:0 25px 0 0}.banner-x .line{width:1px;height:16px;margin:0 5px;background:#ebf0f4;transform:rotate(20deg)}.banner-opt{position:absolute;width:90px;right:12px;bottom:25px;z-index:4}.banner-opt .banner-opt__list a{position:relative;display:block;height:54px;margin-bottom:4px;border:1px solid #a7a7a7;cursor:pointer}.banner-opt .banner-opt__list a img{width:100%;height:100%;object-fit:cover}.banner-opt .banner-opt__list a:after{position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.6);transition:opacity .2s;content:""}.banner-opt .banner-opt__list a.cur{border-color:#fff}.banner-opt .banner-opt__list a.cur:after,.banner-opt .banner-opt__list a:hover:after{opacity:0}.banner-opt .banner-opt__link{display:block;height:28px;text-align:center;line-height:28px;background:rgba(0,0,0,.6);border:1px solid #a7a7a7;transition:.2s}.banner-opt .banner-opt__link:hover{color:#fff;border-color:#fff}.index-list{margin-top:40px}.index-list ul{display:flex;flex-wrap:wrap}.index-list__item{width:50%;margin-bottom:40px;font-size:16px;color:var(--index-color-sub)}.index-list__item .title{display:block;margin-right:25px;font-size:26px;line-height:2;color:var(--index-color-title);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.index-list__item .index-list__info,.index-list__item .user-info{display:flex;align-items:center}.index-list__item .user-avatar{display:block;width:28px;height:28px}.index-list__item .user-avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%}.index-list__item .user-name{max-width:10em;margin:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.index-list__item .info-from{display:flex}.index-list__item .movie-name{max-width:13em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.index-list__item .movie-name.article-link-text{cursor:text;color:var(--index-color-sub)}.index-list__item .movie-name.article-link-text:hover{color:currentColor}.index-list__item a{color:var(--index-color-sub);transition:color .2s}.index-list__item a:hover{color:var(--color-primary)}.index-list__more{display:flex;justify-content:flex-end}.index-list__more a{font-size:16px;color:var(--color-primary)}.index-list__more a:hover{color:var(--color-primary-hover)}@media only screen and (max-height:860px),only screen and (min-width:1101px) and (max-width:1400px){body{--innerWidth:1000px}.nav{height:95px}.banner-x{height:380px}.banner-x h1{font-size:35px}.banner-x .banner-info{font-size:16px}.banner-x .time{font-size:18px;line-height:1}.banner-opt{width:80px}.banner-opt .banner-opt__list a{height:45px}.index-article{margin:30px 0 0}.index-article h1{font-size:32px;line-height:3}.index-article P{font-size:16px;line-height:2;height:64px}.from-info{font-size:14px}.index-list{margin-top:30px}.index-list__item{margin-bottom:25px;font-size:15px}.index-list__item .title{margin-right:20px;font-size:22px}.index-list__item .user-name{max-width:8em}.index-list__item .movie-name{max-width:12em}}@media only screen and (max-height:770px),only screen and (min-width:800px) and (max-width:1100px){body{--innerWidth:740px}.nav{height:85px}.banner-x{height:310px}.banner-x h1{font-size:28px}.banner-x .banner-info{width:80px;height:48px;font-size:16px}.banner-x .time{font-size:16px}.banner-opt{width:75px}.banner-opt .banner-opt__list a{height:45px}.index-list{margin-top:30px}.index-list__item{margin-bottom:25px;font-size:14px}.index-list__item .title{margin-right:20px;font-size:20px}.index-list__item .user-name{max-width:7em}.index-list__item .movie-name{max-width:8em}.index-list__item .user-avatar{width:22px;height:22px}.index-list__more a{font-size:13px}}@media only screen and (max-height:650px),only screen and (max-width:860px){body{--innerWidth:596px}.nav{height:90px}.banner-x{height:260px}.banner-x h1{left:20px;bottom:16px;width:calc(100% - 120px);font-size:23px}.banner-x .banner-info{left:20px;width:60px;height:38px;font-size:12px}.banner-x .time{font-size:13px}.banner-x .line{margin:0 2px}.banner-x:before{height:60px}.banner-opt{width:70px;bottom:18px}.banner-opt .banner-opt__list a{height:40px}.banner-opt .banner-opt__link{height:22px;line-height:22px}.index-list{margin-top:30px}.index-list__item{margin-bottom:26px;font-size:12px}.index-list__item .title{margin-right:10px;font-size:15px}.index-list__item .user-name{max-width:6em}.index-list__item .movie-name{max-width:11em}.index-list__item .user-avatar{width:18px;height:18px}.index-list__more a{font-size:12px}}',""])}});
//# sourceMappingURL=../../sourcemaps/pages_index.be9b580cb0b1349acc4d.js.map