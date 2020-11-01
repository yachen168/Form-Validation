<template>
  <div>
    <Header></Header>
    <ProgressBar :progress="$store.getters.progress"></ProgressBar>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header'
import ProgressBar from "@/components/ProgressBar";

export default {
  components: {
    ProgressBar,
    Header
  },
};
</script>

<style lang="scss" scoped></style>
