<template>
  <ion-page class="main-tabs">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="explore" href="/explore/home">
          <ion-img :src="ExploreTabIcon" />
          <ion-label :class="ExploreTabLabel">Explore</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/auth/chat-login">
          <ion-img src="/assets/img/icons/footer/icon-footer-chat.svg" />
          <ion-label class="footer-ion-label">Chat</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="application" href="/auth/app-login">
          <ion-img :src="AppTabIcon" />
          <ion-label :class="AppTabLabel">Application</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/profile">
          <ion-img :src="profileTabIcon" />
          <ion-label :class="profileTabLabel">Profile</ion-label>
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
    profileTabIcon() {
      return this.$route.path.includes('profile') ? '/assets/img/icons/footer/icon-footer-profile-selected.svg' : '/assets/img/icons/footer/icon-footer-profile.svg';
    },
    profileTabLabel() {
      return this.$route.path.includes('profile') ? 'footer-ion-label-selected' : 'footer-ion-label';
    },
    ExploreTabIcon() {
      return this.$route.path.includes('explore') ? '/assets/img/icons/footer/icon-footer-explore-selected.svg' : '/assets/img/icons/footer/icon-footer-explore.svg';
    },
    ExploreTabLabel() {
      return this.$route.path.includes('explore') ? 'footer-ion-label-selected' : 'footer-ion-label';
    },
    AppTabIcon() {
      return this.$route.path.includes('app') ? '/assets/img/icons/footer/icon-footer-application-selected.svg' : '/assets/img/icons/footer/icon-footer-explore.svg';
    },
    AppTabLabel() {
      return this.$route.path.includes('app') ? 'footer-ion-label-selected' : 'footer-ion-label';
    },
  }
}
</script>