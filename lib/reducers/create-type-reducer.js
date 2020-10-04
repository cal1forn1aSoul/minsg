const createFile = require('../actions/create-file');
const pathRegex = require('../util/pathRegex');
const createReactComponent = require('../actions/create-react-component');

module.exports = (path, type) => {  
  path = pathRegex(path);

  switch (type) {
    case 'f':
      createFile(path);
      break;
    case 'fc':
    case 'cc':
      createReactComponent(path, type);
      break;
    default:
      break;
  }
}