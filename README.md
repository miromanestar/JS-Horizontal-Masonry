# jQuery-Horizontal-Masonry
An example of a horizontal masonry layout using jQuery!

This example utilizes jQuery to make things easier, but everything here can also be done quite easily in vanilla JS!

[Live demo here!](https://miromanestar.github.io/jQuery-Horizontal-Masonry/)

Essentially allows CSS to find the expected height of the items in a vertical masonry layout, sets that height (Plus an additional buffer to accomodate discrepancies) to the container, and applies some CSS flex rules depending on the window/screen size, including the flexbox order property.

That way, the JS is extremely lightweight and doesn't need to perform nearly as many calculations as traditional horizontal masonry layout solutions.

Support up to three columns. By default, it will organize the divs into 3 columns, and scale down as the screen shrinks. This will need to be modified in both the CSS and JS files to accomodate additional column sizes.

[Some of the CSS critical to this solution came from this guide here.](https://tobiasahlin.com/blog/masonry-with-css/)

