Compass for Meteor
==================

## Install

1. Make sure to add sass support to your meteor app:

```bash
meteor add fourseven:scss
```

2. From within your Meteor app's directory:

```bash
meteor add francocatena:compass
```

## Usage

1. Simply import Compass at the top of your sass file (*Currently working on a way to provide a less verbose import command*):

```scss
@import ".meteor/local/build/programs/server/assets/packages/francocatena_compass/compass"
```

---

**Important Note** (*working on addressing this*)

Because Meteor will attempt to compile you app's local stylesheets prior to
copying the server assets directory, the first time you run the app after
installing the package your app will complain that it is unable to find it.
For the moment this can be resolved by either stopping and restarting the app,
at which point you should no longer get this error message, our running
`touch` on you local stylesheet thats attempting to access the package, triggering a reload.
