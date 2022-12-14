<template>
  <div>
    <div class="top">
      <i class="fas fa-arrow-left left" @click="back"></i>offco
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
    };
  },
  methods: {
    back() {
      // this.userId = JSON.parse(localStorage.getItem('user')).userId;
      console.log(JSON.parse(localStorage.getItem('user')));
      this.$router.push('/home/' + this.userId);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
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
.left {
  left: 4vw;
  top: 2vh;
  position: absolute;
}
</style>
