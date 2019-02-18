<template>
  <div class="container">
    <ul>
      <li v-for="(obj,index) in movieList" :key="index" @click="goDetail(obj.id)">

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
    <img class="loding"  v-show="isLoding" src="@/assets/imgs/loading.gif">
    <div class="footer" v-show="isFooter">到底了</div>
  </div>
</template>

<script>
import Axios from "axios"
    export default {
      data(){
        return  {
          movieList:[],
          isLoding:false,
          isFooter:false
          }
      },
      created() {
         this.getMovie()
   
          window.onscroll = ()=>{
        //滚动条高度
        // console.log(document.documentElement.scrollTop);
        //页面可视高度
        // console.log(document.documentElement.clientHeight);
        //整个滚动条的页面总高度
        // console.log(document.documentElement.scrollHeight);
          if(document.documentElement.scrollTop+document.documentElement.clientHeight==document.documentElement.scrollHeight && !this.isFooter){
              this.getMovie();
          }
      }

    },
    methods: {
      getMovie () {
                // 豆掰接口的访问方式
                this.Loding = true;
                // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start="+this.movieList.length+"&count=10")
                // 本地json模拟
                Axios.get("/movie"+this.movieList.length+".json")
                .then((result)=>{
                    // 如果请求本地的接口  可以用定时器做个延迟显示，方便查看loading效果啊
                    // setTimeout(()=>{
                    //     ...
                    // },1000)
                    this.movieList = [...this.movieList,...result.data.subjects];
                    this.Loding = false;
                    if(this.movieList.length == result.data.total){
                        this.isFooter = true;
                    }
                })
                .catch();
            },
      goDetail(id){
        this.$router.push('/moviedetail/'+id)

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
.container .loding{
       position: fixed;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        width:1rem;
        height:1rem;
}
</style>