<template>
  <ion-page>
    <ExploreHeader />
    <ion-content>
      <div id="container">
        <ion-row class="search-tabs-bar">
          <ion-item class="search-tabs">
            <ion-label>Results</ion-label>
          </ion-item>
          <ion-item class="search-tabs-selected">
            <ion-label>Programmes</ion-label>
          </ion-item>
          <ion-item class="search-tabs">
            <ion-label>Institutions</ion-label>
          </ion-item>
        </ion-row>
        <div class="search-results">
          <ion-label class="search-results-label">4 Programs has been Founded</ion-label>
          <ion-card class="recommended-pro-card">
          <ion-item class="recommended-pro-card-title">
            <ion-label>BS Software Engineering</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Match with 5 Institutions</ion-label>
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
          </ion-item>
        </ion-card>
        <ion-card class="recommended-pro-card">
          <ion-item class="recommended-pro-card-title">
            <ion-label>BS Computer Science</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Match with 5 Institutions</ion-label>
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
          </ion-item>
        </ion-card>
        <ion-card class="recommended-pro-card">
          <ion-item class="recommended-pro-card-title">
            <ion-label>BS Computer Science - STEM designated</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Match with 5 Institutions</ion-label>
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
          </ion-item>
        </ion-card>
        <ion-card class="recommended-pro-card">
          <ion-item class="recommended-pro-card-title">
            <ion-label>BSE Computer systems Engineering Cybersecurity</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Match with 5 Institutions</ion-label>
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
          </ion-item>
        </ion-card>
        </div>
      </div>
    </ion-content>
    <ExploreFilterFooter />
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonContent,
  IonLabel,
  IonItem,
  IonRow,
  IonImg,
  IonIcon,
  IonCard,
} from '@ionic/vue';

import ExploreHeader from '../../components/ExploreHeader.vue';
import ExploreFilterFooter from '../../components/ExploreFilterFooter.vue';

import { chevronForwardOutline } from "ionicons/icons";
</script>