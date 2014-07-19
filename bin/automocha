#!/usr/bin/env node

var AutoMocha = require('../lib/automocha');

files = [];
for(var i = 2; i < process.argv.length; i++) {
  files.push(process.argv[i]);
}
var automocha = new AutoMocha(files);
automocha.run();
