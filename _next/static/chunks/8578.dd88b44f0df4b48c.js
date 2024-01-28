"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8578],{22831:function(r,l,a){a.d(l,{C:function(){return p}});var i=a(88426),o=a(12003),s=a(67294),c=a(56091);let u=(0,o.j)("",{variants:{color:{green:"bg-ui-tag-green-bg text-ui-tag-green-text [&_svg]:text-ui-tag-green-icon border-ui-tag-green-border",red:"bg-ui-tag-red-bg text-ui-tag-red-text [&_svg]:text-ui-tag-red-icon border-ui-tag-red-border",blue:"bg-ui-tag-blue-bg text-ui-tag-blue-text [&_svg]:text-ui-tag-blue-icon border-ui-tag-blue-border",orange:"bg-ui-tag-orange-bg text-ui-tag-orange-text [&_svg]:text-ui-tag-orange-icon border-ui-tag-orange-border",grey:"bg-ui-tag-neutral-bg text-ui-tag-neutral-text [&_svg]:text-ui-tag-neutral-icon border-ui-tag-neutral-border",purple:"bg-ui-tag-purple-bg text-ui-tag-purple-text [&_svg]:text-ui-tag-purple-icon border-ui-tag-purple-border"}},defaultVariants:{color:"grey"}}),d=(0,o.j)("inline-flex items-center gap-x-0.5 border",{variants:{size:{small:"txt-compact-xsmall-plus px-1.5",base:"txt-compact-small-plus px-2 py-0.5",large:"txt-compact-medium-plus px-2.5 py-1"},rounded:{base:"rounded-md",full:"rounded-full"}},defaultVariants:{size:"base",rounded:"base"}}),p=s.forwardRef(({className:r,size:l="base",rounded:a="base",color:o="grey",asChild:p=!1,...h},f)=>{let g=p?i.g7:"span";return s.createElement(g,{ref:f,className:(0,c.L)(u({color:o}),d({size:l,rounded:a}),r),...h})});p.displayName="Badge"},46026:function(r,l,a){a.d(l,{Z:function(){return atoms_Action}});var i=a(85893),o=a(51257),s=a(94184),c=a.n(s),u=a(65820),d=a(33993),p=a(21746),spinner=r=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r.iconSize,height:r.iconSize,stroke:r.iconFill,viewBox:"0 0 24 24",children:(0,i.jsxs)("g",{children:[(0,i.jsxs)("circle",{cx:12,cy:12,r:"9.5",fill:"none",strokeWidth:3,strokeLinecap:"round",children:[(0,i.jsx)("animate",{attributeName:"stroke-dasharray",dur:"1.5s",calcMode:"spline",values:"0 150;42 150;42 150;42 150",keyTimes:"0;0.475;0.95;1",keySplines:"0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",repeatCount:"indefinite"}),(0,i.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",calcMode:"spline",values:"0;-16;-59;-59",keyTimes:"0;0.475;0.95;1",keySplines:"0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",repeatCount:"indefinite"})]}),(0,i.jsx)("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",values:"0 12 12;360 12 12",repeatCount:"indefinite"})]})}),h=a(89262),f=a(51582),atoms_Action=r=>{let{url:l,loading:a=!1,label:s,tooltip:g="",className:x,icon:m,size:b="base",style:v="secondary",onClick:k,openInNewTab:y=!1,rounded:j="base",useWithoutLink:w=!1}=r,_=null==m?void 0:m.showIcon,M=(null==m?void 0:m.iconPosition)==="right",N=(null==m?void 0:m.iconPosition)==="left",ConditionalTooltip=l=>{let{children:a}=l;return g?(0,i.jsx)(p.Z,{"data-sb-field-path":r["data-sb-field-path"],tooltip:g,children:a}):a};if("pill"===v){let o=l?f.Z:"button";return(0,i.jsx)(ConditionalTooltip,{children:(0,i.jsxs)(o,{href:l,target:y?"_blank":"_self",rel:y?"noreferrer":"","data-sb-field-path":g?void 0:r["data-sb-field-path"],onClick:k,className:c()("flex","text-center","gap-1.5","items-center","justify-center","cursor-pointer",{"pointer-events-none":a},{"btn-base":"base"===b},{"btn-large":"large"===b},{"btn-xlarge":"xlarge"===b},{"btn-icon-only":_&&!s},{"btn-no-icon":!_},{"btn-icon-left":N&&s},{"btn-icon-right":M&&s},"transition-all",{"bg-transparent":!r.active},"hover:bg-theme-bg-subtle-pressed hover:shadow-none","leading-5","py-1.5","pl-2.5","pr-3",{"bg-theme-bg-base shadow-borders-base":r.active},{"flex-row-reverse":N},{"rounded-lg":"base"===j},{"rounded-full":"full"===j},x),children:[s&&(0,i.jsx)("span",{className:c()({"opacity-0":a}),"data-sb-field-path":".label",children:s}),_&&(0,i.jsx)(u.M,{children:(0,i.jsx)("span",{className:c()({"opacity-0":a}),children:(0,i.jsx)(d.E.div,{initial:{scale:0},animate:{scale:1},exit:{scale:0},children:(0,i.jsx)(h.Z,{"data-sb-field-path":".icon",...r.icon})},m.icon)})}),a&&(0,i.jsx)("span",{className:"absolute z-10","data-sb-field-path":".loading",children:(0,i.jsx)(spinner,{iconSize:16,iconFill:"currentColor"})})]})})}return(0,i.jsx)(ConditionalTooltip,{children:(0,i.jsx)(r=>{let{children:a}=r;return l&&!w?(0,i.jsx)(f.Z,{href:l,target:y?"_blank":"_self",rel:y?"noreferrer":"",className:x,children:a}):a},{children:(0,i.jsxs)(o.z,{"data-sb-field-path":r["data-sb-field-path"],variant:v,size:b,isLoading:a,onClick:k,className:c()({"flex-row-reverse":M},{"flex-row":N},x),children:[_&&(0,i.jsx)(u.M,{children:(0,i.jsx)("span",{className:c()({"opacity-0":a}),children:(0,i.jsx)(d.E.div,{initial:{scale:0},animate:{scale:1},exit:{scale:0},children:(0,i.jsx)(h.Z,{"data-sb-field-path":".icon",...r.icon})},m.icon)})}),s&&(0,i.jsx)("span",{"data-sb-field-path":".label",children:s})]})})})}},72211:function(r,l,a){var i=a(85893),o=a(22831),s=a(94184),c=a.n(s),u=a(67294),d=a(75795),p=a(89262),h=a(51582);let Wrapper=r=>{let{link:l,children:a}=r;return l?(0,i.jsx)(h.Z,{"data-sb-field-path":r["data-sb-field-path"],href:l.url,target:l.openInNewTab?"_blank":"_self",rel:l.openInNewTab?"noreferrer":"",...r,children:a}):(0,i.jsx)("div",{...r,children:a})};l.Z=r=>{let{label:l,link:a,icon:s,style:h,rounded:f="full",size:g="base",additionalClasses:x}=r,m=s&&s.showIcon,b=m&&"left"!==s.iconPosition,v=m&&"left"===s.iconPosition,k=["tag-orange","tag-blue","tag-neutral","tag-purple","tag-green"].includes(h),y=!k&&"rounded-full border border-theme-border-base h-6 flex items-center px-2 bg-theme-bg-subtle",j=(0,u.useMemo)(()=>{switch(h){case"tag-orange":return"orange";case"tag-blue":return"blue";case"tag-purple":return"purple";case"tag-green":return"green";default:return}},[h]);return k?(0,i.jsx)(Wrapper,{link:a,"data-sb-field-path":r["data-sb-field-path"],className:c()(x),children:(0,i.jsx)(o.C,{size:g,rounded:"full"===f?"full":"base",color:j,children:l&&(0,i.jsx)("span",{"data-sb-field-path":".label",children:l})})}):(0,i.jsxs)(Wrapper,{link:a,"data-sb-field-path":r["data-sb-field-path"],className:c()("transition-all",{"card-rest":!h},{"dark:card-rest-dark":!h},{"hover:card-hover":!h&&a},{"dark:hover:card-hover-dark":!h&&a},{"bg-white":!h},{"text-black":!h},{"dark:bg-dark-bg-base":!h},{"dark:text-dark-body-secondary":!h},{"h-8":!h},{"px-4":!h&&!m},{"pl-4 pr-1":!h&&b},{"pr-4 pl-1":!h&&v},{"text-sm leading-5":!h},{"rounded-full":"full"===f},{"rounded-lg":"lg"===f},"flex","gap-3","items-center",x),children:[s&&"right"!==s.iconPosition&&(0,i.jsx)(p.Z,{"data-sb-field-path":".icon",...r.icon,className:y}),l&&(0,i.jsx)("span",{"data-sb-field-path":".label",children:l}),a&&l&&(0,i.jsx)("div",{className:"bg-theme-border-strong dark:bg-dark-border-strong w-[1px] h-4"}),a&&(0,i.jsx)("span",{"data-sb-field-path":".link",className:c()((0,d.$)(a.style)),children:a.label}),s&&"right"===s.iconPosition&&(0,i.jsx)(p.Z,{"data-sb-field-path":".icon",...r.icon,className:y})]})}},62086:function(r,l,a){a.d(l,{C:function(){return i.Z},r:function(){return o.Z}});var i=a(72211),o=a(51582)},52135:function(r,l,a){a.r(l),a.d(l,{default:function(){return PageLayout}});var i=a(85893),o=a(94184),s=a.n(o),c=a(82083),u=a(59268),d=a(14454);function PageLayout(r){let{page:l,site:a}=r,o=(0,c.w)(l.baseLayout,a.baseLayout),p=l.sections||[];return(0,i.jsx)(o,{page:l,site:a,children:(0,i.jsx)("main",{id:"main",className:s()("flex-grow","sb-layout","sb-page-layout",{"-mt-20":l.headerOverlaysContent}),children:(0,i.jsxs)(d.Z,{children:[l.title&&(0,i.jsx)("h1",{className:"sr-only","data-sb-field-path":".title",children:l.title}),p.length>0&&(0,i.jsx)("div",{children:p.map((r,l)=>{let a=(0,u.X)(r.type);if(!a)throw Error("no component matching the page section's type: ".concat(r.type));return(0,i.jsx)(a,{renderAsSection:!0,...r,"data-sb-field-path":"sections.".concat(l)},l)})})]})})})}},21746:function(r,l,a){var i=a(85893),o=a(94184),s=a.n(o),c=a(67294);l.Z=r=>{let{children:l,tooltip:a,tooltipClass:o,className:u,align:d="top",...p}=r,[h,f]=(0,c.useState)(!1),g=(0,c.useRef)(null),[x,m]=(0,c.useState)(null);return((0,c.useEffect)(()=>{if(!g.current)return;let r=g.current.getBoundingClientRect().x;r+g.current.offsetWidth>window.outerWidth?m("right"):r-g.current.offsetWidth<0&&m("left")},[g]),a)?(0,i.jsxs)("span",{"data-sb-field-path":p["data-sb-field-path"],className:"relative",children:[(0,i.jsx)("span",{ref:g,className:s()({"pointer-events-none":!h},"z-10","absolute","flex","left-0","min-w-max",{"md:left-1/2":!x},{"md:-translate-x-1/2":!x},{"md:left-full":"right"===x},{"md:-translate-x-full":"right"===x},{"md:right-full":"left"===x},{"md:translate-x-full":"left"===x},{"-translate-y-1":"top"===d},{"translate-y-1":"bottom"===d},{"bottom-full":"top"===d},{"top-full":"bottom"===d},"bg-white","text-theme-text-subtle","text-labels-xsmall","font-medium","rounded-lg","tooltip-shadow","py-2","px-4","text-xs","leading-5","transition-all","whitespace-nowrap","origin-bottom",{"scale-75":!h},{"opacity-0":!h},{"opacity-100":h},{"scale-100":h},o),children:a}),(0,i.jsx)("span",{className:s()("cursor-pointer",u),onMouseLeave:()=>{f(!1)},onMouseEnter:()=>{f(!0)},onClick:()=>{f(!0)},children:l})]}):(0,i.jsx)(i.Fragment,{children:l})}},75795:function(r,l,a){a.d(l,{$:function(){return mapLinkStyle}});var i=a(94184),o=a.n(i);let mapLinkStyle=r=>o()("transition-all",{"text-theme-text-interactive dark:text-dark-text-interactive group-hover:text-theme-text-interactive-hover hover:text-theme-text-interactive-hover dark:hover:text-dark-text-interactive-hover dark:group-hover:text-dark-text-interactive-hover":!r},{"inline-flex text-theme-text-interactive dark:text-dark-text-interactive group-hover:text-theme-text-interactive-hover hover:text-theme-text-interactive-hover dark:hover:text-dark-text-interactive-hover dark:group-hover:text-dark-text-interactive-hover":"interactive"===r},{"text-blue-purple-gradient hover:brightness-110":"blue-purple-gradient"===r},{"text-theme-text-secondary hover:brightness-110":"text-secondary"===r})},35576:function(r,l,a){var i,o,s=a(67294);function n(){return(n=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])}return r}).apply(this,arguments)}let c=["children","options"],u=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((r,l)=>(r[l.toLowerCase()]=l,r),{for:"htmlFor"}),d={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"“"},p=["style","script"],h=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,g=/\n{2,}$/,x=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,m=/^ *> ?/gm,b=/^ {2,}\n/,v=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,k=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,j=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,w=/^(?:\n *)*\n/,_=/\r\n?/g,M=/^\[\^([^\]]+)](:.*)\n/,N=/^\[\^([^\]]+)]/,L=/\f/g,O=/^\s*?\[(x|\s)\]/,S=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,C=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,I=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,B=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,E=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,$=/^<!--[\s\S]*?(?:-->)/,A=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,T=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,z=/^\{.*\}$/,G=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,P=/^<([^ >]+@[^ >]+)>/,Z=/^<([^ >]+:\/[^ >]+)>/,F=/-([a-z])?/gi,W=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,R=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,D=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,X=/^\[([^\]]*)\] ?\[([^\]]*)\]/,V=/(\[|\])/g,Q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,J=/\t/g,K=/^ *\| */,Y=/(^ *\||\| *$)/g,ee=/ *$/,et=/^ *:-+: *$/,en=/^ *:-+ *$/,er=/^ *-+: *$/,el=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ea=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,ei=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,eo=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,es=/^\\([^0-9A-Za-z\s])/,ec=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,eu=/^\n+/,ed=/^([ \t]*)/,ep=/\\([^\\])/g,eh=/ *\n+$/,ef=/(?:^|\n)( *)$/,eg="(?:\\d+\\.)",ex="(?:[*+-])";function _t(r){return"( *)("+(1===r?eg:ex)+") +"}let em=_t(1),eb=_t(2);function st(r){return RegExp("^"+(1===r?em:eb))}let ev=st(1),ek=st(2);function dt(r){return RegExp("^"+(1===r?em:eb)+"[^\\n]*(?:\\n(?!\\1"+(1===r?eg:ex)+" )[^\\n]*)*(\\n|$)","gm")}let ey=dt(1),eH=dt(2);function gt(r){let l=1===r?eg:ex;return RegExp("^( *)("+l+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+l+" (?!"+l+" ))\\n*|\\s*\\n*$)")}let ej=gt(1),ew=gt(2);function kt(r,l){let a=1===l,i=a?ej:ew,s=a?ey:eH,c=a?ev:ek;return{t(r,l,a){let o=ef.exec(a);return o&&(l.o||!l._&&!l.u)?i.exec(r=o[1]+r):null},i:o.HIGH,l(r,l,i){let o=a?+r[2]:void 0,u=r[0].replace(g,"\n").match(s),d=!1;return{p:u.map(function(r,a){let o;let s=c.exec(r)[0].length,p=RegExp("^ {1,"+s+"}","gm"),h=r.replace(p,"").replace(c,""),f=a===u.length-1,g=-1!==h.indexOf("\n\n")||f&&d;d=g;let x=i._,m=i.o;i.o=!0,g?(i._=!1,o=h.replace(eh,"\n\n")):(i._=!0,o=h.replace(eh,""));let b=l(o,i);return i._=x,i.o=m,b}),m:a,g:o}},h:(l,a,i)=>r(l.m?"ol":"ul",{key:i.k,start:l.g},l.p.map(function(l,o){return r("li",{key:o},a(l,i))}))}}let e_=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eM=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eN=[x,k,y,S,I,C,$,W,ey,ej,eH,ew],eL=[...eN,/^[^\n]+(?:  \n|\n{2,})/,B,T];function St(r){return r.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function zt(r){return er.test(r)?"right":et.test(r)?"center":en.test(r)?"left":null}function wt(r,l,a){let i=a.$;a.$=!0;let o=l(r.trim(),a);a.$=i;let s=[[]];return o.forEach(function(r,l){"tableSeparator"===r.type?0!==l&&l!==o.length-1&&s.push([]):("text"!==r.type||null!=o[l+1]&&"tableSeparator"!==o[l+1].type||(r.v=r.v.replace(ee,"")),s[s.length-1].push(r))}),s}function At(r,l,a){a._=!0;let i=wt(r[1],l,a),o=r[2].replace(Y,"").split("|").map(zt),s=r[3].trim().split("\n").map(function(r){return wt(r,l,a)});return a._=!1,{S:o,A:s,L:i,type:"table"}}function Et(r,l){return null==r.S[l]?{}:{textAlign:r.S[l]}}function Lt(r){return function(l,a){return a._?r.exec(l):null}}function Mt(r){return function(l,a){return a._||a.u?r.exec(l):null}}function Ot(r){return function(l,a){return a._||a.u?null:r.exec(l)}}function It(r){return function(l){return r.exec(l)}}function jt(r,l,a){if(l._||l.u||a&&!a.endsWith("\n"))return null;let i="";r.split("\n").every(r=>!eN.some(l=>l.test(r))&&(i+=r+"\n",r.trim()));let o=i.trimEnd();return""==o?null:[i,o]}function Bt(r){try{if(decodeURIComponent(r).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(r){return null}return r}function Rt(r){return r.replace(ep,"$1")}function Tt(r,l,a){let i=a._||!1,o=a.u||!1;a._=!0,a.u=!0;let s=r(l,a);return a._=i,a.u=o,s}function Dt(r,l,a){return a._=!1,r(l,a)}let Ft=(r,l,a)=>({v:Tt(l,r[1],a)});function Nt(){return{}}function Pt(){return null}function Gt(r,l,a){let i=r,o=l.split(".");for(;o.length&&void 0!==(i=i[o[0]]);)o.shift();return i||a}(i=o||(o={}))[i.MAX=0]="MAX",i[i.HIGH=1]="HIGH",i[i.MED=2]="MED",i[i.LOW=3]="LOW",i[i.MIN=4]="MIN",l.Z=r=>{let{children:l,options:a}=r,i=function(r,l){if(null==r)return{};var a,i,o={},s=Object.keys(r);for(i=0;i<s.length;i++)l.indexOf(a=s[i])>=0||(o[a]=r[a]);return o}(r,c);return s.cloneElement(function(r,l={}){let a;l.overrides=l.overrides||{},l.slugify=l.slugify||St,l.namedCodesToUnicode=l.namedCodesToUnicode?n({},d,l.namedCodesToUnicode):d;let i=l.createElement||s.createElement;function H(r,a,...o){let s=Gt(l.overrides,`${r}.props`,{});return i(function(r,l){let a=Gt(l,r);return a?"function"==typeof a||"object"==typeof a&&"render"in a?a:Gt(l,`${r}.component`,r):r}(r,l.overrides),n({},a,s,{className:function(...r){return r.filter(Boolean).join(" ")}(null==a?void 0:a.className,s.className)||void 0}),...o)}function q(r){let a,i=!1;l.forceInline?i=!0:l.forceBlock||(i=!1===Q.test(r));let o=ct(ee(i?r:`${r.trimEnd().replace(eu,"")}

`,{_:i}));for(;"string"==typeof o[o.length-1]&&!o[o.length-1].trim();)o.pop();if(null===l.wrapper)return o;let c=l.wrapper||(i?"span":"div");if(o.length>1||l.forceWrapper)a=o;else{if(1===o.length)return"string"==typeof(a=o[0])?H("span",{key:"outer"},a):a;a=null}return s.createElement(c,{key:"outer"},a)}function U(r){let l=r.match(h);return l?l.reduce(function(r,l,a){let i=l.indexOf("=");if(-1!==i){var o,c;let d=(-1!==(o=l.slice(0,i)).indexOf("-")&&null===o.match(A)&&(o=o.replace(F,function(r,l){return l.toUpperCase()})),o).trim(),p=function(r){let l=r[0];return('"'===l||"'"===l)&&r.length>=2&&r[r.length-1]===l?r.slice(1,-1):r}(l.slice(i+1).trim()),h=u[d]||d,f=r[h]=(c=p,"style"===d?c.split(/;\s?/).reduce(function(r,l){let a=l.slice(0,l.indexOf(":"));return r[a.replace(/(-[a-z])/g,r=>r[1].toUpperCase())]=l.slice(a.length+1).trim(),r},{}):"href"===d?Bt(c):(c.match(z)&&(c=c.slice(1,c.length-1)),"true"===c||"false"!==c&&c));"string"==typeof f&&(B.test(f)||T.test(f))&&(r[h]=s.cloneElement(q(f.trim()),{key:a}))}else"style"!==l&&(r[u[l]||l]=!0);return r},{}):null}let c=[],g={},Y={blockQuote:{t:Ot(x),i:o.HIGH,l:(r,l,a)=>({v:l(r[0].replace(m,""),a)}),h:(r,l,a)=>H("blockquote",{key:a.k},l(r.v,a))},breakLine:{t:It(b),i:o.HIGH,l:Nt,h:(r,l,a)=>H("br",{key:a.k})},breakThematic:{t:Ot(v),i:o.HIGH,l:Nt,h:(r,l,a)=>H("hr",{key:a.k})},codeBlock:{t:Ot(y),i:o.MAX,l:r=>({v:r[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}),h:(r,l,a)=>H("pre",{key:a.k},H("code",n({},r.O,{className:r.M?`lang-${r.M}`:""}),r.v))},codeFenced:{t:Ot(k),i:o.MAX,l:r=>({O:U(r[3]||""),v:r[4],M:r[2]||void 0,type:"codeBlock"})},codeInline:{t:Mt(j),i:o.LOW,l:r=>({v:r[2]}),h:(r,l,a)=>H("code",{key:a.k},r.v)},footnote:{t:Ot(M),i:o.MAX,l:r=>(c.push({I:r[2],j:r[1]}),{}),h:Pt},footnoteReference:{t:Lt(N),i:o.HIGH,l:r=>({v:r[1],B:`#${l.slugify(r[1])}`}),h:(r,l,a)=>H("a",{key:a.k,href:Bt(r.B)},H("sup",{key:a.k},r.v))},gfmTask:{t:Lt(O),i:o.HIGH,l:r=>({R:"x"===r[1].toLowerCase()}),h:(r,l,a)=>H("input",{checked:r.R,key:a.k,readOnly:!0,type:"checkbox"})},heading:{t:Ot(l.enforceAtxHeadings?C:S),i:o.HIGH,l:(r,a,i)=>({v:Tt(a,r[2],i),T:l.slugify(r[2]),C:r[1].length}),h:(r,l,a)=>H(`h${r.C}`,{id:r.T,key:a.k},l(r.v,a))},headingSetext:{t:Ot(I),i:o.MAX,l:(r,l,a)=>({v:Tt(l,r[1],a),C:"="===r[2]?1:2,type:"heading"})},htmlComment:{t:It($),i:o.HIGH,l:()=>({}),h:Pt},image:{t:Mt(eM),i:o.HIGH,l:r=>({D:r[1],B:Rt(r[2]),F:r[3]}),h:(r,l,a)=>H("img",{key:a.k,alt:r.D||void 0,title:r.F||void 0,src:Bt(r.B)})},link:{t:Lt(e_),i:o.LOW,l:(r,l,a)=>({v:function(r,l,a){let i=a._||!1,o=a.u||!1;a._=!1,a.u=!0;let s=r(l,a);return a._=i,a.u=o,s}(l,r[1],a),B:Rt(r[2]),F:r[3]}),h:(r,l,a)=>H("a",{key:a.k,href:Bt(r.B),title:r.F},l(r.v,a))},linkAngleBraceStyleDetector:{t:Lt(Z),i:o.MAX,l:r=>({v:[{v:r[1],type:"text"}],B:r[1],type:"link"})},linkBareUrlDetector:{t:(r,l)=>l.N?null:Lt(G)(r,l),i:o.MAX,l:r=>({v:[{v:r[1],type:"text"}],B:r[1],F:void 0,type:"link"})},linkMailtoDetector:{t:Lt(P),i:o.MAX,l(r){let l=r[1],a=r[1];return f.test(a)||(a="mailto:"+a),{v:[{v:l.replace("mailto:",""),type:"text"}],B:a,type:"link"}}},orderedList:kt(H,1),unorderedList:kt(H,2),newlineCoalescer:{t:Ot(w),i:o.LOW,l:Nt,h:()=>"\n"},paragraph:{t:jt,i:o.LOW,l:Ft,h:(r,l,a)=>H("p",{key:a.k},l(r.v,a))},ref:{t:Lt(R),i:o.MAX,l:r=>(g[r[1]]={B:r[2],F:r[4]},{}),h:Pt},refImage:{t:Mt(D),i:o.MAX,l:r=>({D:r[1]||void 0,P:r[2]}),h:(r,l,a)=>H("img",{key:a.k,alt:r.D,src:Bt(g[r.P].B),title:g[r.P].F})},refLink:{t:Lt(X),i:o.MAX,l:(r,l,a)=>({v:l(r[1],a),Z:l(r[0].replace(V,"\\$1"),a),P:r[2]}),h:(r,l,a)=>g[r.P]?H("a",{key:a.k,href:Bt(g[r.P].B),title:g[r.P].F},l(r.v,a)):H("span",{key:a.k},l(r.Z,a))},table:{t:Ot(W),i:o.HIGH,l:At,h:(r,l,a)=>H("table",{key:a.k},H("thead",null,H("tr",null,r.L.map(function(i,o){return H("th",{key:o,style:Et(r,o)},l(i,a))}))),H("tbody",null,r.A.map(function(i,o){return H("tr",{key:o},i.map(function(i,o){return H("td",{key:o,style:Et(r,o)},l(i,a))}))})))},tableSeparator:{t:function(r,l){return l.$?(l._=!0,K.exec(r)):null},i:o.HIGH,l:function(){return{type:"tableSeparator"}},h:()=>" | "},text:{t:It(ec),i:o.MIN,l:r=>({v:r[0].replace(E,(r,a)=>l.namedCodesToUnicode[a]?l.namedCodesToUnicode[a]:r)}),h:r=>r.v},textBolded:{t:Mt(el),i:o.MED,l:(r,l,a)=>({v:l(r[2],a)}),h:(r,l,a)=>H("strong",{key:a.k},l(r.v,a))},textEmphasized:{t:Mt(ea),i:o.LOW,l:(r,l,a)=>({v:l(r[2],a)}),h:(r,l,a)=>H("em",{key:a.k},l(r.v,a))},textEscaped:{t:Mt(es),i:o.HIGH,l:r=>({v:r[1],type:"text"})},textMarked:{t:Mt(ei),i:o.LOW,l:Ft,h:(r,l,a)=>H("mark",{key:a.k},l(r.v,a))},textStrikethroughed:{t:Mt(eo),i:o.LOW,l:Ft,h:(r,l,a)=>H("del",{key:a.k},l(r.v,a))}};!0!==l.disableParsingRawHTML&&(Y.htmlBlock={t:It(B),i:o.HIGH,l(r,l,a){let[,i]=r[3].match(ed),o=RegExp(`^${i}`,"gm"),s=r[3].replace(o,""),c=eL.some(r=>r.test(s))?Dt:Tt,u=r[1].toLowerCase(),d=-1!==p.indexOf(u);a.N=a.N||"a"===u;let h=d?r[3]:c(l,s,a);return a.N=!1,{O:U(r[2]),v:h,G:d,H:d?u:r[1]}},h:(r,l,a)=>H(r.H,n({key:a.k},r.O),r.G?r.v:l(r.v,a))},Y.htmlSelfClosing={t:It(T),i:o.HIGH,l:r=>({O:U(r[2]||""),H:r[1]}),h:(r,l,a)=>H(r.H,n({},r.O,{key:a.k}))});let ee=((a=Object.keys(Y)).sort(function(r,l){let a=Y[r].i,i=Y[l].i;return a!==i?a-i:r<l?-1:1}),function(r,l){return function e(r,l){let i=[],o="";for(;r;){let s=0;for(;s<a.length;){let c=a[s],u=Y[c],d=u.t(r,l,o);if(d){let a=d[0];r=r.substring(a.length);let s=u.l(d,e,l);null==s.type&&(s.type=c),i.push(s),o=a;break}s++}}return i}(r.replace(_,"\n").replace(L,"").replace(J,"    "),l)}),ct=function t(r,l={}){var a;if(Array.isArray(r)){let a=l.k,i=[],o=!1;for(let a=0;a<r.length;a++){l.k=a;let s=t(r[a],l),c="string"==typeof s;c&&o?i[i.length-1]+=s:null!==s&&i.push(s),o=c}return l.k=a,i}return a=t,Y[r.type].h(r,a,l)},et=q(r);return c.length?H("div",null,et,H("footer",{key:"footer"},c.map(function(r){return H("div",{id:l.slugify(r.j),key:r.j},r.j,ct(ee(r.I,{_:!0})))}))):et}(l,a),i)}}}]);