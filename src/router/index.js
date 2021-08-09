import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router =new VueRouter({
    routes:[
        {
            path:'/',
    redirect:"/find"
},
    {
        path:"/register",
        name:"Register",
component:()=>import("../views/register")
},
 {
     path:"/login",
     name:"Login",
component:()=>import("../views/login")
},
{
     path:"/find",
     name:"Find",
component:()=>import("../views/find")
},{
     path:"/boke",
     name:"Boke",
component:()=>import("../views/boke")
},
{
     path:"/mine",
     name:"Mine",
component:()=>import("../views/mine")
},
{
     path:"/kge",
     name:"Kge",
component:()=>import("../views/kge")
},
{
     path:"/yuncun",
     name:"Yuncun",
component:()=>import("../views/yuncun")
},
    ],
    linkActiveClass:"active",
})
export default router;