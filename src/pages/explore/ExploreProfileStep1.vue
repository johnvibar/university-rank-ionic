<template>
  <ion-page>
    <Header />
    <ion-content>
      <ion-title>Step 1: More about your biography</ion-title>
      <ion-card class="card-container">
        <ion-grid>
          <ion-row class="ion-align-items">
            <ion-row class="card-list">
              <ion-img src="/assets/img/icons/icon-metro-qrcode.svg"></ion-img>
              <ion-label>My QR Code</ion-label>
            </ion-row>
          </ion-row>
        </ion-grid>
      </ion-card>
      <ion-card class="card-container">
        <ion-grid>
          <ion-row class="ion-align-items">
            <ion-row class="card-list">
              <ion-img src="/assets/img/icons/icon-metro-qrcode.svg"></ion-img>
              <ion-label>My QR Code</ion-label>
            </ion-row>
          </ion-row>
        </ion-grid>
      </ion-card>
      <ion-button expand="block">Step 2 Where to study?</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonContent,
  IonCard,
  IonGrid,
  IonRow,
  IonLabel,
  IonImg,
} from '@ionic/vue';

import Header from '@/components/Header.vue';
</script>