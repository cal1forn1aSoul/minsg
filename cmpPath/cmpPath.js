const { fgb, Reset } = require('../colors/colors.js');
const createComponent = require('../create/react-components/createComponent');
const createNestedComponent = require('../create/react-components/createNestedComponent');
const createFile = require('../create/file/createFile');
const createNestedFile = require('../create/file/createNestedFile');

module.exports = (path, type) => {
  console.log(path, type, 'in here');
  
  checkPath(path, type);
  // if (type === 'f') {
  //   if (path.includes('//')) {
  //     console.log(`${fgb.Red}failed${Reset} path contains illegal section: '${fgb.Magenta}//${Reset}'.`);
  //     process.exit(1);
  //   }

  //   if (!path.includes('/')) {
  //     createFile(path, type)
  //   } else {
  //     createNestedFile(path, type);
  //   }
  // } else {
  //   if (path.includes('//')) {
  //     console.log(`${fgb.Red}failed${Reset} path contains illegal section: '${fgb.Magenta}//${Reset}'.`);
  //     process.exit(1);
  //   }

  //   // check if is single component
  //   if (!path.includes('/')) {
  //     createComponent(path, type)
  //   } else {
  //     createNestedComponent(path, type);
  //   }
  // }
};

const checkPath = (path, type) => {
  if (path.includes('//')) {
      console.log(`${fgb.Red}failed${Reset} path contains illegal section: '${fgb.Magenta}//${Reset}'.`);
      process.exit(1);
    }

    if (!path.includes('/')) {
      type === 'f' ? createFile(path, type) : createComponent(path, type);
    } else {
      type === 'f' ? createNestedFile(path, type) : createNestedComponent(path, type);
    }
}


