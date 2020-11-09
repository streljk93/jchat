<template>
  <div class="j-app-bar">
    <j-toolbar>
      <div class="j-app-bar__logo">
        <j-logo />
      </div>
      <j-search v-if="!onlyLogo" />
      <div
        v-if="!onlyLogo"
        class="j-app-bar__avatar"
      >
        <j-avatar :size="48" />
      </div>
    </j-toolbar>
  </div>
</template>

<script>
// app
import JToolbar from '@/components/ui/j-toolbar.vue';
import JLogo from '@/components/ui/j-logo.vue';
import JSearch from '@/components/ui/j-search.vue';
import JAvatar from '@/components/ui/j-avatar.vue';

export default {
  name: 'JAppBar',
  components: {JAvatar, JSearch, JLogo, JToolbar},

  props: {
    onlyLogo: {
      type: Boolean,
      default: false,
    },
  },

};
</script>

<style lang="scss" scoped>
.j-app-bar {
  &__logo {
    padding-right: 30px;
  }
  &__avatar {
    padding-left: 30px;
  }
}
</style>
