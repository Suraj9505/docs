---
sidebar_position: 3
---

# Swiper.js

<hr/>

_Swiper is a powerful and flexible JavaScript library for creating modern, mobile-friendly sliders and carousels. It provides a highly customizable and feature-rich solution for building touch-enabled, responsive sliders for your web projects._

<div className="mt-3 text-small">
### Features
</div>

- **Responsive Design:** _Swiper is designed to work seamlessly across various screen sizes and devices, making it suitable for both desktop and mobile applications._

- **Touch Events:** Swiper supports touch events, allowing users to swipe through slides on touch-enabled devices. This makes it an excellent choice for mobile applications.

- **Multiple Slide Types:** Swiper supports various types of slides, including images, text, and custom content. It can be easily adapted to showcase different types of content.

- **Navigation Controls:** Swiper comes with built-in navigation controls, such as pagination, navigation arrows, and scrollbar, making it easy to navigate through slides.

- **Customization:** Swiper offers extensive customization options, allowing you to tailor the appearance and behavior of the slider to match your design requirements.

<div className="mt-5 text-small">
### Getting Started
</div>

To use Swiper in your project, you can follow these steps:

1. **Installation:** _Include Swiper in your project by adding the necessary CSS and JavaScript files. You can use a package manager like npm or include the CDN links directly in your HTML file._

   _We can install Swiper from NPM_

   ```bash
   npm install swiper
   ```

   ```javascript
   // import Swiper JS
   import Swiper from 'swiper';

   // import Swiper styles
   import 'swiper/css';

   const swiper = new Swiper(...);
   ```

   _By default Swiper exports only core version without additional modules (like Navigation, Pagination, etc.). So you need to import and configure them too:_

   ```javascript
   // core version + navigation, pagination modules:
   import Swiper from "swiper";
   import { Navigation, Pagination } from "swiper/modules";
   // import Swiper and modules styles
   import "swiper/css";
   import "swiper/css/navigation";
   import "swiper/css/pagination";

   // init Swiper:
   const swiper = new Swiper(".swiper", {
     // configure Swiper to use modules
     modules: [Navigation, Pagination],
   });
   ```

2. **HTML Structure:** _Create an HTML structure for your slides. Swiper requires a container with a class of `swiper-container` and child elements with the class `swiper-slide` for each slide._

```html
<div class="swiper-container">
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <!-- Add more slides as needed -->
  </div>
  <!-- Add pagination -->
  <div class="swiper-pagination"></div>
  <!-- Add navigation arrows -->
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
```

3. **Initialization:** _Initialize Swiper in your JavaScript file. You can customize the configuration based on your requirements._

   ```javascript
   if (document.querySelectorAll("#qui-dashboard").length > 0) {
     const options = {
       centeredSlides: false,
       loop: false,
       slidesPerView: 4,
       autoplay: false,
       spaceBetween: 32,
       breakpoints: {
         320: { slidesPerView: 1 },
         550: { slidesPerView: 1 },
         991: { slidesPerView: 1 },
         1400: { slidesPerView: 1 },
         1500: { slidesPerView: 1 },
         1920: { slidesPerView: 1 },
         2040: { slidesPerView: 1 },
         2440: { slidesPerView: 1 },
       },
       pagination: {
         el: ".swiper-pagination",
       },
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },

       // And if we need scrollbar
       scrollbar: {
         el: ".swiper-scrollbar",
       },
     };

     let swiper = new Swiper("#qui-dashboard", options);

     document.addEventListener("theme_scheme_direction", (e) => {
       swiper.destroy(true, true);
       setTimeout(() => {
         swiper = new Swiper("#qui-dashboard", options);
       }, 500);
     });
   }
   ```

**_More Details_**

_For detailed documentation and additional features, refer to the [<font color="#e20e02">**official Swiper documentation**</font>](https://swiperjs.com/get-started)._

**_Examples_**

_Check out the [<font color="#e20e02">**Swiper Demos**</font>](https://swiperjs.com/demos) for interactive examples and inspiration on how to use Swiper in various scenarios._
