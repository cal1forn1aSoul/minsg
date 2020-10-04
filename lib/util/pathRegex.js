const { fgb, Reset } = require('../util/colors');
module.exports = (path) => {
  if (path.includes('//')) {
    console.log(`${fgb.Red}failed${Reset} path contains illegal section: '${fgb.Magenta}//${Reset}'.`);
    process.exit(1);
  }

  if (path.slice(-1) === '/') {
    return path.slice(0, -1);
  }

  return path;
}
