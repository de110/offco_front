<template>
  <div>
          <ul>
              <hr style= "width:81vw; height:1px; border:none; background-color:rgba(57, 62, 70, 0.4); margin:2.8vh 0">
          <li v-for="chatlist in chatlists" v-bind:key="chatlist.chatname">
            <router-link :to="/chat/ + chatlist.id" tag="span" style="cursor: pointer">
              <h1><i class="fas fa-users"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{chatlist.chatname}}</h1>
              <!-- <h1>
                  <div class="userbox">
                  </div>
                  {{chatlist.chatname}}
              </h1> -->
            </router-link>
            <hr style= "width:81vw; height:1px; border:none; background-color:rgba(57, 62, 70, 0.4); margin:2.8vh -7.1vw">
          </li>

          </ul>
       <!-- <hr style= "width:100%; height:1px; border:none; background-color:rgb(255, 134, 94)"> -->
       <i class="fas fa-plus-circle createchat" v-on:click="create"></i>
       <ChatCreate v-show="showModal" v-bind:open="showModal" @close="showModal=false"></ChatCreate>
  </div>
</template>

<script>
import ChatCreate from './ChatCreate.vue'
export default {
    components: {
        ChatCreate
    },
    data() {
        return {
            showModal: false,
            chatlists: [],
            userid: '',
            homeid: ''

        }
    },
    created() {
        this.init()
        this.userid = JSON.parse(localStorage.getItem("user")).id,
        this.homeid = this.$route.params.id

        this.$store.dispatch('checkChat', {userid: this.userid, homeid: this.homeid})
        this.chatlists = this.$store.state.Chat.userChats
    },
    methods: {
        init() {
            this.$store.commit('initChat')
        },
        create() {
            this.showModal = !this.showModal;
        },

    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
h1 {
    font-size: 2em;
    font-family: 'Gothic A1', sans-serif;
    color: rgb(57, 62, 70);
}
/* div {
    margin: 0 auto;
    font-size: 10px;
    background-color: white;
    text-align: center;
    width : 100vw;
    height : 65vh;
    position: relative;
} */
.createchat {
    font-size: 3.5em;
    color: rgb(255, 134, 94);
    left: 32vw;
    position: relative;
    margin-bottom: 3vh;
}
.fa-users {
    /* margin: 1 auto; */
    font-size: 1.5em;
    color: rgb(57, 62, 70);
}
/* .userbox {
    padding-top: 1;
    width:45px;
    height:45px;
    border: 1px solid rgb(57, 62, 70);
    border-radius: 15px;
    display: inline;
} */

</style>