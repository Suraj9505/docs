---
sidebar_position: 2
---

# Popper.js

<hr/>

_Popper.js is a lightweight JavaScript library that provides a reliable and efficient solution for positioning and aligning popovers, tooltips, dropdowns, and other UI elements. It is often used in conjunction with popular UI frameworks like Bootstrap._

<div className="mt-3 text-small">
### Features
</div>

- **Flexible Positioning:** _Popper.js uses a dynamic and flexible positioning strategy, allowing UI elements to be dynamically positioned based on available space._

- **Collision Detection:** _It includes collision detection to ensure that positioned elements do not overlap or go outside the viewport._

- **Adaptive Positioning:** _Popper.js adjusts the position of UI elements based on the available space and the position of the trigger element._

- **Customizable:** _You can customize various aspects of the positioning behavior and adapt it to different use cases._

<div className="mt-3 text-small">
### Getting Started
</div>

_To use Popper.js in your project, follow these steps:_

1. **Installation:** Include the Popper.js library in your project, either by using a package manager like npm or yarn, or by including the necessary CDN links.

   _We can install Swiper from NPM_

   ```bash
   # With npm
    npm i @popperjs/core
   ```

   **OR**

   ```bash
    # With Yarn
    yarn add @popperjs/core
   ```

   **OR**

   _You can directly include the `<script>`._

   ```html
   <!-- Development version -->
   <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>

   <!-- Production version -->
   <script src="https://unpkg.com/@popperjs/core@2"></script>
   ```

2. **Initialization:** _Use Popper.js in combination with your UI framework (e.g., Bootstrap) to position elements. For example, with Bootstrap and Bootstrap's Tooltip:_

   ```html
   <!-- Vue Component Template -->
    <template>
      <div>
        <!-- Your HTML Markup Goes Here -->
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Tooltip on top"
          ref="tooltipButton"
        >
          Tooltip on top
        </button>
      </div>
    </template>

    <script>
    export default {
      mounted() {
        // Initialize Bootstrap Tooltip with Popper.js
        const tooltipButton = this.$refs.tooltipButton;
        new bootstrap.Tooltip(tooltipButton, {
          container: "body",
        });
      },
    };
    </script>
   ```

3. **HTML Markup:** _Add HTML markup with data attributes for tooltips or popovers in your React component:_

   ```html
   <!-- Vue Component Template -->
    <template>
      <div>
        <!-- Your HTML Markup Goes Here -->
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-toggle="popover"
          title="Popover title"
          data-bs-content="And here's some amazing content. It's very engaging. Right?"
          ref="popoverButton"
        >
          Popover on top
        </button>
      </div>
    </template>

    <script>
    export default {
      mounted() {
        // Initialize Bootstrap Popover with Popper.js
        const popoverButton = this.$refs.popoverButton;
        new bootstrap.Popover(popoverButton, {
          container: "body",
        });
      },
    };
    </script>
   ```

4. **Customization:** _Explore the documentation for customization options, such as changing placement, offsets, and other configuration settings. Customize the options accordingly in your Vue component._

**_More Details_**

_For detailed documentation, configuration options, and advanced usage, refer to the [<font color="#007bff">**official Popper.js documentation**</font>](https://popper.js.org/docs/v2/)._

**_Examples_**

_Explore the [<font color="#007bff">**Popperjs demos**</font>](https://popper.js.org/) for interactive examples showcasing the library's capabilities._
