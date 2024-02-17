"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2031],{3454:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>t});var i=s(4848),o=s(8453);const r={sidebar_position:10,title:"Customization"},l=void 0,a={id:"coinex/react/customization",title:"Customization",description:"Theme Color",source:"@site/docs/coinex/react/customization.md",sourceDirName:"coinex/react",slug:"/coinex/react/customization",permalink:"/docs/build/docs/coinex/react/customization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Customization"},sidebar:"coinexSidebar",previous:{title:"File Structure",permalink:"/docs/build/docs/coinex/react/file_structure"},next:{title:"Plugins",permalink:"/docs/build/docs/category/plugins-14"}},c={},t=[{value:"Theme Color",id:"theme-color",level:3},{value:"For Favicon icon",id:"for-favicon-icon",level:3},{value:"For Page Loading Transitions",id:"for-page-loading-transitions",level:3},{value:"For Logo",id:"for-logo",level:3},{value:"For Changing Fonts",id:"for-changing-fonts",level:3}];function d(e){const n={code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.h3,{id:"theme-color",children:"Theme Color"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Steps to follow when configuring theme colors with the template:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Scss variables in"})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"scss/_variables.scss"})})})," ",(0,i.jsx)(n.em,{children:"file"}),"."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Additional customization will be performed in the variable file."})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Here are the colors utilized for gulp, scss, and hbs. Adjust them as per your requirements."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$theme-colors: (\n    \u200b$primary:       #0d6efd;\n    \u200b$secondary:     #6c757d;\n    \u200b$success:       #198754;\n    \u200b$info:          #0dcaf0;\n    \u200b$warning:       #ffc107;\n    \u200b$danger:        #dc3545;\n    \u200b$light:         #f8f9fa;\n    \u200b$dark:          #212529;\n    \u200b);\n"})}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.h3,{id:"for-favicon-icon",children:"For Favicon icon"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Favicon is an icon associated with the URL that is displayed at various places, such as in a browser\u2019s address bar or next to the site name in a bookmark list."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"You can add a Favicon to your Website using the following code:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<link rel="icon" href="<%= BASE_URL %>favicon.ico">\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Replace favicon image or rename favicon icon name. or go to ",(0,i.jsx)(n.code,{children:"public/img/icon"})," file and change."]}),"\n"]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.h3,{id:"for-page-loading-transitions",children:"For Page Loading Transitions"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Page Loading Transitions are enabled by default. If you wish to disable the page loading transition you can simply remove loader from respective layout in layouts folder"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"OR"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"simply remove loader component folder inside components"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div id="loading">\n    <div id="loading-center">\n    </div>\n</div>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"In react, loader changes in 2 different ways"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Replace loader image."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.code,{children:"assets/scss/backend/layouts/_dark.scss"})," and add or change path set with images."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.h3,{id:"for-logo",children:"For Logo"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["The Logo Container can be found in the HeaderStyle in ",(0,i.jsx)(n.code,{children:"components/patials/backend/HeaderStyle"})," - ",(0,i.jsx)(n.strong,{children:"#header"}),'. Replace "',(0,i.jsx)(n.strong,{children:"logo.png"}),'" with your own logo image URL.']})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<Link to="/" className="header-logo">\n    <img src={logo} className="img-fluid rounded-normal" alt="logo" />\n</Link>\n'})}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.h3,{id:"for-changing-fonts",children:"For Changing Fonts"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"In react version change with scss file."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.code,{children:"src/assets/scss/helper/_fonts.scss"})," and change google fonts"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap")\n@import ("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600&display=swap")\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.code,{children:"src/assets/scss/_variable.scss"})," and change font family variable"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"$font-family-title: 'Heebo', sans-serif;\n$font-family-base: 'Poppins', sans-serif;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(6540);const o={},r=i.createContext(o);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);