<template>
  <div>
    <h1>count页面</h1>
    <!-- <h1>计数器：{{$store.state.count}}</h1> -->
    <p>{{$store.state.count}}</p>
    <p>{{count}}</p>
    <p>{{a}}</p>
    <p>sum的值是：{{sum}}</p>
    <button @click="$store.commit('add',2)">add</button>
    <button @click="add(3)">add</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex';//{}用来解构

    export default {
        // computed: {//计算属性接收
        //     count(){
        //         return this.$store.state.count
        //     }
        // },
        computed:{
            ... mapState(['count','a']),//map映射出计算属性
            ... mapGetters(["sum"])//...扩展运算符
        } ,


        methods:mapMutations(["add"])   //计算值
        
    }
</script>

<style scoped>
</style>