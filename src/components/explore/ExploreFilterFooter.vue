<template>
  <ion-footer class="explore-filter-footer" id="filter-modal">
    <ion-row>
      <ion-img src="/assets/img/explore/explore-filter-footer.png"></ion-img>
      <ion-text>Filter my Preferences</ion-text>
    </ion-row>
  </ion-footer>
  <ion-modal class="filter-modal" trigger="filter-modal" ref="filter-modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
    <div class="pro-detail-title">
      <ion-label>A Guide to Your Perfect Fit</ion-label>
      <hr />
    </div>
    <ion-content>
      <div class="sub-section-title">
        <ion-label><b>Countries & Cities:</b> Select up to 5</ion-label><br />
        <ion-label>Add Country/s, <span>View All</span></ion-label>
      </div>

      <ion-row class="filter-item-row">
        <ion-item class="filter-item">
          <ion-img src="/assets/img/explore/icon-us-flag.png"></ion-img>
          <ion-label>United States, <span>New York</span></ion-label>
        </ion-item>
        <ion-img class="icon-remove" src="/assets/img/explore/icon-material-remove.png"></ion-img>
      </ion-row>
      <ion-row class="filter-item-row">
        <ion-item class="filter-item">
          <ion-img src="/assets/img/explore/icon-us-flag.png"></ion-img>
          <ion-label>United States, <span>Texas</span></ion-label>
        </ion-item>
        <ion-img class="icon-remove" src="/assets/img/explore/icon-material-remove.png"></ion-img>
      </ion-row>
      <ion-row class="filter-item-row">
        <ion-item class="filter-item">
          <ion-img src="/assets/img/explore/icon-uk-flag.png"></ion-img>
          <ion-label>United Kingdom, <span>London</span></ion-label>
        </ion-item>
        <ion-img class="icon-remove" src="/assets/img/explore/icon-material-remove.png"></ion-img>
      </ion-row>
      <hr class="filter-divider" />

      <div class="sub-section-title">
        <ion-label><b>Fees Range:</b> 0 - $ 58,687</ion-label>
      </div>
      <ion-item>
        <ion-range id="dual-range" dual-knobs pin :value="{ lower: 0, upper: 100 }"></ion-range>
      </ion-item>
      <ion-row class="fee-range-input">
        <ion-item>
          <ion-label position="stacked">Minimum</ion-label>
          <ion-input label="$" type="text" placeholder="0"></ion-input>
        </ion-item>
        <ion-label>-</ion-label>
        <ion-item>
          <ion-label position="stacked">Maximum</ion-label>
          <ion-input label="$" type="text" placeholder="58,687"></ion-input>
        </ion-item>
      </ion-row>
      <hr class="filter-divider" />

      <div class="sub-section-title">
        <ion-label><b>Study level</b></ion-label>
      </div>
      <ion-row class="filter-item-row">
        <ion-item class="filter-tag">
          <ion-label>Foundation</ion-label>
        </ion-item>
        <ion-item class="filter-tag-selected">
          <ion-label>Undergraduate</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Postgraduate</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Doctorate</ion-label>
        </ion-item>
      </ion-row>

      <div class="sub-section-title">
        <ion-label><b>Mode of study</b></ion-label>
      </div>
      <ion-row class="filter-item-row">
        <ion-item class="filter-tag-selected">
          <ion-label>Full Time</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Distance Learning</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Online</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Blended</ion-label>
        </ion-item>
      </ion-row>

      <div class="sub-section-title">
        <ion-label><b>Study Discipline</b></ion-label>
      </div>
      <ion-row class="filter-item-row">
        <ion-item class="filter-tag">
          <ion-label>Computer SCiences</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Data Sciences and Big Data</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Machine Learning</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Machine Learning</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Business Administration</ion-label>
        </ion-item>
      </ion-row>

      <div class="sub-section-title">
        <ion-label><b>Language Requirements</b></ion-label>
      </div>
      <ion-row class="filter-item-row">
        <ion-item class="filter-tag">
          <ion-label>I don't have yet</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>I don't needed</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>IELTS</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>TOEFL</ion-label>
        </ion-item>
      </ion-row>

      <div class="sub-section-title">
        <ion-label><b>Intake Year</b></ion-label>
      </div>
      <ion-row class="filter-item-row">
        <ion-item class="filter-tag">
          <ion-label>2023</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>2024</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>2025</ion-label>
        </ion-item>
      </ion-row>

      <div class="sub-section-title">
        <ion-label><b>Intake Months</b></ion-label>
      </div>
      <ion-row class="filter-item-row">
        <ion-item class="filter-tag">
          <ion-label>Jan - Mar</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Apr - Jun</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Oct - Dec</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>Jul - Sep</ion-label>
        </ion-item>
      </ion-row>

      <div class="sub-section-title">
        <ion-label><b>Course Duration</b></ion-label>
      </div>
      <ion-row class="filter-item-row">
        <ion-item class="filter-tag">
          <ion-label>Less than 1 year</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>1 - 2 years</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>2 - 3 years</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>3 - 4 years</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>4 - 5 years</ion-label>
        </ion-item>
        <ion-item class="filter-tag">
          <ion-label>More than 5 years</ion-label>
        </ion-item>
      </ion-row>
    </ion-content>
    <ion-row class="filter-footer">
      <ion-label class="btn-filter-reset">Reset</ion-label>
      <ion-label>Explore 57,847 Results</ion-label>
    </ion-row>
  </ion-modal>
</template>

<script setup>
import {
  IonFooter,
  IonImg,
  IonText,
  IonRow,
  IonModal,
  IonLabel,
  IonItem,
  IonContent,
  IonRange,
  IonIcon,
  IonInput,
} from "@ionic/vue";
</script>