<template>
  <div class="j-search">
    <j-input>
      <template #prepend>
        <i class="jicon__search j-search__icon" />
      </template>
      <template #append>
        <j-button type="secondary">
          search
        </j-button>
      </template>
    </j-input>
  </div>
</template>

<script>
import JInput from '@/components/ui/j-input.vue';
import JButton from '@/components/ui/j-button.vue';
export default {
  name: 'JSearch',
  components: {JButton, JInput},
};
</script>

<style lang="scss" scoped>
.j-search {
  height: 48px;
  width: 100%;
  &__icon {
    font-size: 20px;
  }
}
</style>
