const fs = require('fs')
const { fgb, Reset } = require('../util/colors');

module.exports = file => {
  if (!fs.existsSync(file)) {
    file.includes('/') ? fs.mkdirSync(file, { recursive: true }): fs.mkdirSync(file);

    console.log(`${fgb.Green}created${Reset} ${fgb.White}${file}${Reset} Folder ${file.includes('/') ? `(${fgb.Cyan}&${Reset} chain)` : ''}.`);
  } else {
    console.log(`${fgb.Red}failed${Reset} ${fgb.White}Folder${Reset} ${fgb.Cyan}${file}${Reset} already exists.`);
  }
}