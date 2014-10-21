3r - Reactive, Responsive, Rotating Templates
===========================================

About
-----

The package gives a basic responsiveness to device size and rotation events through reactive coding. There is no CSS or @MediaQueries in this package. Using a combination of dynamic templates and global helpers, 3r is framework agnostic. It will give you the basic building blocks to make quick and readily responsive app.

Installation
------------

    meteor add garrilla:3r

Version
-------

This version is first published version standing at `0.1.0`.

Usage
-----

**3r** _requires_ that you do the following:

1. place the `{{> r3r}}` template block into the `body` section of your app,
````html
    <body>
    {{> b3r}}
    </body>
````
)[
2. include a `<template name="layout">` template block called _layout_ after the body section

3. include  `<meta name="viewport" content="width=device-width" initial-scale=1/>` in the `head` section,
````html
    <head>
        <title>Your Title</title>
        <meta name="viewport" content="width=device-width" initial-scale=1/>
    </head>
````

Then start your app.

If you would like to see a `global helper` message on each view, to help with identification, include the `{{> identifier}}` template within the _layout_ template.

There is an example [body.html](https://github.com/garrilla/garrilla-3r/blob/master/body.html) on this packages' github to get you on your way. Copy the contents to your project and start the app.


There are 7 helpers,
````html
isUnsupported
isMobilePortrait
isMobileLandscape
istabletPortrait
istabletLandscape
isLargeLandscape
isBigScreen
````
only one will be true at any given time. They are updated each time the _r3r_ template changes because of a rotation.

Here is an example of use:
````html
    {{#unless isMobilePortrait }}
        <p> this will show in all browser/orientations except mobile-portrait </p>
    {{else}}
        <p> this will show *only* in mobile-portrait </p>
    {{/if}}
````

here's a similar example, with a _Semantic UI nav bar_
````html
     <nav class="ui fixed menu inverted navbar">
         <a href="" class="brand item">Market Evaluator</a>
         {{#unless isMobilePortrait }}
         <a href="" class="active item">Home</a>
         <a href="" class="item">Features</a>
         <a href="" class="item">Contact</a>
         {{/unless}}
       {{elset}}
         <a href="" class="item"><i class="reorder icon"></i></a>
       {{/unless}}
     </nav>
````

TODO
----
  - create a demo site
  - add more examples
  - test with `iron:router` - I'm hoping that `{{> yeild}}` will go the _layout_ template.
  - give users control of the dimensions object, so you can set your own breakpoints
  - make the process more flexible so users can add or remove 'views', at the moment they remain fixed to the 7 based on teh helpers
  - make a distinction between phone/tablet devices and laptop/desktop so that window resize events work
  - think of more things to do