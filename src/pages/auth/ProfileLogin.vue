<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="auth-container">
        <ion-label class="auth-title">Hop on board!</ion-label>
        <ion-img class="auth-logo" src="/assets/img/auth/profile-logo.svg"></ion-img>
        <ion-text class="profile-description">We'd love to have you join our community. Just sign up and polish up your
          profile, so we can hook you up with an awesome study option experience.</ion-text>
        <ion-button class="btn-login" fill="clear" id="input-email-modal">Log in or Sign up</ion-button>
        <div class="profile-login-bottom">
          <ion-label class="legal-label">Legal</ion-label>

          <ion-card class="legal-card-container">

            <ion-grid>
              <ion-row class="ion-align-items">
                <ion-col size="11">
                  <ion-row class="card-list-legal">
                    <ion-img class="card-list-img-legal" src="/assets/img/icons/icon-legal.svg"></ion-img>
                    <ion-label>Terms of Service</ion-label>
                  </ion-row>
                </ion-col>
                <ion-col size="1">
                  <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
                </ion-col>
              </ion-row>
            </ion-grid>

          </ion-card>

          <ion-card class="legal-card-container">

            <ion-grid>
              <ion-row class="ion-align-items">
                <ion-col size="11">
                  <ion-row class="card-list-legal">
                    <ion-img class="card-list-img-legal" src="/assets/img/icons/icon-legal.svg"></ion-img>
                    <ion-label>Privacy Policy</ion-label>
                  </ion-row>
                </ion-col>
                <ion-col size="1">
                  <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
                </ion-col>
              </ion-row>
            </ion-grid>
          
          </ion-card>
        </div>
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
  IonInput,
  IonCard,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
} from '@ionic/vue';

import { chevronForwardOutline, chevronBackOutline } from "ionicons/icons";

</script>