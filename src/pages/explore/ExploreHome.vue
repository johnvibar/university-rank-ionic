<template>
  <ion-page>
    <ExploreHeader />

    <ion-content>
      <ion-title class="explore-title">Design Your Future</ion-title>
      <ion-item>
        <ion-img src="../../../public/assets/img/explore/university.png"></ion-img>
        <ion-title class="explore-subtitle">University Rankings | <ion-text>36,582</ion-text></ion-title>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </ion-item>

      <ion-grid>
        <ion-row class="explore-slider">
          <ExploreSlider1 />
          <ExploreSlider1 />
        </ion-row>
      </ion-grid>

      <ion-item>
        <ion-img src="../../../public/assets/img/explore/student-hat.png"></ion-img>
        <ion-title class="explore-subtitle">Programs | <ion-text>52,300</ion-text></ion-title>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </ion-item>

      <ion-grid>
        <ion-row class="explore-slider">
          <ExploreSlider2 />
          <ExploreSlider2 />
        </ion-row>
      </ion-grid>

      <ion-title class="explore-title">Your Unique Adventure</ion-title>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-img src="../../../public/assets/img/explore/study-destination.png"></ion-img>
              <ion-card-header>
                <ion-card-title>Study Destination</ion-card-title>
              </ion-card-header>
              <ion-card-content>Find your own ideal study destination</ion-card-content>
            </ion-card>
            <ion-card>
              <ion-img src="../../../public/assets/img/explore/unlocking-the-secrets.png"></ion-img>
              <ion-card-header>
                <ion-card-title>Unlocking the Secrets</ion-card-title>
              </ion-card-header>
              <ion-card-content>to a Successful Study Abroad Experience</ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-img src="../../../public/assets/img/explore/top-unis.png"></ion-img>
              <ion-card-header>
                <ion-card-title>Top Universitiews</ion-card-title>
              </ion-card-header>
              <ion-card-content>Exploring UNIRANKS Top Universities</ion-card-content>
            </ion-card>
            <ion-card>
              <ion-img src="../../../public/assets/img/explore/get-inspired.png"></ion-img>
              <ion-card-header>
                <ion-card-title>Get Inspired</ion-card-title>
              </ion-card-header>
              <ion-card-content>Essential Tips for Choosing the Right University and Major</ion-card-content>
            </ion-card>
            <ion-card>
              <ion-img src="../../../public/assets/img/explore/top-articles.png"></ion-img>
              <ion-card-header>
                <ion-card-title>Top Articles</ion-card-title>
              </ion-card-header>
              <ion-card-content>Stay updated with our fascinating news and articles.</ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonTitle,
  IonItem,
  IonImg,
  IonIcon,
  IonText,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/vue";

import ExploreHeader from '@/components/explore/ExploreHeader.vue';
import ExploreSlider1 from '@/components/explore/ExploreSlider1.vue';
import ExploreSlider2 from '@/components/explore/ExploreSlider2.vue';
import { chevronForwardOutline } from "ionicons/icons";

</script>