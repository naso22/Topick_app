<template>
<div class="wroper">
<topic-resource :topic="topic" :random="random"></topic-resource>
    <div class="btn">
        <div class=" flex-center">
            <base-button @click="runSlot()">回す</base-button>
            <base-button @click="stopSlot()">止める</base-button>
            <base-button @click="modalSelect()">話題を追加</base-button>
            <teleport to="body" >
            <add-modal :topic="topic" :Addresource="addResources" v-if="modalOpen" v-model="modalOpen"></add-modal>
            </teleport>

        </div>
    </div>
    </div>
</template>

<script>
import TopicResource from './TopicResource.vue';
import AddModal from "./AddModal.vue";
export default {
components:{
    TopicResource,
    AddModal
},
    data(){
    return{
        modalOpen:false,
        random: 0,
        timers: 0,
        topic:[
            '好きな食べ物の話',
            '地元や出身地の話',
            '可愛い動物の動画',
            '天気の話',
            '黒歴史',
            'テレビやドラマの話',
            '共通の友達の話',
            'スーパーマリオゲーム',
            '初恋のお話',
            '最近面白かった話',
            'お互いの第一印象の話',
            '学生時代や幼少期の話',
            '「もしも〇〇だったら」の話',
            'ウンコ味のカレーVSカレー味のウンコ',
            'Wordウルフ',
            '人狼ゲーム',
        ],
    }
    },
    methods:{
    runSlot(){
        this.random = Math.floor(Math.random() * this.topic.length);
        this.timers = setTimeout(() => { this.runSlot() }, 20,);
    },

        stopSlot() {
            clearTimeout(this.timers);
        },

        modalSelect(){
        this.modalOpen = true;
        },

        addResources(topic){
        const newTopic = topic;
        this.topic.push(newTopic)
        }


    }
}
</script>

<style scoped>

.flex-center{
    text-align: center;
}

.wroper {
    background-color: rgb(255, 208, 0);
}


.btn {
    height: 20vh;
}


@media screen and (max-width:553px) {

    /* ----------------------- */
    /* base_sp
      /* ----------------------- */
    .fv {
        font-size: 50px;
    }

    .btn-item {
        margin: 10px;
    }

    .header {
        letter-spacing: 3px;
        margin-top: 5px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }


}

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