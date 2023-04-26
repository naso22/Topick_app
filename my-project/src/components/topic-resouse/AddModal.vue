<template>
   <transition name="modal">
      <div class="modal">
         <div class="modal-body">
            <div class="modal-close" @click="modalClose()">×</div>
            <div class="modal-content">
               <div class="modal-topic">
                  <ul v-for="topic_item in topic" :key="topic_item">
                     <li><span>{{topic_item}}</span>
                        <span @click="deleteItem(index)"
                              class="command">[☓]</span></li>
                  </ul>

               </div>
               <div class="add_area">
                  <input type="text" id="add_form" placeholder="話題" ref="titleInput">
                  <button class="add_button" value="追加" @click="clickBtn1()">追加</button>
               </div>
            </div>
         </div>
      </div>
   </transition>
</template>

<script>
export default {
props:['topic','Addresource',],
   data(){
   return{
      localTopic: this.topic,
      localOpen: this.modalOpen

   }
   },
   methods:{
      clickBtn1 () {
         const topicTitle =this.$refs.titleInput.value
         this.Addresource(topicTitle)
      },

      deleteItem(index){
         this.localTopic.splice(index, 1);
      },

      modalClose(){
         this.$emit('update-modal', false)

      }
   }
}

</script>

<style scoped>

.modal {
   position: absolute;
   top: 0; right: 0; bottom: 0; left: 0;
   background-color: rgba(0,0,0,.5);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   transition: opacity 0.3s ease;

}




.modal-content{
   background: #ececec;
   padding: 10px;
}

.modal-topic{
   font-weight: bold;
   height: 40vh;
   overflow-y: scroll;
   padding: 10px;
}


.modal-close{
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   top: -40px;
   right: -40px;
   width: 40px;
   height: 40px;
   font-size: 40px;
   color: #242424;
   cursor: pointer;

}
.modal-body{
   position: relative;
   max-width: 600px;
   width: 80%;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
   transition: all 0.3s ease;

}

.add_area{
   display: flex;
   justify-content: center;
   width: 100%;
}

input{
   width:80%;
}

.add_button{
   width: 20%;
   height: 30px;
}


.command{

   cursor: pointer;
   color: crimson;
}

li{
   display: flex;
   justify-content:space-between
}

.modal-enter-from {
   opacity: 0;
}

.modal-leave-to {
   opacity: 0;
}

.modal-enter-from .modal-body,
.modal-leave-to .modal-body {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
}
</style>