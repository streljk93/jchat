<template>
  <div
    class="j-avatar"
    :class="{
      'j-avatar__online': status === 1,
      'j-avatar__offline': status === 2,
    }"
    :style="`height: ${size}px; width: ${size}px;`"
  >
    <img
      src="https://miro.medium.com/focal/1200/1200/48/51/1*k-B13-IWqjtFx09A9LKTkg.jpeg"
      alt="avatar"
    >
  </div>
</template>

<script>
export default {
  name: 'JAvatar',
  props: {
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
  border-radius: 100%;
  overflow: hidden;
  &__online {
    border: 5px solid $color__success_main;
  }
  &__offline {
    border: 5px solid black;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
