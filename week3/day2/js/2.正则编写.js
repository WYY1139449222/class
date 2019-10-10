//匹配有效数字
//可以有正负号
//可以有小数
//正数部分不能以0开头

// // var reg = /^(\d|-|+)\d*|[.]{,1}/
// var reg = /^[-+]?([1-9]\d*|0)([.]\d+)?$/

// console.log(reg.test('0123'));
// console.log(reg.test('10123'));
// console.log(reg.test('-10123'));
// console.log(reg.test('+10123'));
// console.log(reg.test('+10.123'));
// console.log(reg.test('+10..123'));
// console.log(reg.test('0.123'));

// //====================匹配手机号

// //手机号 1开头 3456789

// var reg = /^1[3456789]\d{9}$/

// //3================QQ 邮箱的验证

// //至少5位

// var reg = /^[0-9]\d{4,9}@qq\.com)$/i

// var reg = /^[a-zA-Z]\w{5,17}$/
// // 4 ==============   密码  8-18； 既有大写 又有小写； 还得有数字
// function judge(str){
//     if(str.length>18|| str.length<8)return fasle
//     if(!/[A-Z]/.test(str))return false
//     if(!/[a-z]/.test(str))return false
//     if(!/\d/.test(str))return false
//     return true

    // if(str.length>=8 && str.length<=18 &&/[A-Z]/.test(str)&&/[a-z]/.test(str)&&/\d/.test(str) ){
    //     return true
    // }
    // return false
// }
//一个8-10位数的字符串 必须带有大写 小写 数字
var str = 'qwerta1A'
var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
console.log(reg.test(str));
//匹配一个18到65之间的数字
var reg = /^(1[89]|[2-5]\d|6[0-5])$/
