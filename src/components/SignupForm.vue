<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <input
          class="sign-form"
          type="text"
          placeholder="이름"
          v-model="username"
        />
      </div>
      <div>
        <input
          class="sign-form"
          type="text"
          placeholder="이메일"
          v-model="usermail"
        />
        <template v-if="this.usermail != '' && !isEmailValid">
          <div>
            <p>이메일 형식이 올바르지 않습니다</p>
          </div>
        </template>
      </div>
      <div>
        <input
          class="id-form"
          type="text"
          placeholder="아이디"
          v-model="userid"
        />
        <button class="id-check" @click.prevent="idCheck">중복확인</button>
      </div>
      <p>{{ idmessage }}</p>
      <div>
        <input
          class="sign-form"
          type="password"
          placeholder="비밀번호"
          v-model="userpassword"
        />
      </div>
      <div>
        <input
          class="sign-form"
          type="password"
          placeholder="비밀번호 확인"
          v-model="checkpassword"
        />
      </div>
      <template
        v-if="
          this.userpassword != '' &&
            this.checkpassword != '' &&
            this.userpassword != this.checkpassword
        "
      >
        <div>
          <p>비밀번호를 다시 확인해주세요</p>
        </div>
      </template>
      <button class="signup-button" type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import { signUp } from '@/api/index.js';
export default {
  data() {
    return {
      username: '',
      usermail: '',
      userid: '',
      userpassword: '',
      checkpassword: '',
      idmessage: '',
      pwmessage: '',
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.usermail);
    },
  },
  methods: {
    async idCheck() {
      await this.$store.dispatch('checkId', this.userid);
      this.idmessage = this.$store.state.LoginSignup.idMessage;
    },
    submitForm() {
      // eslint-disable-next-line prettier/prettier
      if(this.userid !=''&&this.$store.state.LoginSignup.useId == false) {
        alert('아이디 중복확인을 해주세요');
      } else if (this.userpassword != this.checkpassword) {
        alert('비밀번호를 다시 확인해주세요');
      } else if (
        this.username == '' ||
        this.usermail == '' ||
        this.userid == '' ||
        this.userpassword == ''
      ) {
        alert('입력란이 비어있습니다');
      } else {
        const newUser = {
          username: this.username,
          usermail: this.usermail,
          userid: this.userid,
          userpassword: this.userpassword,
        };
        signUp(newUser);
        // this.$store.dispatch('signUp', newUser);
        alert(`${this.username} 님이 가입되었습니다.`);
        this.$router.push('./login');
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
div {
  font-size: 10px;
  background-color: white;
  text-align: center;
  position: relative;
}
input {
  position: relative;
  display: inline-block;
  justify-content: space-between;
}
p {
  font-size: 1.6em;
  font-family: 'Gothic A1', sans-serif;
  /* border: 1px solid rgba(57, 62, 70, 100);
  width: 82vw;
  height: 6.1vh; */
}
.sign-form {
  display: inline-block;
  position: relative;
  width: 82vw;
  height: 6.1vh;
  margin-left: 0;
  margin-bottom: 1.15em;
  border: 1px solid rgba(57, 62, 70, 100);
  /* border-radius: 0px; */
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
.id-form {
  display: inline-block;
  position: relative;
  justify-content: space-between;
  width: 57vw;
  height: 6.1vh;
  margin-bottom: 1.15em;
  border: 1px solid rgba(57, 62, 70, 100);
  /* border-radius: 0px; */
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
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
.id-check {
  display: inline-block;
  justify-content: flex-end;
  font-family: 'Gothic A1', sans-serif;
  font-size: 1.5em;
  width: 25vw;
  height: 6.9vh;
  border: 1px solid rgb(255, 134, 94);
  border-radius: 15px;
  background-color: white;
  color: rgb(255, 134, 94);
  left: 70vw;
  top: -1.5vh;
}
</style>
