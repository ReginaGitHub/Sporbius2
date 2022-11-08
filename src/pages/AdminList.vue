<template>
    <div>
        <div class="page-header page-header-small clear-filter" filter-color="black">
            <parallax class="page-header-image" style="background-image: url('images/CoachLandingWallpaper.jpg')">
            </parallax>
            <div class="content-center">
                <div class="container">
                    <h1 class="title">Video Verfication For Coaches</h1>
                    <div class="text-center">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="section">
                <div class="text-center">
                    <button class="btn btn-primary float-start" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Pending Approval
                    </button>
                    <button class="btn btn-primary " type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                        Approved Videos
                    </button>
                    <button class="btn btn-primary float-end" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                        Disapproved Videos
                    </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <div class="row">
                                <h4 class="title text-center">Pending Approval</h4>
                                <div class="col-md-4" v-for="(profile, idx) in listofprofiles" v-bind:key="idx"
                                    v-if="profile.videoApproved !== undefined && profile.role === 'coach' && profile.videoApproved === 'Pending Approval'">

                                    <div class="card card-plain card-blog">
                                        <div class="card-image text-center ">
                                            <img v-if="profile.profilephoto == undefined || profile.profilephoto == ''"
                                                src="images/noProfilePic.jpg" width="60%" alt="Thumbnail Image"
                                                class="rounded-circle img-fluid img-raised" />
                                            <img v-if="profile.profilephoto != undefined && profile.profilephoto != ''"
                                                v-bind:src="profile.profilephoto" width="60%" alt="Thumbnail Image"
                                                class="rounded-circle img-fluid img-raised" />
                                        </div>
                                        <div class="card-body">
                                            <h4 class="title text-center">{{ profile.name }}</h4>
                                            <h5>
                                                {{ profile.aboutme }}
                                            </h5>
                                            <div>
                                                <h4 class="title p-0">Sports:
                                                    <button class="btn btn-info btn-sm" v-for="c in profile.sports"
                                                        disabled>{{ c
                                                        }}</button>
                                                </h4>
                                            </div>
                                            <div class="text-center">
                                                <video v-bind:src="profile.video" class="w-100" controls></video>
                                            </div>
                                            <div class="container-fluid">
                                                <div class="row justify-content-center text-center">
                                                    <div class="col w-100 justify-content-center text-center">
                                                        <button class="btn btn-danger w-100 btn-block "
                                                            v-on:click="disapproved(idx)">Disapproved</button>

                                                    </div>
                                                    <div class="col w-100 justify-content-center text-center">
                                                        <button class="btn btn-success w-100 btn-block"
                                                            v-on:click="approved(idx)">Approved</button>

                                                    </div>

                                                </div>
                                                <div class="author">
                                                    <button class="btn btn-primary btn-lg btn-block"
                                                        v-on:click="viewprofile(idx)">View
                                                        Profile</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample2">
                        <div class="card card-body">
                            <div class="row">
                                <h4 class="title text-center">Approved</h4>
                                <div class="col-md-4" v-for="(profile, idx) in listofprofiles" v-bind:key="idx"
                                    v-if="profile.videoApproved !== undefined && profile.role === 'coach' && profile.videoApproved === 'Approved'">

                                    <div class="card card-plain card-blog">
                                        <div class="card-image text-center ">
                                            <img v-if="profile.profilephoto == undefined || profile.profilephoto == ''"
                                                src="images/noProfilePic.jpg" width="60%" alt="Thumbnail Image"
                                                class="rounded-circle img-fluid img-raised" />
                                            <img v-if="profile.profilephoto != undefined && profile.profilephoto != ''"
                                                v-bind:src="profile.profilephoto" width="60%" alt="Thumbnail Image"
                                                class="rounded-circle img-fluid img-raised" />
                                        </div>
                                        <div class="card-body">
                                            <h4 class="title text-center">{{ profile.name }}</h4>
                                            <h5>
                                                {{ profile.aboutme }}
                                            </h5>
                                            <div>
                                                <h4 class="title p-0">Sports:
                                                    <button class="btn btn-info btn-sm" v-for="c in profile.sports"
                                                        disabled>{{ c
                                                        }}</button>
                                                </h4>
                                            </div>
                                            <div class="text-center">
                                                <video v-bind:src="profile.video" class="w-100" controls></video>
                                            </div>
                                            <div class="container-fluid">
                                                <div class="row justify-content-center text-center">
                                                    <div class="col w-100 justify-content-center text-center">
                                                        <button class="btn btn-danger w-100 btn-block "
                                                            v-on:click="disapproved(idx)">Disapproved</button>

                                                    </div>

                                                </div>
                                                <div class="author">
                                                    <button class="btn btn-primary btn-lg btn-block"
                                                        v-on:click="viewprofile(idx)">View
                                                        Profile</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample3">
                        <div class="card card-body">
                            <div class="row">
                                <h4 class="title text-center">Disapproved</h4>
                                <div class="col-md-4" v-for="(profile, idx) in listofprofiles" v-bind:key="idx"
                                    v-if="profile.videoApproved !== undefined && profile.role === 'coach' && profile.videoApproved === 'Disapproved'">

                                    <div class="card card-plain card-blog">
                                        <div class="card-image text-center ">
                                            <img v-if="profile.profilephoto == undefined || profile.profilephoto == ''"
                                                src="images/noProfilePic.jpg" width="60%" alt="Thumbnail Image"
                                                class="rounded-circle img-fluid img-raised" />
                                            <img v-if="profile.profilephoto != undefined && profile.profilephoto != ''"
                                                v-bind:src="profile.profilephoto" width="60%" alt="Thumbnail Image"
                                                class="rounded-circle img-fluid img-raised" />
                                        </div>
                                        <div class="card-body">
                                            <h4 class="title text-center">{{ profile.name }}</h4>
                                            <h5>
                                                {{ profile.aboutme }}
                                            </h5>
                                            <div>
                                                <h4 class="title p-0">Sports:
                                                    <button class="btn btn-info btn-sm" v-for="c in profile.sports"
                                                        disabled>{{ c
                                                        }}</button>
                                                </h4>
                                            </div>
                                            <div class="text-center">
                                                <video v-bind:src="profile.video" class="w-100" controls></video>
                                            </div>
                                            <div class="container-fluid">
                                                <div class="row justify-content-center text-center">
                                                    <div class="col w-100 justify-content-center text-center">
                                                        <button class="btn btn-success w-100 btn-block"
                                                            v-on:click="approved(idx)">Approved</button>

                                                    </div>

                                                </div>
                                                <div class="author">
                                                    <button class="btn btn-primary btn-lg btn-block"
                                                        v-on:click="viewprofile(idx)">View
                                                        Profile</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
    name: 'studentlist',
    bodyClass: 'landing-page',
    components: {
        [Button.name]: Button,
        [FormGroupInput.name]: FormGroupInput,
    },
    data() {
        return {
            firstName: '',
            email: '',
            message: '',
            listofprofiles: [],
            listofprofilesIDs: [],
        };
    },
    methods: {
        viewprofile(id) {
            var selectedProfileID = this.listofprofilesIDs[id];
            var userID = sessionStorage.getItem('id');
            sessionStorage.setItem('viewProfileID', selectedProfileID)

            if (userID == selectedProfileID) {
                this.$router.push({ name: 'profile' });
            }
            else {
                this.$router.push({ name: 'adminviewprofile' });
            }
        },
        async disapproved(idx) {
            this.listofprofiles[idx].videoApproved = "Disapproved"

            db.collection("users").doc(this.listofprofilesIDs[idx]).update({
                videoApproved: "Disapproved"
            });

        

            // this.listofprofiles = [];
            // const querySnapshot = await getDocs(collection(db, "users"));
            // querySnapshot.forEach((doc) => {
            //     this.listofprofiles.push(doc.data())
            //     this.listofprofilesIDs.push(doc.id)
            // });


        },
        async approved(idx) {
            this.listofprofiles[idx].videoApproved = "Approved"

            db.collection("users").doc(this.listofprofilesIDs[idx]).update({
                videoApproved: "Approved"
            });


            // this.listofprofiles = [];
            // const querySnapshot = await getDocs(collection(db, "users"));
            // querySnapshot.forEach((doc) => {
            //     this.listofprofiles.push(doc.data())
            //     this.listofprofilesIDs.push(doc.id)
            // });

        }
    },
    

    // async created() {
    //     if (localStorage.getItem("id") === '') {
    //         this.$router.push({ name: 'landing' });
    //     }
    //     // console.log(localStorage.getItem("id"))
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {

    //         this.listofprofiles = doc.data();
    //         this.listofprofilesIDs = doc.id;
    //     });


    // }

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

            console.log(localStorage)

        }
        console.log(localStorage)

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            this.listofprofiles.push(doc.data())
            this.listofprofilesIDs.push(doc.id)

        });
    }

};

</script>
<style>

</style>