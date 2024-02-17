---
sidebar_position: 3
---

# Helper classes

<hr/>

### For section padding

    _You can add this helper class to set section padding top 100px and padding bottom 100px._
    
    _Add overview-block-ptb class in section tag. See example below:_


        ```
        <section class="... overview-block-ptb">
            [YOUR CONTENT]
        </section>
        ```

:::note
Use this helper class to maintain all page section spacing. You can also use overview-block-pt for only padding top and overview-block-pb for only padding bottom.
:::



### For Text color

    _You can use color in the Text. simply add .main-color ( or any color you want) class where you want to use. See example below:_

    ```
    <div class="text-primary">
        [YOUR TEXT CONTENT]
    </div>
    ```

:::note
We include 4 color helper class in our template text-gray, text-black, main-color and text-white. you can add unlimited color class according to your needs.
:::

### For Background color

    _You can use color in the background. simply add .white-bg (or any color you want) class where you want to use. See example below:_

    ```
    <div class="bg-primary">
        [YOUR CONTENT]
    </div>
    ```
:::note
We include 4 color helper class in our template text-gray, text-black, main-color and text-white. you can add unlimited color class according to your needs.
:::


### For Background Images and pattern

    _You can use an image in the background with parallax effect by simply adding InlineStyle in div tag and by use of this you can create your own background. See example below:_

    ```
    <div style="background-image:url(Path); ">
        [YOUR CONTENT]
    </div> 
    ```

    _If your background is small and you want to use repeated background then use styling property background-repeat and set the value repeat or no-repeat. See the example below:_

    ```
    <div style="background-image:url(Path); background-repeat:no-repeat;">
        [YOUR CONTENT]
    </div>
    ```

    _If you want to use your background like cover or cointainer. You just need to add styling property background-size and set the value cover or cointainer. see the example below:_

    ```
    <div style="background-image:url(Path); background-size:cover;">
        [YOUR CONTENT]
    </div>
    ```

### For Background overlay

    _You can use these .iq-over-black-30, .iq-over-white-20, .iq-over-green-90 classes to any element in your HTML code to apply overlay color on any image or section. See example below:_

    ```
    <div class="iq-over-black-80">
        [YOUR CONTENT]
    </div>
    ```

_**Structure** : .iq-over-**`{color}`**-**`{opacity}`**. For Example, .iq-over-black-80_