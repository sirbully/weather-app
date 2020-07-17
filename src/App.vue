<template>
  <div class="app">
    <div class="sidebar">
      <div class="sidebar-actions">
        <mdb-btn class="sidebar-search">Search for places</mdb-btn>
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
    <div class="main">
      <div class="deg-fan"></div>

      <div class="weather-forecast">
        <div class="col-sm-6">1</div>
        <div class="col-sm-6">2</div>
        <div class="col-sm-6">3</div>
        <div class="col-sm-6">4</div>
        <div class="col-sm-6">5</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdbTooltip, mdbBtn,
} from 'mdbvue';
import { format } from 'date-fns';
import BigWeather from '@/components/BigWeather.vue';

export default {
  name: 'App',
  components: {
    mdbTooltip,
    mdbBtn,
    BigWeather,
  },
  data() {
    return {
      dateNow: Date.now(),
      location: 'Manila',
    };
  },
  computed: {
    today() {
      return format(this.dateNow, 'E, d MMM');
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway:wght@500;600;700&display=swap");

* {
  font-family: Raleway, sans-serif;
  font-weight: 500;
}

body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  color: $white;
  font-size: 1rem;
}

button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  font-size: 1rem;
}

.app {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
}

// SIDEBAR
.sidebar {
  position: relative;
  min-height: calc(100vh - 94px);
  flex: 0 0 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  padding: 42px;
  flex: 1;
  background: $dark;
}

.weather-forecast {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-right: -15px;
  margin-left: -15px;

  div {
    position: relative;
    width: 100%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 576px) {
  .sidebar {
    min-height: calc(100vh - 48px);
    flex: 1 1 100%;
    padding: 24px;

    &::before {
      background-size: 150%;
    }
  }

  .main {
    padding: 24px;
  }
}

@media (min-width: 992px) {
  .weather-forecast {
    div {
      flex: 0 0 20%;
      max-width: 20%;
    }
  }
}
</style>
