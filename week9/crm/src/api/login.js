import http from './index'
let that = null;
export function init(_this){
    that = _this;
}
export function login(option){
    return http.post('/user/login',option).then(data=>{
        if(data.code==1){
            that.$alert('用户名密码错误', '提示', {
                confirmButtonText: '确定'
            })
        }
        return data;
    })
}