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
            <ion-row class="ion-align-items">
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
            <ion-row class="ion-align-items">
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
  IonSelectOption
} from '@ionic/vue';

import { chevronForwardOutline, chevronBackOutline } from "ionicons/icons";

</script>