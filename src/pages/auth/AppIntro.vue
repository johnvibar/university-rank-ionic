<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="lang-container">
        <div class="lang-body">
          <ion-img class="header-logo" src="/assets/img/auth/app-intro-logo.svg"></ion-img>  
          <ion-img class="lang-logo" src="/assets/img/auth/rocket-img.png"></ion-img>  
          <ion-img class="img-arabic-letter" src="/assets/img/auth/app-intro-logo2.svg"></ion-img>
          <ion-button fill="clear" expand="block" class="btn-app-intro">GET STARTED</ion-button>
        </div>
        <div class="lang-bottom">
          <ion-label>العربية</ion-label> 
          <ion-item>
            <ion-select aria-label="Pick a Language" placeholder="Pick a Language">
              <ion-select-option value="english">English</ion-select-option>
              <ion-select-option value="arabic">Arabic</ion-select-option>
            </ion-select>
          </ion-item> 
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import {
  IonContent,
  IonPage,
  IonImg,
  IonButton,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonItem,
} from '@ionic/vue';

</script>