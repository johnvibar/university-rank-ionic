<template>
  <ion-content class="uni-detail-component">
    <div style="padding: 10px;">
      <ion-row class="country-detail">
        <ion-title>United States</ion-title>
        <ion-label>3,650 Universities</ion-label>
      </ion-row>

      <ion-img class="country-detail-logo" src="/assets/img/explore/country-detail-logo.png"></ion-img>

      <div class="uni-description-text" :class="{ 'uni-description': !isExpanded }">
        <div :style="descriptionStyle">
          Located in Ann Arbor, Michigan, the University of Michigan is a renowned institution known for its academic
          excellence, innovative research, and vibrant campus community. As one of the top public universities in the
          United
          States, Michigan offers a wide range of programs and opportunities for students to pursue their passions and
          achieve their academic and professional goals.
        </div>
        <ion-label @click="toggleReadMore">{{ buttonText }}</ion-label>
      </div>

      <div class="upcoming-intakes-title" style="justify-content: space-between;">
        <div style="display: flex;">
          <ion-img src="/assets/img/explore/icon-awesome-univers.png"></ion-img>
          <ion-label><b>University Rankings | 36,582</b>&nbsp;</ion-label>
        </div>
        <ion-icon :icon="chevronForwardOutline" size="20" id="uni-detail-list-moadl"></ion-icon>
      </div>
    </div>

    <ion-grid>
      <ion-row class="explore-slider">
        <ExploreSlider1 />
        <ExploreSlider1 />
      </ion-row>
    </ion-grid>

  </ion-content>

  <div class="pro-detail-footer">
    <div>
      <ion-img src="/assets/img/explore/icon-bookmark.png"></ion-img>
      <ion-label>Bookmark</ion-label>
    </div>
    <div>
      <ion-img src="/assets/img/icons/footer/icon-footer-chat.svg"></ion-img>
      <ion-label>Chat</ion-label>
    </div>
    <ion-button fill="clear">View All Programs</ion-button>
  </div>
</template>

<script>
import {
  IonGrid,
  IonItem,
  IonRow,
  IonLabel,
  IonCard,
  IonImg,
  IonButton,
  IonContent,
  IonIcon,
  IonModal,
  IonCardTitle,
  IonTitle,
} from "@ionic/vue";

import { chevronForwardOutline, star } from "ionicons/icons";
import ExploreSlider1 from '@/components/explore/ExploreSlider1.vue';

export default {
  components: {
    IonGrid,
    IonItem,
    IonRow,
    IonLabel,
    IonCard,
    IonCardTitle,
    IonImg,
    IonButton,
    IonContent,
    IonIcon,
    IonModal,
    IonTitle,
    ExploreSlider1,
  },
  data() {
    return {
      isExpanded: false,
      chevronForwardOutline,
      star,
    };
  },
  computed: {
    descriptionStyle() {
      return {
        height: this.isExpanded ? 'auto' : '100px', // Adjust the height based on the expansion state
        overflow: 'hidden',
      };
    },
    buttonText() {
      return this.isExpanded ? 'Read Less' : 'Read More';
    },
  },
  methods: {
    toggleReadMore() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>