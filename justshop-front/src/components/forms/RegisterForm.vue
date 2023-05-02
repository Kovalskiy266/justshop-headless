<template>
  <form @submit.prevent="registerUser">
    <label>
      Username:
      <input type="text" v-model="username">
    </label>
    <label>
      Email:
      <input type="email" v-model="email">
    </label>
    <label>
      Password:d
      <input type="password" v-model="password">
    </label>
    <button type="submit">Register</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser() {
      const data = {
        data: {
          type: 'user--user',
          attributes: {
            name: [{ value: this.username }],
            mail: [{ value: this.email }],
            pass: [{ value: this.password }]
          }
        }
      };
      console.log(this.username);
      console.log(data);
      const instance = axios.create({
        headers: {
          'X-CSRF-Token': '5MBj_IhHc3vb3BXzBWxt799uWGW_wDmY5IHhh_QRTZg',
        }
      });

      instance.post('https://justshop-back.ddev.site/entity/user', data)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error.response.data);
          });
      }
    }
  }
</script>