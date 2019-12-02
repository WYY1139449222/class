export default [
    {
        path:'/my',
        name:'my',
        component:() => import(/* webpackChunkName: "login" */ '@/components/customer/my')

    },
    {
        path:'/addCustomer',
        name:'addCustomer',
        component:() => import(/* webpackChunkName: "login" */ '@/components/customer/add')
    },
    {
        path:'/add',
        name:'add',
        component:() => import(/* webpackChunkName: "login" */ '@/components/customer/all')
    }
]