<template functional>
  <label
    class="j-input"
    :class="{'j-input_outlined': props.outlined !== undefined}"
  >
    <div
      v-if="$slots.prepend"
      class="j-input__prepend"
    >
      <slot name="prepend" />
    </div>
    <div class="j-input__input">
      <input
        :value="props.value"
        type="text"
        :placeholder="props.placeholder"
        @input="listeners['input'] ? listeners['input']($event.target.value) : () => {}"
      >
    </div>
    <div
      v-if="$slots.append"
      class="j-input__append"
    >
      <slot name="append" />
    </div>
  </label>
</template>

<style lang="scss" scoped>
.j-input {
  background: white;
  border-radius: 5px;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: text;
  border: 2px solid $color__secondary_light;
  &_outlined {
    border: 2px solid $color__border_main;
  }
  &__input {
    flex: 1;
    width: inherit;
    height: inherit;
    label, input {
      width: inherit;
      height: inherit;
    }
    input {
      background: transparent;
      border-width: 0;
      padding-left: 18px;
      padding-right: 18px;
      &:focus {
        outline: none;
      }
    }
  }
  &__prepend {
    display: inline-block;
    padding-left: 18px;
  }
  &__append {
    display: inline-block;
    padding-right: 6px;
  }
}
</style>
