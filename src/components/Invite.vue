<template>
  <div>
    <h1>초대 링크</h1>
    <input
      v-model="inviteurl"
      placeholder="해당 링크로 초대하세요."
      type="text"
    />
    <button @click="createInviteToken">
      click&nbsp;<i class="fas fa-link"></i>
    </button>
  </div>
</template>

<script>
import { inviteToken } from '@/api/index.js';
export default {
  data() {
    return {
      token: null,
      inviteurl: '',
    };
  },
  computed: {
    invitetoken() {
      return this.token;
    },
  },
  watch: {
    invitetoken(val) {
      this.inviteurl = `http://localhost:8080/roomhome/n/${val}`;
    },
  },
  methods: {
    createInviteToken() {
      this.token =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15);
      inviteToken({ token: this.token, id: this.$route.params.id });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
h1 {
  margin-top: 8vh;
  font-family: 'Gothic A1', sans-serif;
  font-size: 3em;
  font-weight: normal;
}
input {
  /* margin-top: 3vh; */
  width: 70vw;
  height: 6.2vh;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 15px;
}
button {
  margin: 2vh auto;
  margin-left: 50vw;
  font-size: 1.5em;
  width: 22vw;
  height: 6vh;
  border: 1px solid rgb(57, 62, 70);
  color: white;
  border-radius: 15px;
  background-color: rgb(57, 62, 70);
}
</style>
