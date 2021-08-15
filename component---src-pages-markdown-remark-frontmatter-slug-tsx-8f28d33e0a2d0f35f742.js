(self.webpackChunk_rmariuzzo_mariuzzo_com=self.webpackChunk_rmariuzzo_mariuzzo_com||[]).push([[141],{1554:function(t,e,n){"use strict";function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}n.d(e,{Z:function(){return r}})},4153:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(5235),a=n(1554);function o(t){(0,a.Z)(1,arguments);var e=(0,r.Z)(t);return!isNaN(e)}function i(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function s(t){if(arguments.length<1)throw new TypeError("1 arguments required, but only ".concat(arguments.length," present"));var e=(0,r.Z)(t);if(!o(e))throw new RangeError("Invalid time value");var n=u[e.getUTCDay()],a=i(e.getUTCDate(),2),s=l[e.getUTCMonth()],c=e.getUTCFullYear(),d=i(e.getUTCHours(),2),m=i(e.getUTCMinutes(),2),g=i(e.getUTCSeconds(),2);return"".concat(n,", ").concat(a," ").concat(s," ").concat(c," ").concat(d,":").concat(m,":").concat(g," GMT")}},3638:function(t,e,n){"use strict";function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,{Z:function(){return c}});var a=n(1554),o=36e5,i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},u=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(t,e){(0,a.Z)(1,arguments);var n=e||{},o=null==n.additionalDigits?2:r(n.additionalDigits);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var i,u=d(t);if(u.date){var l=m(u.date,o);i=g(l.restDateString,l.year)}if(isNaN(i)||!i)return new Date(NaN);var s,c=i.getTime(),f=0;if(u.time&&(f=p(u.time),isNaN(f)||null===f))return new Date(NaN);if(!u.timezone){var y=new Date(c+f),h=new Date(0);return h.setFullYear(y.getUTCFullYear(),y.getUTCMonth(),y.getUTCDate()),h.setHours(y.getUTCHours(),y.getUTCMinutes(),y.getUTCSeconds(),y.getUTCMilliseconds()),h}return s=w(u.timezone),isNaN(s)?new Date(NaN):new Date(c+f+s)}function d(t){var e,n={},r=t.split(i.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],i.timeZoneDelimiter.test(n.date)&&(n.date=t.split(i.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=i.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function m(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),o=r[2]&&parseInt(r[2]);return{year:null==o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}function g(t,e){if(null===e)return null;var n=t.match(u);if(!n)return null;var r=!!n[4],a=f(n[1]),o=f(n[2])-1,i=f(n[3]),l=f(n[4]),s=f(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,l,s)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=r.getUTCDay()||7,o=7*(e-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+o),r}(e,l,s):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(h[e]||(v(t)?29:28))}(e,o,i)&&function(t,e){return e>=1&&e<=(v(t)?366:365)}(e,a)?(c.setUTCFullYear(e,o,Math.max(a,i)),c):new Date(NaN)}function f(t){return t?parseInt(t):1}function p(t){var e=t.match(l);if(!e)return null;var n=y(e[1]),r=y(e[2]),a=y(e[3]);return function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*o+6e4*r+1e3*a:NaN}function y(t){return t&&parseFloat(t.replace(",","."))||0}function w(t){if("Z"===t)return 0;var e=t.match(s);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*o+6e4*a):NaN}var h=[31,null,31,30,31,30,31,31,30,31,30,31];function v(t){return t%400==0||t%4==0&&t%100}},5235:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(1554);function a(t){(0,r.Z)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},2648:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Z}});var r=n(9756),a=n(7294),o=n(3638),i=n(4153),u=n(9),l=n(105),s=n(8028),c=n(2763),d=n(2603),m=u.ZP.div.withConfig({displayName:"PostLayoutstyles__Container",componentId:"sc-1qwrpnu-0"})([""]),g=u.ZP.div.withConfig({displayName:"PostLayoutstyles__PostCategory",componentId:"sc-1qwrpnu-1"})(["display:block;color:",";text-align:center;margin:1rem 0;font-size:","rem;font-weight:",";","{font-size:","rem;margin:2rem 0;}","{margin:3rem 0;}"],d.D.color.secondary,d.D.fontSize.l3,d.D.fontWeight.light,(0,l.up)("tablet"),d.D.fontSize.l2,(0,l.up)("desktop")),f=(0,u.ZP)(s.V1).withConfig({displayName:"PostLayoutstyles__PostTitle",componentId:"sc-1qwrpnu-2"})([""]),p=u.ZP.small.withConfig({displayName:"PostLayoutstyles__PostDate",componentId:"sc-1qwrpnu-3"})(["display:block;text-align:center;color:",";"],d.D.color.copyLight),y=(0,u.ZP)(s.al).attrs({as:"article"}).withConfig({displayName:"PostLayoutstyles__PostContents",componentId:"sc-1qwrpnu-4"})([""]),w=u.ZP.footer.withConfig({displayName:"PostLayoutstyles__PostFooter",componentId:"sc-1qwrpnu-5"})(["display:grid;grid-template-columns:max-content 1fr max-content;margin-top:2rem;font-size:","rem;"],d.D.fontSize.copy1),h=(0,u.iv)(["text-decoration:none;font-weight:",";color:",";&:hover > span{opacity:1;}> span{transition:",";background-color:",";color:",";display:inline-block;padding:0.5em;border-radius:1px;opacity:0.5;}"],d.D.fontWeight.black,d.D.color.primary,d.D.transition.default,d.D.color.primary,d.D.color.background),v=(0,u.ZP)(c.r).withConfig({displayName:"PostLayoutstyles__PreviousPostLink",componentId:"sc-1qwrpnu-6"})(["",";grid-column:1;> span{margin-right:0.3em;}"],h),D=(0,u.ZP)(c.r).withConfig({displayName:"PostLayoutstyles__NextPostLink",componentId:"sc-1qwrpnu-7"})(["",";grid-column:3;> span{margin-left:0.3em;}"],h),N=n(3673),C=["title","date","category","contents","previousSlug","nextSlug"],T=function(t){var e=t.title,n=t.date,o=t.category,u=t.contents,l=t.previousSlug,s=t.nextSlug,c=(0,r.Z)(t,C);return a.createElement(N.Z,c,a.createElement(m,null,a.createElement(g,null,o),a.createElement(f,null,e),a.createElement(p,null,(0,i.Z)(n)),a.createElement(y,{dangerouslySetInnerHTML:{__html:u}}),a.createElement(w,null,l&&a.createElement(v,{to:l},a.createElement("span",null,"←"),"Previous"),s&&a.createElement(D,{to:s},"Next",a.createElement("span",null,"→")))))},b=["data"],Z=function(t){var e=t.data,n=(0,r.Z)(t,b),i=e.markdownRemark,u=e.allMarkdownRemark,l=i.frontmatter,s=i.html,c=l.slug.split("/")[1],d=u.edges.map((function(t){return t.node.frontmatter.slug})).filter((function(t){return t.split("/")[1]===c})),m=d[d.indexOf(l.slug)-1],g=d[d.indexOf(l.slug)+1],f="cancer"===c?"Cancer":"code"===c?"Code":"Secret";return a.createElement(T,Object.assign({},n,{title:l.title,date:(0,o.Z)(l.date),category:f,contents:s,previousSlug:m,nextSlug:g}))}}}]);
//# sourceMappingURL=component---src-pages-markdown-remark-frontmatter-slug-tsx-8f28d33e0a2d0f35f742.js.map