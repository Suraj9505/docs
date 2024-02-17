---
sidebar_position: 4
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

_Then, import Swiper in your Blade view:_

```php
<!-- Your Laravel Blade content -->
<script>
    import SwiperCore, { Navigation, Pagination } from "swiper";
    import { Swiper, SwiperSlide } from "swiper";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";

    // Use Swiper components
    SwiperCore.use([Navigation, Pagination]);
</script>
```

_Now, initialize Swiper with required modules and create a Swiper component in your Blade view:_

```php
<!-- Your Laravel Blade content -->
<div>
    <Swiper spaceBetween={30} navigation pagination={{ clickable: true }}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <!-- Add more slides as needed -->
    </Swiper>
</div>
```

**_More Details_**

_For detailed documentation and additional features, refer to the [<font color="#FF971D">**official Swiper documentation**</font>](https://swiperjs.com/get-started)._

**_Examples_**

_Check out the [<font color="#FF971D">**Swiper Demos**</font>](https://swiperjs.com/demos) for interactive examples and inspiration on how to use Swiper in various scenarios._
