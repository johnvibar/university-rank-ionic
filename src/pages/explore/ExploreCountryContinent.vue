<template>
  <ion-page>
    <ExploreHeader />

    <ion-content>
      <div class="explore-country-title">
        <ion-title>North America</ion-title>
      </div>

      <ion-card class="continent-description">
        Unlock a world of educational opportunities in North America. Experience top-quality education, vibrant campus
        life, and diverse cultural experiences. Embark on a transformative journey that will shape your future. Start your
        study abroad adventure today!
      </ion-card>

      <div class="upcoming-intakes-title">
        <ion-img src="/assets/img/explore/icon-trophy.png"></ion-img>
        <ion-label><b>Ranking by</b>&nbsp;</ion-label>
        <ion-img src="/assets/img/explore/unirank-logo.png"></ion-img>
      </div>

      <ion-card class="uni-detail-card">
        <ion-label>
          <h2>267 Listed as an <b>Elite</b> University</h2>
        </ion-label>
        <ion-img src="/assets/img/explore/ur-logo.png"></ion-img>
      </ion-card>
      <ion-card class="uni-detail-card">
        <ion-label>
          <h2>848 Listed as <b>TOP</b> universities</h2>
        </ion-label>
        <ion-img src="/assets/img/explore/icon-global.png"></ion-img>
      </ion-card>

      <ion-row class="continent-country">
        <ion-label>North America | 6016 Universities</ion-label>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </ion-row>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ExploreCountry id="country-detail-modal" />
          </ion-col>
          <ion-col size="6">
            <ExploreCountry />
          </ion-col>
          <ion-col size="6">
            <ExploreCountry />
          </ion-col>
          <ion-col size="6">
            <ExploreCountry />
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-modal class="program-detail-modal" trigger="country-detail-modal" ref="country-detail-modal"
        :initial-breakpoint="1" :breakpoints="[0, 1]">
        <ExploreCountryDetail />
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonTitle,
  IonLabel,
  IonIcon,
  IonRow,
  IonGrid,
  IonContent,
  IonCard,
  IonImg,
  IonCol,
  IonModal,
} from '@ionic/vue';

import ExploreHeader from '../../components/ExploreHeader.vue';
import ExploreCountry from '../../components/ExploreCountry.vue';
import ExploreCountryDetail from '@/components/ExploreCountryDetail.vue';
import { chevronForwardOutline } from "ionicons/icons";
</script>