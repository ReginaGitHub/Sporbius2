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

                        <h2 class="title">Register</h2>
                        <fg-input class="no-border input-lg" addon-left-icon="now-ui-icons users_circle-08"
                            placeholder="Name..." v-model="name">
                        </fg-input>

                        <fg-input class="no-border input-lg" addon-left-icon="now-ui-icons text_caps-small"
                            placeholder="Email Address..." v-model="email">
                        </fg-input>

                        <fg-input class="no-border input-lg" addon-left-icon="now-ui-icons text_caps-small"
                            placeholder="Password" v-model="password">
                        </fg-input>

                        <div v-show="error" class="error" style="text-align: center; font-size:large; color: red;">{{ this.errorMsg }}</div>

                        <div class="card-footer text-center">
                            <button @click.prevent="register" class="btn btn-primary btn-round btn-lg btn-block">Register</button>
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
    data() {
        return {
            loading: null,
            name: null,
            email: null,
            password: null,
            error: null,
            errorMsg: "",
        }
    },
    methods: {
        async register() {
            if (this.name !== "" && this.email !== "" && this.password !== "" && this.name !== null && this.email !== null && this.password !== null) {
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const database = db.collection("users").doc(result.user.uid);
                await database.set({
                    name: this.name,
                    email: this.email,
                    role: 'student',
                })
                this.$router.push({name: 'profile'});
                return;
            }
            this.error = true;
            this.errorMsg = "Please fill out all the fields!";
            return;

        },
    },
    bodyClass: 'login-page',
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
  