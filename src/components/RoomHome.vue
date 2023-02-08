<template>
  <div>
      <ul>
          <li v-for="user in users" v-bind:key="user">
             <h2>
                 <i class="fas fa-user-circle user"></i>&nbsp;&nbsp;{{user}}
             </h2>
          </li>
            </ul>
            <button class="invite" v-on:click="invite">멤버초대&nbsp;<i class="fas fa-plus"></i></button>
            <invite v-show="showModal" v-bind:open="showModal" @close="showModal=false"></invite>
  </div>
</template>

<script>
import Invite from './Invite.vue'
export default {
    components: {
       Invite
    },
    data() {
        return {
            users: [],
            id: null,
            showModal: false,
            userid:null
        }
    },
    created() {
        this.$store.commit('initData')
        this.id = this.$route.params.id
        console.log("id:",this.id);
        this.$store.dispatch('setRoomName', this.id)
        this.$store.dispatch('setRoomUser', this.id)
        this.users = this.roomMembers
    },
    computed: {
        roomTitle() {
            return this.$store.getters.roomTitle
        },
        roomMembers() {
            return this.$store.getters.roomMembers
        }
    },
    methods: {
        invite() {
             this.showModal = !this.showModal;
            // this.$router.push('./invite')
        },
        out() {
            this.userid = JSON.parse(localStorage.getItem("user")).id;
            console.log(this.id);
            this.$router.push('/room/'+ this.userid)
        }
    }


}
</script>

<style scoped>
ul {
    width: 81vw;
    margin: 0 auto;
    padding-left: 0px;
    list-style-type: none;
    text-align: left;
}
li {
    margin-left: 4vh ;
}
h2 {
    margin: 4vh auto;
    font-size: 1.9em;
    font-weight: 400;
    font-family: 'Kite One', sans-serif;
}
.invite {
    padding: 0;
    width: 36.3vw;
    height: 6.5vh;
    border: none;
    border-radius: 20px;
    background-color: rgb(255, 134, 94);
    color: white;
    font-size: 1.8em;
     font-family: 'Kite One', sans-serif;
    left: 22vw;
    /* font-weight: 600; */
    position: relative;
}
</style>