<template>
  <ion-content class="uni-detail-component">
    <div>
      <ion-row class="uni-detail">
        <ion-img src="/assets/img/university-of-michig.png"></ion-img>
        <ion-label>University of Michigan</ion-label>
      </ion-row>
      <div class="uni-detail-title">
        <ion-label>United States</ion-label>
        <hr />
      </div>

      <div class="uni-description-text" :class="{ 'uni-description': !isExpanded}">
        <div :style="descriptionStyle">
          Located in Ann Arbor, Michigan, the University of Michigan is a renowned institution known for its academic
          excellence, innovative research, and vibrant campus community. As one of the top public universities in the
          United
          States, Michigan offers a wide range of programs and opportunities for students to pursue their passions and
          achieve their academic and professional goals.
        </div>
        <ion-label @click="toggleReadMore">{{ buttonText }}</ion-label>
      </div>

      <ion-card class="card-container">
        <ion-grid class="border-bottom">
          <ion-row class="pro-detail-card">
            <ion-img src="/assets/img/explore/icon-user.png"></ion-img>
            <ion-label>
              <h2>Approx. 13,000</h2>
              <p>Number of international students</p>
            </ion-label>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row class="pro-detail-card">
            <ion-img src="/assets/img/explore/icon-awesome-money-card.png"></ion-img>
            <ion-label>
              <h2>Approx. $32,760</h2>
              <p>Annual fees</p>
            </ion-label>
          </ion-row>
        </ion-grid>
      </ion-card>
      <div class="upcoming-intakes-title">
        <ion-img src="/assets/img/explore/icon-trophy.png"></ion-img>
        <ion-label><b>Ranking by</b>&nbsp;</ion-label>
        <ion-img src="/assets/img/explore/unirank-logo.png"></ion-img>
      </div>
      <ion-card class="uni-detail-card">
        <ion-label>
          <h2>Listed as an Elite University</h2>
          <p>Only 425 Elite universities listed in UNIRANKS®</p>
        </ion-label>
        <ion-img src="/assets/img/explore/ur-logo.png"></ion-img>
      </ion-card>
      <ion-card class="uni-detail-card">
        <ion-label>
          <h2>Rank #7 as Top 10 Universities</h2>
          <p>List as one of the TOP 10 in UNIRANKS®</p>
        </ion-label>
        <ion-img src="/assets/img/explore/icon-global.png"></ion-img>
      </ion-card>
      <ion-card class="uni-detail-card">
        <ion-label>
          <h2>Rank #7 Globally</h2>
          <p>7 out of 36,519 universities in UNIRANKS®</p>
        </ion-label>
        <ion-img src="/assets/img/explore/icon-global.png"></ion-img>
      </ion-card>
      <ion-card class="uni-detail-card">
        <ion-label>
          <h2>Rank #5 In USA</h2>
          <p>7 out of 3519 universities listed in the UNIRANKS</p>
        </ion-label>
        <ion-img src="/assets/img/explore/icon-us-flag.png"></ion-img>
      </ion-card>
      <ion-card class="uni-detail-card">
        <ion-label>
          <h2>Verified & Recognized</h2>
          <p>University is <span style="color: #007A00">Verified & Recognized</span> in Jordan</p>
        </ion-label>
        <ion-img src="/assets/img/explore/icon-badge.png"></ion-img>
      </ion-card>

      <div class="upcoming-intakes-title" style="justify-content: space-between;">
        <div style="display: flex;">
          <ion-img src="/assets/img/explore/student-hat.png"></ion-img>
          <ion-label><b>Programs | 150</b>&nbsp;</ion-label>
        </div>
        <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
      </div>

      <ion-grid>
        <ion-row class="explore-slider">
          <ExploreSlider2 />
          <ExploreSlider2 />
        </ion-row>
      </ion-grid>

      <ion-button fill="clear" expand="block" class="btn-uni-detail">Rate This University&nbsp;&nbsp;
        <ion-icon :icon="star"></ion-icon>
        <ion-icon :icon="star"></ion-icon>
        <ion-icon :icon="star"></ion-icon>
        <ion-icon :icon="star"></ion-icon>
        <ion-icon :icon="star"></ion-icon>
      </ion-button>
      <ion-button fill="clear" expand="block" class="btn-uni-detail">View Full university profile in UNIRANKS</ion-button>
    </div>
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
} from "@ionic/vue";

import { chevronForwardOutline, star } from "ionicons/icons";
import ExploreSlider2 from '../components/ExploreSlider2.vue';

export default {
  components: {
    IonGrid,
    IonItem,
    IonRow,
    IonLabel,
    IonCard,
    IonImg,
    IonButton,
    IonContent,
    IonIcon,
    ExploreSlider2
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