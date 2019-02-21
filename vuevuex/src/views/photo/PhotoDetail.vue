<template>
  <div>
    <!-- {{photos[$route.params.index]}} -->
    <router-link to="/photo" v-if="isShow">
      <v-touch v-on:swipeleft="next()" v-on:swiperight="last()"   class="bg" :style="{backgroundImage:'url('+ photos[iNow].src +')'}"></v-touch>
      <!-- <div class="bg" :style="{backgroundImage:'url('+ photos[$route.params.index].src +')'}"></div> -->
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Vue from "vue";
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });

export default {
  data() {
    return {
      isShow:false,
      iNow: this.$route.params.index
    };
  },
  computed: {
    ...mapState(["photos"])
  },
  created() {
      if(this.photos.length == 0){
          this.$router.push('/photo')
      }else{
          this.isShow =true
      }
  },
  methods: {
    next() {
      this.iNow++;
      if(this.iNow == this.photos.length){
          return this.iNow = 0;
      }
    },
    last() {
      this.iNow--;
      if(this.iNow == -1){
          return this.iNow=0;
      }
    }
  }
}
</script>

<style scoped>
.bg {
  position: absolute;
  top: 1rem;
  left: 0px;
  bottom: 1rem;
  right: 0px;
  background: #000 no-repeat center;
  background-size: contain;
}
</style>