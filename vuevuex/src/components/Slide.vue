<template>
  <div class="slide-wraper">
    <ul class="slide">
      <transition-group name="fade">  
        <!-- 动画 用transition-group 套用 -->
        <li v-for="(value,index) in imgs" :key="index" v-show="index ==inow">
          <img :src="value" alt>
        </li>
      </transition-group>
    </ul>
    <ul class="btns">
      <li v-for="(i,index) in imgs.length" :key="index" :class="{active:index == inow}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // imgs: [
        // "http://localhost:8080/img/01.jpg",
        // "http://localhost:8080/img/02.jpg",
        // "http://localhost:8080/img/03.jpg",
        // "https://img3.doubanio.com/lpic/s27102925.jpg",
        // "https://img3.doubanio.com/lpic/s6989253.jpg"
        // "https://img3.doubanio.com/lpic/s6989253.jpg"
      // ],
      inow: 0
    };
  },
  props:['imgs'],
  created() {
    setInterval(() => {
      this.inow++;
      if (this.inow == this.imgs.length) {
        this.inow = 0;
      }
    }, 2000);
  }
};
</script>

<style scoped>
.slide img {
  width: 100%;
  height: 6rem;
}
.slide li{
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    /* display:inline-block; */
}
.btns li {
  z-index: 11;
  width: 0.2rem;
  height: 0.2rem;
  background: #f00;
  border-radius: 50%;
  margin-right: 0.1rem;
  float: left;
}
.btns {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.2rem;
}
.btns li.active {
  background: #ccc;
}
.slide-wraper {
  height: 6rem;
  position: relative;
  overflow: hidden;
}
.fade-enter{
    transform: translateX(100%)
}
.fade-enter-active{
    transition: transform 1s ease;
}
.fade-enter-to{
    transform: translateX(0);
}
.fade-leave{
    transform: translateX(0);
}
.fade-leave-active{
    transition: transform 1s ease;
}
.fade-leave-to{
    transform: translateX(-100%)
}
</style>