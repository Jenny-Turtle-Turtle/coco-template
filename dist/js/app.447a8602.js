(function(e){function n(n){for(var o,c,a=n[0],s=n[1],p=n[2],d=0,f=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(n);while(f.length)f.shift()();return i.push.apply(i,p||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var s=t[a];0!==r[s]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},i=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var p=0;p<a.length;p++)n(a[p]);var u=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"1b43":function(e,n,t){var o={"./coco-banner/package.json":"59c4","./coco-form/package.json":"c3e1"};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="1b43"},3234:function(e){e.exports=JSON.parse('{"schema":{"type":"object","title":"页面配置","properties":{"background":{"type":"string","title":"页面背景色","format":"color"},"title":{"type":"string","title":"页面标题"}}},"data":{"title":"coco-template"}}')},"37b7":function(e,n,t){var o={"./package.json":"3234"};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="37b7"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("8bbf"),r=t.n(o),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("CocoComponent",[t("coco-banner",{attrs:{obj:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}}}),t("coco-form")],1)],1)},c=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.loaded?t("div",{staticClass:"slider-view",attrs:{id:"slider-view"}},e._l(e.components,(function(n,o){return t("div",{key:o,attrs:{"data-layout":n.props&&n.props._layout,id:"coco-render-id-_component_"+o}},[t(n.name,{key:n+o,tag:"div",attrs:{obj:n.props||{},config:n.config},on:{onRemoteComponentLoad:e.remoteComponentLoad}})],1)})),0):e._e()},s=[],p=(t("99af"),t("4de4"),t("d81d"),t("fb6a"),t("a434"),t("b0c0"),t("159b"),t("5530")),u=t("2909"),d=(t("b64b"),t("d3b7"),t("ac1f"),t("5319"),t("1276"),t("ddb0"),t("4328")),f=t("cabd"),l=t.n(f),m=t("e5c2"),h=t.n(m);function g(){var e=[],n=t("1b43");return n.keys().forEach((function(t){var o=n(t);e.push(o)})),e}function b(){var e={},n=t("37b7");return n.keys().forEach((function(t){var o=n(t);e=o})),e}function v(e){var n=t("ffe0");n.keys().forEach((function(t){var o=n(t),r=l()(h()(t.split("/")[1].replace(/\.\w+$/,"")));e.component(r,o.default||o)}))}v(r.a);var y={componentConfig:g(),pageConfig:b()},j=Object(d["parse"])(location.href.split("?")[1])||{},x="true"===j.isEdit,w="true"===j.isPreview,O=j.env,C=j.pageId,_={development:"http://dev.api.com",production:""}[O];function k(e){window.parent.postMessage(e,"*")}function E(e,n){var t=new XMLHttpRequest;t.open("GET",e),t.withCredentials=!0,t.responseType="json",t.onreadystatechange=function(){4===t.readyState&&200===t.status&&n(t.response)},t.send(null)}var S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.component?t(e.component,{tag:"div",attrs:{obj:e.obj}}):e._e()},I=[],$={name:"coco-remote-component-loader",props:{obj:{type:Object,default:function(){}},config:{}},data:function(){return{data:{},component:""}},created:function(){var e=this,n=this.config,t=n.name,o=n.js,i=n.css,c=n.index,a=window[t];if(a)this.$emit("onRemoteComponentLoad",Object(p["a"])(Object(p["a"])({},window[t]),{},{index:c})),this.$nextTick((function(){e.component=r.a.extend(window[t].Component)}));else{var s=document.createElement("script"),u=document.createElement("link");s.src=o,u.href=i,u.rel="stylesheet",document.head.appendChild(u),document.body.appendChild(s),s.onload=function(){e.$emit("onRemoteComponentLoad",Object(p["a"])(Object(p["a"])({},window[t]),{},{index:c})),e.component=r.a.extend(window[t].Component)}}},watch:{"config.name":function(){this.component=r.a.extend(window[this.config.name].Component)}}},P=$,N=t("2877"),J=Object(N["a"])(P,S,I,!1,null,null,null),L=J.exports;document.domain="localhost";var U={name:"coco-component",data:function(){return{init:!1,loaded:!1,sortOption:{group:{name:"components",pull:!0,put:!0},sort:!0,animation:200},isEdit:x,components:window.__coco_config__.components.length?window.__coco_config__.components:this.$slots.default.map((function(e){var n,t=e.componentOptions.tag,o=y.componentConfig.filter((function(e){return e.name===t}))[0].data;return{name:t,props:(null===(n=e.componentOptions.propsData)||void 0===n?void 0:n.obj)||o}})),componentConfig:y.componentConfig,currentIndex:0,remoteComponents:[],page:{schema:y.pageConfig.schema,props:window.__coco_config__.pageData&&window.__coco_config__.pageData.props||y.pageConfig.data}}},created:function(){var e=this;w&&_&&C?E("".concat(_,"/project/preview?id=").concat(C),(function(n){e.components=n.result.components,e.page=n.result.pageData,e.$emit("init",e.page.props),e.loaded=!0})):(this.loaded=!0,this.$emit("init",this.page.props),x&&window.addEventListener("message",(function(n){n.source!==window&&"loaded"!==n.data&&(e.isEdit=!0,e[n.data.type](n.data.data))})))},methods:{setConfig:function(e){this.components=e.userSelectComponents,this.page=e.page,this.getConfig()},getConfig:function(){this.init=!0,k({type:"returnConfig",data:{components:this.componentConfig,userSelectComponents:this.components,currentIndex:this.currentIndex,remoteComponents:this.remoteComponents,page:this.page}})},reset:function(e){var n=e.userSelectComponents,t=e.currentIndex,o=e.page;this.components=n,this.currentIndex=t,this.page=o,this.$emit("init",this.page.props)},remoteComponentLoad:function(e){var n=e.config,t=e.index;if(this.isEdit){var o=this.remoteComponents.filter((function(e){return"".concat(n.name,".").concat(n.version)==="".concat(e.name,".").concat(e.version)}))[0];o||this.remoteComponents.push(n),this.components.forEach((function(e){e.config&&e.config.index===t&&(e.props=e.props||n.data)})),this.init&&this.getConfig()}},addComponent:function(e){var n=e.data,t=e.index;this.currentIndex=t?t+1:t,n.schema?(this.components=[].concat(Object(u["a"])(this.components.slice(0,this.currentIndex)),[{name:n.name,props:n.data}],Object(u["a"])(this.components.slice(this.currentIndex,this.components.length))),this.getConfig()):this.components=[].concat(Object(u["a"])(this.components.slice(0,this.currentIndex)),[{name:"coco-components-loader",props:null,config:Object(p["a"])(Object(p["a"])({},n),{},{index:this.currentIndex})}],Object(u["a"])(this.components.slice(this.currentIndex,this.components.length)))},changeProps:function(e){"__page"===e.type?(this.page.props=e,this.$emit("init",this.page.props)):this.$set(this.components[this.currentIndex],"props",e),this.getConfig()},changeIndex:function(e){this.currentIndex=e,this.getConfig()},deleteComponent:function(e){this.components.splice(e,1),this.changeIndex(e-1<0?0:e-1)},sortComponent:function(e){var n=e.index,t=e.op,o=JSON.parse(JSON.stringify(this.components)),r=o[n],i=n+t;o[n]=o[i],o[i]=r,this.components=o,this.changeIndex(i)},copyComponent:function(e){this.components=[].concat(Object(u["a"])(this.components.slice(0,e)),[JSON.parse(JSON.stringify(this.components[e]))],Object(u["a"])(this.components.slice(e,this.components.length))),this.changeIndex(e+1)}},components:{CocoComponentsLoader:L}},T=U,D=Object(N["a"])(T,a,s,!1,null,null,null),M=D.exports,z=t("befc"),R=t("bd8c"),V={name:"App",components:{CocoBanner:z["default"],CocoForm:R["default"],CocoComponent:M}},Z=V,W=(t("034f"),Object(N["a"])(Z,i,c,!1,null,null,null)),F=W.exports,q=t("b970");t("157a");function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:375,n=document.documentElement;n.clientWidth>=600?n.style.fontSize="80px":n.style.fontSize=n.clientWidth/e*100+"px",document.body.style.fontSize="16px"}A(),window.addEventListener("resize",(function(){return A()})),r.a.use(q["a"]),r.a.config.productionTip=!1,new r.a({render:function(e){return e(F)}}).$mount("#app")},"59c4":function(e){e.exports=JSON.parse('{"name":"coco-banner","description":"banner 组件","snapshot":"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png","schema":{"type":"object","properties":{"src":{"title":"图片地址","type":"string","format":"image"},"link":{"title":"跳转链接","type":"string","format":"url"}},"required":["src"]},"data":{"src":"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}}')},"85ec":function(e,n,t){},"8bbf":function(e,n){e.exports=Vue},bd8c:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名"},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),t("van-field",{attrs:{type:"phone",name:"手机号",label:"手机号",placeholder:"手机号"},model:{value:e.phone,callback:function(n){e.phone=n},expression:"phone"}}),t("van-field",{attrs:{type:"address",name:"地址",label:"地址",placeholder:"地址"},model:{value:e.address,callback:function(n){e.address=n},expression:"address"}}),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)},r=[],i={data:function(){return{username:"",address:"",phone:""}},methods:{onSubmit:function(e){console.log("submit",e)}}},c=i,a=t("2877"),s=Object(a["a"])(c,o,r,!1,null,"251c0fb2",null);n["default"]=s.exports},befc:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("a",[t("img",{attrs:{src:e.obj.src,width:"100%",alt:"图片"}})])},r=[],i={name:"banner",props:{obj:{type:Object,default:function(){}}}},c=i,a=t("2877"),s=Object(a["a"])(c,o,r,!1,null,null,null);n["default"]=s.exports},c3e1:function(e){e.exports=JSON.parse('{"name":"coco-form","description":"form 组件","snapshot":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c69eef4e997843ea84929b1c0e2a2fdf~tplv-k3u1fbpfcp-watermark.image","schema":{"type":"object","properties":{"btnText":{"title":"按钮文案","type":"string"},"action":{"title":"提交接口地址","type":"string","format":"url"}},"required":["btnText"]}}')},ffe0:function(e,n,t){var o={"./coco-banner/index.vue":"befc","./coco-form/index.vue":"bd8c"};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="ffe0"}});
//# sourceMappingURL=app.447a8602.js.map