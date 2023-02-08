<template>
  <div>
      <div class="modal" :class="{'active': true }">>
        <div class="overlay" @click="$emit('close')"></div>
            <div class="modal-card">
                <h1>INVITE</h1>
                <input v-model="inviteurl" placeholder="해당 링크로 초대하세요." type="text">
                <button v-on:click="createinvitetoken">click&nbsp;<i class="fas fa-link"></i></button>
            </div>
      </div>
  </div>
  
</template>

<script>
export default {
    data() {
        return {
            token:null,
            inviteurl: "",
        }
    },
    computed: {
        invitetoken() {
            return this.token
        }  
    },
    watch: {
        invitetoken (val) {
            this.inviteurl = `http://localhost:8080/room/n/${val}`
        }
    },
    methods: {
        createinvitetoken() {
            this.token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            this.$store.dispatch('inviteToken', this.token)
        }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
h1 {
  margin-top: 13vh;
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
.modal,
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 88vw;
  margin: auto;
  margin-top: 8vh;
  padding-top: 2vh;
  /* padding: 20px; */
  background-color: rgb(254, 249, 239);
  border-radius: 15px;
  min-height: 60vh;
  z-index: 10;
  opacity: 1;
}
</style>