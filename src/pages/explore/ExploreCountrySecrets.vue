<template>
  <ion-page>
    <ExploreHeader />

    <ion-content>
      <div class="explore-country-title">
        <ion-title>Unlocking the Secrets</ion-title>
      </div>

      <ion-card>
        <ion-img src="/assets/img/explore/inspiration2.png"></ion-img>
      </ion-card>
      <div class="country-inspired-description">
        <ion-text>to a Successful Study Abroad Experience</ion-text>
      </div>

      <CountryArticleCard />
      <CountryArticleCard />
      <CountryArticleCard />
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonTitle,
  IonContent,
  IonImg,
  IonText,
  IonCard,
} from '@ionic/vue';

import ExploreHeader from '@/components/explore/ExploreHeader.vue';
import CountryArticleCard from '@/components/explore/CountryArticleCard.vue';
</script>