// webshot.js   https://www.actzero.jp/developer/report-20203.html      http://blog.honjala.net/entry/blog/2015/05/05/post-539/
// http-server -o
// node webshot.js
const webshot = require('webshot');

var jikan= new Date();
const year = jikan.getFullYear();
const month = jikan.getMonth()+1;
const week = jikan.getDay();
const day = jikan.getDate();
const hour = jikan.getHours();
const minute = jikan.getMinutes();
const second = jikan.getSeconds();

const link = 'https://af.nari19.me/border_stem/BorderStem3.svg';

const name1 = 'borders_stem3.png';
const path1 = '../' + name1;
webshot(link,path1, function(err) {});

// const name2 = 'illust_suit.svg';
// const path2 = '../' + name2;
// webshot(link,path2, function(err) {});