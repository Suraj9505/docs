---
sidebar_position: 5
---

# Swiper

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

1. **Installation:** _Include Swiper in your project by adding the necessary CSS and JavaScript files. You can use a package manager like npm._

   ```bash
   npm install swiper
   ```

2. **Import and Usage:** _Import Swiper in your Vue component and initialize Swiper with required modules and use it in your Vue component:_

- _`swiper/vue` exports 2 components: `Swiper` and `SwiperSlide`:_

```html
<template>
  <Swiper :space-between="30" :navigation="true" :pagination="{ clickable: true }">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <!-- Add more slides as needed -->
  </Swiper>
</template>

<script>
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Use Swiper components in your Vue component
SwiperCore.use([Navigation, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  // Your component options
};
</script>
```

**_More Details_**

_For detailed documentation and additional features, refer to the [<font color="#50b5ff">**official Swiper documentation**</font>](https://swiperjs.com/get-started)._

**_Examples_**

_Check out the [<font color="#50b5ff">**Swiper Demos**</font>](https://swiperjs.com/demos) for interactive examples and inspiration on how to use Swiper in various scenarios._
