#!/usr/bin/env node

var program = require('commander')
var cs = require('../lib/cs')

program
  .allowUnknownOption()
  .version('2.1.1')
  .description('CreatShare 互联网实验室前端 Web App 项目脚手架')
  .option('-e, --enjoy')

program
  .command('create <dir>')
  .description('创建一个新的 Web App 项目骨架')
  .action(function (rootDir) {
    cs.create(rootDir)
  })

program.parse(process.argv)
