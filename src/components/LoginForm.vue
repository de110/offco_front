<template>
  <div>
    <form @submit.prevent="submitForm">
      <!-- <h2>로그인 유지<input type="checkbox" v-model="setlogin" /></h2> -->
      <div>
        <input class="form" type="text" placeholder="아이디" v-model="userId" />
      </div>
      <div>
        <input
          class="form"
          type="password"
          placeholder="비밀번호"
          v-model="userpassword"
          @keyup.enter="submitForm()"
        />
      </div>
      <button class="login-button" type="submit">
        LOGIN
      </button>
    </form>
    <!-- <h3><router-link to="/findid">아이디 찾기</router-link>&nbsp;&nbsp;&nbsp; | <router-link to="/findpw">&nbsp;&nbsp;&nbsp;비밀번호 찾기</router-link></h3> -->
    <button class="signup-button" @click="signUp">회원가입</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // setlogin: false,
      userId: '',
      userpassword: '',
    };
  },
  created() {
    // const username = localStorage.getItem('username');
    // if (username) {
    // }
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch('login', this.userId);
      const userId= this.$store.state.LoginSignup.nowuserId;
      this.$router.push(`/home/${userId}`);
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
