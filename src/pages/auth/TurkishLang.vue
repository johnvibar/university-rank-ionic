<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="lang-container">
        <div class="lang-body">
          <ion-img class="header-logo" src="/assets/img/auth/turkish-lang1.png"></ion-img>  
          <ion-img class="lang-logo" src="/assets/img/auth/rocket-img.png"></ion-img>  
          <ion-img class="img-arabic-letter" src="/assets/img/auth/turkish-lang2.png"></ion-img>
          <ion-button fill="clear" expand="block">Türkçe devam et</ion-button>
        </div>
        <div class="lang-bottom">
          <ion-label>English</ion-label> 
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