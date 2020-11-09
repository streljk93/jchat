// app
import JMultipleAvatar from '@/components/ui/j-multiple-avatar.vue';

export default {
  title: 'MultipleAvatar',
  component: JMultipleAvatar,
  argTypes: {
    handleInput: {
      action: 'inputed',
    },
  },
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {JMultipleAvatar},
  data() {
    return {
      selected: 'https://picsum.photos/500/300?image=1',
      avatars: [
        'https://picsum.photos/500/300?image=1',
        'https://picsum.photos/500/300?image=2',
        'https://picsum.photos/500/300?image=3',
        'https://picsum.photos/500/300?image=4',
        'https://picsum.photos/500/300?image=5',
        'https://picsum.photos/500/300?image=6',
        'https://picsum.photos/500/300?image=7',
        'https://picsum.photos/500/300?image=8',
        'https://picsum.photos/500/300?image=9',
        'https://picsum.photos/500/300?image=10',
        'https://picsum.photos/500/300?image=11',
        'https://picsum.photos/500/300?image=12',
        'https://picsum.photos/500/300?image=13',
        'https://picsum.photos/500/300?image=14',
        'https://picsum.photos/500/300?image=15',
        'https://picsum.photos/500/300?image=16',
        'https://picsum.photos/500/300?image=17',
        'https://picsum.photos/500/300?image=18',
        'https://picsum.photos/500/300?image=19',
        'https://picsum.photos/500/300?image=20',
      ],
    };
  },
  template: `
    <div style="width: 335px;">
      <j-multiple-avatar
        v-model="selected"
        :list="avatars"
        @input="handleInput"
      />
    </div>
  `,
});

export const Default = Template.bind({});
