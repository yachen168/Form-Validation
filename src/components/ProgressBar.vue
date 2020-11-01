<template>
  <ul>
    <li
      v-for="(step, key) in progress"
      :key="key"
      :class="{ isDarkBlue: step }"
    >
      <font-awesome-icon v-if="step === 'done'" icon="check-circle" />
      <font-awesome-icon
        v-else-if="step === 'editing'"
        :icon="['far', 'dot-circle']"
      />
      <font-awesome-icon v-else :icon="['far', 'circle']" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-between;
  max-width: 230px;
  margin: 0 auto 30px;
  padding: 0;
  list-style: none;
}

li {
  position: relative;
  border-radius: 50%;
  font-size: 16px;
  color: $blue-100;
}

li:not(:first-child)::before {
  content: "";
  position: absolute;
  width: 56px;
  height: 2px;
  background-color: $blue-100;
  right: 100%;
  top: 0;
  bottom: 0;
  margin: auto 0;
}

li.isDarkBlue {
  color: $blue-200;
}
li.isDarkBlue::before {
  background-color: $blue-200;
}
</style>
