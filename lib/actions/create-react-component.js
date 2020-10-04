const fs = require('fs');
const capitalize = require("../util/capitalize");
const { fgb, Reset } = require('../util/colors');
const cc = require('../Templates/react/classBased');
const fc = require('../Templates/react/functional');
const sc = require('../Templates/react/style');

module.exports = (path, type) => {
  if (path.includes('/')) {
    generateNestedComponent(path, type);
  } else {
    generateStandaloneComponent(path, type);
  }
}

const generateStandaloneComponent = (path, type) => {
  let file = capitalize(path);
  if (!fs.existsSync(file)) {
    fs.mkdirSync(file);
    fs.writeFile(`${file}/${file}.js`, `${determineComponentType(type, file)}`, err => {
        if (err) console.log(err);
      });
    fs.writeFile(`${file}/${file}.module.css`, `${sc(file)}`, err => {
      if (err) console.log(err);
    });
    successMessage(file)
  } else {
    failMessage(path);
  }
}

const generateNestedComponent = (path, type) => {
  let temp = path.split('/');    
  let component = capitalize(temp.pop());

  temp = temp.join('/');   
  
  fs.mkdirSync(temp + '/' + component, { recursive: true });

  generateComponent(temp + '/' + component, component, type);
};

const generateComponent = (path, file, type) => {
  if (!fs.existsSync(file)) {
    fs.writeFile(`${path}/${file}.js`, `${determineComponentType(type, file)}`, err => {
        if (err) console.log(err);
      });
    fs.writeFile(`${path}/${file}.module.css`, `${sc(file)}`, err => {
      if (err) console.log(err);
    });

    successMessage(file);
  } else {
    failMessage(path);
  }
}

const successMessage = (file) => {
  console.log(`${fgb.Green}created${Reset} ${fgb.White}${file}${Reset} Folder.`);
  console.log(`${fgb.Green}created${Reset} ${fgb.Yellow}${file}.js${Reset} File.`);
  console.log(`${fgb.Green}created${Reset} ${fgb.Cyan}${file}.module.css${Reset} File.`);
}

const failMessage = (path) => {
  console.log(`${fgb.Red}failed${Reset} Component ${fgb.Cyan}${capitalize(path)}${Reset} already exists.`);
}

const determineComponentType = (type, file) => {
  return type === 'fc' ? fc(file) : cc(file);
}