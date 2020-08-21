(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{65:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return u})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return l}));var n=o(2),r=o(6),a=(o(0),o(74)),u={id:"ui-components",title:"UI Components"},i={unversionedId:"ui-components",id:"ui-components",isDocsHomePage:!1,title:"UI Components",description:"emulators-ui is a set of components that used to create js-dos player. You can use them one by one. To use emulators-ui components, you need to import emulators-ui.js.",source:"@site/docs/ui-components.md",permalink:"/v7/build/docs/ui-components",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/ui-components.md",sidebar:"someSidebar",previous:{title:"Command Interface (CI)",permalink:"/v7/build/docs/command-interface"},next:{title:"Digger",permalink:"/v7/build/docs/ui-digger"}},c=[{value:"emulatorsUi.network.resolveBundle",id:"emulatorsuinetworkresolvebundle",children:[]},{value:"emulatrosUi.sound",id:"emulatrosuisound",children:[]},{value:"emulatorsUi.controls.domToKeyCode",id:"emulatorsuicontrolsdomtokeycode",children:[]}],s={rightToc:c};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"emulators-ui")," is a set of components that used to create js-dos player. You can use them one by one. To use ",Object(a.b)("inlineCode",{parentName:"p"},"emulators-ui")," components, you need to import ",Object(a.b)("inlineCode",{parentName:"p"},"emulators-ui.js"),"."),Object(a.b)("p",null,"Package provides following components:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="https://raw.githubusercontent.com/caiiiycuk/js-dos/emulators-ui/src/emulators-ui.ts"',title:'"https://raw.githubusercontent.com/caiiiycuk/js-dos/emulators-ui/src/emulators-ui.ts"'}),"{}\n")),Object(a.b)("h2",{id:"emulatorsuinetworkresolvebundle"},"emulatorsUi.network.resolveBundle"),Object(a.b)("p",null,"Abstraction over XHR to download bundles by url"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const bundle = await emulatorsUi.network.resolveBundle(<url>);\n")),Object(a.b)("h2",{id:"emulatrosuisound"},"emulatrosUi.sound"),Object(a.b)("p",null,"Default audio processor, it will play sound using AudioNode"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"emulatorsUi.sound.audioNode(<command-interface>);\n")),Object(a.b)("h2",{id:"emulatorsuicontrolsdomtokeycode"},"emulatorsUi.controls.domToKeyCode"),Object(a.b)("p",null,"This function transfrom DOM keyCode to jsdos keyCode."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const jsdosKeyCode = emulatorsUi.controls.domToKeyCode(<dom-keycode>);\n")))}l.isMDXComponent=!0},74:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(o),m=n,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return o?r.a.createElement(b,i(i({ref:t},s),{},{components:o})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,u=new Array(a);u[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var s=2;s<a;s++)u[s]=o[s];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);