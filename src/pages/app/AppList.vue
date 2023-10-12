<template>
  <ion-page>
    <Header />
    <ion-content>
      <ion-title class="app-title">Applications</ion-title>

      <ion-card class="app-list-card">
        <ion-row>
          <ion-label>BS Software Enineering</ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-row>
        <ion-text>King Abdullah University of Science & Technology King Abdullah University</ion-text>
        <ion-label class="app-list-card-status">Stage: Submit your documents</ion-label>
      </ion-card>
      
      <ion-card class="app-list-card">
        <ion-row>
          <ion-label>BS Software Enineering</ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-row>
        <ion-text>King Abdullah University of Science & Technology King Abdullah University</ion-text>
        <ion-label class="app-list-card-status">Stage: documents summited... <span>Verifying</span></ion-label>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonTitle,
  IonCard,
  IonLabel,
  IonIcon,
  IonRow,
  IonText,
} from '@ionic/vue';

import Header from '@/components/Header.vue';
import { chevronForwardOutline } from "ionicons/icons";
</script>