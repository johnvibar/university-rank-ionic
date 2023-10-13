<template>
  <ion-page>
    <Header />
    <ion-content>
      <ion-title class="app-title">Applications</ion-title>

      <ion-card class="app-list-card">
        <ion-row>
          <ion-label>BS Software Enineering</ion-label>
          <ion-icon :icon="chevronForwardOutline" id="program-detail-modal"></ion-icon>
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

      <ion-modal class="program-detail-modal" trigger="program-detail-modal" ref="program-detail-modal"
        :initial-breakpoint="1" :breakpoints="[0, 1]">
        <ExploreProgramDetail />
      </ion-modal>
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
  IonModal,
} from '@ionic/vue';

import Header from '@/components/Header.vue';
import ExploreProgramDetail from '@/components/explore/ExploreProgramDetail.vue';
import { chevronForwardOutline } from "ionicons/icons";
</script>