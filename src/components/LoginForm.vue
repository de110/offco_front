<template>
<div>
    <form action="/api/login" method="post" @submit="submitForm">
    <!-- <form action="/api/login" @submit.prevent="submitForm" method="post"> -->
    <!-- <label for="username" class="sr-only">User name</label> -->
    <!-- <input type="text" name="username" id="username" class="form-control" placeholder="User name" required autofocus > -->
    <input class="form" type="text" name="username" id="username" placeholder="아이디" v-model="username"/>
    <!-- <label for="inputPassword" class="sr-only">Password</label> -->
    <!-- <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required> -->
    <input class="form" type="password" name="password" placeholder="비밀번호" v-model="password" method="post" @keyup.enter="submitForm()"/>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me </label>
    </div>
    <!-- <button class="btn btn-lg btn-primary btn-block" type="submit" @click="submitForm">Sign in</button> -->
    <button class="login-button" type="submit"> LOGIN </button>
    <button class="signup-button" @click="signUp">회원가입</button>

  </form>
</div>
</template>

<script>
import axios from 'axios';
// import VueCookies from 'vue-cookies'
export default {
  data() {
    return {
      // setlogin: false,
      username: '',
      password: '',
    };
  },
  created() {
    // const username = localStorage.getItem('username');
    // if (username) {
    // }
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch('login', this.username);
      // const userId= this.$store.state.LoginSignup.nowuserId;
      
      axios.post(`http://localhost:8081/api/login?username=`, {
        username:this.username,
        // token:VueCookies.set("cookie","test")
        // password:this.password
      }).then(res=>{
        console.log("login:",res);
        this.$router.push(`/home/a`);
      });

      
      // await this.$store.dispatch('login', this.username);
      // const userId=this.$store.state.LoginSignup.nowuserId;

    },
    signUp() {
      this.$router.replace('./signup');
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
h2 {
  margin-left: auto;
  margin-right: 2em;
  font-weight: lighter;
  font-family: 'Gothic A1', sans-serif;
  font-size: 1.3em;
  width: 28.1vw;
  height: 2.63vh;
  margin-top: 2.31em;
}
.form {
  display: inline-block;
  width: 82vw;
  height: 6.1vh;
  margin-left: 0;
  margin-bottom: 1.15em;
  border: 1px solid rgba(162, 210, 255, 100);
  border-radius: 15px;
}
.login-button {
  font-family: 'Gothic A1', sans-serif;
  font-size: 2.6em;
  width: 82vw;
  height: 9vh;
  border: rgb(28, 31, 34);
  border-radius: 15px;
  background-color: rgb(162, 210, 255);
  color: rgb(57, 62, 70);
  margin-top: 0.8em;
  margin-bottom: 0.8em;
}
.signup-button {
  font-family: 'Gothic A1', sans-serif;
  font-size: 2.6em;
  width: 82vw;
  height: 9vh;
  border: 1px solid rgb(255, 134, 94);
  border-radius: 15px;
  background-color: white;
  color: rgb(255, 134, 94);
  margin-top: 0.8em;
}
</style>
