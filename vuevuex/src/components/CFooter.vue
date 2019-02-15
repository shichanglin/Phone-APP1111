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
    export default {
        data(){
            return {
             
            }

        },
        props:["menu",'color'],
        methods: {
            change(obj){
              
                this.$emit('changeBg',obj)

                //1、 从app.vue中定义名为changeBg的事件定义color方法用来接收footer传递的bg
                //2、header.vue  props:["bgc"] 接收从app的bgc
            }
        }, 
        // 父组件向子组件  props
        // 子组件向父组件传值  $emit('事件','参数')


        
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