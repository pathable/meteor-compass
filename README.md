Compass for Meteor
==================

[Compass](http://compass-style.org/) **0.13.alpha.4** packaged for [Meteor](https://www.meteor.com)

## Install

1. Make sure to add SASS support to your meteor app:

```bash
$ meteor add fourseven:scss
```

2. From within your Meteor app's directory:

```bash
$ meteor add pathable:compass
```

## Usage

Simply import any Compass mixin at the top of your sass file

```scss
@import "{pathable:compass}/compass";
```

Or if you want to only use one submodule

```scss
@import "{pathable:compass}/compass/reset";
```

## Notes

Versions 0.6.0 and onwards are only compatible with Meteor 1.2 or above
