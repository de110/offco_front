<template>
  <div>
      <h1>
          <i class="far fa-check-circle yes"></i>
      </h1>
      <h2>초대를 수락하시겠습니까?</h2>
      <button @click="accept">OK</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            token: null,
        }
    },
    created() {
        this.token = this.$route.params.token
        this.$store.dispatch('checkToken', this.token)
        .then((res) => {

            if(this.$store.getters.useToken === false) {
                alert('invalid invitation url')
                this.$router.push("/:id")
                console.log(res);
            }
        })

    },
    methods: {
        accept() {
            this.$store.dispatch('member', {roomId: this.$store.getters.TokenId, manager: false})
            .then((res) => {
                alert('invitation succeed')
                // this.$router.push(`/room/${this.$store.getters.TokenId}`)
                this.$router.push(`/roomhome/${this.$store.getters.TokenId}`)
                console.log(res);
            })
        }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
div {
    margin: 0 auto;
    font-size: 10px;
    background-color: rgb(254, 249, 239);
    text-align: center;
    width : 100vw;
    height : 100vh;
    position: relative;
}
h1 {
    font-size: 4em;
    margin: 0 auto;
}
button {
    margin: 1vh auto;
    /* margin-left: 50vw; */
    font-size: 1.5em;
    width: 22vw;
    height: 6vh;
    border: 1px solid rgb(57, 62, 70);
    color: white;
    border-radius: 15px;
    background-color: rgb(57, 62, 70);
}
h2 {
    font-size: 1.8em;
    color: rgb(57, 62, 70);
}
.yes {
    margin-top: 16vh;
    margin-bottom: 2vh;
    font-size: 2.5em;
    color: rgb(255, 134, 94);
}
</style>