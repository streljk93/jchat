<template>
  <div>
    login
  </div>
</template>

<script>
import config from '@/config';

export default {
  name: 'LoginView',
  data() {
    return {
      config,
    };
  },
  watch: {
    'config.theme.screen'(value) {
      console.error(value);
    },
  },
};
</script>

<style scoped>

</style>
