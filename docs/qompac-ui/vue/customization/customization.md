---
sidebar_position: 1
title : 'Theme Customization'
---

# Customization

<div className="border-bottom border-dark mb-4"></div>

### Theme

- You can change the themes with the property name and its value here by declaring property name and its values in `src/store/setting/state.js` file.


- Themes values are in string type.

   **1. theme_scheme**

         - For theme there are 3 choices given below:

            ```js
            "theme_scheme": "light",
             choices: 'light', 'dark', 'auto'
            ```

   **2. theme_scheme_direction**

         - For direction of theme there are 2 choices given below:

            ```js
            "theme_scheme_direction": "ltr",
             choices: 'ltr', 'rtl'
            ```
    **3. To get the current value of the following you can use:**

        **You can work on theme_scheme & theme_scheme_direction using the Setting Panel in the given below ways:**

        - theme_scheme & theme_scheme_direction

            ```js
            const themeScheme = computed(() => store.getters['setting/theme_scheme'])

            const direction = computed(() => store.getters['setting/theme_scheme_direction'])
            ```


     **4. To use action you can use store.dispatch to update state.js.**
          
          **You can work on theme_scheme & theme_scheme_direction using the Setting Panel in the given below ways:**

        - theme_scheme & theme_scheme_direction

                ```js
                store.dispatch('setting/theme_scheme', value)

                store.dispatch('setting/theme_scheme_direction', value)
                ```
            
    

  ### Sidebar Appearance
  <hr/>
  You can change the themes with the property name and its value here by declaring property name and its values in `src/store/setting/state.js` file.
    
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
            "value": "left-bordered"
            },
            choices: 'navs-rounded', 'navs-rounded-all', 'navs-pills', 'navs-pill-all'
            ```

        **You can work on sidebar_type & sidebar_menu_style using the Setting Panel in the given below ways:**

        1. To get the current value of the following you can use:

            ```js
            const sidebarType = computed(() => store.getters['setting/sidebar_type']);

            const sidebarMenuStyle = computed(()=> store.getters['setting/sidebar_menu_style'])
            ```
           

        2. To use action you can use store.dispatch to update state.js:
            
            ```js
            store.dispatch('setting/sidebar_type', [...sidebarType.value, 'value'])

            store.dispatch('setting/sidebar_menu_style', value)
            ```
           
    ### Theme colors

    <hr/>

    **1. for colour customization . Colors are in array**

    - You can work on theme_scheme using the Setting Panel in the given below ways:

        ```js
        theme_color: {
            colors: {
            '--{{prefix}}primary': '#50b5ff',
            '--{{prefix}}info': '#d592ff'
        },
        value: 'theme-color-default'
        },
        ```
        There are two ways you can change the setting of your color customizer:

    **With the use of Color Customizer**
    <hr/>

    **You can work on color customizer using Live Customizer in three different ways:**

    - You can change the themes with the property name and its value here by declaring property name and its values in **src/store/setting/state.js** file.

    - This is the example of `state.js` file.

        ```js
        theme_color: {
            colors: {
                '--{{prefix}}primary': '#50b5ff',
                '--{{prefix}}info': '#d592ff'
        },
        value: 'theme-color-default'
        },
        ```


    **2. To get the current value of the following:**
        
        - theme_color

            ```js
            const themeColor = computed(() => store.getters['setting/theme_color'])
            ```

    
    **3. To use action you can use store.dispatch to update state.js.**

        - theme_color

                ```js
                store.dispatch('setting/theme_color', obj)
                ```

    ### Page Appearance

    <hr/>

        **1. page_layout**

            - for layout of page there are 2 options given below. Values are in string.

                ```js
                "page_layout": {
                    "value": "container-fluid"
                    },
                choices: 'container', 'container-fluid'
                ```

        **2. To get the current value of the following you can use:**

            - page_layout

                ```JS
                const pageLayout = computed(() => store.getters['setting/page_layout'])
                ```

        **3.To use action you can use store.dispatch to update state.js.**

            - page_layout

                ```js
                store.dispatch('setting/page_layout', value)
                ```