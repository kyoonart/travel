<template>
    <div class="list"> 
        <ul> 
            <li 
            v-for="item in letters" 
            :key="item"
            @click="handleClick" 
            @touchstart,prevent='handleTouchStart'
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            :ref="item"
            >{{item}}
            </li>  
        </ul>
    </div>
</template>
<script>
export default {
   props:{
       citydata:Object
   },
   data (){
       return {
          touchstate:false,
          startY:0,
          timer:null
       }
   },
   computed:{
       letters() {
           const letters=[]
           for (const key in this.citydata) {
              letters.push(key)
           }
           return letters
       }
   },
   updated(){
   this.startY=this.$refs['A'][0].offsetTop 
   },
   methods:{
       handleClick(e){
         this.$emit('change',e.target.innerText)
       },
       handleTouchStart(){
           this.touchstate=true
       },
       handleTouchMove(e){
           if(this.touchstate){
           if(this.timer){
              clearTimeout(this.timer)
            } 
                this.timer=setTimeout(() => {
                let touchY=e.touches[0].clientY-80  
               let index=Math.floor((touchY-this.startY)/20)
              if(index>=0&&index<=this.letters.length)
               {
                  this.$emit('change',this.letters[index])         
           }
                }, 16);
             
            
       }
       },
       handleTouchEnd(){
     this.touchstate=false
       }
   }
}
</script>
<style scoped>
.list {
    position: absolute;
    top: 1.45rem;
    right: 0;
    width: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%
}
li {
    text-align: center;
    height: .4rem
}
</style>