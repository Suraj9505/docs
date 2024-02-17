---
sidebar_position: 3
---

# SmoothScrollbar

`smooth-scrollbar` _is a JavaScript library that provides a customizable and smooth scrolling experience for web applications. It allows you to create custom scrollbars with various features and animations._

<div className="mt-3 text-small">
### Features
</div>

- **Smooth Scrolling:** _Achieve smooth and natural scrolling behavior with ease._

- **Customizable:** _Customize the appearance and behavior of scrollbars to match your design._

- **Responsive:** _Works well on different devices and screen sizes._

- **Touch Support:** _Provides smooth scrolling on touch-enabled devices._

- **Plugin System:** _Extend functionality through a plugin system for added features._

<div className="mt-5 text-small">
### Installation
</div>

You can install `smooth-scrollbar` via npm by running the following command:

    ```bash
    <!-- using npm-->

    npm install smooth-scrollbar
    ```

    **OR**

    ```bash
    <!-- using yarn-->

    yarn install smooth-scrollbar
    ```

    _Include the `smooth-scrollbar` CSS and JS files in your HTML:_

    ```html
    <!-- Add smooth-scrollbar CSS -->

    <link rel="stylesheet" href="node_modules/smooth-scrollbar/dist/smooth-scrollbar.css">

    <!-- Add smooth-scrollbar JS -->
    <script src="node_modules/smooth-scrollbar/dist/smooth-scrollbar.js"></script>
    ```

    _Alternatively, you can include `smooth-scrollbar` directly from a CDN:_

    ```html
    <!-- Add smooth-scrollbar CSS from CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/smooth-scrollbar/dist/smooth-scrollbar.css">

    <!-- Add smooth-scrollbar JS from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/smooth-scrollbar"></script>
    ```

<div className="mt-5 text-small">
### Getting Started
</div>

**_Basic Implementation_**

    ```html
    <div id="my-scrollbar" style="width: 100%; height: 100vh;"></div>

    <script>
    // Initialize smooth-scrollbar
    var scrollbar = new SmoothScrollbar("#my-scrollbar");
    </script>
    ```

**_Customization_**

    ```html
    <div id="my-scrollbar" style="width: 100%; height: 100vh;"></div>

    <script>
    // Initialize smooth-scrollbar with customization
    var options = {
        damping: 0.1,
        thumbMinSize: 20,
        renderByPixels: true,
        alwaysShowTracks: false,
    };

    var scrollbar = SmoothScrollbar.init(document.querySelector("#my-scrollbar"), options);
    </script>
    ```
