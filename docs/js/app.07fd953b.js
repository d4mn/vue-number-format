(function(e){function t(t){for(var a,o,u=t[0],l=t[1],c=t[2],p=0,f=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3068:function(e,t,n){},"368c":function(e,t,n){n("99af"),n("c975"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("1276");var a=n("563b"),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=Object.assign({},a,t);"number"!==typeof e||n.isInteger||(e=e.toFixed(c(n.precision)));var r=d(e,n.acceptNegative)?"-":"",i=l(e),o=s(i,n.precision),u=m(o).split("."),b=u[0],v=u[1];return b=p(b,n.thousand),r+n.prefix+f(b,v,n.decimal)+n.suffix};e.exports.format=r;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{precision:2,isInteger:!1,acceptNegative:!0},n=Object.assign({},a,t),r=d(e,n.acceptNegative)?-1:1,i=l(e),o=s(i,n.precision);return n.isInteger?parseInt("".concat(d(e,n.acceptNegative)?"-":"").concat(i.toString())):parseFloat(o)*r};e.exports.unformat=i;var o=function(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&setTimeout(n,1)};e.exports.setCursor=o;var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=e.value.length-e.selectionEnd;e.value=r(e.value,t),n=Math.max(n,t.suffix.length),n=e.value.length-n,n=Math.max(n,t.prefix.length+1),o(e,n)};function l(e){return m(e).replace(/\D+/g,"")||"0"}function c(e){return Math.max(0,Math.min(e,20))}function s(e,t){var n=Math.pow(10,t),a=parseFloat(e)/n;return a.toFixed(c(t))}function p(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1".concat(t))}function f(e,t,n){return t?e+n+t:e}function m(e){return e?e.toString():""}function d(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)return!1;"string"!=typeof e&&(e=e.toString());var n=e.indexOf("+")>=0,a=0!==e&&e.indexOf("-")>=0||"-"==e[e.length-1];return!(n||!a)}e.exports.setCursorPosition=u},"3bd2":function(e,t,n){"use strict";var a=n("7a23");function r(e,t,n,r,i,o){return Object(a["g"])(),Object(a["c"])("input",{value:o.formattedValue,type:"tel",onInput:t[1]||(t[1]=function(e){return o.onInput(e)}),onFocus:t[2]||(t[2]=function(e){return o.onFocus(e)})},null,40,["value"])}n("a9e3");var i=n("368c"),o={name:"VueNumberFormat",props:{value:{type:[String,Number],required:!0},format:{type:Function},unFormat:{type:Function},options:{type:Object,required:!1}},computed:{mergedOptions:function(){return this.options?Object.assign({},this.$vueNumberFormatOptions,this.options):this.$vueNumberFormatOptions},formattedValue:function(){return Object(i["format"])(this.value,this.mergedOptions)}},methods:{onFocus:function(e){Object(i["setCursor"])(e.target,e.target.value.length-this.mergedOptions.suffix.length)},onInput:function(e){Object(i["setCursorPosition"])(e.target,this.mergedOptions);var t=Object(i["unformat"])(e.target.value,this.mergedOptions);this.updateValue(t)},updateValue:function(e){this.$emit("update:value",e),this.$emit("input",e)},setCursor:function(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&setTimeout(n,1)}}};o.render=r;t["a"]=o},"4b3d":function(e,t,n){var a=n("6f35");e.exports=new a({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0,"remove-initial-line-feed":!0,indent:0})},"4ebf":function(e,t,n){},"563b":function(e,t){e.exports={prefix:"R$ ",suffix:"",decimal:",",thousand:".",precision:2,acceptNegative:!0,isInteger:!1}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"w-full h-screen flex justify-center max-h-full overflow-y-auto bg-gradient"},i={class:"w-full max-w-lg"},o={class:"w-full flex flex-wrap  text-lg p-4 md:p-6"},u=Object(a["e"])('<div class="h-1/3 w-full flex flex-col justify-end"><h1 class="w-full text-white text-center font-medium"><span class="border-b-4 border-green">vue-number-format</span></h1><p class="text-center">A lightweight flexible Vue.js 2 and 3 component to display and input formatted numbers and currencies</p><div class="w-full flex justify-center h-12 items-center mt-4"><div class="w-2/5 text-right text-xs"><a class="bg-grey-light px-4 py-2" href="https://github.com/igortrinidad/vue-number-format">GitHub</a></div><div class="w-1/5 flex justify-center p-3 items-center h-full"><div class="vertical-divider bg-white"></div></div><div class="w-2/5 text-left text-xs"><a class="bg-grey-light px-4 py-2" href="https://www.npmjs.com/package/vue-number-format">NPM</a></div></div></div>',1),l={class:"w-full flex flex-wrap my-8"},c=Object(a["f"])("h2",{class:"w-full text-white text-center font-medium"},[Object(a["f"])("span",{class:"border-b-4 border-green"},"Examples")],-1),s={class:"w-full flex flex-wrap"},p=Object(a["f"])("h2",{class:"w-full text-white text-center font-medium"},[Object(a["f"])("span",{class:"border-b-4 border-green"},"Instalation")],-1);function f(e,t,n,f,m,d){var b=Object(a["i"])("ExampleCard"),v=Object(a["i"])("InstalationCard");return Object(a["g"])(),Object(a["c"])("div",r,[Object(a["f"])("div",i,[Object(a["f"])("div",o,[u,Object(a["f"])("div",l,[c,(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(m.examples,(function(e,t){return Object(a["g"])(),Object(a["c"])(b,{key:t,example:e},null,8,["example"])})),128))]),Object(a["f"])("div",s,[p,(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(m.instalations,(function(e,t){return Object(a["g"])(),Object(a["c"])(v,{instalation:e,key:"instalation"+t},null,8,["instalation"])})),128))])])])])}var m=n("53ca"),d={class:"w-full mt-2 mb-6 p-1"},b={class:"mb-2"},v={class:"border-b-4 border-green"},g={class:"w-full flex p-2 justify-center"},x={class:"w-2/5 text-right text-xs"},h=Object(a["f"])("p",null,"output",-1),j=Object(a["f"])("div",{class:"w-1/5 flex justify-center p-3 items-center"},[Object(a["f"])("div",{class:"vertical-divider bg-black"})],-1),O={class:"w-2/5 text-left text-xs"},y=Object(a["f"])("p",null,"typeof",-1);function w(e,t,n,r,i,o){var u=Object(a["i"])("VueNumberFormat"),l=Object(a["i"])("Prism");return Object(a["g"])(),Object(a["c"])("div",d,[Object(a["f"])("h3",b,[Object(a["f"])("span",v,Object(a["j"])(n.example.title),1)]),Object(a["f"])(u,{value:n.example.value,"onUpdate:value":t[1]||(t[1]=function(e){return n.example.value=e}),options:n.example.options,class:"w-full text-lg text-center text-2xl p-4 focus:outline-none focus:shadow-md focus:border-blue"},null,8,["value","options"]),Object(a["f"])("div",g,[Object(a["f"])("div",x,[Object(a["f"])("p",null,Object(a["j"])(n.example.value),1),h]),j,Object(a["f"])("div",O,[Object(a["f"])("p",null,Object(a["j"])(Object(m["a"])(n.example.value)),1),y])]),Object(a["f"])(l,{code:n.example.code(),language:"html"},null,8,["code"])])}var N={name:"ExampleCard",props:["example"]};N.render=w;var F=N,V={class:"w-full my-3"},k={class:"mb-3"},I={class:"border-b-4 border-green"};function C(e,t,n,r,i,o){var u=Object(a["i"])("Prism");return Object(a["g"])(),Object(a["c"])("div",V,[Object(a["f"])("h3",k,[Object(a["f"])("span",I,Object(a["j"])(n.instalation.title),1)]),Object(a["f"])(u,{code:n.instalation.code(),language:n.instalation.language},null,8,["code","language"]),n.instalation.tips?(Object(a["g"])(),Object(a["c"])("div",{key:0,class:"w-full p-2 bg-white",innerHTML:n.instalation.tips},null,8,["innerHTML"])):Object(a["d"])("",!0)])}var P={name:"InstalationCard",props:["instalation"]};P.render=C;var $=P,A=n("4b3d"),S=n.n(A),M=[{title:"Currency for FLOAT data types",value:275,options:{precision:2,decimal:".",thousand:","},code:function(){return S.a.normalize("\n        <VueNumberFormat \n          v-model:value=\"value\" \n          :options=\"{ precision: 2, decimal: '.', thousand: ',' }\"\n        ></VueNumberFormat>\n      ")}},{title:"Currency for INTEGER data types",value:275,options:{precision:2,prefix:"R$ ",isInteger:!0},code:function(){return S.a.normalize('\n        <VueNumberFormat \n          v-model:value="value" \n          :options="{ precision: 2, prefix: \'R$ \', isInteger: true }"\n        ></VueNumberFormat>\n      ')}},{title:"Number with suffix",value:275,options:{precision:3,prefix:"",suffix:" kg",acceptNegative:!1},code:function(){return S.a.normalize("\n        <VueNumberFormat \n          v-model:value=\"value\" \n          :options=\"{ precision: 3, prefix: '', suffix: ' kg', acceptNegative: false  }\"\n        ></VueNumberFormat>\n      ")}},{title:"Percentage",value:2.75,options:{prefix:"%",decimal:".",thousand:"",precision:2,acceptNegative:!1},code:function(){return S.a.normalize("\n        <VueNumberFormat \n          v-model:value=\"value\" \n          :options=\"{ prefix: '%', decimal: '.', thousand: '', precision: 2, acceptNegative: false }\"\n        ></VueNumberFormat>\n      ")}}],E=[{title:"Package install",language:"bash",code:function(){return S.a.normalize("\n        yarn add vue-number-format\n        or\n        npm i -S vue-number-format\n      ")}},{title:"Vue 3 Global usage",language:"js",code:function(){return S.a.normalize("\n        /* ONLY FOR VUE 3 */\n        import { createApp } from 'vue'\n        import App from './App.vue'\n        import VueNumberFormat from 'vue-number-format'\n\n        const app = createApp(App)\n        app.use(VueNumberFormat, {prefix: 'US$ ', decimal: ',', thounsand: '.'})\n\n        app.mount('#app')\n      ")}},{title:"Vue 2 Global usage",language:"js",code:function(){return S.a.normalize("\n        /* ONLY FOR VUE 2 */\n        import Vue from 'vue'\n        import App from './App.vue'\n        \n        import VueNumberFormat from 'vue-number-format'\n        Vue.use(VueNumberFormat, {prefix: 'R$ ', decimal: ',', thounsand: '.'})\n        \n        new Vue({\n          render: h => h(App),\n        }).$mount('#app')\n      ")}},{title:"Local component usage",language:"html",code:function(){return S.a.normalize("\n        <template>\n          ...\n          \x3c!-- VUE 3 --\x3e\n          <VueNumberFormat\n            v-model:value=\"value\"\n            :options=\"{ precision: 3, prefix: '', suffix: ' kg', decimal: '', thousand: '', acceptNegative: false, isInteger: false  }\"\n          ></VueNumberFormat>\n          \x3c!-- https://v3.vuejs.org/guide/component-custom-events.html#v-model-arguments --\x3e\n\n          \x3c!-- VUE 2 --\x3e\n          <VueNumberFormat\n            v-model=\"value\"\n            :options=\"{ precision: 3, prefix: '', suffix: ' kg', decimal: '', thousand: '', acceptNegative: false, isInteger: false  }\"\n          ></VueNumberFormat>\n\n          ...\n        </template>\n        <script>\n          import VueNumberFormat from 'vue-number-format'\n          export default {\n            components: { VueNumberFormat }\n          }\n        <\/script>\n      ")}},{title:"Default options",language:"js",code:function(){return S.a.normalize("\n        {\n          prefix: 'US$ ',\n          suffix: '',\n          decimal: ',',\n          thousand: '.',\n          precision: 2,\n          acceptNegative: true,\n          isInteger: false\n        }\n      ")}},{title:"Display format",language:"html",code:function(){return S.a.normalize("\n        {{vueNumberFormat(275, {})}}\n        \x3c!-- display US$275.00 --\x3e\n        \x3c!-- Available only within global instalation --\x3e\n        \x3c!-- use like a component method --\x3e\n        \x3c!-- Filters are removed from Vue 3.0 and no longer supported: https://v3.vuejs.org/guide/migration/filters.html--\x3e\n      ")},tips:"Available only within global instalation"},{title:"Display unformatted number",language:"html",code:function(){return S.a.normalize("\n        {{vueNumberUnformat('R$275,00', {})}}\n        \x3c!-- display 275 --\x3e\n        \x3c!-- Available only within global instalation --\x3e\n        \x3c!-- use like a component method --\x3e\n        \x3c!-- Filters are removed from Vue 3.0 and no longer supported: https://v3.vuejs.org/guide/migration/filters.html--\x3e\n      ")},tips:"Available only within global instalation"}],z={name:"App",components:{ExampleCard:F,InstalationCard:$},metaInfo:function(){var e="vue-number-format - A Vue.js 2 and 3 lightweight library to input and display format";return{title:e}},data:function(){return{examples:M,instalations:E}}};n("64be");z.render=f;var T=z,R=n("577a"),U=(n("fa97"),{class:"w-full flex flex-col items-end"}),L={ref:"copy",class:"bg-black text-center text-white p-2 text-xs -mb-12 focus:outline-none z-10"},_={key:0},H={key:1,class:"font-bold text-green"};function D(e,t,n,r,i,o){return Object(a["g"])(),Object(a["c"])("div",U,[Object(a["f"])("button",L,[i.isCopied?(Object(a["g"])(),Object(a["c"])("span",H,"copied ✓")):(Object(a["g"])(),Object(a["c"])("span",_,"copy"))],512),Object(a["f"])("pre",{class:["w-full p-4 bg-black mt-0",o.className],innerHTML:o.html},null,10,["innerHTML"])])}var G=n("c197"),q=n.n(G),J=(n("8009"),n("b311")),Y=n.n(J),B={name:"PrismComponent",props:["code","language"],computed:{className:function(){return"language-".concat(this.language)},html:function(){var e=q.a.languages[this.language];return q.a.highlight(this.code,e,this.language)}},data:function(){return{isCopied:!1,clipboard:null}},mounted:function(){var e=this;new Y.a(this.$refs.copy,{text:function(t){return e.isCopied=!0,setTimeout((function(){e.isCopied=!1}),2e3),e.code}})},methods:{}};n("be47");B.render=D;var K=B,Q=Object(a["b"])(T);Q.use(R["a"],{precision:2}),Q.component("Prism",K),Q.mount("#app")},"577a":function(e,t,n){"use strict";(function(e){var a=n("3bd2"),r=n("563b"),i=n.n(r),o=n("368c"),u=function e(t,n){if(!e.installed){e.installed=!0,t.component("VueNumberFormat",a["a"]);var r=Object.assign({},i.a,n);"undefined"!=typeof t.prototype?t.prototype.$vueNumberFormatOptions=r:t.config.globalProperties.$vueNumberFormatOptions=r,t.mixin({methods:{vueNumberFormat:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=Object.assign({},i.a,t);return Object(o["format"])(e,n)},vueNumberUnformat:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=Object.assign({},i.a,t);return Object(o["unformat"])(e,n)}}})}};Object.assign(a["a"],{install:u});var l=null;"undefined"!==typeof window?l=window.Vue:"undefined"!==typeof e&&(l=e.Vue),l&&l.use(a["a"]),t["a"]=a["a"]}).call(this,n("c8ba"))},"64be":function(e,t,n){"use strict";n("3068")},be47:function(e,t,n){"use strict";n("4ebf")}});
//# sourceMappingURL=app.07fd953b.js.map