<template>
    <div>
        <div class="page-header page-header-small clear-filter" filter-color="black">
            <parallax class="page-header-image" style="background-image: url('images/StudentLand.jpg')">
            </parallax>
            <div class="content-center">
                <div class="container">
                    <h1 class="title">View the various students profiles</h1>
                    <div class="text-center">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="section">
                <div class="row">
                    <div class="col-md-4" v-for="(profile, idx) in listofprofiles" v-if="profile.role == 'student'">
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
                                <h5 class="text-center">{{ profile.email }}</h5>
                                <h5>
                                    {{ profile.aboutme }}
                                </h5>
                                <div>
                                    <h4 class="title p-0">Sports:
                                        <button class="btn btn-info btn-sm" v-for="c in profile.sports" disabled>{{ c
                                        }}</button>
                                    </h4>
                                </div>
                                <div class="author">
                                    <button class="btn btn-primary btn-lg btn-block" v-on:click="viewprofile(idx)">View
                                        Profile</button>
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
        async viewprofile(id) {
            var selectedProfileID = this.listofprofilesIDs[id];
            var userID = sessionStorage.getItem('id');
            sessionStorage.setItem('viewProfileID', selectedProfileID)

            if (userID == selectedProfileID) {
                this.$router.push({ name: 'profile' });
            }
            else {
                var viewCount = 0;
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    if(doc.id == selectedProfileID){
                        if(doc.data().viewcount !== undefined){
                            viewCount = doc.data().viewcount;
                        }
                    }

                });

                viewCount += 1;

                db.collection("users").doc(selectedProfileID).update({
                    viewcount: viewCount,
                });
                this.$router.push({ name: 'viewprofile' });
            }
        }
    },
    async created() {
        if (localStorage.getItem("id") === '') {
            this.$router.push({ name: 'landing' });
        }
        // console.log(localStorage.getItem("id"))
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