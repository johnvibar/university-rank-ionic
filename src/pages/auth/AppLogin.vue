<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="auth-container">
        <ion-label class="auth-title">Beam ME up</ion-label>
        <ion-img class="auth-logo" src="/assets/img/auth/app-login.png"></ion-img>
        <ion-text class="auth-description">We're all set to make magic happen. So, buckle up, hold on tight, and let's launch your application adventure!</ion-text>
        <ion-button class="btn-login" fill="clear" expand="block">Step-by-Step Application</ion-button>
        <ion-button class="btn-login" fill="clear" expand="block">OR Explore Courses</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import {
  IonContent,
  IonPage,
  IonImg,
  IonButton,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonItem,
  IonText,
} from '@ionic/vue';

</script>