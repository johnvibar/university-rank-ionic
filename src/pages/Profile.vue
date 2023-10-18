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
                <ion-button fill="clear" class="btn-profile" id="edit-profile-modal">View or Edit The Profile</ion-button>
                <ion-modal class="edit-profile-modal" trigger="edit-profile-modal" ref="edit_profile_modal"
                  :initial-breakpoint="1" :breakpoints="[0, 1]">
                  <ion-content>
                    <div class="edit-profile-modal-main">
                      <ion-text class="modal-title">Edit Profile</ion-text>
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
                        <ion-item id="reset-pwd-modal">
                          <ion-grid>
                            <ion-row class="ion-align-items">
                              <ion-col size="11">
                                <ion-row class="card-list">
                                  <ion-label>Password</ion-label>
                                </ion-row>
                              </ion-col>
                              <ion-col size="1">
                                <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
                              </ion-col>
                            </ion-row>
                          </ion-grid>
                        </ion-item>
                        <ion-modal class="reset-pwd-modal" trigger="reset-pwd-modal" ref="reset_pwd_modal"
                          :initial-breakpoint="1" :breakpoints="[0, 1]">
                          <div class="reset-pwd-modal-main">
                            <ion-text class="modal-title">Reset Password</ion-text><br /><br />
                            <ion-text class="modal-sub-title">Enter your new Password</ion-text><br />
                            <ion-card>
                              <ion-item>
                                <ion-input type="password" placeholder="Current Password"></ion-input>
                                <ion-img src="assets/img/icons/icon-eye.svg"></ion-img>
                              </ion-item>
                            </ion-card>
                            <ion-card>
                              <ion-item>
                                <ion-input type="password" placeholder="New Password"></ion-input>
                                <ion-img src="assets/img/icons/icon-eye.svg"></ion-img>
                              </ion-item>
                            </ion-card>
                            <ion-card>
                              <ion-item>
                                <ion-input type="password" placeholder="Confirm Password"></ion-input>
                                <ion-img src="assets/img/icons/icon-eye.svg"></ion-img>
                              </ion-item>
                            </ion-card>
                          </div>
                          <div class="modal-upload-section">
                            <ion-img src="assets/img/icons/icon-arrow-back.svg"
                              @click="reset_pwd_modal_dismiss()"></ion-img>
                            <ion-button fill="clear">Save</ion-button>
                          </div>
                        </ion-modal>
                      </ion-card>
                    </div>
                  </ion-content>
                  <div class="modal-upload-section">
                    <ion-img src="assets/img/icons/icon-arrow-back.svg" @click="edit_profile_modal_dismiss()"></ion-img>
                    <ion-button fill="clear">Save</ion-button>
                  </div>
                </ion-modal>
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
            <ion-modal class="explore-profile-modal" trigger="open-modal-profile" ref="open_modal_profile"
              :initial-breakpoint="1" :breakpoints="[0, 1]">
              <ion-content>
                <div class="explore-profile-modal-main">
                  <ion-text class="modal-title">Complete Your Profile</ion-text>
                  <p>
                    <ion-text>
                      It looks like your profile is still in progress. We totally get it - completing forms can be a
                      bit tedious. But hey, we're here to make your life easier! To provide you with the best study
                      options
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
                      Still unsure about what you want to study and where to go, huh? We've got your back, and we've got
                      the
                      perfect solution for you. Take our epic College Major Match Quiz, and let the magic happen. We'll
                      analyze your answers and work our mystical powers to find the best major that suits your unique
                      personality. So sit back, relax, and let us do the hard work.
                    </ion-text>
                  </p>
                  <ion-button fill="clear" class="btn-profile-modal" expand="block">Start The Match Quiz</ion-button>
                </div>
              </ion-content>
              <div class="modal-back-section">
                <ion-button fill="clear" @click="open_modal_profile_dismiss()">Back</ion-button>
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
            <ion-row class="ion-align-items" id="bookmarks-modal">
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

            <ion-modal class="bookmarks-modal" trigger="bookmarks-modal" ref="modal" :initial-breakpoint="1"
              :breakpoints="[0, 1]">
              <ion-content>
                <div class="bookmarks-modal-main">
                  <div class="bookmarks-modal-header">
                    <ion-title>Bookmarks</ion-title>
                    <ion-text>
                      <span>Time to kickstart your study adventure! Begin mapping out your journey by bookmarking your
                        favorite
                        courses. Just hit that trusty bookmark button, and voila! Your chosen courses will be right
                        here</span>
                    </ion-text>
                  </div>
                  <ion-text>You Haven't bookmark any courses for now</ion-text>
                  <ion-img src="assets/img/bookmarks-image.svg"></ion-img>
                  <ion-card class="bookmarks-card">
                    <ion-label class="bookmarks-card-header">BS Software Engineering</ion-label>
                    <div class="bookmarks-card-main">
                      <div style="display: flex">
                        <ion-img src="/assets/img/university-of-michig.png"></ion-img>
                        <div class="bookmarks-card-center">
                          <ion-label>University of Michigan</ion-label>
                          <ion-label>Local #1 | Global #5 | Score 96.24</ion-label>
                          <ion-label>United States of America</ion-label>
                        </div>

                      </div>
                      <div class="bookmarks-card-right">
                        <ion-icon :icon="chevronForwardOutline"></ion-icon>
                        <ion-label>Recognized in Jordan</ion-label>
                      </div>
                    </div>
                  </ion-card>
                </div>
                <div class="bookmarks-section">
                  <ion-button fill="clear">Explore Courses</ion-button>
                </div>
              </ion-content>
            </ion-modal>
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
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline" size="20"></ion-icon>
              </ion-col>
            </ion-row>
            <ion-select interface="action-sheet" :interface-options="{ header: ('Language') }" cancel-text="Back">
              <ion-select-option value="english">English</ion-select-option>
              <ion-select-option value="arabic">Arabic</ion-select-option>
              <ion-select-option value="turkish">Turkish</ion-select-option>
            </ion-select>
          </ion-grid>


          <ion-grid class="border-bottom">
            <ion-row class="ion-align-items">
              <ion-col size="11">
                <ion-row class="card-list">
                  <ion-img class="card-list-img" src="/assets/img/icons/icon-material-moneti.svg"></ion-img>
                  <ion-label>Change Currency</ion-label>
                </ion-row>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
              </ion-col>
            </ion-row>
            <ion-select interface="action-sheet" label="currency" :interface-options="{ header: ('Currency') }"
              cancel-text="Back">
              <ion-select-option value="euro">Euro</ion-select-option>
              <ion-select-option value="dollar">U.S. dollar</ion-select-option>
            </ion-select>
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
            <ion-modal class="settings-modal" trigger="open-modal-settings" ref="open_modal_settings"
              :initial-breakpoint="1" :breakpoints="[0, 1]">
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
                <ion-label>
                  <p>Delete my account</p>
                </ion-label>
              </div>
              <ion-label class="version-label">UNIRANKS APP Version 2.00</ion-label>
              <div class="modal-upload-section">
                <ion-img src="assets/img/icons/icon-arrow-back.svg" @click="open_modal_settings_dismiss()"></ion-img>
                <ion-button fill="clear">Upload</ion-button>
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

          <ion-label id="logout-modal"><b>Log Out</b></ion-label>
          <ion-modal class="logout-modal" trigger="logout-modal" ref="logout_modal" :initial-breakpoint="1"
            :breakpoints="[0, 1]">
            <div class="logout-modal-main">
              <ion-img src="assets/img/logout-image.svg"></ion-img>
              <ion-text>Are you sure you want to log out?</ion-text>
            </div>
            <div class="modal-logout-section">
              <ion-button class="btn-cancel" fill="clear" @click="logout_modal_dismiss()">Cancel</ion-button>
              <ion-button fill="clear">Confirm</ion-button>
            </div>
          </ion-modal>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
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
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

const open_modal_profile = ref();
const logout_modal = ref();
const edit_profile_modal = ref();
const reset_pwd_modal = ref();
const open_modal_settings = ref();

const open_modal_profile_dismiss = () => open_modal_profile.value.$el.dismiss();
const logout_modal_dismiss = () => logout_modal.value.$el.dismiss();
const edit_profile_modal_dismiss = () => edit_profile_modal.value.$el.dismiss();
const reset_pwd_modal_dismiss = () => reset_pwd_modal.value.$el.dismiss();
const open_modal_settings_dismiss = () => open_modal_settings.value.$el.dismiss();

export default defineComponent({
  name: 'Profile',
  components: {
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
  },
  data() {
    return {
      chevronForwardOutline,
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});

</script>