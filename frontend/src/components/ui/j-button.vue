<template>
  <button
    class="j-button"
    :class="`j-button__${type}`"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'JButton',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin background-mixin($color) {
  background: $color;
  &:hover {
    background: lighten($color, 4%);
  }
  &:active {
    background: darken($color, 4%);
  }
}

.j-button {
  border-width: 0;
  border-radius: 5px;
  height: 36px;
  padding-left: 35px;
  padding-right: 35px;
  background: silver;
  color: white;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &__primary {
    @include background-mixin($color__primary_main);
  }
  &__secondary {
    @include background-mixin($color__secondary_main);
  }
  &__success {
    @include background-mixin($color__success_main);
  }
  &__error {
    @include background-mixin($color__error_main);
  }
  &__warning {
    @include background-mixin($color__warning_main);
  }
  &__info {
    @include background-mixin($color__info_main);
  }
}
</style>
