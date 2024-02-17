"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1646],{4183:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=i(4848),r=i(8453);const t={sidebar_position:4},o="Swiper.js",a={id:"streamit/react/dashboard/plugins/swiperjs",title:"Swiper.js",description:"Swiper is a powerful and flexible JavaScript library for creating modern, mobile-friendly sliders and carousels. It provides a highly customizable and feature-rich solution for building touch-enabled, responsive sliders for your web projects.",source:"@site/docs/streamit/react/dashboard/plugins/swiperjs.md",sourceDirName:"streamit/react/dashboard/plugins",slug:"/streamit/react/dashboard/plugins/swiperjs",permalink:"/docs/build/docs/streamit/react/dashboard/plugins/swiperjs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"streamitSidebar",previous:{title:"SweetAlert2",permalink:"/docs/build/docs/streamit/react/dashboard/plugins/sweetalert"},next:{title:"Changelog",permalink:"/docs/build/docs/streamit/react/dashboard/changelog"}},l={},d=[{value:"Features",id:"features",level:3},{value:"Getting Started",id:"getting-started",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"swiperjs",children:"Swiper.js"}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Swiper is a powerful and flexible JavaScript library for creating modern, mobile-friendly sliders and carousels. It provides a highly customizable and feature-rich solution for building touch-enabled, responsive sliders for your web projects."})}),"\n",(0,s.jsx)("div",{className:"mt-3 text-small",children:(0,s.jsx)(n.h3,{id:"features",children:"Features"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Responsive Design:"})," ",(0,s.jsx)(n.em,{children:"Swiper is designed to work seamlessly across various screen sizes and devices, making it suitable for both desktop and mobile applications."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Touch Events:"})," Swiper supports touch events, allowing users to swipe through slides on touch-enabled devices. This makes it an excellent choice for mobile applications."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Multiple Slide Types:"})," Swiper supports various types of slides, including images, text, and custom content. It can be easily adapted to showcase different types of content."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Navigation Controls:"})," Swiper comes with built-in navigation controls, such as pagination, navigation arrows, and scrollbar, making it easy to navigate through slides."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Customization:"})," Swiper offers extensive customization options, allowing you to tailor the appearance and behavior of the slider to match your design requirements."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("div",{className:"mt-5 text-small",children:(0,s.jsx)(n.h3,{id:"getting-started",children:"Getting Started"})}),"\n",(0,s.jsx)(n.p,{children:"To use Swiper in your project, you can follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Installation:"})," ",(0,s.jsx)(n.em,{children:"Include Swiper in your project by adding the necessary CSS and JavaScript files. You can use a package manager like npm."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install swiper\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Then, import Swiper in your React component:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import SwiperCore, { Navigation, Pagination } from "swiper";\nimport { Swiper, SwiperSlide } from "swiper/react";\n\n// Import Swiper styles\nimport "swiper/css";\nimport "swiper/css/navigation";\nimport "swiper/css/pagination";\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Now, initialize Swiper with required modules:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// Use Swiper components in your React component\nSwiperCore.use([Navigation, Pagination]);\n\nconst MySwiperComponent = () => {\n  return (\n    <Swiper spaceBetween={30} navigation pagination={{ clickable: true }}>\n      <SwiperSlide>Slide 1</SwiperSlide>\n      <SwiperSlide>Slide 2</SwiperSlide>\n      {/* Add more slides as needed */}\n    </Swiper>\n  );\n};\n\nexport default MySwiperComponent;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"More Details"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["For detailed documentation and additional features, refer to the ",(0,s.jsx)(n.a,{href:"https://swiperjs.com/get-started",children:(0,s.jsx)("font",{color:"#e20e02",children:(0,s.jsx)(n.strong,{children:"official Swiper documentation"})})}),"."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Examples"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Check out the ",(0,s.jsx)(n.a,{href:"https://swiperjs.com/demos",children:(0,s.jsx)("font",{color:"#e20e02",children:(0,s.jsx)(n.strong,{children:"Swiper Demos"})})})," for interactive examples and inspiration on how to use Swiper in various scenarios."]})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);