<template>
  <ion-page>
    <ExploreHeader />

    <ion-content>
      <div id="container">
        <div class="nothing-found">
          <ion-text class="nothing-title">Oops, looks like we hit a void</ion-text>
          <ion-img src="../../../public/assets/img/explore/nothing-logo.png"></ion-img>
          <ion-text class="nothing-description">no matching records found!</ion-text>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonImg,
  IonText,
} from "@ionic/vue";

import '../../../public/assets/css/explore-style.css';
import ExploreHeader from '@/components/explore/ExploreHeader.vue';

</script>