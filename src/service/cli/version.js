'use strict';

const jsonFile = require(`../../../package.json`);

module.exports = {
  name: `--version`,
  run() {
    const version = jsonFile.version;
    console.info(version);
  }
};

