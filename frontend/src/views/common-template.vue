<template>
  <div>
    <router-view
      name="appbar"
      :only-logo="onlyLogo"
    />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'CommonTemplate',
  props: {
    onlyLogo: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

</style>
