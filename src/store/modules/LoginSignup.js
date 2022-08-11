import axios from 'axios';

const LoginSignup = {
  state: {
    //   회원가입
    idMessage: '',
    useId: '',
    username: '',
    // 로그인
    nowUserId: '',
    nowUserName: '',
  },
  mutations: {
    checkIdMessage(state, payload) {
      state.idMessage = payload.message;
      state.useId = payload.useId;
    },
    // setUser(state, payload) {
    //   state.userName = payload;
    // },
    loginUserId(state, payload) {
      // state.nowUserId = payload;
      state.username = payload;

    },
    loginUserName(state, payload) {
      state.nowUserName = payload;
    },
    logOut(state) {
      state.nowUserId = '';
    },
  },
  actions: {
    async checkId({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8081'}/signup?userId=${payload}`)
        .then(res => {
          if (res.data == false) {
            const message = {
              message: '사용가능한 아이디입니다',
        //       useId: true,
            };
            commit('checkIdMessage', message);
            return message;
          } else {
            const message = {
              message: '이미 사용중인 아이디입니다',
        //       useId: false,
            };
            commit('checkIdMessage', message);
            return message;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // signUp({ commit }, payload) {
    //   // eslint-disable-next-line prettier/prettier
    //   axios.post(`${'http://localhost:8000'}/signup`, payload)
    //     .then(res => {
    //       commit('setUser', res.data.username);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    async login({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8081'}/login?userId=${payload}`)
      // await axios.get(`${'http://localhost:8081'}/login`)
        .then(res => {
          commit('loginUserId', res.data);
          // // commit('loginUserName', res.data[0].username);
          // localStorage.setItem(
          //   'user',
          //   JSON.stringify({
          //     userId: res.data[0].id,
          //     username: res.data[0].username,
          //   }),
          // );
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  getters: {
    loginUserId(state) {
      return state.username;
    },
    loginUserName(state) {
      return state.nowUserName;
    },
  },
};
export default LoginSignup;
