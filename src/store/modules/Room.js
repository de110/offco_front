import axios from 'axios';

const Room = {
  state: {
    //전체홈
    myRooms: [],
    newRoom: [],
    goRoomId: '',

    // 각 방홈
    roomUsers: [],
    roomName: '',
    roomId: '',
    token: '',
    useToken: '',
    TokenId: '',
  },
  mutations: {
    // initData(state) {
    //   state.myRooms = [];
    // },
    initUserData(state) {
      state.roomUsers = [];
    },
    initNameData(state) {
      state.roomName = '';
    },
    roomList(state, payload) {
      state.myRooms = payload;
    },
    newRoom(state, payload) {
      state.newRoom = payload;
    },
    goRoomId(state, payload) {
      state.goRoomId = payload;
    },
    setRoomName(state, payload) {
      state.roomName = payload;
    },
    setRoomUsers(state, payload) {
      state.roomUsers = payload;
    },
    setRoomId(state, payload) {
      state.roomId = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    useToken(state, payload) {
      state.useToken = payload;
    },
    TokenId(state, payload) {
      state.TokenId = payload;
    },
  },
  actions: {
    async myRoomList({ commit }, payload) {
      const roomList = [];
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8081'}/api/rooms?username=${payload}`)
        .then(res => {
          for (let i = 0; i < res.data.length; i++) {
            roomList[i] = {
              roomName: res.data[i].roomId.roomname,
              roomId: res.data[i].roomId.roomId,
            };
          }
          commit('roomList', roomList);
          return roomList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // async newRoom({ commit }, payload) {
    //   // eslint-disable-next-line prettier/prettier
    //     await axios.post(`${'http://localhost:8081'}/rooms`, payload)
    //     .then(res => {
    //       commit('newRoom', payload);
    //       return res.data;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    async goToRoom({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8081'}/api/rooms?roomname=${payload}`)
        .then(res => {
          commit('goRoomId', res.data.roomId);
          return res.data.id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // room user 설정
    async setUsers({ commit }, payload) {
      const userList = [];
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8081'}/api/roomId?id=${payload}`)
        .then(res => {
          // commit('setRoomId', res.data[0].id);
          // commit('setRoomName', res.data[0].roomname);
          for (let i = 0; i < res.data.length; i++) {
            // console.log("chatMember ", res.data[i].userId, payload);
            userList[i] = res.data[i].userId.username;
            // userList[0] = res.data[0].userId.username;
          }
          commit('setRoomUsers', userList);
          return userList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async setName({ commit }, payload) {
      await axios
        // .get(`${'http://localhost:8081'}/api/room?id=${payload}`)
        .get(`${'http://localhost:8081'}/api/roomId?id=${payload}`)
        .then(res => {
          console.log(res)
          commit('setRoomName', res.data[0].roomId.roomname);
          return res.data.roomname;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // inviteToken({ commit }, payload) {
    //   // eslint-disable-next-line prettier/prettier
    //   axios.patch(`${'http://localhost:8081'}/rooms/${this.getters.RoomId}`, {inviteUrl: payload})
    //     .then(res => {
    //       commit('setToken', payload);
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       // commit('useToken', false);
    //       console.log(err);
    //     });
    // },
    // checkToken({ commit }, payload) {
    //   // eslint-disable-next-line prettier/prettier
    //   axios.get(`${'http://localhost:8081'}/api/invite?inviteUrl=${payload}`)
    //     .then(res => {
    //       console.log(res);
    //       if (res.data[0]) {
    //         commit('useToken', true);
    //         commit('TokenId', res.data[0].id);
    //       } else {
    //         commit('useToken', false);
    //       }
    //     });
    // },
    async RoomMember({ commit }, payload) {
      // const userInfo = {
      //   userId: JSON.parse(localStorage.getItem('user')).userId,
      //   userName: JSON.parse(localStorage.getItem('user')).userName,
      // };
      // eslint-disable-next-line prettier/prettier
      // await axios.get(`${'http://localhost:8081'}/api/users?username=b`)
      //   .then(res => {
      //     console.log("user:", res)
      // const getMember = res.data[0].userId;
      // const newInfo = getMember.concat(userInfo);
      // eslint-disable-next-line prettier/prettier
      axios.get(`${'http://localhost:8080'}/api/nuser?token=${payload.token}`) // 유저 추가
        .then(res => {
          console.log("us:", res, payload);
          commit('setRoomId', payload);
        })
        .catch(err => {
          console.log(err);
        });
      // return res.data;
      // })
      // .catch(err => {
      //   console.log(err);
      // });
    },
  },
  getters: {
    RoomId(state) {
      return state.roomId;
    },
    TokenId(state) {
      return state.TokenId;
    },
  },
};
export default Room;
