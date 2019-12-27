import http from './http'

export function judgeLogin(){
    return http.get('/user/login').then(data=>{
        return data.code==0
    })
}

//请求部门列表数据
export function  getDpList(){
    return http.get('/department/list')
}

//删除部门列表的某个数据
export function delDpList(departmentId){
    return http.get('/department/delete',{
      params:{departmentId}
    })
}
//新增部门信息
export function addDpList(option){
    return http.post('/department/add',option)
}

//更新部门

export function undateDpList(option){
    return http.post('/department/update',option)
}
//获取用户列表
export function getUserList(option){
    return http.get('/user/list',{
        params:option
    })
}
//获取职务列表
export function getJobList(){
    return http.get('/job/list')
}
//新增员工
export function addUser(option){
    return http.post('/user/add',option)
}
//删除员工

export function delUser(userId){
    return http.get('/user/delete',{
        params:{
            userId
        }
    })
}
//编辑员工信息
export function changeUser(option){
    return http.post('/user/update',option)
}
//获取职务信息
