//Login.vue, SignUp.vue vuex
//여기는 이전 login, signup이랑 동일
import axios from 'axios'
import router from '../../router';

const Login = {
    state: {
        user: null,
        userid: null,
        siguser: null
    },
    mutations: {
        setsiguser(state, payload) {
            console.log("setsignuser", payload)
            state.siguser = JSON.stringify(payload)
            if (payload.setlogin == true) { //로그인 유지가 true이면
                router.push({ name: 'Home', params: { id: payload.sigid } }) //router 이동
            }
        },

        setlogin(state, payload) {
            state.siguser = JSON.stringify(payload)
            router.push({ name: 'Home', params: { id: payload.id } })
        },
    },

    actions: {
        signup({ commit }, payload) {
            axios.post(`${'http://localhost:8000'}/api/signup`, {
                // username: payload.username,
                // usermail: payload.usermail,
                memberId: payload.userid,
                password: payload.userpassword,
                // checkpassword: payload.checkpassword
            }).then((res) => {
                // commit('setsiguser', { username: res.data.username, userid: res.data.uerid })
                commit('setsiguser', { username: res.data.memberId, userid: res.data.memberId })
            }).catch((error) => {
                console.log(error);
            })

        },
        //login.vue에서 login버튼 클릭시
        login({ commit }, payload) {
            // console.log(payload)
            axios.post(`${'http://localhost:8000'}/api/login`, {
                memberId: payload.username,
                password: payload.password,
                setlogin: payload.setlogin
            }).then((res) => {
                commit('setlogin', { sigid: res.data.memberId, sigpw: res.data.password, setlogin: res.data.setlogin, id: res.data.id })
                localStorage.setItem("user", JSON.stringify({ sigid: res.data.memberId, id: res.data.memberId }))
            })
        },
        //로그인 유지
        setlogin({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios.get(`${'http://localhost:8000'}/api/login?id=${payload.userid}`).then((res) => {
                    const set = {
                        sigid: res.data,
                        // sigpw: res.data[0].password,
                        setlogin: payload.setlogin
                        // id: res.data[0].id
                    }
                    commit('setsiguser', set) //mutation에 setsiguser 실행
                    resolve(res);
                }).catch((error) => {
                    reject(error);
                })
            })
        },

    },
    getters: {
        user(state) {
            return state.user
        }
    }
}
export default Login