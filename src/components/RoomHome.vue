<template>
  <div>
    <ul v-for="user in users" :key="user">
      <li>
        <h2><i class="fas fa-user-circle user"></i>&nbsp;&nbsp;{{ user }}</h2>
      </li>
    </ul>
    <button class="invite" @click="invite">
      멤버초대&nbsp;<i class="fas fa-plus"></i>
    </button>
    <modal v-show="showModal" :open="showModal" @close="showModal = false">
      <invite></invite>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';
import Invite from './Invite.vue';
export default {
  components: {
    Modal,
    Invite,
  },
  data() {
    return {
      users: [],
      showModal: false,
    };
  },
  async created() {
    // this.$store.commit('initUserData');
    await this.$store.dispatch('setUsers', this.$route.params.id);
    this.users = this.$store.state.Room.roomUsers;
  },
  methods: {
    invite() {
      this.showModal = !this.showModal;
    },
  },
};
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
  margin-left: 4vh;
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
