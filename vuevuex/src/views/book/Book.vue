<template>
  <div>
    <!-- <swipe class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
    </swipe> -->

  <slide :imgs="imgs"></slide>

  </div>
</template>
<script>
require("vue-swipe/dist/vue-swipe.css");
import Slide from  '@/components/Slide.vue'
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  data(){
    return{
         imgs: [
        "http://localhost:8080/img/01.jpg",
        "http://localhost:8080/img/02.jpg",
        "http://localhost:8080/img/03.jpg",
        // "https://img3.doubanio.com/lpic/s27102925.jpg",
        // "https://img3.doubanio.com/lpic/s6989253.jpg"
        // "https://img3.doubanio.com/lpic/s6989253.jpg"
      ],
    }
  },
  components: {
    Swipe,
    SwipeItem,
    Slide
  }
};
</script>

<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background: url(http://localhost:8080/img/01.jpg) no-repeat;
  background-size:100%;
  color: #fff;
}

.slide2 {
  background: url(http://localhost:8080/img/02.jpg) no-repeat;
  background-size:100%;
  color: #000;
}

.slide3 {
  background: url(http://localhost:8080/img/03.jpg) no-repeat;
  background-size:100%;
  color: #fff;
}
</style>