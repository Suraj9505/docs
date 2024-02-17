"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[228],{3471:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var l=s(4848),r=s(8453);const i={sidebar_position:2},a="Installation",t={id:"coinex/laravel/installation/development",title:"Installation",description:"1. Create Database",source:"@site/docs/coinex/laravel/installation/development.md",sourceDirName:"coinex/laravel/installation",slug:"/coinex/laravel/installation/development",permalink:"/docs/build/docs/coinex/laravel/installation/development",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"coinexSidebar",previous:{title:"Requirement",permalink:"/docs/build/docs/coinex/laravel/installation/requirement"},next:{title:"File Structure",permalink:"/docs/build/docs/coinex/laravel/file_structure"}},c={},d=[{value:"Laravel",id:"laravel",level:3}];function o(n){const e={admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:"Create Database"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:"Upload the Codes in below directory based on your server"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"In Linux"})})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:"Path: var/www/html/"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.em,{children:[(0,l.jsx)(e.strong,{children:"In cPanel"}),":"]})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:"Inside File manager -> Path: public_html/"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:"For database settings, open the .env file with a text editor and set your database settings."})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:".env is a hidden file, you can see it by opening directory to a text editor."})}),"\n",(0,l.jsxs)(e.ol,{start:"4",children:["\n",(0,l.jsxs)(e.li,{children:["Link your storage folder to public Run in terminal or CMD: php artisan storage",":link"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Steps to follow for getting started with the template:"})}),"\n",(0,l.jsx)(e.h3,{id:"laravel",children:"Laravel"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.em,{children:"Start command prompt window or terminal and change directory laravel"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"cd laravel\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.em,{children:"For installing vendor Run in terminal or CMD:"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"composer install\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"3",children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.em,{children:"Copy .env.example to .env file"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"4",children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.em,{children:"For generating key Run in terminal or CMD:"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"php artisan key:generate\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"5",children:["\n",(0,l.jsxs)(e.li,{children:['Create database with name "',(0,l.jsx)(e.strong,{children:"Your Database Name"}),'" in your sqlyog,laragon,xampp,wamp']}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.em,{children:"Open and edit the /.env file and provide your server details:"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-dart",children:'DB_CONNECTION="mysql"\nDB_HOST="127.0.0.1"\nDB_PORT="3306"\nDB_DATABASE="YOUR DATABASE NAME"\nDB_USERNAME="YOUR USERNAME"\nDB_PASSWORD="YOUR PASSWORD"\n\n'})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.em,{children:"Then run the below commands"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"php artisan migrate\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"php artisan db:seed\n"})}),"\n",(0,l.jsx)(e.p,{children:"OR"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"php artisan migrate:fresh --seed\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"6",children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.em,{children:"For installing node_modules Run in terminal or CMD:"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"7",children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.em,{children:"For building css and js Run in terminal or CMD:"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,l.jsx)(e.p,{children:"OR"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,l.jsx)(e.p,{children:"OR"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"npm run watch\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"8",children:["\n",(0,l.jsx)(e.li,{children:"To run project"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"php artisan serve\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>t});var l=s(6540);const r={},i=l.createContext(r);function a(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);