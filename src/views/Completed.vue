<template>
  <div>
    <div class="title">
      <h1>Congratulations</h1>
      <span>Now you’re one of us!</span>
      <div class="icon-wrapper">
        <font-awesome-icon icon="smile" />
      </div>
      <p>Redirected to homepage after 5 seconds…</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.countDownTimer();
  },
  methods: {
    countDownTimer() {
      this.setTimeoutId = setTimeout(() => {
        this.$router.push({ name: "Home" });
        clearTimeout(this.setTimeoutId);
      }, 5000);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
  font-size: 210px;
  color: #BEE1FF;
}

p {
  color:  #0275D8;
  font-size: 18px;
  font-style: italic;
}
</style>
