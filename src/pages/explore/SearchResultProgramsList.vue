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
          <ion-label class="search-results-label">3 Results: BS Software Engineering</ion-label>
          <ion-card class="search-results-card" style="position: relative;">
            <ion-label class="bookmarks-card-header">BS Software Engineering</ion-label>
            <div class="search-results-main">
              <div style="display: flex">
                <ion-img src="/assets/img/explore/university-of-michig.png"></ion-img>
                <div class="search-results-center">
                  <ion-label>University of Michigan</ion-label>
                  <ion-label>Local #1 | Global #5 | Score 96.24</ion-label>
                  <ion-label>United States of America</ion-label>
                </div>
              </div>
              <div class="search-results-right">
                <ion-icon :icon="chevronForwardOutline" id="program-detail-modal"></ion-icon>
                <ion-label>Recognized in Jordan</ion-label>
              </div>
            </div>
          </ion-card>
          <ion-card class="search-results-card" style="position: relative;">
            <ion-label class="bookmarks-card-header">BS Software Engineering</ion-label>
            <div class="search-results-main">
              <div style="display: flex">
                <ion-img src="/assets/img/explore/university-of-washin.png"></ion-img>
                <div class="search-results-center">
                  <ion-label>University of Washington</ion-label>
                  <ion-label>Local #1 | Global #5 | Score 96.24</ion-label>
                  <ion-label>United States of America</ion-label>
                </div>
              </div>
              <div class="search-results-right">
                <ion-icon :icon="chevronForwardOutline" id="program-detail-modal"></ion-icon>
                <ion-label>Recognized in Jordan</ion-label>
              </div>
            </div>
          </ion-card>
          <ion-card class="search-results-card" style="position: relative;">
            <ion-label class="bookmarks-card-header">BS Software Engineering</ion-label>
            <div class="search-results-main">
              <div style="display: flex">
                <ion-img src="/assets/img/explore/new-york-university.png"></ion-img>
                <div class="search-results-center">
                  <ion-label>New York University</ion-label>
                  <ion-label>Local #1 | Global #5 | Score 96.24</ion-label>
                  <ion-label>United States of America</ion-label>
                </div>
              </div>
              <div class="search-results-right">
                <ion-icon :icon="chevronForwardOutline" id="program-detail-modal"></ion-icon>
                <ion-label>Recognized in Jordan</ion-label>
              </div>
            </div>
          </ion-card>
          <ion-modal class="program-detail-modal" trigger="program-detail-modal" ref="program-detail-modal"
            :initial-breakpoint="1" :breakpoints="[0, 1]">
            <ExploreProgramDetail />
          </ion-modal>
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
  IonModal,
} from '@ionic/vue';

import ExploreHeader from '@/components/explore/ExploreHeader.vue';
import ExploreFilterFooter from '@/components/explore/ExploreFilterFooter.vue';
import ExploreProgramDetail from '@/components/explore/ExploreProgramDetail.vue';

import { chevronForwardOutline } from "ionicons/icons";
</script>