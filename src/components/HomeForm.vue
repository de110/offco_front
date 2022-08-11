<template>
  <div>
    <ul>
      <li v-for="room in roomList" :key="room.roomName">
        <router-link
          :to="/roomhome/ + room.roomId"
          tag="span"
          style="cursor: pointer"
        >
          <div class="box">{{ room.roomName }}</div>
        </router-link>
        <hr
          style="width:81vw; height:1px; border:none; background-color:rgba(57, 62, 70, 0.4); margin:2.8vh 0"
        />
      </li>
    </ul>
    <i class="fas fa-plus-circle createroom" @click="createRoom"></i>
    <modal v-show="showModal" :open="showModal" @close="showModal = false">
      <room-create></room-create>
    </modal>
  </div>
</template>

<script>
import RoomCreate from './RoomCreate.vue';
import Modal from './common/Modal.vue';
export default {
  components: {
    RoomCreate,
    Modal,
  },
  data() {
    return {
      roomList: [],
      showModal: false,
    };
  },
  async created() {
    // this.$store.commit('initData');
    await this.$store.dispatch('myRoomList', this.$route.params.id);
    this.roomList = this.$store.state.Room.myRooms;

  },
  methods: {
    createRoom() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
/* div {
  margin: 0 auto;
  font-size: 10px;
  text-align: center;
} */
ul {
  padding-left: 0;
  list-style-type: none;
  text-align: center;
}
li {
  display: inline-block;
}
.box {
  width: 80.9vw;
  height: 8.3vh;
  font-family: 'Gothic A1', sans-serif;
  font-size: 2em;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 15px;
  line-height: 8.8vh;
  margin-bottom: 2.1vh;
  background-color: white;
}
.createroom {
  font-size: 3.5em;
  color: rgb(255, 134, 94);
  left: 32vw;
  position: relative;
  margin-bottom: 3vh;
}
</style>
