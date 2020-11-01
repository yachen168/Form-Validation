<template>
  <div>
    <ProgressBar :progress="$store.getters.progress"></ProgressBar>
    <router-view />
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";

export default {
  components: {
    ProgressBar
  },
};
</script>

<style lang="scss" scoped></style>
