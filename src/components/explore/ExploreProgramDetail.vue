<template>
  <ion-content class="pro-detail-component">
    <div class="pro-detail-title">
      <ion-label>BS Software Engineering</ion-label>
      <hr />
    </div>
    <ion-row class="pro-detail-uni">
      <ion-img src="/assets/img/university-of-michig.png"></ion-img>
      <ion-label>King Abdullah University of Science & Technology...</ion-label>
    </ion-row>

    <ion-card class="card-container">
      <ion-grid class="border-bottom">
        <ion-row class="pro-detail-card">
          <ion-img src="/assets/img/explore/icon-awesome-money-card.png"></ion-img>
          <ion-label>
            <h2>USD 31,449 per year</h2>
            <p>International student tuition fee</p>
          </ion-label>
        </ion-row>
      </ion-grid>

      <ion-grid class="border-bottom">
        <ion-row class="pro-detail-card">
          <ion-img src="/assets/img/explore/icon-awesome-calenda.png"></ion-img>
          <ion-label>
            <h2>August 2023</h2>
            <p>Start date</p>
          </ion-label>
        </ion-row>
      </ion-grid>

      <ion-grid class="border-bottom">
        <ion-row class="pro-detail-card">
          <ion-img src="/assets/img/explore/icon-awesome-hourgla.png"></ion-img>
          <ion-label>
            <h2>Jul 2023</h2>
            <p>Application deadline</p>
          </ion-label>
        </ion-row>
      </ion-grid>

      <ion-grid>
        <ion-row class="pro-detail-card">
          <ion-img src="/assets/img/explore/icon-awesome-univers.png"></ion-img>
          <ion-label>
            <h2>4 years</h2>
            <p>Duration</p>
          </ion-label>
        </ion-row>
      </ion-grid>
    </ion-card>

    <div class="upcoming-intakes-title">
      <ion-img src="/assets/img/explore/icon-awesome-calenda.png"></ion-img>
      <ion-label><b>Upcoming Intakes</b></ion-label>
    </div>

    <ion-row class="upcoming-intakes">
      <ion-item id="intake-modal">
        <ion-label>August 2023</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>January 2024</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>May 2023</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>August 2023</ion-label>
      </ion-item>
    </ion-row>
    <ion-modal class="intake-modal" trigger="intake-modal" ref="intake-modal" :initial-breakpoint="1"
      :breakpoints="[0, 1]">
      <div class="intake-modal-title">
        <ion-title>Intake</ion-title>
        <ion-text>Please choose your preferred intake. By default, the earliest intake is chosen</ion-text>
      </div>
      <ion-card class="intake-date">
        <ion-item>
          <ion-label>
            <p>Intake</p>
            <h2>January 2024</h2>
          </ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-item>
      </ion-card>
      <ion-row class="intake-checkbox">
        <ion-checkbox></ion-checkbox>
        <ion-label>I, hereby, grant UNIRANKS and/or its agents the authority to act
          on my behalf and represent me and my application with the institutions.</ion-label>
      </ion-row>
      <div class="modal-upload-section">
        <ion-img src="assets/img/icons/icon-arrow-back.svg" @click="open_modal_settings_dismiss()"></ion-img>
        <ion-button fill="clear">Continue</ion-button>
      </div>
    </ion-modal>
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

<script setup>
import {
  IonGrid,
  IonItem,
  IonRow,
  IonLabel,
  IonCard,
  IonImg,
  IonButton,
  IonContent,
  IonModal,
  IonCheckbox,
  IonTitle,
  IonText,
  IonIcon,
} from "@ionic/vue";

import { chevronForwardOutline } from "ionicons/icons";
</script>