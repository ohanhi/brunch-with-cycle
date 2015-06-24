Brunch with Cycle
==================

This is an example repo showing a working build setup for building [Cycle.js](https://github.com/cyclejs/cycle-core) apps with [Brunch](http://brunch.io/).

## How to try it?

Clone this repo and navigate to the directory on your terminal. Then install dependencies and start watching the source files:

```bash
$ npm install

# ...

$ brunch watch --server
```

## Notes

For now, Brunch does not seem to support npm packages, which are not
directly under node_modules. `import Cycle from '@cycle/core'` does not work with npm enabled - presumably because of the subdirectory.

However, copying the Cycle.js files to the source directory (`app/`) will make the modules available as per usual.



Copyright &copy; Ossi Hanhinen

License: MIT
