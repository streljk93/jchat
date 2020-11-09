<template>
  <div
    class="j-avatar"
    :class="{
      'j-avatar__online': status === 1,
      'j-avatar__offline': status === 2,
    }"
    :style="`height: ${size}px; width: ${size}px;`"
    v-on="$listeners"
  >
    <img
      :src="value"
      alt="avatar"
    >
  </div>
</template>

<script>
export default {
  name: 'JAvatar',
  props: {
    value: {
      type: String,
      default: '',
    },
    size: {
      type: [Number, String],
      default: 100,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.j-avatar {
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  transition: height .3s, width .3s;
  &__online {
    border: 5px solid $color__success_main;
  }
  &__offline {
    border: 5px solid black;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
