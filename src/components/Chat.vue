<template>
  <div>
      <div class="top">
          <i class="fas fa-arrow-left left" v-on:click="out"></i>
          offco
      </div>
      <div class="back">
        <!-- <div class="bottom"> -->
          <hr style= "width:81vw; height:1px; border:none; background-color:rgba(57, 62, 70, 0.4);">
          <span class="bt">
            <input type="text" v-model="msg">
            <span class="addContainer">
            <i class="fas fa-plus-square add" v-on:click="send"></i>
            </span>
          </span>
        <!-- </div> -->

      </div>
      <!-- <h3>유저이름: {{ item.user.id }}</h3> -->
      <!-- <h3>내용: {{ item.content }}</h3> -->
  </div>
</template>

<script>
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
export default {
    data() {
        return {
            userid: null,
            recvList: [],
            msg: '',
            user: ''
        }
    },
    created() {
      this.user = JSON.parse(localStorage.getItem("user")).sigid
        this.connect()
    },

  methods: {
    connect() {
      const serverURL = "/ws"
      let socket = new SockJS(serverURL);
      this.stompClient = Stomp.over(socket);
      console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`)
      this.stompClient.connect(
        {},
        frame => {
          // 소켓 연결 성공
          this.connected = true;
          console.log('소켓 연결 성공', frame);
          // 서버의 메시지 전송 endpoint를 구독합니다.
          // 이런형태를 pub sub 구조라고 합니다.
          this.stompClient.subscribe("http://localhost:8000/sub/chat/room", res => {
            console.log('구독으로 받은 메시지 입니다.', res.body);
            // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
            this.recvList.push(JSON.parse(res.body))
          });
        },
        error => {
          // 소켓 연결 실패
          console.log('소켓 연결 실패', error);
          this.connected = false;
        }
      );
    },
    send() {
      if(this.user !== '' && this.msg !== '') {
        if (this.stompClient && this.stompClient.connected) {
        const msg = {
          sender: this.user,
          message: this.msg
        };
        this.stompClient.send("/pub/chat/message", JSON.stringify(msg), {});
      }
      this.message = ''
      }
    },
    out() {
      this.$router.go(-1);
      // this.$router.push('/chathome/'+this.userid)
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
div {
    margin: 0 auto;
    font-size: 10px;
    background-color: rgb(254, 249, 239);
    text-align: center;
    /* width : 100vw; */
    height : 100vh;
    position: relative;
}
input {
  width: 80vw;
  height: 7vh;
  border: 1px solid rgba(57, 62, 70, 0.4);
  border-radius: 15px;
  /* background-color:rgba(57, 62, 70, 0.4); */

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
  font-size: 2.5em;
  position: absolute;
  right: 5vw;
  bottom: -1.5vh;
  color: rgb(57, 62, 70);

  /* left:40vh;
  top: -4vh; */
}
.top {
    /* width: 100vw; */
    height: 9vh;
    background-color: rgb(255, 134, 94);
    font-size: 5.3vh;
    color: white;
    font-family: 'Kite One', sans-serif;
    text-align: center;
    padding-left: 3vw;
    /* margin-bottom: 1.6vh; */
    /* position: relative;
    display: inline-block; */
}
.left {
    left: 4vw;
    top: 2vh;
    position: absolute
}
.back {
    width:91vw;
    height: 87vh;
    border: 1px solid rgb(162, 210, 255);
    border-radius: 15px;
    background-color: white;
    position: relative;
    margin: 1.6vh auto;
}
hr {
  position: fixed;
  bottom: 12vh;
  margin-left: 5vw;
  /* right: 0.1vw; */

}
.bt {
  position: fixed;
  bottom: 4vh;
  left: 9vw;
  /* margin-right: 6vw; */
}
</style>