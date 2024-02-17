---
sidebar_position: 3
title : 'Manual'
---

# Manual

<div className="border-bottom border-dark mb-4"></div>
<hr/>
 
 **You can change the sidebar layouts with a single action.**

 1. By adding some classes in sidebar parent section. Example is given bellow.

   
        ### Themes
        _If you wish to change the theme, you can follow the below action._

        For example you have to set theme as dark then you will have to add dark class at body tag._

            - For theme color as dark
            ```
            <body class="..... dark">
            .......
            </body>
            ```

            -  For theme color as white
            ```
            <body class="..... light">
            .......
            </body>
            ```

            - For theme color as auto.
            ```
            <body class="..... auto">
            .......
            </body>
            ```
        ### Themes Direction
        _If you wish to change the theme direction, you can follow the below action._

        _For example you have to set theme direction as ltr then you will have to add ltr at html tag._
 
            - For theme direction as left
            ```
            <html dir="ltr">
            .......
            </html>
            ```
                - For theme direction as right
            ```
            <html dir="rtl">
            .......
            </html>
            ```

        ### Sidebar Style

             _If you wish to change the sidebar style, you can follow the below action._

             For example you have to set sidebar style as **mini** then you will have to add **sidebar-mini** class at **data-toggle="main-sidebar"** of the sidebar.

                    - For sidebar style as mini
                      
                        ```
                        <aside class=" ...... sidebar-mini" data-toggle="main-sidebar" data-sidebar="responsive">
                        .......
                        </aside>
                        ```

                    - For sidebar style as hover
                       
                       ```
                        <aside class=" ...... sidebar-hover" data-toggle="main-sidebar" data-sidebar="responsive">
                        .......
                        </aside>
                        ```

                    - For sidebar style as soft effect
                        
                        ```
                        <aside class=" ...... sidebar-soft" data-toggle="main-sidebar" data-sidebar="responsive">
                        .......
                        </aside>
                        ```

        ### Sidebar Active Menu Style

        _If you wish to change the sidebar active menu style, you can follow the below action._

        For example you have to set sidebar active as **rounded** then you will have to add **navs-rounded** class at **data-toggle="main-sidebar"** of the sidebar.
    
                - For sidebar active as rounded one side
                
                    ```
                    <aside class=" ...... navs-rounded" data-toggle="main-sidebar" data-sidebar="responsive">
                    .......
                    </aside>
                        ```

                - For sidebar active as rounded all
                
                    ```
                    <aside class=" ...... navs-rounded-all" data-toggle="main-sidebar" data-sidebar="responsive">
                    .......
                    </aside>
                    ```

                - For sidebar active as one side pill
                    
                    ```
                    <aside class=" ...... navs-pill" data-toggle="main-sidebar" data-sidebar="responsive">
                    .......
                    </aside>
                    ```

                -  For sidebar active as pill all
                
                    ```
                    <aside class=" ...... navs-pill-all" data-toggle="main-sidebar" data-sidebar="responsive">
                    .......
                    </aside>
                    ```