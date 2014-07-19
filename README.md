Auto Mocha
=========================
Still in early development stages to install:
```
git clone https://github.com/toastynerd/automocha
npm link
```
Automocha will use mocha to autorun any tests contained within
`./test/automocha/` and end in `-test.js`. Automocha will
then watch all of the test files and any files specified on the
command line for chages and rerun mocha on change.

ex:
`automocha ./lib/**/*.js`
Will run all of the tests found in `./test/automocha` and when any of the
test files change or any of the javascript files in `./lib` change it will
rerun all of the tests. 
