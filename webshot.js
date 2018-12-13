// webshot.js   
// https://www.actzero.jp/developer/report-20203.html      
// http://blog.honjala.net/entry/blog/2015/05/05/post-539/
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
