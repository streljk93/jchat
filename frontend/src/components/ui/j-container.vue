<template>
  <div class="j-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'JContainer',
};
</script>

<style lang="scss" scoped>
.j-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: $breakpoint__sm_start) {
    max-width: 540px;
  }

  @media (min-width: $breakpoint__md_start) {
    max-width: 720px;
  }

  @media (min-width: $breakpoint__lg_start) {
    max-width: 1140px;
  }

  @media (min-width: $breakpoint__xl_start) {
    max-width: 1140px;
  }
}
</style>
