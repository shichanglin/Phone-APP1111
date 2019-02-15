<template>
  <div id="app">
    <c-head :obj="obj"></c-head>
    <div id="contant">
      <router-view></router-view>
    </div>
    <c-footer :menu="menu" @changeBg="object" :color="obj.bgcolor"></c-footer>
  </div>
</template>
    <script>
// import '@/assets/js/rem.js'
import {mapMutations} from 'vuex';
import CHead from "@/components/CHeader.vue";
import CFooter from "@/components/CFooter.vue"; //@代表src
export default {
  data() {
    //避免组建之间相互干扰
    return {
      menu: [
        {
          path: "/movie",
          name: "电影",
          bgcolor: "#ffcc32"
        },
        {
          path: "/music",
          name: "音乐",
          bgcolor: "yellow"
        },
        {
          path: "/book",
          name: "图书",
          bgcolor: "pink"
        },
        {
          path: "/photo",
          name: "图片",
          bgcolor: "#ffc435"
        }
      ],
    };
  },
  components: {
    //定义组建
    CHead,
    CFooter
  },
  methods:mapMutations(["change"]),
  created() {
    console.log(this.$route.path);
    let result = this.menu.filter((obj, index) => {
      return obj.path == this.$route.path;
    });
    if (result.length) {//如果数组中匹配到了  才修改obj的值 否则用obj的默认值
      this.change(result[0]);
    }
  } 
};
</script>
<style>
#contant {
  margin: 1rem 0;
}
</style>
