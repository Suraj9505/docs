---
sidebar_position: 1
title : 'Theme Customization'
---

# Customization


<div className="border-bottom border-dark mb-4"></div>

### Theme

- You can change the themes with the property name and its value here by declaring property name and its values in **src/app/store/setting/state.ts** file.


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

   3. To get the current value of the following you can use:
      
         - theme_scheme_direction

            ```js
            this.themeSchemeDirection$ = store.pipe(select(SettingSelectors.themeSchemeDirectionSelector));
            ```

         - theme_scheme

            ```js
            this.themeScheme$ = store.pipe(select(SettingSelectors.themeSchemeSelector));
            ```
   4. To use action you can use dispatch to update state.js.

         - theme_scheme_direction

               ```js
               this.store.dispatch(SettingActions.theme_scheme_direction({value: value}))
               ```

         - theme_scheme

               ```js
               this.store.dispatch(SettingActions.theme_scheme({value: value}))
               ```

   ### Sidebar Appearance

      <hr/>

      - You can change the themes with the property name and its value here by declaring property name and its values in **src/app/store/setting/state.ts** file.

      **1. sidebar_type**

         - For sidebar type there are 3 options given below: Values are in array.

            ```js
            "sidebar_type": "sidebar-mini",
             choices: 'sidebar-hover', 'sidebar-mini', 'sidebar-soft'
            ```


       **2. sidebar_menu_style**     

            - For sidebar menu-style there are 4 options given below: Values are in string.

               ```js
               "sidebar_menu_style": {
               "value": "sidebar-default navs-rounded-all"
               }
               choices: ["sidebar-default navs-rounded","sidebar-default navs-rounded-all","sidebar-default navs-pill","sidebar-default navs-pill-all"],
               ```

         **3. To get the current value of the following you can use:**

               - sidebar_type
                     
                     ```js
                     this.sidebarTypeSelector$ = store.pipe(select(SettingSelectors.sidebarTypeSelector));
                     ```
               - sidebar_menu_style

                     ```js
                     this.sidebarMenuStyleSelector$ = store.pipe(select(SettingSelectors.sidebarMenuStyleSelector));
                     ```
            
         **4. To use action you can use dispatch to update state.js.**

               - sidebar_type

                     ```js
                     this.store.dispatch(SettingActions.sidebar_type({value: value}))
                     ```
               - sidebar_menu_style

                     ```js
                     this.store.dispatch(SettingActions.sidebar_menu_style({value: value}))
                     ```

### Page Appearance
<hr/>

        **1. page_layout**

            - for layout of page there are 2 options given below. Values are in string.

                ```js
                "page_layout": "container-fluid",
                 choices: 'container', 'container-fluid'
      
      **2. To get the current value of the following you can use:**

            - page_layout     

                  ```js
                  this.pageLayoutSelector$ = store.pipe(select(SettingSelectors.pageLayoutSelector));
                  ```
      **3. To use action you can use dispatch to update state.js.**

            - page_layout
                  
                  ```js
                  this.store.dispatch(SettingActions.page_layout({value: value}))
                  ```
      ### Theme Color
      <hr/>
      - You can change the themes with the property name and its value here by declaring property name and its values in **src/app/store/setting/state.ts** file

            **1. You can work on theme_scheme using the Setting Panel in the given below ways:**

                 -  You can work on theme_scheme using the Setting Panel in the given below ways:     

                        ```js
                        "theme_color": {
                               "colors": {
                                     "--primary": "#7016d0",
                                     "--secondary": "#aca4bc",
                                      "--tertiray": "#3FF0B9"
                                },
                        "value": "theme-color-default"
                        }
                        ```
            **2. To get the current value of the following you can use:**

                  - theme_color

                        ```js
                        changeThemeColor(object: any) {
                              const themeColor = {
                                    colors: {
                                          '--primary': object.primary,
                                          '--secondary': object.secondary,
                                    },
                              value: object.value
                        }
                        ```