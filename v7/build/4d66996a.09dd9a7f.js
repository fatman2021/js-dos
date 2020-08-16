(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(10),o=(r(0),r(155)),s={id:"releases",title:"Releases"},i={id:"releases",isDocsHomePage:!1,title:"Releases",description:"There is no stable releases of js-dos 7. However, latest version always available in npm repository:",source:"@site/docs/releases.md",permalink:"/v7/build/docs/releases",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/releases.md",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/v7/build/docs/"},next:{title:"Backward compability",permalink:"/v7/build/docs/backward-compability"}},l=[],c={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There is no stable releases of js-dos 7. However, latest version always available in npm repository: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"emulators - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/emulators"}),"npm package")),Object(o.b)("li",{parentName:"ul"},"emulators-ui - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/emulators-ui"}),"npm package")),Object(o.b)("li",{parentName:"ul"},"js-dos - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/js-dos/v/beta"}),"npm package"))),Object(o.b)("p",null,"If you use npm or yarn, you can obtain latest version by using ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add"),".\nAll files needed to run emulation are placed in ",Object(o.b)("inlineCode",{parentName:"p"},"dist")," folder of packages."),Object(o.b)("p",null,"You should specify ",Object(o.b)("inlineCode",{parentName:"p"},"pathPrefix")," variable if ",Object(o.b)("inlineCode",{parentName:"p"},"emulators.js")," included from non-root path, like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<link rel="stylesheet" href="https://js-dos.com/v7/build/releases/latest/js-dos/js-dos.css">\n<script src="https://js-dos.com/v7/build/releases/latest/js-dos/js-dos.js"/>\n<script>\n  emulators.pathPrefix = "/v7/build/releases/latest/js-dos/";\n  Dos(document.getElementById("root")).run("some.jsdos");\n<\/script>\n')))}p.isMDXComponent=!0},155:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,i(i({ref:t},c),{},{components:r})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);