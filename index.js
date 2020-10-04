#!/usr/bin/env node
const main = require('./lib/reducers/command-reducer');

const [command, target, path, destination] = process.argv.slice(2);

main(command,  target, path, destination);