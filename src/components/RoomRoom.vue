<template>
  <div class="bback">
        <room-header></room-header>
        <div class="back">
        <room-body></room-body>
        <router-view></router-view>
        </div>
  </div>
</template>

<script>
import RoomHeader from './RoomHeader.vue'
import RoomBody from './RoomBody.vue'
export default {
  components: {
      RoomHeader,
      RoomBody
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
div {
    margin: 0 auto;
    font-size: 10px;
    /* background-color: rgb(254, 249, 239); */
    text-align: center;
    position: relative;
}
.bback {
    background-color: rgb(254, 249, 239);
    height: 100vh;
}
.white {
    background-color: white;
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
/* .title {
    margin: 1.9vh auto;
    width: 84vw;
    height: 7.6vh;
    color: white;
    background-color: rgb(255, 134, 94);
    text-align: center;
    font-size: 1.8em;
    font-family: 'Gothic A1', sans-serif;
    margin: 1.7vh 0;
    font-weight: lighter;
    position: relative;
    line-height: 8vh;
    border-radius: 15px;
} */
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
ul {
    width: 81vw;
    margin: 0 auto;
    padding-left: 0px;
    list-style-type: none;
    text-align: left;
}
li {
    margin-left: 4vh ;
}

h2 {
    margin: 4vh auto;
    font-size: 1.9em;
    font-weight: 400;
    font-family: 'Kite One', sans-serif;
}
.left {
    left: 4vw;
    top: 2vh;
    position: absolute
}
/* .user {
    font-size: 1.3em;
    font-weight: lighter;
} */
.invite {
    padding: 0;
    width: 36.3vw;
    height: 6.5vh;
    border: none;
    border-radius: 20px;
    background-color: rgb(255, 134, 94);
    color: white;
    font-size: 1.8em;
     font-family: 'Kite One', sans-serif;
    left: 22vw;
    /* font-weight: 600; */
    position: relative;
}
.navbar {
    font-size: 1.8em;
    font-family: 'Gothic A1', sans-serif;
    font-weight: 600;
    vertical-align : middle;
    justify-content: space-around;
    display: flex;
    /* transition: color 0.25s ease-in; */
}

</style>