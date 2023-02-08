<template>
  <div>
      <div class="top">
          offco<i class="fas fa-sign-out-alt out" v-on:click="out"></i>
      </div>

      <div class="back">
          <h1>전체</h1>
          <hr style= "width:81vw; height:1px; border:none; background-color:rgb(162, 210, 255); margin-bottom:6vh">
          <ul>
          <li v-for="roomlist in roomlists" v-bind:key="roomlist.roomname">
            <router-link :to="/roomhome/ + roomlist.id" tag="span" style="cursor: pointer">
              <div class="box">{{roomlist.roomname}}</div>
            </router-link>
            <hr style= "width:81vw; height:1px; border:none; background-color:rgba(57, 62, 70, 0.4); margin:2.8vh 0">
          </li>
          </ul>
          <i class="fas fa-plus-circle createroom" v-on:click="create"></i>
      </div>
      <RoomCreate v-show="showModal" v-bind:open="showModal" @close="showModal=false"></RoomCreate>
  </div>
</template>

<script>
import RoomCreate from './RoomCreate.vue'
export default {
    components: {
        RoomCreate
    },
    data() {
        return {
        roomlists: [],
        userid: '',
        showModal: false
        }
    },
    created() {
        this.$store.commit('initData')
        this.userid = JSON.parse(localStorage.getItem("user")).id
        this.$store.dispatch('checkRoom', this.userid)
        console.log(this.$store.state.userRooms);
        this.roomlists = this.$store.state.Room.userRooms
        console.log(this.roomlists);
    },
    methods: {
        create() {
            this.showModal = !this.showModal;
            // this.$router.push('/create')
        },
        out() {
            localStorage.removeItem('user')
            this.$router.push('/login')
        }
    },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
div {
    margin: 0 auto;
    font-size: 10px;
    background-color: rgb(254, 249, 239);
    text-align: center;
    /* width : 100vw; */
    height : 100vh;
    /* position: relative; */
}
ul {
    width: 81vw;
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
}
li {
    margin-left: 0vh ;
}

.top {
    /* width: 100vw; */
    height: 9vh;
    background-color: rgb(255, 134, 94);
    font-size: 5.3vh;
    color: white;
    font-family: 'Kite One', sans-serif;
    text-align: center;
    padding-left: 3vw;
}
.box {
    width: 80.9vw;
    height: 8.3vh;
    font-family: 'Gothic A1', sans-serif;
    font-size: 2em;
    text-align: center;
    border: 1px solid rgb(57, 62, 70);
    border-radius: 15px;
    line-height: 8.8vh;
    margin-bottom: 2.1vh;
    position: relative;
    background-color: white;
    margin: 0;
}
.createroom {
    font-size: 3.5em;
    color: rgb(255, 134, 94);
    left: 32vw;
    position: relative;
    margin-bottom: 3vh;
}
.back {
    width:91vw;
    /* height: 87vh; */
    border: 1px solid rgb(255, 134, 94);
    border-radius: 15px;
    background-color: white;
    margin: 0;
    position: relative;
    margin: 1.6vh auto;
}
h1 {
    color: rgb(162, 210, 255);
    font-size: 1.8em;
    font-family: 'Gothic A1', sans-serif;
    margin: 1.7vh 0;
    font-weight: lighter;
}
.out {
    position: absolute;
    left: 84vw;
    top: 2vh;
}
.icon {
    margin-top: 2vh;
}

</style>