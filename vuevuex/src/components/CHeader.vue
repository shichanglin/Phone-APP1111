<template>
    <div>
        <header :style="{background:obj.bgcolor}">
           
                <span class="goHome"> 
                    首页
                </span>
            {{obj.name}}
        </header>
    </div>
</template>
<script>
    export default {
        props:["obj"],
      
        
    }
</script>

<style scoped>
header{
    background:#ff0036;
    height: 1rem;
    position: fixed;
    top:0;
    left: 0;  
    width: 100%;
    text-align:center;
    line-height: 1rem;
    color:#fff;
}
.goHome{
    position: absolute;
    left: 0.1rem;
    top:50%;
    transform: translateY(-50%);
}

</style>