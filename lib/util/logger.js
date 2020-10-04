const { fgb, Reset } = require('../util/colors');

module.exports = (propmt, message = null, target, cause = null, destination) => {
  let baseMessage = `${prompt === 'failed' ? fgb.Red : fgb.Green}${prompt}${Reset} `;
  switch (propmt) {
    case 'moved':
      baseMessage.concat(`file from ${fgb.Blue}${target}${Reset} to ${fgb.Magenta}${destination}${Reset}`);
    break;
    case 'created':
      break;
    case 'failed':
      baseMessage.concat(`${message}${error.message}`);
    break;
    default:
      break;
  }
}
