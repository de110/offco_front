import axios from 'axios'
// import router from '../../router';

const Chat = {
    state: {
        ChatId: null,
        userChats: [],

    },
    mutations: {
        initChat(state) {
            state.userChats = []
        },
        setChatId(state, payload) {
            state.ChatId = payload
        },
        setUserChat(state, payload) {
            // console.log(payload)
            state.userChats.push({ chatname: payload.chatname, id: payload.id })
            // console.log(state.userRooms);
        },

    },
    actions: {
        chatmember({ commit }, payload) {
            axios.post(`${'http://localhost:8000'}/chat/${payload.chatId}/chatuser`,
                {
                    chatuser: JSON.parse(localStorage.getItem("user")),
                    chat_leader: payload.manager,
                    homeId: payload.homeId
                },
                {
                    headers: { "Content-Type": `application/json` }
                }).then((res) => {
                    console.log(res);
                    commit('setChatId', payload.chatId)
                }).catch((error) => {
                    console.log(error)
                })
        },
        checkChat({ dispatch }, payload) {
            return new Promise((resolve, reject) => {
                axios.get(`${'http://localhost:8000'}/chatuser?userid=${payload.userid}&&homeId=${payload.homeid}`)
                    .then((res) => {
                        console.log(res.data);
                        for (let i = 0; i < res.data.length; i++) {
                            res.data[i] = res.data[i].chatId
                        } //방 id를 받아
                        dispatch('setChat', res.data)
                        // console.log(res.data);
                        resolve(res)
                    }).catch((error) => {
                        reject(error)
                    })
            })
        },
        //2. 위에서 전달받은 방 id를 payload로 받아 해당방의 정보를 get
        setChat({ commit }, payload) {
            return new Promise((resolve, reject) => {
                for (let i = 0; i < payload.length; i++) {
                    axios.get(`${'http://localhost:8000'}/chat?id=${payload[i]}`)
                        .then((res) => {
                            console.log(res.data);
                            commit('setUserChat', res.data)
                            resolve(res)
                        }).catch((error) => {
                            reject(error)
                        })
                }

            })
        },

    },
    getters: {

    }
}
export default Chat