<template>
    <div>
<aplayer  :music="musicList[0]" :list="musicList" v-if="isShow"  showLrc=""/>
    </div>
</template>
<script>
import Aplayer from 'vue-aplayer';
import Axios    from 'axios'
    export default {
        data(){
            return {
                musicList:[],
                isShow:false
            }
            
        },
    
        components:{
            Aplayer
        },
        created() {

             Axios.get("/data/musicdata.json")
            .then((result)=>{
             result.data.musicData.forEach(obj=>{
                        let obj1 ={
                            title:obj.title,
                            artist:obj.author,
                            src:obj.src,
                            pic:obj.musicImgSrc,
                            lrc:`http://localhost:8080/${obj.lrc}`
                        }
                        this.musicList.push(obj1);
                });
                this.isShow = true;
            })
            .catch();
        },
    }
</script>

<style scoped>

</style>