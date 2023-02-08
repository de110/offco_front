//AddRoom.vue, Home.vue, Invite.vue, RoomCreate.vue, RoomHome.vue vuex
import axios from 'axios'

const Room = {

    state: {
        siguser: null,
        roomId: null,
        roomTitle: '',
        roomMembers: [],
        userRooms: [],
        Token: null,
        useToken: false,
        TokenId: null,

    },
    mutations: {
        initData(state) {
            state.roomMembers = []
            state.userRooms = []
        },
        setRoomId(state, payload) {
            state.roomId = payload
        },
        setTitle(state, payload) {
            state.roomTitle = payload
        },
        setMembers(state, payload) {
            for (let i = 0; i < payload.length; i++) {
                // console.log(payload[0].memberId.username)
                state.roomMembers.push(JSON.parse(JSON.stringify(payload))[i].memberId)
            }
        },
        setUserRoom(state, payload) {
            state.userRooms.push({ roomname: payload[0].roomname, id: payload[0].roomId })
            console.log(state.userRooms);
        },
        setToken(state, payload) {
            state.Token = payload
        },
        useToken(state, payload) {
            state.useToken = payload
        },
        TokenId(state, payload) {
            state.TokenId = payload
        }

    },
    actions: {
        //방을 만들거나 초대 링크를 수락했을 때
        member({ commit }, payload) {
            axios.post(`${'http://localhost:8000'}/room/${payload.roomId}/user`, {
                memberId: JSON.parse(localStorage.getItem("user")).id
                // room_leader: payload.manager,
            },
                {
                    headers: { "Content-Type": `application/json` }
                })
                .then((res) => {
                    console.log(res);
                    commit('setRoomId', payload.roomId)
                }).catch((error) => {
                    console.log(error)
                })
        },
        // 방별 roomname
        setRoomName({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios.get(`${'http://localhost:8000'}/room/${payload}`)
                    .then((res) => {
                        commit('setTitle', res.data.roomname)
                        commit('setRoomId', payload)
                        resolve(res)
                    }).catch((error) => {
                        reject(error)
                    })
            })
        },
        //방별 username
        setRoomUser({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios.get(`${'http://localhost:8000'}/user?roomId=${payload}`)
                    .then((res) => {
                        commit('setMembers', res.data)
                        resolve(res)
                    }).catch((error) => {
                        reject(error)
                    })
            })
        },
        //1. Home.vue에서 userid를 payload로 받아 해당 user가 등록된 방 체크
        checkRoom({ dispatch }, payload) {
            return new Promise((resolve, reject) => {
                // axios.get(`${'http://localhost:8000'}/user?user.id=${payload}`)
                axios.get(`${'http://localhost:8000'}/api/rooms?username=${payload}`)
                    .then((res) => {
                        // for (let i = 0; i < res.data.length; i++) {
                        //     res.data[i] = res.data[i].roomId
                        //     // } //방 id를 받아
                        // }
                        dispatch('setRoom', res.data)
                        resolve(res)
                    }).catch((error) => {
                        reject(error)
                    })
            })
        },
        //2. 위에서 전달받은 방 id를 payload로 받아 해당방의 정보를 get
        setRoom({ commit }, payload) {
            return new Promise((resolve, reject) => {
                for (let i = 0; i < payload.length; i++) {
                    // axios.get(`${'http://localhost:8000'}/room?id=${payload[i]}`)
                    axios.get(`${'http://localhost:8000'}/api/rooms?roomId=${payload[i].roomId.roomId}`)
                        .then((res) => {
                            commit('setUserRoom', res.data)
                            resolve(res)
                        }).catch((error) => {
                            reject(error)
                        })
                }

            })
        },
        //초대 url을 patch로 url에 추가       
        inviteToken({ commit }, payload) {
            axios.patch(`${'http://localhost:8000'}/room/${this.getters.RoomId}`, { token: payload })
                .then((res) => {
                    commit('setToken', payload)
                    console.log(res);
                }).catch((error) => {
                    console.log(error)
                    commit('useToken', false)
                })
        },
        //해당 초대 링크가 있는지 확인하여 가져옴
        checkToken({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios.get(`${'http://localhost:8000'}/room?token=${payload}`)
                    .then((res) => {
                        if (res.data) {
                            commit('useToken', true)
                            commit('TokenId', res.data)
                        } else {
                            commit('useToken', false)
                        }
                        resolve(res);
                    }).catch((error) => {
                        reject(error)
                    })
            })
        },

    },
    getters: {
        RoomId(state) {
            return state.roomId
        },
        roomTitle(state) {
            return state.roomTitle
        },
        roomMembers(state) {
            return state.roomMembers
        },
        useToken(state) {
            return state.useToken
        },
        TokenId(state) {
            return state.TokenId
        },

    }
}
export default Room
