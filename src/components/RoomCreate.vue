<template>
    <div>
      <div class="modal" :class="{'active': true }">>
        <div class="overlay" @click="$emit('close')"></div>
            <div class="modal-card">
                <h1>NEW</h1>
                <input placeholder="방 이름을 입력하세요" v-model="roomname" type="text" >
                <span class="addContainer" v-on:click="create">
                <i class="far fa-plus-square add"></i>
                </span>
                <!-- <button v-on:click="cancel">취소</button> -->
                <!-- <button v-on:click="create">생성</button> -->
            </div>
        </div>
      </div>
</template>

<script scoped>
import axios from 'axios';
export default {
    data() {
        return {
            roomname: ""
        }
    },
    created() {
        this.roomname = ''
    },
    methods: {
        // cancel() {
        //    this.$router.push('/create')
        // },
        create() {
            let roominfo = {
                 roomname: this.roomname,
                 manager: JSON.parse(localStorage.getItem("user")).id,
             }
             console.log(roominfo);
             axios.post('http://localhost:8000/api/room', {
              roomname:roominfo.roomname,
              manager:roominfo.manager
              // {
                //  headers: { "Content-Type": `application/json`}
             })
             .then((res)=> {
                 this.createroom(res.data.roomId)
             }).catch((error) => {
                 console.log(error);
             })
        },
        createroom(roomId) {
            this.$store.dispatch('member', {roomId: roomId, manager:true})
            .then((res) => {
                this.$router.push(`/roomhome/${roomId}`)
                console.log(res);
            }).catch((error) => {
                console.log(error);
            })
            this.$emit('close')

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
h1 {
  margin: 4vh auto;
  margin-top: 3vh;
  font-family: 'Gothic A1', sans-serif;
  font-size: 3em;
  font-weight: normal;

}
input {
  width: 70vw;
  height: 6.2vh;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 15px;
}
.addContainer {
  position: relative;
    /* float: right; */
     display: inline-block;

    /* left: 10vh; */
    /* width: 3rem; */
    /* border-radius: 0 5px 5px 0; */
}
.add {
  font-size: 1.9em;
  position: absolute;
  right: 5vw;
  bottom: -0.9vh;

  /* left:40vh;
  top: -4vh; */
}

.modal,
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 88vw;
  margin: auto;
  margin-top: 8vh;
  padding-top: 2vh;
  /* padding: 20px; */
  background-color: rgb(254, 249, 239);
  border-radius: 15px;
  min-height: 40vh;
  z-index: 10;
  opacity: 1;
}

</style>