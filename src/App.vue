<template>
  <div class="app">
    <div class="sidebar">
      <div class="sidebar-wrap">
        <search :isOpen="isSearch" @close="toggleSearch" />
        <div class="sidebar-actions">
          <mdb-btn class="sidebar-search" @click="toggleSearch(true)">Search for places</mdb-btn>
          <mdb-tooltip material trigger="hover" :options="{placement: 'bottom'}">
            <span slot="tip">Current location</span>
            <mdb-btn slot="reference" class="sidebar-gps">
              <i class="material-icons">gps_fixed</i>
            </mdb-btn>
          </mdb-tooltip>
        </div>

        <big-weather temperature="15" weather="Shower" />

        <div class="weather-today-details">
          <p class="weather-date">
            Today
            <span>•</span>
            {{today}}
          </p>
          <p class="weather-location">
            <i class="material-icons">location_on</i>
            {{location}}
          </p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="cel-fan">
        <mdb-btn class="celsius" @click="toggleFormat(true)">℃</mdb-btn>
        <mdb-btn class="farenheight" @click="toggleFormat(false)">℉</mdb-btn>
      </div>

      <div class="weather-forecast">
        <small-weather :date="new Date()" weather="Sleet" max="16" min="11" />
        <small-weather :date="new Date()" weather="Sleet" max="16" min="11" />
        <small-weather :date="new Date()" weather="Sleet" max="16" min="11" />
        <small-weather :date="new Date()" weather="Sleet" max="16" min="11" />
        <small-weather :date="new Date()" weather="Sleet" max="16" min="11" />
      </div>

      <h3>Today's Highlights</h3>
      <div class="weather-highlight">
        <card title="Wind status" direction="WSW">
          <template v-slot:value>
            7
            <span>mph</span>
          </template>
        </card>

        <card title="Humidity" percent="84">
          <template v-slot:value>
            84
            <span>%</span>
          </template>
        </card>

        <card title="Visibility">
          <template v-slot:value>
            6,4
            <span>miles</span>
          </template>
        </card>

        <card title="Air Pressure ">
          <template v-slot:value>
            998
            <span>mb</span>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdbTooltip, mdbBtn,
} from 'mdbvue';
import { format } from 'date-fns';
import Search from '@/components/Search.vue';
import BigWeather from '@/components/BigWeather.vue';
import SmallWeather from '@/components/SmallWeather.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'App',
  components: {
    mdbTooltip,
    mdbBtn,
    Search,
    BigWeather,
    SmallWeather,
    Card,
  },
  data() {
    return {
      dateNow: Date.now(),
      location: 'Manila',
      isSearch: false,
    };
  },
  computed: {
    today() {
      return format(this.dateNow, 'E, d MMM');
    },
  },
  methods: {
    toggleSearch(isOpen) {
      this.isSearch = isOpen;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway:wght@500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");

* {
  font-family: Raleway, sans-serif;
  font-weight: 500;
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
  color: $white;
  font-size: 1rem;
}

input,
button {
  font-size: 1rem;
  border: none;
  outline: none;
}

button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

// SIDEBAR
.sidebar {
  position: fixed;
  height: calc(100vh - 84px);
  width: 400px;
  padding: 42px;
  color: $grey;
  background: $primary;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.05;
    background: $primary url("~@/assets/Cloud-background.png") no-repeat 50% 15%;
  }

  .sidebar-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
}

.sidebar-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .sidebar-search {
    background: $secondary;
    color: $white;
    padding: 12px 18px;
  }

  .sidebar-gps {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $secondary;
    color: $white;
    padding: 9px;
    border-radius: 50%;
  }
}

.weather-today-details {
  text-align: center;

  .weather-date {
    margin-bottom: 32px;

    span {
      margin: 0 16px;
    }
  }

  .weather-location {
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      margin-right: 10px;
    }
  }
}

// MAIN
.main {
  min-height: calc(100vh - 84px);
  margin-left: 484px;
  padding: 42px;
  background: $dark;

  h3 {
    margin: 40px 14px 24px;
    font-size: 24px;
    font-weight: 700;
  }
}

.cel-fan {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
  padding: 0 14px;

  .celsius,
  .farenheight {
    font-family: "Noto Sans JP", sans-serif;
    min-width: 40px;
    min-height: 40px;
    border-radius: 100%;
    background: #585676;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.active {
      background: $white;
      color: #110e3c;
    }
  }

  .celsius {
    margin-right: 12px;
  }
}

.weather-forecast,
.weather-highlight {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

@media (max-width: 576px) {
  .sidebar {
    position: static;
    height: calc(100vh - 48px);
    width: calc(100vw - 48px);
    padding: 24px;

    &::before {
      background-size: 150%;
    }
  }

  .main {
    padding: 24px;
    margin-left: 0px;
  }
}
</style>
