!function(){var e=document.createElement("style");e.innerHTML=".map[data-v-628244fb]{width:100%;height:400px}.desc[data-v-c58ed6ed]{font-size:12px;font-family:PingFang,Microsoft YaHei;font-weight:400;color:gray;line-height:24px;letter-spacing:8px}.content[data-v-c58ed6ed]{background-color:#424242;font-size:12px;font-family:PingFang,Microsoft YaHei;font-weight:400;color:#fff;line-height:24px;letter-spacing:4px}@media (min-width: 768px){.content[data-v-c58ed6ed]{font-size:24px;font-family:Microsoft YaHei;font-weight:700;line-height:2;color:#fff}}.slogan[data-v-c58ed6ed]{font-size:18px;font-family:PingFang,Microsoft YaHei;font-weight:500;color:gray;line-height:24px}@media (min-width: 768px){.slogan[data-v-c58ed6ed]{font-size:60px;font-family:PingFang,Microsoft YaHei;font-weight:700;color:gray;line-height:1.5}}\n",document.head.appendChild(e),System.register(["./index-legacy.d675e020.js"],(function(e){"use strict";var a,n,o,i,t,d,s,c;return{setters:[e=>{a=e.j,n=e._,o=e.o,i=e.c,t=e.r,d=e.b,s=e.a,c=e.d}],execute:function(){"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var p={exports:{}};p.exports=function(){function e(e){var o=[];return e.AMapUI&&o.push(a(e.AMapUI)),e.Loca&&o.push(n(e.Loca)),Promise.all(o)}function a(e){return new Promise((function(a,n){var i=[];if(e.plugins)for(var c=0;c<e.plugins.length;c+=1)-1==t.AMapUI.plugins.indexOf(e.plugins[c])&&i.push(e.plugins[c]);if(d.AMapUI===o.failed)n("前次请求 AMapUI 失败");else if(d.AMapUI===o.notload){d.AMapUI=o.loading,t.AMapUI.version=e.version||t.AMapUI.version,c=t.AMapUI.version;var p=document.body||document.head,l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/ui/"+c+"/main.js",l.onerror=function(e){d.AMapUI=o.failed,n("请求 AMapUI 失败")},l.onload=function(){if(d.AMapUI=o.loaded,i.length)window.AMapUI.loadUI(i,(function(){for(var e=0,n=i.length;e<n;e++){var o=i[e].split("/").slice(-1)[0];window.AMapUI[o]=arguments[e]}for(a();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()}));else for(a();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()},p.appendChild(l)}else d.AMapUI===o.loaded?e.version&&e.version!==t.AMapUI.version?n("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,(function(){for(var e=0,n=i.length;e<n;e++){var o=i[e].split("/").slice(-1)[0];window.AMapUI[o]=arguments[e]}a()})):a():e.version&&e.version!==t.AMapUI.version?n("不允许多个版本 AMapUI 混用"):s.AMapUI.push((function(e){e?n(e):i.length?window.AMapUI.loadUI(i,(function(){for(var e=0,n=i.length;e<n;e++){var o=i[e].split("/").slice(-1)[0];window.AMapUI[o]=arguments[e]}a()})):a()}))}))}function n(e){return new Promise((function(a,n){if(d.Loca===o.failed)n("前次请求 Loca 失败");else if(d.Loca===o.notload){d.Loca=o.loading,t.Loca.version=e.version||t.Loca.version;var i=t.Loca.version,c=t.AMap.version.startsWith("2"),p=i.startsWith("2");if(c&&!p||!c&&p)n("JSAPI 与 Loca 版本不对应！！");else{c=t.key,p=document.body||document.head;var l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/loca?v="+i+"&key="+c,l.onerror=function(e){d.Loca=o.failed,n("请求 AMapUI 失败")},l.onload=function(){for(d.Loca=o.loaded,a();s.Loca.length;)s.Loca.splice(0,1)[0]()},p.appendChild(l)}}else d.Loca===o.loaded?e.version&&e.version!==t.Loca.version?n("不允许多个版本 Loca 混用"):a():e.version&&e.version!==t.Loca.version?n("不允许多个版本 Loca 混用"):s.Loca.push((function(e){e?n(e):n()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var o,i;(i=o||(o={})).notload="notload",i.loading="loading",i.loaded="loaded",i.failed="failed";var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},d={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},s={AMap:[],AMapUI:[],Loca:[]},c=[],p=function(e){"function"==typeof e&&(d.AMap===o.loaded?e(window.AMap):c.push(e))};return{load:function(a){return new Promise((function(n,i){if(d.AMap==o.failed)i("");else if(d.AMap==o.notload){var s=a.key,l=a.version,r=a.plugins;s?(window.AMap&&"lbs.amap.com"!==location.host&&i("禁止多种API加载方式混用"),t.key=s,t.AMap.version=l||t.AMap.version,t.AMap.plugins=r||t.AMap.plugins,d.AMap=o.loading,l=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)d.AMap=o.failed,i(t);else for(d.AMap=o.loaded,e(a).then((function(){n(window.AMap)})).catch(i);c.length;)c.splice(0,1)[0]()},(r=document.createElement("script")).type="text/javascript",r.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+s+"&plugin="+t.AMap.plugins.join(","),r.onerror=function(e){d.AMap=o.failed,i(e)},l.appendChild(r)):i("请填写key")}else if(d.AMap==o.loaded)if(a.key&&a.key!==t.key)i("多个不一致的 key");else if(a.version&&a.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{if(s=[],a.plugins)for(l=0;l<a.plugins.length;l+=1)-1==t.AMap.plugins.indexOf(a.plugins[l])&&s.push(a.plugins[l]);s.length?window.AMap.plugin(s,(function(){e(a).then((function(){n(window.AMap)})).catch(i)})):e(a).then((function(){n(window.AMap)})).catch(i)}else if(a.key&&a.key!==t.key)i("多个不一致的 key");else if(a.version&&a.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{var A=[];if(a.plugins)for(l=0;l<a.plugins.length;l+=1)-1==t.AMap.plugins.indexOf(a.plugins[l])&&A.push(a.plugins[l]);p((function(){A.length?window.AMap.plugin(A,(function(){e(a).then((function(){n(window.AMap)})).catch(i)})):e(a).then((function(){n(window.AMap)})).catch(i)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},d={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},s={AMap:[],AMapUI:[],Loca:[]}}}}();const l=p.exports;const r=()=>{a((async()=>{const{map:e,AMap:a}=await function(e="container",a={}){return new Promise(((n,o)=>{l.load({key:"41067b5a44b11a4f9a72ec9aa2ebed22",version:"2.0",plugins:["AMap.Geocoder"]}).then((o=>{const i=new o.Map(e,a);n({map:i,AMap:o})})).catch((e=>{console.log(e),o(e)}))}))}("container",{zoom:16,center:[120.538848,31.276795],viewMode:"3D",resizeEnable:!0});!function(e,a){const n=new a.Marker({icon:"http://yyx-mall.oss-cn-chengdu.aliyuncs.com/icons/pos.png?x-oss-process=image/resize,h_40,m_lfit",position:[120.538848,31.276795],anchor:"bottom-center"});e.add(n)}(e,a)}))},A={id:"container",class:"map"};const f=n({name:"Maps",components:{},props:{},setup:()=>(r(),{})},[["render",function(e,a,n,t,d,s){return o(),i("div",A)}],["__scopeId","data-v-628244fb"]]),u={name:"",components:{Maps:f},props:{},setup:()=>({})},v={class:"contract-us bg-white"},g={class:"md:container md:mx-auto md:shadow-xl overflow-hidden"},m=c('<div class="mt-6 text-center md:mt-22" data-v-c58ed6ed><img src="data:image/png;base64,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" alt="" class="mx-auto" data-v-c58ed6ed><p class="desc mt-0.5 md:mt-8" data-v-c58ed6ed>Hi,我们在这里</p></div><div class="content mt-4 px-5 py-6 xs:block md:hidden" data-v-c58ed6ed><p data-v-c58ed6ed>苏州，高新区，竹园路，209号一号楼C5045</p><p class="mt-2.5" data-v-c58ed6ed>电话 0512-68315960</p><p data-v-c58ed6ed>网址 www.bw-idea.com</p><p data-v-c58ed6ed>邮箱 bw_idea@163.com</p><p data-v-c58ed6ed>QQ 553766909</p><p data-v-c58ed6ed>联系人 郑乃强 158 5080 7351（微信同号）</p></div><div class="xm:hidden md:flex md:mt-24" data-v-c58ed6ed><div class="flex-1" data-v-c58ed6ed><img src="/vue-official-website/assets/contract-us_1@2x.8dd515ab.png" alt="" class="flex-1" data-v-c58ed6ed></div><div class="flex-1 content flex items-center" data-v-c58ed6ed><div class="px-6" data-v-c58ed6ed><p data-v-c58ed6ed>苏州，高新区，竹园路，209号一号楼C5045</p><p data-v-c58ed6ed><span class="mr-8" data-v-c58ed6ed>电话</span> 0512-68315960</p><p data-v-c58ed6ed><span class="mr-8" data-v-c58ed6ed>网址</span> www.bw-idea.com</p><p data-v-c58ed6ed><span class="mr-8" data-v-c58ed6ed>邮箱</span> bw_idea@163.com</p><p data-v-c58ed6ed><span class="mr-8" data-v-c58ed6ed>QQ</span> 553766909</p><p data-v-c58ed6ed><span class="mr-8" data-v-c58ed6ed>联系人</span> 郑乃强 158 5080 7351（微信同号） </p></div></div></div><div class="slogan my-24 text-center md:my-46" data-v-c58ed6ed> 制造助力中国制造助力中国制造 </div>',4);e("default",n(u,[["render",function(e,a,n,c,p,l){const r=f,A=t("y-swiper");return o(),i("div",v,[d(r),s("div",g,[m,d(A,{class:"mb-22 xs:hidden md:block"})])])}],["__scopeId","data-v-c58ed6ed"]]))}}}))}();