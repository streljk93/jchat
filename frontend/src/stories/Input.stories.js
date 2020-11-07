// lib
import Vue from 'vue';

// app
import JInput from '@/components/ui/j-input';
import JButton from '@/components/ui/j-button';
import config from '@/config';

Vue.component(JButton.name, JButton);
Vue.component('JIcon', {
  template: '<i class="jicon__search" />',
});

export default {
  title: 'Controls/Input',
  component: JInput,
  parameters: {
    backgrounds: {
      default: 'secondary',
      values: [
        { name: 'secondary', value: config.theme.palette.secondary.light },
      ],
    }
  },
  argTypes: {
    showPrepend: {control: {type: 'inline-radio', options: [true, false]}, defaultValue: true},
    showAppend: {control: {type: 'inline-radio', options: [true, false]}, defaultValue: true},
    prepend: {
      control: {
        type: 'select',
        options: [JButton.name, 'JIcon'],
      },
      defaultValue: 'JIcon',
    },
    append: {
      control: {
        type: 'select',
        options: [JButton.name, 'JIcon'],
      },
      defaultValue: JButton.name,
    },
    handleInput: {
      action: 'input',
    },
    value: {
      control: 'text',
      defaultValue: 'text',
    }
  },
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {JInput},
  data() {
    return {
      message: 'hello',
    };
  },
  template: `
    <j-input v-bind="$props" @input="handleInput">
      <template v-if="showPrepend" #prepend><component :is="prepend" /></template>
      <template v-if="showAppend" #append><component :is="append" /></template>
    </j-input>
  `,
});

export const Default = Template.bind({});
