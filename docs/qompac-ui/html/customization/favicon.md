---
sidebar_position: 2
---

# Favicon icon
<hr/>

<div className="mb-5"></div>

    _Favicon is an icon associated with the URL that is displayed at various places, such as in a browser’s address bar or next to the site name in a bookmark list._

    - You can add a Favicon to your Website using the following code:

        ```html
        <link rel="shortcut icon" href="images/favicon.ico"/>
        ```
        In Gulp version favicon change with 2 diffrent way

        1. Replace favicon image or rename favicon icon name. or go to `src/templates/partials/head.hbs` file and change.

        2. Go to gulp.config.json and add or change path set with images so you dont need to add `images/favicon.ico` faviconName: "{`faviconImage`}.ico"