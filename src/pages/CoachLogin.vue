<template>
  <div class="page-header clear-filter" filter-color="black">
    <Loading v-if="loading" />
    <div class="page-header-image" style="background-image: url('images/CoachLoginWallpaper.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <ul class="text-left" style="list-style-type: none;">
              <li>
                <h5 class="title"><i class="ri-line-chart-fill ri-xl"></i> Widens Consumer Base</h5>
                <p>With up to 100,000 users on our platform, you get to teach and interact with a variety of students
                  who have strong interests into a specific sport.</p>
              </li>
              <li>
                <h5 class="title"><i class="ri-error-warning-line ri-xl"></i> Avoid Scheduling Conflicts</h5>
                <p>Students get to join in your hosted session at the point that you released a scheduled session. No
                  more to adjusting the timings and venues between different students simultaneously while still looking
                  for newer students. Sporbius is here for you.</p>
              </li>
              <li>
                <h5 class="title"><i class="ri-passport-line ri-xl"></i> Brand your Portfolio</h5>
                <p>You get to own a personal brand of yours among the sea of sports enthusiasts!</p>
              </li>
            </ul>
          </div>
          <div class="col-md-6 ml-auto mr-auto">
            <card type="login" plain>
              <router-link to="/coachlanding">
                <img v-lazy="'images/logo.png'" style="width: 280px; margin-bottom: 40px;" alt="" />
              </router-link>

              <h2 class="title">Login as Coach</h2>
              <fg-input class="no-border input-lg" addon-left-icon="now-ui-icons users_circle-08"
                placeholder="Email Address..." v-model="email">
              </fg-input>

              <fg-input class="no-border input-lg" addon-left-icon="now-ui-icons text_caps-small"
                placeholder="Password..." v-model="password">
              </fg-input>
              <div class="pull-right">
                <h6>
                  <router-link class="link footer-link" to="/forgotpassword">
                    <span style="font-size: small; text-decoration: underline;">Forgot Password?</span>
                  </router-link>
                </h6>
              </div>
              <div v-show="error" class="error"
                style="text-align: center; font-size:large; color: red;display:inline-block;">{{
                this.errorMsg
                }}</div>
              <div class="card-footer text-center">
                <button @click.prevent="login" class="btn btn-primary btn-round btn-lg btn-block">Login</button>
              </div>
              <div class="pull-left">
                <h6>
                  <router-link class="link footer-link" to="/coachregister">
                    <span style="font-size: small;"><span style="text-decoration:underline;">Register</span> an
                      account</span>
                  </router-link>
                </h6>
              </div>

            </card>
          </div>
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
          this.$router.push({ name: "profile" });
          this.error = false;
          this.errorMsg = "";
          console.log(firebase.auth().currentUser.uid)
        }).catch((err) => {
          this.error = true;
          this.errorMsg = err;
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
  