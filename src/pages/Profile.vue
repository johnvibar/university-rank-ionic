<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-card class="card-container">
          <ion-accordion-group :value="['first']">
            <ion-accordion value="first">
              <div slot="header">
                <ion-row>
                  <ion-col size="11">
                    <ion-card-header class="profile-header">
                      <ion-item class="profile-header-item">
                        <ion-avatar slot="start">
                          <img alt="user-avatar" src="/assets/img/icons/icon-user.svg" />
                        </ion-avatar>
                        <ion-label>
                          <ion-label class="profile-name"><b>Majdi Alhaj</b></ion-label>
                          <span class="profile-bio">Dubai, United Arab Emirates</span>
                        </ion-label>
                      </ion-item>
                    </ion-card-header>
                  </ion-col>
                  <ion-col size="1">
                    <ion-icon class="accordion-icon" :icon="chevronForwardOutline"></ion-icon>
                  </ion-col>
                </ion-row>
              </div>
              <ion-list slot="content">
                <ion-card-content class="profile-descrption">
                  <ion-label>Looking for <b>Undergraduate</b> Course in <b>Computer Sciences</b> and
                    <b>3</b> other Courses, at
                    <b>Harvard</b> and <b>2</b> toher universities by <b>February 2024</b> in the <b>United States</b>
                    and
                    <b>4</b> other countries.</ion-label>
                </ion-card-content>
                <ion-button fill="clear" class="btn-profile">View or Edit The Profile</ion-button>
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>
        </ion-card>

        <ion-card class="card-container">

          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img src="/assets/img/icons/icon-metro-qrcode.svg"></ion-img>
                  <ion-label>My QR Code</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>


          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img src="/assets/img/icons/icon-ionic-ios-qr-sc.svg"></ion-img>
                  <ion-label>Scan University QR Code</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>


          <ion-grid>
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-material-event.svg"></ion-img><br>
                  <ion-label>Events</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>

        </ion-card>

        <ion-card class="card-container">

          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items" id="open-modal-profile">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-search.svg"></ion-img>
                  <ion-label>Explorer based on my profile</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
              </ion-col>
            </ion-row>
            <ion-modal class="explore-profile-modal" trigger="open-modal-profile" ref="modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
              <div class="explore-profile-modal-main">
                <ion-text class="modal-title">Complete Your Profile</ion-text>
                <p>
                  <ion-text>
                    It looks like your profile is still in progress. We totally get it - completing forms can be a
                    bit tedious. But hey, we're here to make your life easier! To provide you with the best study options
                    and unlock our magical assistance, we need to know a bit more about your preferences. So, grab a
                    snack, take a moment, and complete your profile. Trust us, it'll be worth it! We've got your back!
                  </ion-text>
                </p>
                <ion-button fill="clear" class="btn-profile-modal" expand="block">Complete Your Profile</ion-button>
              </div>
              <div class="explore-profile-modal-main">
                <ion-text class="modal-title">College Major Match Quiz</ion-text>
                <p>
                  <ion-text>
                    Still unsure about what you want to study and where to go, huh? We've got your back, and we've got the
                    perfect solution for you. Take our epic College Major Match Quiz, and let the magic happen. We'll
                    analyze your answers and work our mystical powers to find the best major that suits your unique
                    personality. So sit back, relax, and let us do the hard work.
                  </ion-text>
                </p>
                <ion-button fill="clear" class="btn-profile-modal" expand="block">Start The Match Quiz</ion-button>
              </div>
              <div class="modal-back-section">
                <ion-button fill="clear" @click="dismiss()">Back</ion-button>
              </div>
            </ion-modal>
          </ion-grid>


          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-awesome-step-fo.svg"></ion-img>
                  <ion-label>Step by Step Profile</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>


          <ion-grid>
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-feather-target.svg"></ion-img>
                  <ion-label>College Major Match Quiz</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>

        </ion-card>

        <ion-card class="card-container">

          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-awesome-calenda.svg"></ion-img>
                  <ion-label>Remote Counselling</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>


          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-docume.svg"></ion-img>
                  <ion-label>Documents</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>


          <ion-grid>
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-bookmarks.svg"></ion-img>
                  <ion-label>Bookmarks</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>

        </ion-card>

        <ion-card class="card-container">

          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-material-feedback.svg"></ion-img>
                  <ion-label>Give us a feedback</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>


          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-awesome-univers.svg"></ion-img>
                  <ion-label>Rate an Institution</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>


          <ion-grid>
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-awesome-user.svg"></ion-img>
                  <ion-label>Rate an Agent</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>

        </ion-card>

        <ion-card class="card-container">

          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-metro-language.svg"></ion-img>
                  <ion-label>Change Language</ion-label>
                  <ion-select interface="action-sheet" label="language" :interface-options="{ header: ('Language') }"
                    cancel-text="Back">
                    <ion-select-option value="english">English</ion-select-option>
                    <ion-select-option value="arabic">Arabic</ion-select-option>
                    <ion-select-option value="turkish">Turkish</ion-select-option>
                  </ion-select>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>


          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-material-moneti.svg"></ion-img>
                  <ion-label>Change Currency</ion-label>
                  <ion-select interface="action-sheet" label="currency" :interface-options="{ header: ('Currency') }"
                    cancel-text="Back">
                    <ion-select-option value="euro">Euro</ion-select-option>
                    <ion-select-option value="dollar">U.S. dollar</ion-select-option>
                  </ion-select>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>


          <ion-grid>
            <ion-row class="ion-align-items" id="open-modal-settings">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-setting.svg"></ion-img>
                  <ion-label>Settings</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
            <ion-modal class="settings-modal" trigger="open-modal-settings" ref="modal-settings" :initial-breakpoint="1" :breakpoints="[0, 1]">
              <div class="settings-modal-main">
                <ion-text class="modal-title">Settings</ion-text>
                <ion-card>
                  <ion-label>Marketing Notificat</ion-label>
                  <ion-toggle :checked="true"></ion-toggle>
                </ion-card>
                <ion-card>
                  <ion-label>Subscibe to emails</ion-label>
                  <ion-toggle :checked="true"></ion-toggle>
                </ion-card>
                <ion-label><p>Delete my account</p></ion-label>
              </div>
              <ion-label class="version-label">UNIRANKS APP Version 2.00</ion-label>
              <div class="modal-upload-section">
                <ion-img src="assets/img/icons/icon-arrow-back.svg"></ion-img>
                <ion-button fill="clear" @click="dismiss()">Upload</ion-button>
              </div>
            </ion-modal>
          </ion-grid>

        </ion-card>

        <ion-label class="legal-label">Legal</ion-label>

        <ion-card class="legal-card-container">

          <ion-grid>
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list-legal">
                  <ion-img class="card-list-img-legal" src="/assets/img/icons/icon-legal.svg"></ion-img>
                  <ion-label>Terms of Service</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>

        </ion-card>

        <ion-card class="legal-card-container">

          <ion-grid>
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list-legal">
                  <ion-img class="card-list-img-legal" src="/assets/img/icons/icon-legal.svg"></ion-img>
                  <ion-label>Privacy Policy</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>

        </ion-card>

        <div class="logout-label">

          <ion-label><b>Log Out</b></ion-label>

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
} from '@ionic/vue';

import { chevronForwardOutline, chevronBackOutline } from "ionicons/icons";
import { ref } from 'vue';

const modal = ref();

const dismiss = () => modal.value.$el.dismiss();
</script>