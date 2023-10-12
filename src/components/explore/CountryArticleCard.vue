<template>
  <ion-card class="country-article-card">
    <ion-img src="/assets/img/explore/inspiration2.png"></ion-img>
    <div>
      <ion-text>Article 1 Essential Tips for Choosing the Right University and Major</ion-text>
    </div>
    <ion-icon :icon="chevronForwardOutline"></ion-icon>
  </ion-card>
</template>

<script setup>
  import {
    IonCard,
    IonImg,
    IonText,
    IonIcon,
  } from '@ionic/vue';
  import { chevronForwardOutline } from "ionicons/icons";
</script>