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
    };
  },
  created() {
    this.token = this.$route.params.token;
    this.$store.dispatch('checkToken', this.token);
  },
  methods: {
    async accept() {
      await this.$store.dispatch('RoomMember', this.$route.params);
      alert('invitation succeed');
      // console.log("test1:",this.$store.getters);
            console.log("test1:",this.$route.params);
      this.$router.push(`/roomhome/${this.$store.getters.TokenId}`);
    },
  },
};
</script>

<style></style>
