<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="arabic-lang-container">
        <div>
          <ion-img src="/assets/img/auth/arabic-lang1.png"></ion-img>  
          <ion-img class="img-rocket" src="/assets/img/auth/rocket-img.png"></ion-img>  
          <ion-img class="img-arabic-letter" src="/assets/img/auth/arabic-lang3.png"></ion-img>
          <ion-button fill="clear" expand="block">الاستمرار بالعربية</ion-button>
        </div>
        <div class="arabic-lang-bottom">
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