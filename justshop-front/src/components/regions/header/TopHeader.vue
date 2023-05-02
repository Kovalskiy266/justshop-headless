<template>
  <div class="top-header">
    <div class="top-header__container">
      <div class="top-header__content">
        <div class="top-header__user-menu">
          <ul>
            <li v-for="menuItem in accountMenuItems" :key="menuItem.id">
              <a :href="menuItem.attributes.url">{{menuItem.attributes.title}}</a>
            </li>
          </ul>
        </div>
        <div class="top-header__logo">
          <router-link to="/"><img alt="JustShop" :src="require('@/assets/logo.png')"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      accountMenuItems: []
    };
  },
  mounted() {
    axios.get('https://justshop-back.ddev.site/jsonapi/menu_items/account')
        .then(response => {
          this.accountMenuItems = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
}
</script>

<style lang="scss">
  .top-header {
    &__content {
      display: flex;
      max-width: 1440px;
      padding: 0 15px;
      width: 100%;
      margin: 0 auto;
    }
    background-color: black;
    padding: 11px 0 9px;
    &__user-menu {
      width: 25%;
      text-align: left;
      ul {
        list-style: none;
        padding-left: 0;
      }
      a {
        color: white;
      }
    }
    &__logo {
      width: 50%;
      img {
        max-width: 80px;
      }
    }
  }
</style>