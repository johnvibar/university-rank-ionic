<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="auth-container">
        <ion-label class="auth-title">Want to talk!</ion-label>
        <ion-img class="auth-logo" src="/assets/img/auth/chat-login.png"></ion-img>
        <ion-text class="auth-description">Time to bust out your login moves!</ion-text>
        <ion-text class="auth-description">Ready to dive into the chat?</ion-text>
        <ion-text class="auth-sub-description">Please Login to Start to Chat</ion-text>
        <ion-button class="btn-login" fill="clear">Log in or Sign up</ion-button>
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

</script>,
IonText