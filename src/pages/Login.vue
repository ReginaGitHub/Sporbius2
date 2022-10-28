<template>
  <div class="page-header clear-filter" filter-color="black">
    <Loading v-if="loading" />
    <div class="page-header-image" style="background-image: url('images/loginWallpaper.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <router-link to="/">
              <img v-lazy="'images/logo.png'" style="width: 280px; margin-bottom: 40px;" alt="" />
            </router-link>
            <form @submit.prevent="login">
            <h2 class="title">Login</h2>
            <fg-input type="email" class="no-border input-lg" addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Email Address..." v-model="email">
            </fg-input>

            <fg-input type="password" class="no-border input-lg" addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password..." v-model="password">
            </fg-input>
            <div class="pull-right">
              <h6>
                <router-link class="link footer-link" to="/forgetpassword">
                  <span style="font-size: medium; text-decoration: underline;">Forgot Password?</span>
                </router-link>
              </h6>
            </div>
            <div v-show="error" class="error"
              style="text-align: center; font-size:large; color: red;display:inline-block;">{{
              this.errorMsg
              }}</div>
            <div class="card-footer text-center">
              <button  class="btn btn-primary btn-round btn-lg btn-block">Login</button>
            </div>
            <div class="pull-left">
              <h6>
                <router-link class="link footer-link" to="/register">
                  <span style="font-size: small;"><span style="text-decoration:underline;">Register</span> an
                    account</span>
                </router-link>
              </h6>
            </div>
            </form>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
import Loading from '../components/Loading.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import db from '../firebase/firebaseInit';

export default {
  name: 'login-page',
  bodyClass: 'login-page',
  data() {
    return {
      loading: null,
      email: null,
      password: null,
      error: null,
      errorMsg: null,
    };
  },
  methods: {
    async login() {
      if (this.email !== "" && this.password !== "" && this.email !== null && this.password !== null) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
          this.error = false;
          this.errorMsg = "";
          this.$router.push({ name: "profile" });
          console.log(firebase.auth().currentUser.uid)
        }).catch((err) => {
          this.error = true;
          this.errorMsg = "Invalid email or password. Please key in again";
        })
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";

    }
  },
  components: {
    Card,
    MainFooter,
    Loading,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style>

</style>
