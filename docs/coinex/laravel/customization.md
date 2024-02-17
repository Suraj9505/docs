---
sidebar_position: 20
title: Customization
---

<hr />

### Dashboard colors

_Steps to be follow for dashboard colors with the template:_

    - _We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Scss variables in **_scss/_variables.scss_** file._

    - _More Customization will be done in variable file._

_Here is the **Change color of template in vue+scss**_

```
    $dashboard-colors: (
    ​$primary:       #FF971D;
    ​$secondary:     #4A4A4F;
    ​$danger:        #C03221;
​)
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

_Page Loading Transitions are enabled by default. If you wish to disable the page loading transition you can simply remove loader from respective layout in layouts folder_

**OR**

_simply remove loader component folder inside components_

```html
<div id="loading">
      <div class="loader simple-loader animate__animated animate__fadeOut d-none">
          <div class="loader-body"></div>
      </div>
</div>
```

<hr />

### For Logo

_The Logo component can be found in the` /partials/components/logo.vue` with your own logo SVG image OR logo image URL._

_Then user has to call logo component wherever logo has to show eg. ```{{> partials/components/logo }}```_


_You can add a SVG icon to your Website using the following code:_


```html
<svg width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
</svg>
```


_You can add a image URL icon to your Website using the following code:_

```html
<img src="images/logo.svg" alt="logo">
```

<hr />

### For Changing Fonts

_Steps to be followed to change font in the template:_

- _You can define multiple sources for the same font family, each with a different fontStyle._

- _To change the font family you will have to import the font at s`css/custom/helper/_font.scss` file. You can also import particular google fonts. After adding font url you have to update that particular font at `scss/_variables.scss`_


_Here is the **Change font from template in gulp+scss+hbs**_

**_font.scss**
```html
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

**_variable.scss**

```html
$font-family-sans-serif: 'Poppins', sans-serif, "Apple Color Emoji";
```