var reg = /d/;
var reg = new RegExp('\d')
console.log(reg.test('qwert123456')) //false
console.log(reg.test('abcddd123456')) // true
var reg = /\d/;
var reg = new RegExp('\\d')
console.log(reg.test('qwert123456')) //true
console.log(reg.test('abcddd123456')) // true

var reg = /\\d/;
console.log(reg)
console.log(reg.test('qwert123456')) //false
console.log(reg.test('abc\\ddd123456')) // true

var reg = /\w/
console.log(reg.test('..........'));

var reg = /\d?/
console.log(reg.test('asdf123'));//true
var reg = /\d{2}/
console.log(reg.test('fgfds3wer'));
console.log(reg.test('fgfdsw43wer'));//true
console.log(reg.test('fgfds23453wer'));//true


var reg = /^d/
console.log(reg.test('sdfghj'));//false
console.log(reg.test('dsdfghj'));//true



