3r - Reactive, Responsive, Rotating Templates
===========================================

About
-----

The package gives a basic responsiveness to device size and rotation events through reactive coding. There is no CSS or @MediaQueries in this package. Using global helpers, 3r is framework agnostic. It will give you the basic building blocks to make quick and readily responsive app.

Installation
------------

    meteor add garrilla:3r

Version
-------

This version standing at `0.2.4`

Usage
-----

**3r** _requires_ that you do the following:

1. include  `<meta name="viewport" content="width=device-width initial-scale=1" />` in the `head` section,
````html
    <head>
        <title>Your Title</title>
        <meta name="viewport" content="width object=device-width initial-scale=1"/>
    </head>
````

Then start your app.

If you would like to see a `global helper` message on each view, to help with identification, include the `{{> identifier}}` template block within your html - it will tell you what screen 3r thinks we're looking at!

There is an example [body.html](https://github.com/garrilla/garrilla-3r/blob/master/body.html) on this packages' github to get you on your way. Copy the contents to your project and start the app.


There are 7 helpers,
````html
isUnsupported        // screen below 320
isMobilePortrait     // screens 320 upto 479
isMobileLandscape    // screens 480 upto 767
istabletPortrait     // screens 768 upto 979
istabletLandscape    // screens 980 upto 1023
isLargeLandscape     // screens 1024 upto 1279
isBigScreen          // screens 1280 and above
````
only one will be true at any given time. They are updated each time the _r3r_ template changes because of a `resize` event, which in this instance should be triggered by a rotation event. At the moment it does not respond to resizes of of window, _only_ to rotations . The dimensions are kind of arbitrary and based on small amount of search-based research, *if you have views on enhancing this set please create an issue*.

There is also a generic `isLandscape` helper.

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
  - change `identifier` template so user can wrap in `html tag` of their choosing
  - create a demo site
  - add more examples
  - ~~test with `iron:router` - I'm hoping that `{{> yeild}}` will go the _layout_ template.~~ (not applicable now we don't use templating)
  - give users control of the dimensions object so they can set your own breakpoints, at the moment they remain fixed to the 7 predefined screen sizes
  - make a distinction between phone/tablet devices and laptop/desktop so that window resize events work
  - think of more things to do