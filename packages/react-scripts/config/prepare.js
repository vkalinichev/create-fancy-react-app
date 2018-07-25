'use strict';

const fs = require('fs');
const path = require('path');
const { appPath } = require('./paths');
const prepareScriptPath = path.resolve(appPath, 'scripts/prepare.js');

if (fs.existsSync(prepareScriptPath)) {
  require(prepareScriptPath);
}
