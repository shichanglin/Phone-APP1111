<template>
  <div v-if="isA" >
    电影详情页
    {{$route.params.movieId}} 
    {{movieDetail.title}}
    <img :src="movieDetail.images.small"/>

    <!-- {{movieDetail.MovieDetailModel.img}} -->
  </div>
</template>
<script>
import Axios from 'axios'
  export default {
    data(){
     return{
        movieDetail:{},
        isA:false     
     }


    },
    created() {
      // Axios.get(`https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`)
       Axios.get("/data/moviedetail.json")
      // Axios.get(`https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`)
      .then((result)=>{
        this.movieDetail = result.data;
        this.isA =true
      })
      .catch()
    },
  }
</script>
<style scoped>

</style>