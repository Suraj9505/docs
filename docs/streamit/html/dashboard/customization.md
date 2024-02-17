---
sidebar_position: 2
title: Customization
---

<hr />

### Theme Color

_Steps to follow when configuring theme colors with the template:_

    - _We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Scss variables in **`scss/_variables.scss`** file_.
    - _Additional customization will be performed in the variable file._

_Here are the colors utilized for gulp, scss, and hbs. Adjust them as per your requirements._

```
$theme-colors: (
    ​$primary:       #e50914;
    ​$secondary:     #6c757d;
    ​$success:       #14e788;
    ​$info:          #007aff;
    ​$warning:       #ecba12;
    ​$danger:        #545e75;
    ​$light:         #e9ecef;
    ​$dark:          #000;
    ​$gray:          #6c757d;
    ​$gray-dark:     #343a40;
    ​);
```

<hr />

### For Favicon icon

_A favicon is an icon linked to a URL and is visible in various locations, such as the browser's address bar or alongside the site name in a bookmark list._

_You can incorporate a favicon into your website by modifying the **href** in the following code snippet within the `index.html` file with the path to your preferred icon:_

```html
<link rel="shortcut icon" href="images/favicon.ico" />
```

<hr />

### For Page Loading Transitions

_Page Loading Transitions are enabled by default. If you wish to disable the page loading transition you can simply delete below section_

```html
<div
  id="loading"
  style="background: var(--iq-body-bg) url(../assets/images/loader.gif) no-repeat scroll center center;"
>
  <div id="loading-center"></div>
</div>
```

<hr />

### For Logo

_The logo container is located within the header container. Replace the **src** attribute with the URL of your own logo image._

```html
<div class="logo-default">
  <a class="navbar-brand text-primary" href="./index.html">
    <img
      class="img-fluid logo"
      src="./assets/images/logo.webp"
      loading="lazy"
      alt="streamit"
    />
  </a>
</div>
<div class="logo-hotstar">
  <a class="navbar-brand text-primary" href="./index.html">
    <img
      class="img-fluid logo"
      src="./assets/images/logo-hotstar.webp"
      loading="lazy"
      alt="streamit"
    />
  </a>
</div>
<div class="logo-prime">
  <a class="navbar-brand text-primary" href="./index.html">
    <img
      class="img-fluid logo"
      src="./assets/images/logo-prime.webp"
      loading="lazy"
      alt="streamit"
    />
  </a>
</div>
<div class="logo-hulu">
  <a class="navbar-brand text-primary" href="./index.html">
    <img
      class="img-fluid logo"
      src="./assets/images/logo-hulu.webp"
      loading="lazy"
      alt="streamit"
    />
  </a>
</div>
```

<hr />

### For Changing Fonts

_You have the option to add or change the site font. Select the one that best suits your preferences from the fonts available through [<font color="#e20e02">Google Web Font Services</font>](https://www.google.com/fonts). Locate the font link at the top of the Style.css in all HTML files. An example is provided below:_

```html
<!-- google font -->
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap"
  rel="stylesheet"
/>
```

_To include new font you can simply add another link like this:_

```html
<!-- google font -->
<!--Robaoto font -->
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap"
/>

<!-- popins font -->
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500&display=swap"
  rel="stylesheet"
/>
```

_To customize the fonts, edit the provided links with your preferred font. For [<font color="#e20e02">Google Web Font Services</font>](https://www.google.com/fonts), you can easily utilize Google Web Font Services or remove it altogether. If you prefer self-hosted fonts, refer to the example provided at this link 👉🏾 [<font color="#e20e02">Self Hosted Fonts</font>](https://css-tricks.com/snippets/css/using-font-face/)._
