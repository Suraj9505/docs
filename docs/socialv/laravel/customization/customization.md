---
sidebar_position: 1
title: 'Theme Customization'
---

# Customization

<div className="mb-5"></div>

*There are some customization like change color, logo, loader, favicon, default mode (dark or light) etc...*

### Theme

    _Themes values are in string type._

        1. theme_scheme
            
            - for theme there are 3 choices given below:

            ```js
            "theme_scheme": "light",
             choices: 'light', 'dark', 'auto'
            ```

        2. theme_scheme_direction
            
            - for direction of theme there are 2 choices given below:
            
            ```js
            "theme_scheme_direction": "ltr",
             choices: 'ltr', 'rtl'
            ```

        There are two ways you can change the setting of your themes :

        **With the use of live customizer**
        <hr/>
            **You can work on themes using Live Customizer in two different ways:**

            1. You can change the themes with the property name and its value here by declaring property name and its values in `public/js/setting/setting.js` file.

                - This is the example of `setting.js` file.
                    
                    ```js
                    function defaultSettingOption() {
                        return {
                            theme_scheme_direction: {
                            target: "html",
                            choices: ["ltr", "rtl"],
                            value: "ltr",
                        },
                        theme_scheme: {
                        target: "body",
                        choices: ["light", "dark", "auto"],
                        value: "light",
                           },
                        }
                    }
                    ```
            
            2. You can change theme from your **public/js/setting/setting.js**.In the cloumn name value change the value for variable theme_scheme for theme light or dark and theme_scheme_direction for direction.
            
            After making changes in seeder it is necessary to run `php artisan key:artisan` & `npm run dev` to save changes.

    
    ### Sidebar Appearance
    <hr/>

    **1. sidebar_type**

        - for sidebar type there are 3 options given below: Values are in array.

            ```js
            "sidebar_type": "sidebar-mini",
             choices: 'sidebar-hover', 'sidebar-mini', 'sidebar-soft'
            ```

    **2. sidebar_menu_style**

        For sidebar menu-style there are 4 options given below: Values are in string.

            ```js
            "sidebar_menu_style": "left-bordered",
             choices: 'navs-rounded', 'navs-rounded-all', 'navs-pills', 'navs-pill-all'
            ```
    There are two ways you can change the setting of your sidebar:

    **With the use of Setting Panel**
    <hr/>

        **You can work on sidebar using Setting Panel in two different ways:**

        1. You can change the sidebar with the property name and its value here by declaring property name and its values in **public/js/setting/setting.js** file.

            - This is the example of **setting.js** file.

                ```js
                function defaultSettingOption() {
                        return {
                        sidebar_type: {
                            target: '[data-toggle="main-sidebar"]',
                            choices: ["sidebar-hover", "sidebar-mini", "sidebar-soft"],
                            value: ["sidebar-soft"],
                            },
                        sidebar_menu_style: {
                            target: '[data-toggle="main-sidebar"]',
                            choices: [ "navs-rounded","navs-rounded-all","navs-pill","navs-pill-all"],
                            value: "navs-rounded-all",
                            },
                        }
                    }
                    ```
            2. You can change theme from your **public/js/setting/setting.js**.In the cloumn name value change the value for variable theme_scheme for theme light or dark and theme_scheme_direction for direction.
            
            - After making changes in seeder it is necessary to run `php artisan key:artisan` & `npm run dev` to save changes.