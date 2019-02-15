<template>
  <div class="container">
    <ul>
      <li v-for="(obj,index) in movieList" :key="index">
        <img :src="obj.images.small" alt>
        <div class="info">
          <h4 class="title-name">{{obj.title}}</h4>
          <p class="actor-name">主演：
            <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}/</span>
          </p>
          <p>{{obj.collect_count}}人已观看</p>
          <p>上映年份：{{obj.year}}</p>
          <p>类型：
            <span v-for="(type,index) in obj.genres" :key="index">{{type}}|</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios"
    export default {
      data(){
        return  {
          movieList:[],
          }
      },
      created() {
       this.getMovie()
   
      window.onscroll = ()=>{
        //滚动条高度
        console.log(document.documentElement.scrollTop);
        //页面可视高度
        console.log(document.documentElement.clientHeight);
        //整个滚动条的页面总高度
        console.log(document.documentElement.scrollHeight);
          if(document.documentElement.scrollTop+document.documentElement.clientHeight==document.documentElement.scrollHeight){
              this.getMovie();
          }
      }

    },
    methods: {
      getMovie(){
       Axios.get("/movie"+this.movieList.length+".json")
      // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?start="+this.movieList.length+"&count=10")
      .then((message)=>{
        console.log(message);
        this.movieList = [...this.movieList,...message.data.subjects];
      })
      .catch();
      }
    },
    }
    
</script>

<style scoped>
.container {
  padding: 0.2rem;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li {
  display: flex;
  border-bottom: 1px solid #000;
}
li img {
  width: 90px;
  height: 123px;
}
.info {
  flex-grow: 1;
  margin-left: 0.2rem;
}

</style>