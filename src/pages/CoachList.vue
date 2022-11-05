<template>
    <div>
        <div class="page-header page-header-small clear-filter" filter-color="black">
            <parallax class="page-header-image" style="background-image: url('images/CoachLandingWallpaper.jpg')">
            </parallax>
            <div class="content-center">
                <div class="container">
                    <h1 class="title">View the various verified coaches</h1>
                    <div class="text-center">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="section">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-plain card-blog">
                            <div class="card-image text-center ">
                                <img src="images/DexterProfilePic.jpg" width="60%" alt="Thumbnail Image"
                                    class="rounded-circle img-fluid img-raised" />
                            </div>
                            <div class="card-body">
                                <h4 class="title text-center">NAME</h4>
                                <h5>
                                    Like so many organizations these days, Autodesk is a company in transition. It was
                                    until recently a traditional boxed software company selling licenses.
                                </h5>
                                <div>
                                    Sports buttons
                                </div>
                                <div class="author">
                                    <button class="btn btn-primary btn-lg btn-block">View Profile</button>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import db from '../firebase/firebaseInit';
import { collection, getDocs, updateDoc } from "firebase/firestore";

export default {
    name: 'studentlist',
    bodyClass: 'landing-page',
    components: {
        [Button.name]: Button,
        [FormGroupInput.name]: FormGroupInput
    },
    data() {
        return {
            form: {
                firstName: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {

    },
    async created() {
        if (localStorage.getItem("id") === '') {

            const router = new Router({
                routes: [
                    {
                        path: '/',
                        name: 'landing',
                        components: { default: Landing, header: MainNavbar, footer: MainFooter },
                        props: {
                            header: { colorOnScroll: 400 },
                            footer: { backgroundColor: 'black' }
                        }
                    },


                ],
                scrollBehavior: to => {
                    if (to.hash) {
                        return { selector: to.hash };
                    } else {
                        return { x: 0, y: 0 };
                    }
                }
            });

            // this.$router.push({ name: 'landing' });
        }

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(doc)
        });


    }

};
</script>
<style>

</style>