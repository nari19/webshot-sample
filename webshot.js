// webshot.js   
// https://github.com/okfn/webshot
// http-server -o
// node webshot.js
const webshot = require('webshot');

const link = 'https://af.nari19.me/color_label/ColorLabel2.svg?a=ACTIVE-FRAME';

const name = 'lddbdsa';
const path = '../../../../Downloads/' + name + '.png';
const options = {
  timeOut: 8000,
  renderDelay: 3
};
webshot(link,path,options, function(err) {});
