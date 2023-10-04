<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="auth-container">
        <ion-label class="auth-title">Want to talk!</ion-label>
        <ion-img class="auth-logo" src="/assets/img/auth/chat-login.png"></ion-img>
        <ion-text class="auth-description">Time to bust out your login moves!</ion-text>
        <ion-text class="auth-description">Ready to dive into the chat?</ion-text>
        <ion-text class="auth-sub-description">Please Login to Start to Chat</ion-text>
        <ion-button class="btn-login" fill="clear" id="input-email-modal">Log in or Sign up</ion-button>
      </div>
      <ion-modal class="login-modal" trigger="input-email-modal" ref="modal" :initial-breakpoint="1"
        :breakpoints="[0, 1]">
        <div class="login-modal-main">
          <ion-label class="modal-title">Log in or Sign Up</ion-label>
          <ion-card>
            <ion-item>
              <ion-input placeholder="Email ID"></ion-input>
            </ion-item>
          </ion-card>
          <ion-item class="login-modal-description">
            <ion-text>Where we can send you all the juicy information.</ion-text>
          </ion-item>
          <ion-button class="btn-continue" fill="clear" expand="block" id="input-pwd-modal">Continue</ion-button>
          <ion-row class="divider">
            <hr /><ion-label>or</ion-label>
            <hr />
          </ion-row>
          <ion-button class="btn-google-login" fill="clear" expand="block">Continue with Google</ion-button>
          <ion-modal class="login-modal" trigger="input-pwd-modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
            <div class="login-pwd-modal-main">
              <ion-label class="modal-title">Log in or Sign Up</ion-label>
              <ion-card>
                <ion-item>
                  <ion-input placeholder="Email ID"></ion-input>
                </ion-item>
              </ion-card>
              <ion-card>
                <ion-item>
                  <ion-input placeholder="Password"></ion-input>
                  <ion-img src="assets/img/icons/icon-eye.svg"></ion-img>                  
                </ion-item>
              </ion-card>
              <ion-item class="login-modal-description">
                <ion-text>Where we can send you all the juicy information.</ion-text>
              </ion-item>
              <ion-button class="btn-continue" fill="clear" expand="block" id="input-pwd-modal">Continue</ion-button>
              <ion-row class="divider">
                <hr /><ion-label>or</ion-label>
                <hr />
              </ion-row>
              <ion-button class="btn-google-login" fill="clear" expand="block">Continue with Google</ion-button>
            </div>
          </ion-modal>
        </div>
      </ion-modal>
      <ion-modal class="login-modal" trigger="input-email-modal" ref="modal" :initial-breakpoint="1"
        :breakpoints="[0, 1]">
        <div class="login-modal-main">
          <ion-label class="modal-title">Oh, hey there</ion-label>
          <ion-item class="login-modal-description">
            <ion-text>Seems like you're already have an account.</ion-text>
          </ion-item>
          <ion-item class="logged-in-user">
            <ion-img src="../assets/img/auth/icon-user.svg"></ion-img>
          </ion-item>
          <ion-item>
            <ion-img src="../assets/img/icons/icon-email.svg"></ion-img>
            <ion-text>majdi@mazajnet.com</ion-text>
          </ion-item>
          <ion-button class="btn-google-login" fill="clear" expand="block">Continue with Google</ion-button>
          <ion-item>
            <ion-text>Not you?</ion-text>
            <ion-text style="text-decoration: underline">Use another account</ion-text>
          </ion-item>
        </div>
      </ion-modal>
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
  IonText,
  IonModal,
  IonInput,
  IonCard,
  IonRow,
} from '@ionic/vue';

</script>,
IonText