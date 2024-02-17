"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5861],{7441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const r={sidebar_position:2},l="SweetAlert2",a={id:"qompac-ui/tailwind/plugins/sweetalert",title:"SweetAlert2",description:"SweetAlert2 is a JavaScript library that provides elegant, responsive, and customizable popups. It serves as a replacement for the standard JavaScript alert, confirm, and prompt dialogs with a modern and visually appealing interface.",source:"@site/docs/qompac-ui/tailwind/plugins/sweetalert.md",sourceDirName:"qompac-ui/tailwind/plugins",slug:"/qompac-ui/tailwind/plugins/sweetalert",permalink:"/docs/build/docs/qompac-ui/tailwind/plugins/sweetalert",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"qompacSidebar",previous:{title:"ApexCharts",permalink:"/docs/build/docs/qompac-ui/tailwind/plugins/apexchart"},next:{title:"Swiper",permalink:"/docs/build/docs/qompac-ui/tailwind/plugins/swiperjs"}},c={},d=[{value:"Features",id:"features",level:3},{value:"Installation",id:"installation",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"<strong><em>Basic Alert</em></strong>",id:"basic-alert",level:3},{value:"<strong><em>Custom Alert</em></strong>",id:"custom-alert",level:3},{value:"<strong><em>Async Actions</em></strong>",id:"async-actions",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sweetalert2",children:"SweetAlert2"}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"SweetAlert2 is a JavaScript library that provides elegant, responsive, and customizable popups. It serves as a replacement for the standard JavaScript alert, confirm, and prompt dialogs with a modern and visually appealing interface."})}),"\n",(0,s.jsx)("div",{className:"mt-3 text-small",children:(0,s.jsx)(n.h3,{id:"features",children:"Features"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Beautiful Design:"})," ",(0,s.jsx)(n.em,{children:"SweetAlert2 offers a modern and beautiful design for popups, enhancing the user experience."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Customizable:"})," ",(0,s.jsx)(n.em,{children:"You can easily customize the appearance, content, and behavior of the popups to suit your application's style."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Responsive:"})," ",(0,s.jsx)(n.em,{children:"The popups are responsive and work well on different devices and screen sizes."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Rich Content:"})," ",(0,s.jsx)(n.em,{children:"SweetAlert2 supports HTML content, allowing you to include rich text, images, and even interactive elements in your popups."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Promises Integration:"})," ",(0,s.jsx)(n.em,{children:"SweetAlert2 is promise-based, making it easy to handle asynchronous actions and provide a seamless user experience."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("div",{className:"mt-5 text-small",children:(0,s.jsx)(n.h3,{id:"installation",children:"Installation"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"To use SweetAlert2 in your project, you can follow these steps:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Include SweetAlert2 in your project by adding the necessary CSS and JavaScript files. You can use a package manager like npm or yarn or include the CDN links directly in your HTML file."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\x3c!-- using npm --\x3e\n\nnpm install sweetalert2\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"OR"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\x3c!-- using yarn --\x3e\n\nyarn install sweetalert2\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Include the SweetAlert2 CSS and JS files in your HTML:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- Add SweetAlert2 CSS --\x3e\n<link\n  rel="stylesheet"\n  href="node_modules/sweetalert2/dist/sweetalert2.min.css"\n/>\n\n\x3c!-- Add SweetAlert2 JS --\x3e\n<script src="node_modules/sweetalert2/dist/sweetalert2.min.js"><\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Alternatively, you can include SweetAlert2 directly from a CDN:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- Add SweetAlert2 CSS from CDN --\x3e\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"\n/>\n\n\x3c!-- Add SweetAlert2 JS from CDN --\x3e\n<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"><\/script>\n'})}),"\n",(0,s.jsx)("div",{className:"mt-5 text-small",children:(0,s.jsx)(n.h3,{id:"getting-started",children:"Getting Started"})}),"\n",(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(n.h3,{id:"basic-alert",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Basic Alert"})})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"HTML Code"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div x-data="sweetalert2">\n    <button @click="fire(\'Hello! This is a Basic Message.\')"\n        class=" btn btn-primary ">\n        Try Me\n    </button>\n</div>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Script"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Basic Alert\ndocument.addEventListener('alpine:init', () => {\n  Alpine.data('sweetalert2', () => ({\n      fire(message) {\n          swal.fire(message)\n      }\n    }))\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"custom-alert",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Custom Alert"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"HTML Code"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div x-data="sweetalert2">\n    <button @click="sweetalerttitle()"\n        class=" btn btn-primary ">\n        Try Me\n    </button>\n</div>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Script"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"document.addEventListener('alpine:init', () => {\n  Alpine.data('sweetalert2', () => ({\n    sweetalerttitle(){\n        Swal.fire({\n          title: '<p class=\"dark:text-white\">The Internet?</p>',\n          text: 'That thing is still around? question',\n          backdrop: `rgba(60,60,60,0.8)`,\n          icon: \"success\",\n          confirmButtonText: \"OK\"\n        })\n      },\n    }))\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"async-actions",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Async Actions"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"HTML Code"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Html",children:'<div x-data="sweetalert2">\n    <button @click="sweetalertcustomdialog()"\n        class="btn btn-primary">\n        Try Me\n    </button>\n</div>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Script"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Async Action with Promise\ndocument.addEventListener('alpine:init', () => {\n  Alpine.data('sweetalert2', () => ({\n    sweetalertcustomdialog(){\n        Swal.fire({\n          title: 'Are you sure?',\n          text: \"You won't be able to revert this!\",\n          icon: 'warning',\n          showCancelButton: true,\n          backdrop: `rgba(60,60,60,0.8)`,\n          confirmButtonText: 'Yes, delete it!',\n          confirmButtonColor: \"#c03221\"\n        })\n        .then((result) => {\n          if (result.isConfirmed) {\n            Swal.fire(\n              'Deleted!',\n              'Your file has been deleted.',\n              'success'\n            )\n          }\n        })\n      },\n    }))\n})\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"More Details"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["For detailed documentation, configuration options, and advanced usage, refer to the ",(0,s.jsx)(n.a,{href:"https://sweetalert2.github.io/#download",children:(0,s.jsx)("font",{color:"#50b5ff",children:(0,s.jsx)(n.strong,{children:"official SweetAlert2 documentation"})})}),"."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Examples"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Explore the ",(0,s.jsx)(n.a,{href:"https://sweetalert2.github.io/#examples",children:(0,s.jsx)("font",{color:"#50b5ff",children:(0,s.jsx)(n.strong,{children:"SweetAlert2 examples"})})})," for interactive demonstrations of various popup scenarios."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);