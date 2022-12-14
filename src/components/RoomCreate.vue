<template>
  <div>
    <h1>방 만들기</h1>
    <input placeholder="방 이름을 입력하세요" v-model="roomname" type="text" />
    <span class="addContainer" @click="create">
      <i class="far fa-plus-square add"></i>
    </span>
  </div>
</template>

<script>
import { newRoom } from '@/api/index.js';
// import VueCookies from 'vue-cookies';
export default {
  data() {
    return {
      roomname: '',
      // userId:''
      // user:''
    };
  },
  methods: {
    async create() {
      const roomInfo = {
        roomname: this.roomname,
        // user:this.user
        // user: "a"
        // users: [
        //   {
            // JSON.parse(localStorage.getItem('userId')),
            // userName: JSON.parse(localStorage.getItem('user')).userName,
          // },
        // ],
        // inviteUrl: {},
      };
      // this.userId = 
      // console.log("cookie)
      await newRoom(roomInfo);
      await this.$store.dispatch('goToRoom', this.roomname);
      this.$router.push(`/roomhome/${this.$store.state.Room.goRoomId}`);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
h1 {
  margin: 6vh auto;
  font-family: 'Gothic A1', sans-serif;
  font-size: 3em;
  color: rgb(57, 62, 70);
}
input {
  width: 70vw;
  height: 6.2vh;
  padding-left: 5vw;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 15px;
}
.addContainer {
  position: relative;
  display: inline-block;
}
.add {
  font-size: 1.9em;
  position: absolute;
  right: 5vw;
  bottom: -1vh;
}
</style>
