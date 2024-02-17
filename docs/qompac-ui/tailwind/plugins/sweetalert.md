---
sidebar_position: 2
---

# SweetAlert2

<hr/>

_SweetAlert2 is a JavaScript library that provides elegant, responsive, and customizable popups. It serves as a replacement for the standard JavaScript alert, confirm, and prompt dialogs with a modern and visually appealing interface._

<div className="mt-3 text-small">
### Features
</div>

- **Beautiful Design:** _SweetAlert2 offers a modern and beautiful design for popups, enhancing the user experience._

- **Customizable:** _You can easily customize the appearance, content, and behavior of the popups to suit your application's style._

- **Responsive:** _The popups are responsive and work well on different devices and screen sizes._

- **Rich Content:** _SweetAlert2 supports HTML content, allowing you to include rich text, images, and even interactive elements in your popups._

- **Promises Integration:** _SweetAlert2 is promise-based, making it easy to handle asynchronous actions and provide a seamless user experience._

<div className="mt-5 text-small">
### Installation
</div>

_To use SweetAlert2 in your project, you can follow these steps:_

_Include SweetAlert2 in your project by adding the necessary CSS and JavaScript files. You can use a package manager like npm or yarn or include the CDN links directly in your HTML file._

    ```bash
    <!-- using npm -->

    npm install sweetalert2
    ```

    **OR**

    ```bash
    <!-- using yarn -->

    yarn install sweetalert2
    ```

    _Include the SweetAlert2 CSS and JS files in your HTML:_

    ```html
    <!-- Add SweetAlert2 CSS -->
    <link
      rel="stylesheet"
      href="node_modules/sweetalert2/dist/sweetalert2.min.css"
    />

    <!-- Add SweetAlert2 JS -->
    <script src="node_modules/sweetalert2/dist/sweetalert2.min.js"></script>
    ```

    _Alternatively, you can include SweetAlert2 directly from a CDN:_

    ```html
    <!-- Add SweetAlert2 CSS from CDN -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"
    />

    <!-- Add SweetAlert2 JS from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    ```

<div className="mt-5 text-small">
### Getting Started
</div>

<div className="mt-4">
  ### **_Basic Alert_**
</div>
  **HTML Code**

  ```html
  <div x-data="sweetalert2">
      <button @click="fire('Hello! This is a Basic Message.')"
          class=" btn btn-primary ">
          Try Me
      </button>
  </div>
  ```
 **Script**

```js
// Basic Alert
document.addEventListener('alpine:init', () => {
  Alpine.data('sweetalert2', () => ({
      fire(message) {
          swal.fire(message)
      }
    }))
})
```



### **_Custom Alert_**

    **HTML Code**

    ```html
    <div x-data="sweetalert2">
        <button @click="sweetalerttitle()"
            class=" btn btn-primary ">
            Try Me
        </button>
    </div>
    ```

    **Script**

    ```js
    document.addEventListener('alpine:init', () => {
      Alpine.data('sweetalert2', () => ({
        sweetalerttitle(){
            Swal.fire({
              title: '<p class="dark:text-white">The Internet?</p>',
              text: 'That thing is still around? question',
              backdrop: `rgba(60,60,60,0.8)`,
              icon: "success",
              confirmButtonText: "OK"
            })
          },
        }))
    })
    ```


  ### **_Async Actions_**

   **HTML Code**

    ```Html
    <div x-data="sweetalert2">
        <button @click="sweetalertcustomdialog()"
            class="btn btn-primary">
            Try Me
        </button>
    </div>
    ```

    **Script**

      ```js
      // Async Action with Promise
      document.addEventListener('alpine:init', () => {
        Alpine.data('sweetalert2', () => ({
          sweetalertcustomdialog(){
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                backdrop: `rgba(60,60,60,0.8)`,
                confirmButtonText: 'Yes, delete it!',
                confirmButtonColor: "#c03221"
              })
              .then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
            },
          }))
      })
      ```

**_More Details_**

_For detailed documentation, configuration options, and advanced usage, refer to the [<font color="#50b5ff">**official SweetAlert2 documentation**</font>](https://sweetalert2.github.io/#download)._

**_Examples_**

_Explore the [<font color="#50b5ff">**SweetAlert2 examples**</font>](https://sweetalert2.github.io/#examples) for interactive demonstrations of various popup scenarios._
