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
                    <span style="font-size: small; text-decoration: underline;">Forgot Password?</span>
                  </router-link>
                </h6>
              </div>
              <div v-show="error" class="error"
                style="text-align: center; font-size:large; color: red;display:inline-block;">{{
                    this.errorMsg
                }}</div>
              <div class="card-footer text-center">
                <vue-recaptcha :sitekey="site" @verify="verify"></vue-recaptcha>
                <label class="card-title label form-label" v-if="!recaptcha" style="color: red;">
                  Not yet verified </label><br>
                <button class="btn btn-primary btn-round btn-lg btn-block">Login</button>
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
import { setPersistence, browserSessionPersistence, getAuth } from '@firebase/auth';
import { constants } from 'buffer';
import { VueRecaptcha } from 'vue-recaptcha';


export default {
  name: 'login-page',
  bodyClass: 'login-page',
  data() {
    return {
      loading: null,
      email: "",
      password: "",
      error: null,
      errorMsg: null,
      site: "6LeGhwAjAAAAADb1Ohmo9a00eq5ity7vMemOx9hr",
      recaptcha: null,
    };
  },
  methods: {
    async login() {
      const auth = getAuth();
      if (this.email === "" || this.password === "") {
        this.error = true;
        this.errorMsg = "Please fill in all the fields!";
      }
      else if (this.recaptcha === null){
        this.errorMsg = '';
      }
      else if (this.email !== "" && this.password !== "" && this.email !== null && this.password !== null && this.recaptcha !== null) {
        setPersistence(auth, browserSessionPersistence)
          .then(() => {
            return firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
              this.error = false;
              this.errorMsg = "";
              if (this.email === 'admin@sporbius.com') {
              this.$router.push({ name: "adminlist" });
              }
              else {
                this.$router.push({ name: "profile" });
              }
              console.log(sessionStorage.id)
              console.log(firebase.auth().currentUser.uid)
            }).catch((err) => {
              console.log(err.code)
              this.error = true;
              switch (err.code) {
                case "auth/invalid-email":
                  this.errorMsg = "Invalid email";
                  break;
                case "auth/user-not-found":
                  this.errorMsg = "No account with the email was found";
                  break;
                case "auth/wrong-password":
                  this.errorMsg = "Email or password was incorrect";
                  break;
                default:
                  this.errorMsg = "Email or password was incorrect";
                  break;
              }
            })
          })
          .catch((error) => {
            // Handle Errors here.
            this.error = true;
            this.errorMsg = "Please fill in all the fields!";
          });


        return;
      }

    },
    verify(response) {

      this.recaptcha = response;
    },
  },
  components: {
    Card,
    MainFooter,
    Loading,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    VueRecaptcha,
  }
};
</script>
<style>

</style>
