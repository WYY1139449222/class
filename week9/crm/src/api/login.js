import http from './http'
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
        }else if(data.code==0){
            localStorage.setItem('power',data.power)
        }
        return data;
    })
}
export function signout(){
    return http.get('/user/signout')
}