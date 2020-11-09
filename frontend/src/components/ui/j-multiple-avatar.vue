<template>
  <div
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
    this._initialComponent();
    this.$el.addEventListener('mousemove', this.handleMoveToSide, false);
    this.$el.addEventListener('mouseleave', this._clear, false);
  },

  destroyed() {
    this._clear();
  },

  methods: {
    handleMoveToSide(e) {
      const {
        leftMoveCoordinate,
        rightMoveCoordinate,
        prevSide,
      } = this.$options.$_component;
      const currentX = e.clientX - this.$el.offsetLeft;
      const isLeft = currentX >= leftMoveCoordinate.startX && currentX <= leftMoveCoordinate.endX;
      const isRight = currentX >= rightMoveCoordinate.startX && currentX <= rightMoveCoordinate.endX;

      if (isLeft) {
        prevSide !== 'left' && this._moveTo(-1);
        this.$options.$_component.prevSide = 'left';
      } else if (isRight) {
        prevSide !== 'right' && this._moveTo(1);
        this.$options.$_component.prevSide = 'right';
      } else {
        this._clear();
      }
    },
    _initialComponent() {
      const padding = 15;
      const itemFullWidth = this.itemWidth + padding;

      this.$options.$_component = {
        interval: null,
        prevSide: null,
        leftMoveCoordinate: {startX: 0, endX: itemFullWidth},
        rightMoveCoordinate: {
          startX: this.$el.offsetWidth - itemFullWidth,
          endX: this.$el.offsetWidth,
        },
      };
    },
    _moveTo(i) {
      this.$options.$_component.interval = setInterval(() => {
        this.$el.scrollLeft = this.$el.scrollLeft + i;
      }, 5);
    },
    _clear() {
      clearInterval(this.$options.$_component.interval);
      this.$options.$_component.prevSide = null;
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
