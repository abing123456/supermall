<template>
  <tab-bar>
     <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/icon/shouye.png" alt="">
        <img slot="item-icon-active" src="~assets/img/icon/shouye-active.png" alt="">
        <div slot="item-text">首页</div>
     </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="~assets/img/icon/fenlei.png" alt="">
        <img slot="item-icon-active" src="~assets/img/icon/fenlei-active.png" alt="">
        <div slot="item-text">分类</div>
       </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/icon/gouwuche.png" alt="">
        <img slot="item-icon-active" src="~assets/img/icon/gouwuche-active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="~assets/img/icon/wode.png" alt="">
        <img slot="item-icon-active" src="~assets/img/icon/wode-active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
  
<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import tabBarItem from 'components/common/tabbar/tabBarItem'
  
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      tabBarItem
    }
  }
</script>
 
<style scoped>
 
</style>