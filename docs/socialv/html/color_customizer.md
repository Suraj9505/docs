---
sidebar_position: 6
---

# Color Customizer


<div className="border-bottom border-dark mb-4"></div>


_Color Customizer has been set through root variable using scss_

_The color are mention at the variable file in the customizer folder._

```
$colors-name: ('primary', 'info') !default;
   $custom-colors: (
      "theme-color-blue": map-merge($colors,(
         "primary": #4285F4,
         "info": #EA4335 ,
   )),
);
```

_color and divided in two parts: shade means darker and darker color, and tint means lighter and lighter colors._

```
:root {
   @mixin custom-color-variables($color-name: 'primary',$color-value: $primary) {
      --#{$variable-prefix}heading-color: #{shade-color($color-value, 80%)};
      --#{$variable-prefix}#{$color-name}: #{$color-value};
      --#{$variable-prefix}#{$color-name}-shade-80: #{shade-color($color-value, 80%)};
      --#{$variable-prefix}#{$color-name}-shade-60: #{shade-color($color-value, 60%)};
      --#{$variable-prefix}#{$color-name}-shade-40: #{shade-color($color-value, 40%)};
      --#{$variable-prefix}#{$color-name}-shade-20: #{shade-color($color-value, 20%)};
      --#{$variable-prefix}#{$color-name}-tint-90: #{tint-color($color-value, 90%)};
      --#{$variable-prefix}#{$color-name}-tint-80: #{tint-color($color-value, 80%)};
      --#{$variable-prefix}#{$color-name}-tint-60: #{tint-color($color-value, 60%)};
      --#{$variable-prefix}#{$color-name}-tint-40: #{tint-color($color-value, 40%)};
      --#{$variable-prefix}#{$color-name}-tint-20: #{tint-color($color-value, 20%)};
      --#{$variable-prefix}#{$color-name}-rgb: #{to-rgb($color-value)};
   }
   @include custom-color-variables('primary',$primary);
   @include custom-color-variables('info',$info);
}
```

**You can work on theme_color using the Setting Panel in the given below ways:**

1. You can change the themes with the property name and its value here by declaring property name and its values in <font color="#007bff">gulp.config.json</font> file.
  -  This is the example of <font color="#007bff">gulp.config.json</font> file.

  ```
  "theme_color": {
   "colors": {
       "--bs-primary": "#50b5ff",
       "--bs-info": "#d592ff"
   },
   "value": "theme-color-default"
}
```