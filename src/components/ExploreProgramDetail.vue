<template>
  <div class="pro-detail-component">
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
      <ion-item>
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
  </div>

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
} from "@ionic/vue";
</script>