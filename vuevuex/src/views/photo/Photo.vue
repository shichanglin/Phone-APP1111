<template>
    <div class="photo">
       <img  v-for="(photoSrc,index) in $store.state.photos" :key='index' :src='photoSrc.src'  @click="go(index)" alt="">
    </div>
</template>
<script>
import Axios from 'axios';
    export default {
        data(){ 
            return {
                // photo:[]
            }
        },    
        created() {
            Axios.get('/data/photodata.json')
            .then((result)=>{
                console.log(result)
                // this.photo = [...result.data.photoData]
                this.$store.commit('addPhoto',result.data.photoData)
            })
        },
        methods: {
            go(index){
                this.$router.push('/photodetail/'+index)
            }
        },
    }
</script>

<style scoped>
   .photo img{
        width:50%;
    }
</style>
