// webshot.js   https://www.actzero.jp/developer/report-20203.html      http://blog.honjala.net/entry/blog/2015/05/05/post-539/
const webshot = require('webshot');
const link = 'https://af.nari19.me/border_stem/BorderStem.svg?a=HELLO%20WORLD&b=burdensome%20tasks..';
webshot( link,'../activeframe2.png', function(err) {});