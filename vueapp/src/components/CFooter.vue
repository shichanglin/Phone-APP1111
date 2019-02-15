<template>
    <div class="footer" :style="{background:color}">
       <ul>
           <!-- <router-link to="/movie">电影</router-link> -->
           <li v-for="(obj,index) in menu" :key="index"   > 
               <router-link :to="obj.path" @click.native="change(obj)" >{{obj.name}}</router-link>
               <!-- //加：是为了取到元素 -->
            </li>
       </ul>
    </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex';
    export default {
       props:["menu"],
       computed: mapState(["color","name"]),
       methods: mapMutations(["change"])      
        
    }
</script>

<style scoped>

    .footer{
        position: fixed;
        bottom:0;
        left: 0;
        height:1rem ;
        background:#ff0036;
        width: 100%;
    }
    .footer ul{
        display:flex;
    }
    li{
        flex-grow:1;
        color: #fff;
        text-align: center;
        line-height: 1rem;
    }
    .footer a{
        outline: none;
        color: black
    }
    .footer a.router-link-active{
        color:#fff;
    }

</style>