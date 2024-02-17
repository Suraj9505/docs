---
sidebar_position: 5
title: Customization
---

<hr />

### Theme Color

_Steps to follow when configuring theme colors with the template:_

    - _We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Scss variables in_ _**`scss/_variables.scss`**_ _file_.
    - _Additional customization will be performed in the variable file._

_Here are the colors utilized for gulp, scss, and hbs. Adjust them as per your requirements._

```
$theme-colors: (
    ​$primary:       #0d6efd;
    ​$secondary:     #6c757d;
    ​$success:       #198754;
    ​$info:          #0dcaf0;
    ​$warning:       #ffc107;
    ​$danger:        #dc3545;
    ​$light:         #f8f9fa;
    ​$dark:          #212529;
    ​);
```

<hr />

### For Favicon icon

_Favicon is an icon associated with the URL that is displayed at various places, such as in a browser’s address bar or next to the site name in a bookmark list._

_You can add a Favicon to your Website using the following code:_

```html
<link rel="shortcut icon" href="images/favicon.ico"/>
```

<hr />

### For Page Loading Transitions

_Page Loading Transitions are enabled by default. If you wish to disable the page loading transition you can simply delete below section_

```html
<div id="loading">
    <div id="loading-center">
        <img src="images/loader.gif" alt="loder">
    </div>
</div>
```

<hr />

### For Logo

<!-- _The logo container is located within the header container. Replace the **src** attribute with the URL of your own logo image._ -->

_The Logo Container can be found in the Header Container - **#header**. Replace "**logo-black.png**" with your own logo image URL._


```html
<div class="logo">
    <a href="home-1.html">
        <img id="logo_img" class="img-fluid" src="images/logo-white.png" alt="logo">
    </a>
</div>
```

<hr />

### For Changing Fonts

_You can add/change the site font, from all fonts used from [<font color="#FAA938">Google Web Font Services</font>](https://www.google.com/fonts). with the one that suits you the best. You can find the font link in top of the Style.css in all HTML file. See example below:_

```html
<font-family: 'Open Sans', 'Roboto' 'sans-serif'>
```

## Helper Section

    ### For section padding

    _You can add this helper class to set section padding top 100px and padding bottom 100px.
    Add overview-block-ptb class in section tag. See example below:_

    ```html
    <section class="overview-block-ptb">
        [YOUR CONTENT]
    </section>
    ```

:::note
Use this helper class to maintain all page section spacing. You can also use overview-block-pt for only padding top and overview-block-pb for only padding bottom.
:::


    ### For Text color

    _You can use color in the Text. simply add .main-color ( or any color you want) class where you want to use. See example below:_

    ```html
    .text-white { color: #ffffff; }
    .iq-font-black { color: #151d2e; }
    .iq-font-grey { color: #666666; }
    .iq-font-yellow { color: #f9b707; }
    ```

:::note
We include 4 color helper class in our template text-gray, text-black, main-color and text-white. you can add unlimited color class according to your needs.
:::


    ### For Background color

    _You can use color in the background. simply add .white-bg (or any color you want) class where you want to use. See example below:_

    ```html
    .white-bg { background: #ffffff; }
    .dark-bg { background: #151d2e; }
    .grey-bg { background: #f7f7f7 }
    .yellow-bg { background: #f9b707; }
    ```

:::note
We include 4 color helper class in our template text-gray, text-black, main-color and text-white. you can add unlimited color class according to your needs.
:::

    ### For Background Images and pattern

    _You can use an image in the background with parallax effect by simply adding InlineStyle in div tag and by use of this you can create your own background. See example below:_

    ```html
    <div style="background-image:url(Path); ">
        [YOUR CONTENT]
    </div>
    ```

    _If your background is small and you want to use repeated background then use styling property background-repeat and set the value repeat or no-repeat. See the example below:_

    ```html
    <div style="background-image:url(Path); background-repeat:no-repeat;">
        [YOUR CONTENT]
    </div
    ```

    _If you want to use your background like cover or cointainer. You just need to add styling property background-size and set the value cover or cointainer. see the example below:_

    ```html
    <div style="background-image:url(Path); background-size:cover;">
        [YOUR CONTENT]
    </div>
    ```

    ```html
    <div style="background-image:url(Path); background-position:center;">
        [YOUR CONTENT]
    </div>
    ```