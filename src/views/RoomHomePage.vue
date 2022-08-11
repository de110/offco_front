<template>
  <div class="container">
    <room-header></room-header>
    <div class="back">
      <tool-bar></tool-bar>
      <room-home></room-home>
    </div>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import RoomHome from '@/components/RoomHome.vue';
import RoomHeader from '@/components/common/RoomHeader.vue';
export default {
  components: {
    RoomHome,
    ToolBar,
    RoomHeader,
  },
};
</script>

<style>
div {
  margin: 0 auto;
  font-size: 10px;
  text-align: center;
}
.container {
  background-color: rgb(254, 249, 239);
  height: 100vh;
}
.back {
  width: 91vw;
  height: 87vh;
  border: 1px solid rgb(162, 210, 255);
  border-radius: 15px;
  background-color: white;
  margin: 0;
  position: relative;
  margin: 1.6vh auto;
}
a {
  color: rgb(57, 62, 70);
  text-decoration: none;
}
a.router-link-exact-active {
  color: rgb(255, 134, 94);
}
</style>
