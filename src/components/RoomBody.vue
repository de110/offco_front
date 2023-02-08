<template>
  <div>
        <h1 class="title">{{roomTitle}}</h1>
        <h3 class="navbar">
            <router-link :to= "/roomhome/ + this.id" tag="span" class="color">홈</router-link>
            <router-link :to= "/chathome/ + this.id" tag="span" class="color">채팅</router-link>
            <router-link :to= "/calendar/ + this.id" tag="span" class="color">일정</router-link>
        </h3>

  </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            id: null,
            showModal: false,
            userid:null
        }
    },
    created() {
        this.$store.commit('initData')
        this.id = this.$route.params.id
        // console.log(this.id);
        this.$store.dispatch('setRoomName', this.id)
        this.$store.dispatch('setRoomUser', this.id)
        this.users = this.roomMembers
    },
    computed: {
        roomTitle() {
            return this.$store.getters.roomTitle
        },
        roomMembers() {
            return this.$store.getters.roomMembers
        }
    },
    methods: {
        invite() {
             this.showModal = !this.showModal;
            // this.$router.push('./invite')
        },
        out() {
            this.userid = JSON.parse(localStorage.getItem("user")).id;
            console.log(this.id);
            this.$router.push('/room/'+ this.userid)
        }
    }

}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
div {
    background-color: white;
}
.title {
    margin: 1.9vh auto;
    width: 84vw;
    height: 7.6vh;
    color: white;
    background-color: rgb(255, 134, 94);
    text-align: center;
    font-size: 1.8em;
    font-family: 'Kite One', sans-serif;
    /* margin: 1.7vh 0; */
    font-weight: lighter;
    position: relative;
    line-height: 8vh;
    border-radius: 15px;
}
.back {
    width:91vw;
    height: 87vh;
    border: 1px solid rgb(162, 210, 255);
    border-radius: 15px;
    background-color: white;
    margin: 0;
    position: relative;
    margin: 1.6vh auto;
}
.color {
    color: rgb(57, 62, 70);
}
.color:hover {
    color: rgb(255, 134, 94);
}

</style>