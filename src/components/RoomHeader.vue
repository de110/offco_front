<template>
  <div class="top">
          <i class="fas fa-arrow-left left" v-on:click="out"></i>offco
  </div>
</template>

<script>
export default {
    data() {
        return {
            userid:null
        }
    },
    methods: {
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
.top {
    /* width: 100vw; */
    height: 9vh;
    background-color: rgb(255, 134, 94);
    font-size: 5.3vh;
    color: white;
    font-family: 'Kite One', sans-serif;
    text-align: center;
    padding-left: 3vw;
}
.left {
    left: 4vw;
    top: 2vh;
    position: absolute
}

</style>