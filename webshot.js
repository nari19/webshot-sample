// webshot.js   https://www.actzero.jp/developer/report-20203.html      http://blog.honjala.net/entry/blog/2015/05/05/post-539/
// http-server -o
// node webshot.js
const webshot = require('webshot');

const link = 'https://af.nari19.me/few_lines/FewLines2.svg?a=This%20moist%20Lemon%20Cake%20Recipe%20is%20fluffy,&b=tangy%20and%20so%20easy%20to%20make%20from%20scratch!&c=Every%20bite%20of%20this%20supremely%20moist%20pound&d=cake%20is%20bursting%20with%20fresh%20lemon%20flavor&e=and%20the%20easy%20lemon%20glaze%20on%20top%20will%20have&f=you%20hooked%20after%20just%20one%20bite.';

const name = 'optionacvd';
const path = '../' + name + '.png';
const options = {
  timeOut: 8000,
  renderDelay: 0
};
webshot(link,path,options, function(err) {});
