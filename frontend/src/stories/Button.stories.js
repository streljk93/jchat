import JButton from '@/components/ui/j-button.vue';

export default {
  title: 'Button',
  component: JButton,
  argTypes: {
    text: {control: 'text', defaultValue: 'Hello world'},
    type: {
      control: {
        type: 'select',
        options: ['none', 'primary', 'secondary', 'success', 'error', 'warning', 'info']
      },
      defaultValue: 'none',
    },
    handleClick: {action: 'clicked'},
  },
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {JButton},
  template: '<j-button v-bind="$props" @click="handleClick">{{text}}</j-button>'
});

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};
