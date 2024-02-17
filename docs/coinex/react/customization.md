---
sidebar_position: 10
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
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```
    1. Replace favicon image or rename favicon icon name. or go to `public/img/icon` file and change.
<hr />

### For Page Loading Transitions

_Page Loading Transitions are enabled by default. If you wish to disable the page loading transition you can simply remove loader from respective layout in layouts folder_

**OR**

_simply remove loader component folder inside components_

```html
<div id="loading">
    <div id="loading-center">
    </div>
</div>
```

_In react, loader changes in 2 different ways_

    - Replace loader image.

    - Go to `assets/scss/backend/layouts/_dark.scss` and add or change path set with images.

<hr />

### For Logo


_The Logo Container can be found in the HeaderStyle in `components/patials/backend/HeaderStyle` - **#header**. Replace "**logo.png**" with your own logo image URL._


```html
<Link to="/" className="header-logo">
    <img src={logo} className="img-fluid rounded-normal" alt="logo" />
</Link>
```

<hr />

### For Changing Fonts

_In react version change with scss file._

    1. Go to `src/assets/scss/helper/_fonts.scss` and change google fonts
    
    ```html
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap")
    @import ("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600&display=swap")
    ```

    2. Go to `src/assets/scss/_variable.scss` and change font family variable
    
    ```html
    $font-family-title: 'Heebo', sans-serif;
    $font-family-base: 'Poppins', sans-serif;
    ```
    