---
sidebar_position: 1
title : 'Theme Customization'
---

<!-- # Customization -->

<div className="mb-5"></div>

    <!-- ### Theme -->
    _There are some customization like change color, logo, loader, favicon, default mode (dark or light) etc..._
<hr/>
 
 - You can change the themes with the property name and its value here by declaring property name and its values in **src/store/setting/state.tsx** file.

    **1. theme_scheme_direction**

        - For direction of theme there are 2 choices given below:
        
        ```js
        "theme_scheme_direction": {
            "value": "ltr"
         },
        choices: 'ltr', 'rtl'
        ```

    **2. theme_scheme**
         
         - For theme there are 3 choices given below:

        ```js
        "theme_scheme": {
          "value": "light"
        },
        choices: 'light', 'dark', 'auto'
        ```

    **3. To get the current value of the following you can use:**

                **theme_scheme**

                ```js
                const themeScheme = useSelector(SettingSelector.theme_scheme)
                ```

                **theme_scheme_direction**

                ```js
                const themeSchemeDirection = useSelector(SettingSelector.theme_scheme_direction)
                ```

    **4. To use action you can use dispatch to update state.js.**

                **theme_scheme**

                ```js
                dispatch(theme_scheme(value))
                ```

                **theme_scheme_direction**

                ```js
                dispatch(theme_scheme_direction(value))
                ```

    ### Sidebar Appearance
      
     <hr/>
    - You can change the themes with the property name and its value here by declaring property name and its values in **src/store/setting/state.tsx** file.

        **1. sidebar_type**
            
            - For sidebar type there are 3 options given below: Values are in array.

                ```js
                "sidebar_type": {
                    "value": []
                },
                choices: 'sidebar-hover', 'sidebar-mini', 'sidebar-soft'
                ```
        
        **2. sidebar_menu_style**

            - For sidebar menu-style there are 4 options given below: Values are in string.

                ```js
                "sidebar_menu_style": {
                    "value": "navs-rounded"
                },
                choices: 'navs-rounded', 'navs-rounded-all', 'navs-pills', 'navs-pill-all'
                ```
        
        **3. To get the current value of the following you can use:**
                
                    - sidebar_type

                        ```js
                        const sidebarType = useSelector(SettingSelector.sidebar_type)
                        ```

                    - sidebar_menu_style

                        ```js
                        const sidebarMenuStyle = useSelector(SettingSelector.sidebar_menu_style)
                        ```

        **4. To use action you can use dispatch to update state.js.**

                    - sidebar_type
                    
                        ```js
                        dispatch(sidebar_type(value))
                        ```

                    - sidebar_menu_style
                    
                        ```js
                        dispatch(sidebar_menu_style(value))
                        ```

 ### Theme colors
    
    <hr/>

- You can change the themes with the property name and its value here by declaring property name and its values in **src/store/setting/state.tsx** file.

    <!-- 1. Here is the Change color of template in gulp -->
        1. You can work on theme_scheme using the Setting Panel in the given below ways:

            ```js
            "theme_color": {
            "colors": {
                "--{{prefix}}primary": "#50b5ff",
                "--{{prefix}}info": "#d592ff"
            },
            "value": "theme-color-default"
            }
            ```

    2. To get the current value of the following you can use:

        - theme_color
            
            ```js
            const themeColor = useSelector(SettingSelector.theme_color)
            ```
    3. To use action you can use dispatch to update state.js.

        - theme_color

            ```js
            dispatch(theme_color({value: colorClassName, colors: colorObj}))
            ```


    ### Page Appearance

    <hr/>

    1. page_layout

        - for layout of page there are 2 options given below. Values are in string.

            ```js
            "page_layout": {
                "value": "container-fluid"
            },
            choices: 'container', 'container-fluid'
            ```
    2. To get the current value of the following you can use:
        
        - page_layout

            ```js
            const pageLayout = useSelector(SettingSelector.page_layout)
            ```
    
    3. To use action you can use dispatch to update state.js.

        - page_layout

            ```js
            dispatch(page_layout(value))
            ```