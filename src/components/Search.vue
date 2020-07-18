<template>
  <div class="search-drawer">
    <i class="material-icons close-icon" @click="$emit('close', false)">close</i>

    <div class="search-form">
      <div class="search-bar">
        <label>
          <i class="material-icons">search</i>
          <input id="location" type="text" placeholder="search location" />
        </label>
      </div>
      <div class="search-btn-wrap">
        <mdb-btn class="search-btn">Search</mdb-btn>
      </div>
    </div>

    <div class="search-input"></div>
  </div>
</template>

<script>
import { mdbBtn } from 'mdbvue';

export default {
  name: 'Search',
  components: {
    mdbBtn,
  },
  props: {
    open: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.search-drawer {
  position: fixed;
  width: 400px;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  padding: 42px;
  background: $primary;
  transition: transform 0.3s ease-out;

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(-100%);
  }

  .close-icon {
    margin-left: auto;
    margin-bottom: 15px;
    color: $white;
    font-size: 24px;
    cursor: pointer;
  }
}

.search-form {
  display: flex;

  .search-btn {
    height: 100%;
    background: $info;
    color: $white;
    padding: 0 18px;
  }

  .search-bar {
    width: 100%;
    flex: 1;
    margin-right: 12px;
    padding: 14px 16px;
    border: 1px solid $white;

    label {
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      margin-left: 12px;
      background: transparent;
      color: $white;

      &::placeholder {
        color: $darkgrey;
      }
    }
  }
}

@media (max-width: 576px) {
  .search-drawer {
    width: calc(100vw - 48px);
    padding: 24px;
  }
}
</style>
