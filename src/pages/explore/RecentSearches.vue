<template>
  <ion-page>
    <ExploreHeader />
    <ion-content>
      <div id="container">
        <!-- Recent Searches -->
        <ion-row class="recent-searches-title">
          <ion-label>Recent Searches</ion-label>
          <ion-label class="recent-searches-expand">Clear all</ion-label>
        </ion-row>
        <ion-card class="recent-searches-card">
          <ion-item>
            <ion-img src="/assets/img/icons/icon-clock.svg"></ion-img>
            <ion-label>Computer</ion-label>
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
          </ion-item>
        </ion-card>
        <ion-card class="recent-searches-card">
          <ion-item>
            <ion-img src="/assets/img/icons/icon-clock.svg"></ion-img>
            <ion-label>Harvard</ion-label>
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
          </ion-item>
        </ion-card>

        <!-- Recommended Programs -->
        <ion-row class="recent-searches-title">
          <ion-label>Recommended Programs</ion-label>
          <ion-label class="recent-searches-expand">View all</ion-label>
        </ion-row>
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

        <!-- Recommended Institutions -->
        <ion-row class="recent-searches-title">
          <ion-label>Recommended Institutions</ion-label>
          <ion-label class="recent-searches-expand">View all</ion-label>
        </ion-row>
        <ion-card class="search-results-card" style="position: relative;">

          <div class="search-results-main">
            <div style="display: flex">
              <ion-img src="/assets/img/university-of-michig.png"></ion-img>
              <div class="search-results-center">
                <ion-label>University of Michigan</ion-label>
                <ion-label>Local #1 | Global #5 | Score 96.24</ion-label>
                <ion-label>United States of America</ion-label>
              </div>
            </div>
            <div class="search-results-right">
              <ion-icon :icon="chevronForwardOutline"></ion-icon>
              <ion-label>Recognized in Jordan</ion-label>
            </div>
          </div>
        </ion-card>
        <ion-card class="search-results-card" style="position: relative;">

          <div class="search-results-main">
            <div style="display: flex">
              <div>
                <ion-img src="/assets/img/university-of-michig.png"></ion-img>

              </div>
              <div class="search-results-center">
                <ion-label>Swiss Federal Institute of Technology Swiss Federal Institute of Technology</ion-label>
                <ion-label>Local #1 | Global #5 | Score 96.24</ion-label>
                <ion-label>United States of America</ion-label>
              </div>
            </div>
            <div class="search-results-right">
              <ion-icon :icon="chevronForwardOutline"></ion-icon>
              <ion-label>Recognized in Jordan</ion-label>
            </div>
          </div>
        </ion-card>

        <ion-card class="search-results-card" style="position: relative;">

          <div class="search-results-main">
            <div style="display: flex">
              <ion-img src="/assets/img/university-of-michig.png"></ion-img>
              <div class="search-results-center">
                <ion-label>University of Michigan</ion-label>
                <ion-label>Local #1 | Global #5 | Score 96.24</ion-label>
                <ion-label>United States of America</ion-label>
              </div>
            </div>
            <div class="search-results-right">
              <ion-icon :icon="chevronForwardOutline"></ion-icon>
              <ion-label>Recognized in Jordan</ion-label>
            </div>
          </div>
        </ion-card>

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