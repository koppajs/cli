#!/usr/bin/env node
const program = require('commander');
const command_create = require('../src/create.js');

program
    .command('create <name>')
    .description('Create a new Koppa.js based project.')
    .action(command_create);

program.parse(process.argv);
