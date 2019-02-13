<template>
  <div id="app">
    <button @click="prev()">&lt;</button>
    <button @click="gohome()">回到首页</button>
    <button @click="next()">&gt;</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/abc">abc</router-link> |
      <router-link to="/redict/bb/66">Redict</router-link> |
      <!-- <router-link to="/about">About</router-link> | -->
      <router-link to="/about/xx/5">About</router-link> |
      <router-link :to="{name:'mine',params:{name:'zs',id:'001'}}">Mine</router-link>|
      <router-link to="/test">Test</router-link>|
      <router-link to="/xxx">cdddddd</router-link>|
      <router-link to="/count">count</router-link>

    </div>
    <transition name='fade'>

    <router-view/>
    
    </transition>
    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter{
  /* opacity:0;
   */
   transform: translateX(-100%);
}
.fade-enter-active{
  transition:transform 1s ease; 
}
.fade-enter-to{
  /* opacity:1; */
     transform: translateX(0);

}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 2s ease;
}
.fade-leave-to{
  opacity: 0;
}
</style>
<script>
// @ is an alias to /src


export default {
 methods:{
   prev(){
     this.$router.go(-1);
   },
   next(){
     this.$router.go(1);
   },
   gohome(){
     this.$router.push('/');//编程式导航
   }
 }
}
</script>
