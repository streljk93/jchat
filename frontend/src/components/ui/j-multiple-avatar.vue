<template>
  <div
    ref="multiple-avatar"
    class="j-multiple-avatar"
    :style="`width: ${width}px;`"
  >
    <div
      v-for="(item, index) in uniqList"
      :key="index"
      class="j-multiple-avatar__item"
      @mouseover="hovered = index"
      @mouseleave="hovered = null"
      @click="$emit('input', item)"
    >
      <j-avatar
        :value="item"
        :size="(hovered === index || item === value) ? (itemWidth + 10) : itemWidth"
        :class="{
          'j-multiple-avatar__selected': item === value,
        }"
      />
    </div>
  </div>
</template>

<script>
// lib
import {uniq} from 'lodash';

// app
import JAvatar from '@/components/ui/j-avatar.vue';

export default {
  name: 'JMultipleAvatar',
  components: {JAvatar},

  props: {
    value: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    width: {
      type: Number,
      default: 335,
    },
    itemWidth: {
      type: Number,
      default: 40,
    }
  },

  data() {
    return {
      hovered: null,
      currentX: null,
    };
  },
  computed: {
    uniqList() {
      return uniq(this.list);
    },
  },

  mounted() {
    this.$refs['multiple-avatar'].addEventListener('mousemove', this.handleCheckCursor, false);
    this.$refs['multiple-avatar'].addEventListener('mouseleave', () => {
      clearInterval(this.$options.interval);
      this.$options.side = null;
    }, false);
  },

  destroyed() {
    clearInterval(this.$options.interval);
  },

  methods: {
    handleCheckCursor(e) {
      const target = this.$refs['multiple-avatar'];
      const leftMove = {startX: 0, endX: this.itemWidth + 15};
      const rightMove = {
        startX: target.offsetWidth - (this.itemWidth + 15),
        endX: target.offsetWidth,
      };
      const currentX = e.clientX - target.offsetLeft;
      const isLeft = currentX >= leftMove.startX && currentX <= leftMove.endX;
      const isRight = currentX >= rightMove.startX && currentX <= rightMove.endX;

      if (isLeft) {
        if (this.$options.side === 'right') clearInterval(this.$options.interval);
        if (this.$options.side !== 'left') {
          this.$options.interval = setInterval(() => {
            target.scrollLeft = target.scrollLeft - 1;
          }, 5);
        }
        this.$options.side = 'left';
      } else if (isRight) {
        if (this.$options.side === 'left') clearInterval(this.$options.interval);
        if (this.$options.side !== 'right') {
          this.$options.interval = setInterval(() => {
            target.scrollLeft = target.scrollLeft + 1;
          }, 5);
        }
        this.$options.side = 'right';
      } else {
        clearInterval(this.$options.interval);
        this.$options.side = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.j-multiple-avatar {
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  &__item {
    padding: 0 7.5px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
  &__selected {
    border: 3px solid $color__primary_main;
  }
}
</style>
