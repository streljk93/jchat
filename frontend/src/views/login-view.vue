<template>
  <j-container class="login-view">
    <div class="jchat__block login-view__block">
      <img
        src="@/assets/logo-full.png"
        alt="logo"
        style="width: 267px;"
      >
      <div class="login-view__account">
        <div class="login-view__account-avatar">
          <j-avatar :value="avatar" />
        </div>
        <div class="login-view__account-user">
          <div class="login-view__account-name">
            UserName_23432482347
          </div>
          <div class="login-view__account-id">
            @hasdjfdsjfj
          </div>
        </div>
      </div>
    </div>
    <div class="jchat__block login-view__block">
      <j-multiple-avatar
        v-model="avatar"
        :list="avatars"
        class="login-view__avatars"
      />
      <j-input
        placeholder="Enter your name..."
        outlined
      >
        <template #prepend>
          <i class="jicon__user login-view__icon" />
        </template>
      </j-input>
      <j-button
        full
        class="login-view__action"
      >
        ENTER
      </j-button>
    </div>
  </j-container>
</template>

<script>
// app
import JContainer from '@/components/ui/j-container.vue';
import JAvatar from '@/components/ui/j-avatar.vue';
import JInput from '@/components/ui/j-input.vue';
import JButton from '@/components/ui/j-button.vue';
import JMultipleAvatar from '@/components/ui/j-multiple-avatar.vue';

export default {
  name: 'LoginView',
  components: {JMultipleAvatar, JButton, JInput, JAvatar, JContainer},
  data() {
    return {
      avatar: 'https://picsum.photos/500/300?image=1',
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
};
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__block {
    max-width: 335px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__account {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-user {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-name {
      padding-bottom: 5px;
      color: $color__textPrimary_main;
    }
    &-id {
      color: $color__textSecondary_main;
      font-size: 14px;
    }
  }
  &__icon {
    font-size: 20px;
    color: $color__textSecondary_main;
  }
  &__avatars {
    padding-bottom: 15px;
  }
  &__action {
    margin-top: 30px;
  }
}
</style>
