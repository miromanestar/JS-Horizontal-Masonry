# JS-Horizontal-Masonry
An example of a horizontal masonry layout using javascript!

[Live demo here!](https://miromanestar.github.io/JS-Horizontal-Masonry/)

Essentially allows CSS to find the expected height of the items in a vertical masonry layout, sets that height (Plus an additional buffer to accomodate discrepancies) to the container, and applies some CSS flex rules depending on the window/screen size, including the flexbox order property.

That way, the JS is extremely lightweight and doesn't need to perform nearly as many calculations as traditional horizontal masonry layout solutions.

Support up to three columns. By default, it will organize the divs into 3 columns, and scale down as the screen shrinks. This will need to be modified in both the CSS and JS files to accomodate additional column sizes.
