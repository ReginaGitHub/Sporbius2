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
                        <form @submit.prevent="register">
                            <h2 class="title">Register</h2>
                            <fg-input class="no-border input-lg" addon-left-icon="now-ui-icons users_circle-08"
                                placeholder="Name..." v-model="name">
                            </fg-input>

                            <fg-input type="email" class="no-border input-lg"
                                addon-left-icon="now-ui-icons text_caps-small" placeholder="Email Address..."
                                v-model="email">
                            </fg-input>

                            <fg-input type="password" class="no-border input-lg"
                                addon-left-icon="now-ui-icons text_caps-small" placeholder="Password"
                                v-model="password">
                            </fg-input>

                            <div v-show="error" class="error" style="text-align: center; font-size:large; color: red;">
                                {{ this.errorMsg }}</div>

                            <div class="card-footer text-center">
                                <vue-recaptcha :sitekey="site" @verify="verify"></vue-recaptcha>
                                <label class="card-title label form-label" v-if="!recaptcha" style="color: red;">
                                    Not yet verified </label><br>
                                <button class="btn btn-primary btn-round btn-lg btn-block">Register</button>
                            </div>
                            <div class="pull-left">
                                <h6>
                                    <router-link class="link footer-link" to="/login">
                                        <span style="font-size: small;">Has an account? <span
                                                style="text-decoration:underline;">Login</span></span>
                                    </router-link>
                                </h6>
                            </div>
                            <div class="pull-right">
                                <h6></h6>
                            </div>
                            <!-- <template slot="raw-content">
                                <div class="card-footer text-center">
                                    <a href="#pablo" class="btn btn-primary btn-round btn-lg btn-block">Register</a>
                                </div>
                                <div class="pull-left">
                                    <h6>
                                        <router-link class="link footer-link" to="/login">
                                            <span style="font-size: small;">Already have an account? <span style="text-decoration:underline;">Login</span></span>
                                        </router-link>
                                    </h6>
                                </div>
                                <div class="pull-right">
                                    <h6></h6>
                                </div>
                            </template> -->
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
import { VueRecaptcha } from 'vue-recaptcha';

export default {
    name: 'login-page',
    data() {
        return {
            loading: null,
            name: "",
            email: "",
            password: "",
            error: null,
            errorMsg: "",
            site: "6LdTrc4iAAAAAJz9uQiJsYFDrXv8-FknOl4O7OAM",
            recaptcha: null,
        }
    },
    methods: {
        async register() {
            console.log("running times");
            var lowerCaseLetters = /[a-z]/g;
            var upperCaseLetters = /[A-Z]/g;
            var numbers = /[0-9]/g;
            var endingEmail = /[.com]/g;

            if (this.name == "" || this.email == "" || this.password == "") {
                this.error = true;
                this.errorMsg = "Please fill in all the fields"
            }

            else if (!this.email.match(endingEmail)) {
                this.error = true;
                this.errorMsg = "Please indicate correct email"
            }
            else if (this.password.length < 8) {
                this.error = true;
                this.errorMsg = "Password needs to be at least 8 character."
            }
            else if (!(this.password.match(lowerCaseLetters))) {
                this.error = true;
                this.errorMsg = "Please have at least 1 lower case letter."
            }
            else if (!(this.password.match(upperCaseLetters))) {
                this.error = true;
                this.errorMsg = "Please have at least 1 upper case letter."
            }
            else if (!(this.password.match(numbers))) {
                this.error = true;
                this.errorMsg = "Please have at least 1 number."
            }
            else if(this.recaptcha == null){
                this.error = true;
                this.errorMsg = ''
            }
            else if (this.recaptcha != null) {
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();
                try {
                    const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                    const result = await createUser;
                    const database = db.collection("users").doc(result.user.uid);
                    await database.set({
                        name: this.name,
                        email: this.email,
                        role: 'student',
                    })
                    this.$router.push({ name: 'profile' });
                    return;
                }
                catch (err) {
                    this.error = true;
                    this.errorMsg = "Email has been taken. Please choose another email.";
                    return;
                }
            }

        },
        verify(response) {

            this.recaptcha = response;
        },
    },
    bodyClass: 'login-page',
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
      