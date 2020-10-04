const generateBoilerplate = require('./create-type-reducer');
const removeTarget = require('../actions/remove');
const moveTarget = require('../actions/move-file');
const { fgb, Reset } = require('../util/colors');

module.exports = (cmd, type, path, destination) => {
  switch (cmd) {
    case 'g':
      generateBoilerplate(path, type);
      break;
    case 'mv':
      moveTarget(path, destination);
      break;
    case 'rm':
      removeTarget(path);
      break;
    default:
      console.log(`${fgb.Red}failed${Reset} '${fgb.Cyan}${cmd}${Reset}' is not a recognized action.`);
      process.exit(1);
  }
};