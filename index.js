#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');

program.version('1.0.2', '-v --version')
    .command('new <projectName>')
    .action((projectName) => {
        console.log('clone template ...');
        download('github:zhique-design/zhique-front-template', projectName, function (err) {
            console.log(err ? 'Error' : 'Success')
        })
    });
program.parse(process.argv);