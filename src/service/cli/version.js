'use strict';

const chalk = require(`chalk`);
const jsonFile = require(`../../../package.json`);

module.exports = {
  name: `--version`,
  run() {
    const version = jsonFile.version;
    console.info(chalk.blue(version));
  }
};

