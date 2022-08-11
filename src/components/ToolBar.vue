<template>
  <div>
    <h1 class="title">{{ roomHeader }}</h1>
    <div class="navbar">
      <router-link :to="/roomhome/ + this.id">홈</router-link>
      <router-link :to="/chathome/ + this.id">채팅</router-link>
      <router-link :to="/calendar/ + this.id">일정</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      roomHeader: '',
    };
  },
  async created() {
    await this.$store.dispatch('setName', this.$route.params.id);
    this.id = this.$route.params.id;
    this.roomHeader = this.$store.state.Room.roomName;
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
.title {
  margin: 1.9vh auto;
  width: 84vw;
  height: 7.6vh;
  color: white;
  background-color: rgb(255, 134, 94);
  text-align: center;
  font-size: 1.8em;
  font-family: 'Gothic A1', sans-serif;
  position: relative;
  line-height: 8vh;
  border-radius: 15px;
}
.navbar {
  font-size: 1.8em;
  font-family: 'Gothic A1', sans-serif;
  font-weight: 600;
  vertical-align: middle;
  justify-content: space-around;
  display: flex;
}
</style>
