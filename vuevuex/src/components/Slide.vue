<template>
  <div class="slide-wraper">
    <ul class="slide">
      <li v-for="(value,index) in imgs" :key="index" v-show="index ==inow">
        <img :src="value" alt>
      </li>
    </ul>
    <ul class="btns"> 
        <li v-for="(i,index) in imgs.length" :key="index"  :class="{active:index == inow}">
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "https://img3.doubanio.com/lpic/s24468373.jpg",
        "https://img3.doubanio.com/lpic/s27102925.jpg",
        "https://img3.doubanio.com/lpic/s6989253.jpg",
        // "https://img3.doubanio.com/lpic/s6989253.jpg"
      ],
      inow: 0
    };
  },
  created() {
    setInterval(() => {
      this.inow++;
      if (this.inow == this.imgs.length) {
        this.inow = 0;
      }
    }, 1000);
  }
};
</script>

<style scoped>
.slide img {
  width: 100%;
  height: 6rem;
}
.btns li {
    z-index: 11;
    width:0.2rem;
    height:0.2rem;
    background: #f00;
    border-radius: 50%;
    margin-right:0.1rem;
    float: left;

}
.btns {
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom: 0.2rem;

}
.btns li.active{

    background: #0f0;

}
.slide-wraper{
    position: relative;

}
</style>