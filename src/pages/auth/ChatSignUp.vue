<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-title class="chat-signup-title">Signing Up</ion-title>
        <div class="edit-profile-modal">
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
              </ion-item>
              <ion-item>
                <ion-input placeholder="City of Residence"></ion-input>
              </ion-item>
            </ion-card>
            <ion-card>
              <ion-item>
                <ion-input placeholder="Nationality"></ion-input>
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
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonAvatar,
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
  IonAccordion,
  IonAccordionGroup,
  IonList,
  actionSheetController,
  IonSelect,
  IonSelectOption,
  IonModal,
  IonText,
  IonInput,
  IonToggle,
} from '@ionic/vue';

import { chevronForwardOutline, chevronBackOutline } from "ionicons/icons";
import { ref } from 'vue';

const modal = ref();

const dismiss = () => modal.value.$el.dismiss();
</script>