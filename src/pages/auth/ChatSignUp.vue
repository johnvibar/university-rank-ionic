<template>
  <ion-page>
    <div id="container">
      <ion-title class="chat-signup-title">Signing Up</ion-title>
      <div class="edit-profile-modal-main">
        <ion-card>
          <ion-item>
            <ion-input placeholder="First Name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input placeholder="Last Name"></ion-input>
          </ion-item>
        </ion-card>
        <ion-card>
          <ion-item>
            <ion-input placeholder="Country of Residence"></ion-input>
            <ion-icon :icon="chevronForwardOutline" size="20" id="country-modal"></ion-icon>
          </ion-item>
          <ion-item>
            <ion-input placeholder="City of Residence"></ion-input>
            <ion-icon :icon="chevronForwardOutline" size="20" id="city-modal"></ion-icon>
          </ion-item>
        </ion-card>
        <ion-card>
          <ion-item>
            <ion-input placeholder="Nationality"></ion-input>
            <ion-icon :icon="chevronForwardOutline" size="20" id="nationality-modal"></ion-icon>
          </ion-item>
        </ion-card>
        <ion-label>
          <p>Time to spill the beans on your country of residence! Don't worry, we'll use it to
            connect you with a super-smart counselor who knows the ins and outs of your geography.
          </p>
        </ion-label>
        <ion-card>
          <ion-row>
            <ion-item>
              <ion-img src="assets/img/icons/icon-us-flag.svg"></ion-img>
              <ion-label>+1</ion-label>
              <ion-item>
                <ion-input type="number" placeholder="Phone Number"></ion-input>
              </ion-item>
            </ion-item>
          </ion-row>
        </ion-card>
        <ion-card>
          <ion-item>
            <ion-input placeholder="Email ID"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input placeholder="Password"></ion-input>
            <ion-img src="assets/img/icons/icon-eye.svg"></ion-img>
          </ion-item>
        </ion-card>
        <ion-label>
          <p>By selecting Continue, Agree and continue, I agree to UNIRANKS' <span>Terms of Services</span>,
            <span>Privacy Policy</span>.
          </p>
        </ion-label>
        <ion-checkbox label-placement="end" justify="start">I don't want to receive marketing messages.</ion-checkbox>
        <div style="padding: 0px 50px">
          <ion-button fill="clear" expand="block">Continue</ion-button>
        </div>
      </div>
      <!-- Select Country Modal -->
      <ion-modal trigger="country-modal" ref="modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
        <div class="signup-modal">
          <ion-title>Select Country</ion-title>
          <ion-card>
            <ion-item>
              <ion-icon :icon="chevronForwardOutline" size="10"></ion-icon>
              <ion-input placeholder="Start typing"></ion-input>
            </ion-item>
          </ion-card>
          <ion-item>
            <ion-label>United Arabi Emirates</ion-label>
          </ion-item>
          <hr />
          <ion-item>
            <ion-label>Afghanistan</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Albania</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Algeria</ion-label>
          </ion-item>
        </div>
      </ion-modal>

      <!-- Select City Modal -->
      <ion-modal trigger="city-modal" ref="modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
        <div class="signup-modal">
          <ion-title>Select City</ion-title>
          <ion-card>
            <ion-item>
              <ion-icon :icon="chevronForwardOutline" size="10"></ion-icon>
              <ion-input placeholder="Start typing"></ion-input>
            </ion-item>
          </ion-card>
          <ion-item>
            <ion-label>Dubai</ion-label>
          </ion-item>
          <hr />
          <ion-item>
            <ion-label>Abu Dhabi</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Sharjah</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Al Ain</ion-label>
          </ion-item>
        </div>
      </ion-modal>

      <!-- Select City Modal -->
      <ion-modal trigger="nationality-modal" ref="modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
        <div class="signup-modal">
          <ion-title>Select Nationality</ion-title>
          <ion-card>
            <ion-item>
              <ion-icon :icon="chevronForwardOutline" size="10"></ion-icon>
              <ion-input placeholder="Start typing"></ion-input>
            </ion-item>
          </ion-card>
          <ion-item>
            <ion-label>Emirati, United Arab Emirates</ion-label>
          </ion-item>
          <hr />
          <ion-item>
            <ion-label>Afghan, Afghanistan</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Albanian, Albania</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Algerian, Algeria</ion-label>
          </ion-item>
        </div>
      </ion-modal>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonIcon,
  IonLabel,
  IonItem,
  IonCardHeader,
  IonButton,
  IonCardContent,
  IonCard,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonModal,
  IonText,
  IonInput,
  IonCheckbox,
} from '@ionic/vue';

import { chevronForwardOutline, chevronBackOutline } from "ionicons/icons";

</script>