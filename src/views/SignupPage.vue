<template>
  <div>
    <h1>offco</h1>
    <i class="fas fa-times  cancel" @click="cancel"></i>
    <hr
      style="width:100%; height:2px; border:none; background-color:rgb(255, 134, 94)"
    />
    <h2>회원가입</h2>
    <signup-from></signup-from>
  </div>
</template>

<script>
import SignupFrom from '../components/SignupForm.vue';
export default {
  components: {
    SignupFrom,
  },
  methods: {
    cancel() {
      this.$router.replace('./login');
    },
  },
};
</script>

<style scoped>
div {
  font-size: 10px;
  background-color: white;
  text-align: center;
  /* margin: auto 0; */
  /* width: 100vw; */
  /* height: 100vh; */
  position: relative;
}

h1 {
  display: inline-block;
  font-family: 'Kite One', sans-serif;
  font-weight: lighter;
  color: rgb(255, 134, 94);
  font-size: 3em;
  width: 22vw;
  height: 7vh;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
}
h2 {
  display: inline-block;
  font-family: 'Kite One', sans-serif;
  font-weight: normal;
  color: rgb(255, 134, 94);
  font-size: 18px;
  width: 25vw;
  height: 6vh;
  margin: 0;
}
.cancel {
  /* display: flex; */
  position: absolute;
  color: rgb(255, 134, 94);
  font-size: 3em;
  /* margin-left: auto; */
  margin-top: 0.5em;
  margin-bottom: 0.2em;
  left: 85%;
  /* width: 55vw; */
}
</style>
