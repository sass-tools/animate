Animate Sass
============

> This Sass library is an adaptation from:
  <br/>Animate.css - http://daneden.me/animate
  <br/>Licensed under the MIT license - http://opensource.org/licenses/MIT
  <br/>Copyright (c) 2014 Daniel Eden
  <br/><br/>prefixes has being removed (in order get an smaller file and being compiled with autoprefixer)

[DEMO](http://sasslets.github.io/animate/)

``` sass
@import animate

// *: required, ?: optional
// @include animate(animation-name*, duration? , timing-function? )

@include animate('flash')
@include animate('pulse')
@include animate('rubber-band')
@include animate('shake')
@include animate('swing')
@include animate('tada')
@include animate('wobble')

@include animate('bounce-in')
@include animate('bounce-in-down')
@include animate('bounce-in-left')
@include animate('bounce-in-right')
@include animate('bounce-in-up')

@include animate('bounce-out')
@include animate('bounce-out-down')
@include animate('bounce-out-left')
@include animate('bounce-out-right')
@include animate('bounce-out-up')

@include animate('fade-in')
@include animate('fade-in-down')
@include animate('fade-in-down-big')
@include animate('fade-in-left')
@include animate('fade-in-left-big')
@include animate('fade-in-right')
@include animate('fade-in-right-big')
@include animate('fade-in-up')
@include animate('fade-in-up-big')

@include animate('fade-out')
@include animate('fade-out-down')
@include animate('fade-out-down-big')
@include animate('fade-out-left')
@include animate('fade-out-left-big')
@include animate('fade-out-right')
@include animate('fade-out-right-big')
@include animate('fade-out-up')
@include animate('fade-out-up-big')

@include animate('flip')
@include animate('flip-in-x')
@include animate('flip-in-y')
@include animate('flip-out-x')
@include animate('flip-out-y')

@include animate('lightspeed-in')
@include animate('lightspeed-out')

@include animate('rotate-in')
@include animate('rotate-in-down-left')
@include animate('rotate-in-down-right')
@include animate('rotate-in-up-left')
@include animate('rotate-in-up-right')

@include animate('rotate-out')
@include animate('rotate-out-down-left')
@include animate('rotate-out-down-right')
@include animate('rotate-out-up-left')
@include animate('rotate-out-up-right')

@include animate('hinge')

@include animate('roll-in')
@include animate('roll-out')

@include animate('zoom-in')
@include animate('zoom-in-down')
@include animate('zoom-in-left')
@include animate('zoom-in-right')
@include animate('zoom-in-up')

@include animate('zoom-out')
@include animate('zoom-out-down')
@include animate('zoom-out-left')
@include animate('zoom-out-right')
@include animate('zoom-out-up')

@include animate('slide-in-down')
@include animate('slide-in-left')
@include animate('slide-in-right')
@include animate('slide-in-up')

@include animate('slide-out-down')
@include animate('slide-out-left')
@include animate('slide-out-right')
@include animate('slide-out-up')
```
