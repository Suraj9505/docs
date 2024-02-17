"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7338],{7945:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),o=t(8453);const r={sidebar_position:19},i="File Structure",a={id:"coinex/laravel/file_structure",title:"File Structure",description:"",source:"@site/docs/coinex/laravel/file_structure.md",sourceDirName:"coinex/laravel",slug:"/coinex/laravel/file_structure",permalink:"/docs/build/docs/coinex/laravel/file_structure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"coinexSidebar",previous:{title:"Installation",permalink:"/docs/build/docs/coinex/laravel/installation/development"},next:{title:"Customization",permalink:"/docs/build/docs/coinex/laravel/customization"}},c={},l=[];function u(n){const e={code:"code",h1:"h1",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"file-structure",children:"File Structure"}),"\n",(0,s.jsx)("div",{className:"mb-5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"coinex-laravel\n    \ud83d\udcc2 laravel\n    \u251c\u2500 \ud83d\udcc2 app\n    |  \u251c\u2500 \ud83d\udcc2 Console\n    |  \u251c\u2500 \ud83d\udcc2 Exceptions\n    |  \u251c\u2500 \ud83d\udcc2 Helpers\n    |  \u251c\u2500 \ud83d\udcc2 Http\n    |  \u251c\u2500 \ud83d\udcc2 Models\n    |  \u251c\u2500 \ud83d\udcc2 Providers\n    |  \u2514\u2500 \ud83d\udcc2 View\n    \u251c\u2500 \ud83d\udcc2 bootstrap\n    |  \u2514\u2500 \ud83d\udcc2 cache\n    \u251c\u2500 \ud83d\udcc2 config\n    \u251c\u2500 \ud83d\udcc2 database\n    |  \u251c\u2500 \ud83d\udcc2 factories\n    |  \u251c\u2500 \ud83d\udcc2 migrations\n    |  \u2514\u2500 \ud83d\udcc2 seeders\n    \u251c\u2500 \ud83d\udcc2 Documetations\n    \u251c\u2500 \ud83d\udcc2 public\n    |  \u251c\u2500 \ud83d\udcc2 client-images\n    |  \u251c\u2500 \ud83d\udcc2 css\n    |  \u251c\u2500 \ud83d\udcc2 images\n    |  \u251c\u2500 \ud83d\udcc2 js\n    |  \u251c\u2500 \ud83d\udcc2 scss\n    |  \u2514\u2500 \ud83d\udcc2 vendor\n    \u251c\u2500 \ud83d\udcc2 resources\n    |  \u251c\u2500 \ud83d\udcc2 css\n    |  \u251c\u2500 \ud83d\udcc2 js\n    |  \u251c\u2500 \ud83d\udcc2 lang\n    |  \u251c\u2500 \ud83d\udcc2 sass\n    |  \u251c\u2500 \ud83d\udcc2 views\n    |  |  \u251c\u2500 \ud83d\udcc2 app\n    |  |  \u251c\u2500 \ud83d\udcc2 auth\n    |  |  \u251c\u2500 \ud83d\udcc2 components\n    |  |  \u251c\u2500 \ud83d\udcc2 dashboards\n    |  |  \u251c\u2500 \ud83d\udcc2 errors\n    |  |  \u251c\u2500 \ud83d\udcc2 extra\n    |  |  \u251c\u2500 \ud83d\udcc2 form\n    |  |  \u251c\u2500 \ud83d\udcc2 icons\n    |  |  \u251c\u2500 \ud83d\udcc2 layouts\n    |  |  \u251c\u2500 \ud83d\udcc2 maps\n    |  |  \u251c\u2500 \ud83d\udcc2 partials\n    |  |  |  \u251c\u2500 \ud83d\udcc2 components\n    |  |  |  \u2514\u2500 \ud83d\udcc2 dashboard\n    |  |  \u251c\u2500 \ud83d\udcc2 special-pages\n    |  |  \u251c\u2500 \ud83d\udcc2 table\n    |  |  \u251c\u2500 \ud83d\udcc2 ui-elements\n    |  |  \u2514\u2500 \ud83d\udcc2 widget\n    \u251c\u2500 \ud83d\udcc2 routes\n    \u251c\u2500 \ud83d\udcc2 storage\n    |  \u251c\u2500 \ud83d\udcc2 app\n    |  |  \u2514\u2500 \ud83d\udcc2 public\n    |  \u251c\u2500 \ud83d\udcc2 framework\n    |  |  \u251c\u2500 \ud83d\udcc2 cache\n    |  |  \u251c\u2500 \ud83d\udcc2 sessions\n    |  |  \u251c\u2500 \ud83d\udcc2 testing\n    |  |  \u2514\u2500 \ud83d\udcc2 views\n    |  \u2514\u2500 \ud83d\udcc2 logs\n    \u251c\u2500 \ud83d\udcc2 tests\n    |  \u251c\u2500 \ud83d\udcc2 features\n    |  \u2514\u2500 \ud83d\udcc2 Unit\n    \u251c\u2500 \ud83d\udcc4 .editorconfig\n    \u251c\u2500 \ud83d\udcc4 .env.example\n    \u251c\u2500 \ud83d\udcc4 .gitattributes\n    \u251c\u2500 \ud83d\udcc4 .gitignore\n    \u251c\u2500 \ud83d\udcc4 .styleci.yml\n    \u251c\u2500 \ud83d\udcc4 changelog.md\n    \u251c\u2500 \ud83d\udcc4 README.md\n    \u251c\u2500 \ud83d\udcc4 artisan\n    \u251c\u2500 \ud83d\udcc4 composer.json\n    \u251c\u2500 \ud83d\udcc4 package.json\n    \u251c\u2500 \ud83d\udcc4 phpunit.xml\n    \u251c\u2500 \ud83d\udcc4 server.php\n    \u2514\u2500 \ud83d\udcc4 webpack.mix.js\n"})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>a});var s=t(6540);const o={},r=s.createContext(o);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);