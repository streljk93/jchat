<template>
  <div class="j-toolbar">
    <j-container class="j-toolbar__wrap">
      <slot />
    </j-container>
  </div>
</template>

<script>
// app
import JContainer from '@/components/ui/j-container.vue';

export default {
  name: 'JToolbar',
  components: {JContainer},
};
</script>

<style lang="scss" scoped>
.j-toolbar {
  background: $color__secondary_light;
  &__wrap {
    padding: 16px;
    min-height: 80px;
    display: flex;
    align-items: center;
  }
}
</style>
