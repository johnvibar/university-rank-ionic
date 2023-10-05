<template>
  <ion-page class="auth-tabs">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="explore" href="/explore">
          <ion-img src="/assets/img/auth/icons/icon-footer-explore.svg" />
          <ion-label class="footer-ion-label">Explore</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/auth/chat-login">
          <ion-img :src="chatTabIcon" />
          <ion-label :class="chatTabLabel">chat</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="application" href="/auth/app-login">
          <ion-img :src="appTabIcon" />
          <ion-label :class="appTabLabel">Application</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/profile">
          <ion-img src="/assets/img/auth/icons/icon-footer-profile.svg" />
          <ion-label class="footer-ion-label">Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

  </ion-page>
</template>
  
<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonImg } from '@ionic/vue';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet, IonImg },
  setup() {
    return {
    }
  },
  computed: {
    chatTabIcon() {
      return this.$route.path.includes('chat') ? '/assets/img/auth/icons/icon-footer-chat-selected.svg' : '/assets/img/auth/icons/icon-footer-chat.svg';
    },
    chatTabLabel() {
      return this.$route.path.includes('chat') ? 'footer-ion-label-selected' : 'footer-ion-label';
    },
    appTabIcon() {
      return this.$route.path.includes('app') ? '/assets/img/auth/icons/icon-footer-app-selected.svg' : '/assets/img/auth/icons/icon-footer-app.svg';
    },
    appTabLabel() {
      return this.$route.path.includes('app') ? 'footer-ion-label-selected' : 'footer-ion-label';
    },
  }
}
</script>