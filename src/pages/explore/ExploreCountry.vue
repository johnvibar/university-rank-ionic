<template>
  <ion-page>
    <ExploreHeader />

    <ion-content class="explore-country-content">
      <div class="explore-country-title">
        <ion-title>Study Destination</ion-title>
        <ion-label>Find your own ideal study destination</ion-label>
      </div>

      <div class="country-slider-container">
        <ion-row class="country-slider-title">
          <ion-label>North America | 6016 Universities</ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-row>
        <ion-grid>
          <ion-row class="explore-slider">
            <ExploreCountry />
            <ExploreCountry />
            <ExploreCountry />
          </ion-row>
        </ion-grid>
        <hr />
      </div>

      <div class="country-slider-container">
        <ion-row class="country-slider-title">
          <ion-label>Oceania | 344 Universities</ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-row>
        <ion-grid>
          <ion-row class="explore-slider">
            <ExploreCountry />
            <ExploreCountry />
            <ExploreCountry />
          </ion-row>
        </ion-grid>
        <hr />
      </div>

      <div class="country-slider-container">
        <ion-row class="country-slider-title">
          <ion-label>Europe | 7134 Universities</ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-row>
        <ion-grid>
          <ion-row class="explore-slider">
            <ExploreCountry />
            <ExploreCountry />
            <ExploreCountry />
          </ion-row>
        </ion-grid>
        <hr />
      </div>

      <div class="country-slider-container">
        <ion-row class="country-slider-title">
          <ion-label>Asia | 19717 Universities</ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-row>
        <ion-grid>
          <ion-row class="explore-slider">
            <ExploreCountry />
            <ExploreCountry />
            <ExploreCountry />
          </ion-row>
        </ion-grid>
        <hr />
      </div>

      <div class="country-slider-container">
        <ion-row class="country-slider-title">
          <ion-label>Latin America | 5175 Universities</ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-row>
        <ion-grid>
          <ion-row class="explore-slider">
            <ExploreCountry />
            <ExploreCountry />
            <ExploreCountry />
          </ion-row>
        </ion-grid>
        <hr />
      </div>

      <div class="country-slider-container">
        <ion-row class="country-slider-title">
          <ion-label>Africa | 2387 Universities</ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-row>
        <ion-grid>
          <ion-row class="explore-slider">
            <ExploreCountry />
            <ExploreCountry />
            <ExploreCountry />
          </ion-row>
        </ion-grid>
        <hr />
      </div>

      <div class="country-slider-container">
        <ion-row class="country-slider-title">
          <ion-label>Arab world | 1501 Universities</ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-row>
        <ion-grid>
          <ion-row class="explore-slider">
            <ExploreCountry />
            <ExploreCountry />
            <ExploreCountry />
          </ion-row>
        </ion-grid>
        <hr />
      </div>

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
} from '@ionic/vue';

import ExploreHeader from '../../components/explore/ExploreHeader.vue';
import ExploreCountry from '../../components/explore/ExploreCountry.vue';
import { chevronForwardOutline } from "ionicons/icons";
</script>