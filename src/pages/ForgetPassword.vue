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
              <form @submit.prevent="forget">
              <h2 class="title">Forget Password</h2>
              <fg-input type="email" class="no-border input-lg" addon-left-icon="now-ui-icons users_circle-08"
                placeholder="Email Address..." v-model="email">
              </fg-input>            
              <div v-show="error" class="error" v-if="success"
                style="text-align: center; font-size:large; color: red;display:inline-block;">
                {{this.errorMsg }}
              </div>
                <div v-show="error" class="error" v-else
                style="text-align: center; font-size:large; color: green;display:inline-block;">
                {{this.errorMsg}}
                </div>
              <div class="card-footer text-center">
                <button class="btn btn-primary btn-round btn-lg btn-block">Send Email</button>
              </div>
              <div class="pull-left">
                <h6>
                  <router-link class="link footer-link" to="/register">
                    <span style="font-size: medium;"><span style="text-decoration:underline;">Register</span> an
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
        error: null,
        errorMsg: null,
        success: null,
      };
    },
    methods: {
      async forget() {
        var endingEmail = /[.com]/g;
        if (!this.email.match(endingEmail)) {
                  this.error = true;
                  this.errorMsg = "Please indicate correct email"
        }
        else  {
          firebase.auth().sendPasswordResetEmail(this.email).then(() => {
            this.error = true;
            this.errorMsg = "Password has been send to your email";
            
            setTimeout(() => {
              this.$router.push({ name: "landing" });
            }, 2000);
          }).catch((err) => {
            this.error = true;
            this.errorMsg = "Please input a registered email!";
          })
          return;
        }
  
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
  