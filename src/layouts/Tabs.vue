<template>
  <ion-page class="main-tabs">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="explore" href="/explore">
          <ion-img src="/assets/img/icons/icon-footer-explore.svg" />
          <ion-label class="footer-ion-label">Explore</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/auth/chat-login">
          <ion-img src="/assets/img/icons/icon-footer-chat.svg" />
          <ion-label class="footer-ion-label">Chat</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="application" href="/auth/app-login">
          <ion-img src="/assets/img/icons/icon-footer-application.svg" />
          <ion-label class="footer-ion-label">Application</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/profile">
          <ion-img src="/assets/img/icons/icon-footer-profile.svg" />
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
  }
}
</script>