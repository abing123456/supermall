import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')


//安装插件
Vue.use(VueRouter)

//创建router
const routes = [

] 
const router = new VueRouter({

})

export default router