<template>
  <div>
    <div class="top">
      offco<i class="fas fa-sign-out-alt out" @click="out"></i>
    </div>
    <div class="back">
      <h1>전체</h1>
      <hr
        style="width:81vw; height:1px; border:none; background-color:rgb(162, 210, 255); margin-bottom:6vh"
      />
      <home-form></home-form>
    </div>
  </div>
</template>

<script>
import HomeForm from '@/components/HomeForm.vue';
export default {
  components: {
    HomeForm,
  },
  methods: {
    createRoom() {
      this.showModal = !this.showModal;
    },
    out() {
      localStorage.removeItem('user');
      // this.$store.commit('logOut');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
div {
  margin: 0 auto;
  font-size: 10px;
  text-align: center;
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
.back {
  margin: 1.6vh auto;
  width: 91vw;
  border: 1px solid rgb(255, 134, 94);
  border-radius: 15px;
  background-color: white;
  position: relative;
  overflow: auto;
}
.back::-webkit-scrollbar {
  width: 5px; /*스크롤바의 너비*/
}

.back::-webkit-scrollbar-thumb {
  background-color: rgb(255, 134, 94); /*스크롤바의 색상*/
  border-radius: 60px;
}

.back::-webkit-scrollbar-track {
  background-color: rgba(255, 134, 94, 0); /*스크롤바 트랙 색상*/
  border-radius: 60px;
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
</style>
