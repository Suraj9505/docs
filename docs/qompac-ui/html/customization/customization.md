---
sidebar_position: 1
title : 'Theme Customization'
---

# Customization


<div className="border-bottom border-dark mb-4"></div>

### Theme
- Themes values are in string type.

   1. theme_scheme_direction

         - For direction of theme there are 2 choices given below:

            ```html
            "theme_scheme_direction": "ltr",
             choices: 'ltr', 'rtl'
            ```
   
   2. theme_scheme

         - For theme there are 3 choices given below:

            ```
            "theme_scheme": "light",
             choices: 'light', 'dark', 'auto'
            ```

   There are two ways you can change the setting of your themes :

      **With the use of live customizer**

         <hr/>

         _You can work on themes using Live Customizer in two different ways:_

         1. You can change the themes with the property name and its value here by declaring property name and its values in **src/assets/js/setting-init.js** file.

            - This is the example of **setting-init.js** file.

               ```html
               "options":{
                  "saveLocal": "sessionStorage",
                  "storeKey": "huisetting",
                  "setting":{
                     "theme_scheme_direction": { "value": "ltr" },
                     "theme_scheme": { "value": "light" },
               }
               },
               ```

         2. You can change the themes by adding property name and its values in the `<meta>` tag given in `<head>` section.

            - This is the example of `<meta>` data

               ```html
                <head>
                <meta name="setting_options"
                content="{
                    "saveLocal":"sessionStorage",
                    "storeKey":"quisetting",
                    "setting":{
                        "theme_scheme_direction": { "value": "ltr" },
                        "theme_scheme": { "value": "light" },
                    }
                }">
                </head>
               ```

   ## Sidebar Appearance
   <hr/>

      **1. sidebar_type**

         - For sidebar type there are 3 options given below: Values are in array.

            ```js
            "sidebar_type": "sidebar-mini",
             choices: 'sidebar-hover', 'sidebar-mini', 'sidebar-soft'
            ```

      **2. sidebar_menu_style**

         - For sidebar menu-style there are 4 options given below: Values are in string.

            ```js
            "sidebar_menu_style": "left-bordered",
             choices: 'navs-rounded', 'navs-rounded-all', 'navs-pills', 'navs-pill-all'
            ```
   There are two ways you can change the setting of your sidebar:

   **With the use of live customizer**
   <hr/>
      **You can work on sidebar using Live Customizer in two different ways:**

         1. You can change the sidebar with the property name and its value here by declaring property name and its values in **src/assets/js/setting-init.js** file.

            - This is the example of **setting-init.js** file.

               ```js
               "options":{
                  "saveLocal": "sessionStorage",
                  "storeKey": "huisetting",
                  "setting":{
                     "sidebar_color": { "value" : "sidebar-white" },
                     "sidebar_type" : { "value" : ["sidebar-hover", "sidebar-boxed"] },
                     "sidebar_menu_style": { "value" : "left-bordered" },
               }
               }
               ```

         2. You can change the sidebar by adding property name and its values in the `<meta>` tag given in `<head>` section.

            - This is the example of `<meta>` data.

               ```html
               <head>
               <meta name="setting_options"
               content="{
                  "saveLocal":"sessionStorage",
                  "storeKey":"huisetting",
                  "setting":{
                        "sidebar_color":{"value":"sidebar-white"},
                        "sidebar_type":{"value":["sidebar-hover", "sidebar-boxed"]},
                        "sidebar_menu_style":{"value":"left-bordered"}
               }
               }">
               </head>
               ```
### Page Appearance
<hr/>

        **1. page_layout**

            - for layout of page there are 2 options given below. Values are in string.

                ```js
                "page_layout": "container-fluid",
                 choices: 'container', 'container-fluid'
                ```
        There are two ways you can change the setting of your page:

        **With the use of live customizer**
        <hr/>
        **You can work on page style using Live Customizer in three different ways:**

         1. You can change the themes with the property name and its value here by declaring property name and its values in **src/assets/js/setting-init.js** file.

            - This is the example of **setting-init.js** file.

                ```js
                "options":{
                    "saveLocal": "sessionStorage",
                    "storeKey": "quisetting",
                    "setting":{
                        "app_name": { "value" : "Qompac-Ui" },
                        "page_layout": {"value" : "container"}
                        }
                }
                },
                ```
            
            2. You can change the page style and its appearance by adding property name and its values in the `<meta>` tag given in `<head>` section.
            
            - This is the example of `<meta>` data

                ```html
                <head>
                <meta name="setting_options"
                content="{
                    "saveLocal":"sessionStorage",
                    "storeKey":"quisetting",
                    "setting":{
                        "app_name":{"value":"Qompac-Ui"},
                        "page_layout": {"value" : "container"}
                }
                }">
                </head>
                ```
      
       ### Theme Color

      <hr/>

      - You can change the themes with the property name and its value here by declaring property name and its values in **src/assets/js/setting-init.js** file.

         **1. for colour customization . Colors are in array**

               ```js
                  ""theme_color": "theme-color-default",
                        "colors": {
                              "--primary": "#7016d0",
                              "--secondary": "#aca4bc",
                              "--tertiray": "#3FF0B9"
                        },
                        choices: 'theme-color-default', 'theme-color-blue', 'theme-color-gray', 'theme-color-red', 'theme-color-yellow', 'theme-color-pink'
               ```
         There are two ways you can change the setting of your color customizer:

         **With the use of live customizer**

            <hr/>
            **You can work on color customizer using Live Customizer in two different ways:**

               1. You can change the color with the property name and its value here by declaring property name and its values in **src/assets/js/setting-init.js** file.
                  
                  - This is the example of **setting-init.js**n file.

                     ```js
                     "options":{
                           "saveLocal": "sessionStorage",
                           "storeKey": "quisetting",
                           "setting":{
                              "app_name": { "value" : "Qompac-Ui" },
                               "theme_color": {
                                  "colors": {
                                        "colors": {
                                          "--primary": "#7016d0",
                                          "--secondary": "#aca4bc",
                                          "--tertiray": "#3FF0B9"
                                       },
                                    },
                              "value": "theme-color-yellow"
                           },    
                        }
                     },
                     ```

         2. You can change the color by adding property name and its values in the `<meta>` tag given in `<head>` section.
            
               - This is the example of `<meta>` data

                     ```html
                     <head>
                        <meta name="setting_options"
                         content="{
                           "saveLocal":"sessionStorage",
                           "storeKey":"quisetting",
                           "setting":{
                              "app_name":{"value":"Qompac-Ui"},
                              "theme_color": {
                                 "colors": {
                                    "colors": {
                                       "--primary": "#7016d0",
                                       "--secondary": "#aca4bc",
                                       "--tertiray": "#3FF0B9"
                                    },
                              },
                           "value": "theme-color-yellow"
                           },
                        }
                     }">
                     </head>
                     ```