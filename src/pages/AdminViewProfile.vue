<template>
    <div v-if="role == 'coach'">
        <div class="page-header clear-filter" filter-color="black">
            <div v-if="uploadedCoverPhoto !== ''">
                <parallax class="page-header-image" v-bind:style='{ backgroundImage: `url("${uploadedCoverPhoto}")` }'>
                </parallax>
            </div>
            <div v-else>
                <parallax class="page-header-image" style="background-image: url('images/logo.png')">
                </parallax>
            </div>
            <div class="container">
                <div class="photo-container">
                    <div v-if="uploadedProfilePhoto !== ''">
                        <img v-bind:src="uploadedProfilePhoto" alt="" />
                    </div>
                    <div v-else>
                        <img src="images/noProfilePic.jpg" alt="" />
                    </div>
                </div>
                <h3 class="title">{{ nameOfUser }}</h3>
                <!-- <p class="category">Photographer</p> -->
                <div class="content">
                    <div class="social-description">
                        <h2>{{ viewCount }}</h2>
                        <p>Number Of Views</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="button-container">

                </div>
                <div v-if="aboutMe !== '' && aboutMe !== undefined && chosenSport.length !== 0">
                    <h3 class="title">About me
                    </h3>
                    <h5 class="text-center">
                        {{ aboutMe }}
                    </h5>
                    <div class="text-center">
                        <h4 class="title p-0">Sports:
                            <button class="btn btn-info btn-sm" v-for="c in chosenSport" disabled>{{ c }}</button>
                        </h4>
                    </div>
                </div>
                <div v-else-if="aboutMe !== '' && aboutMe !== undefined && chosenSport.length == 0">
                    <h3 class="title">About me
                    </h3>
                    <h5 class="text-center">
                        {{ aboutMe }}
                    </h5>
                    <div class="text-center">
                        <h4 class="title p-0">Sports: Not Available</h4>
                    </div>
                </div>
                <div v-else-if="aboutMe == '' && chosenSport.length != 0">
                    <h3 class="title">About me
                    </h3>
                    <h5 class="title p-0">
                        Not Available
                    </h5>
                    <div class="text-center">
                        <h4 class="title p-0">Sports:
                            <button class="btn btn-info btn-sm" v-for="c in chosenSport" disabled>{{ c }}</button>
                        </h4>
                    </div>
                </div>
                <div v-else class="text-center m-5">
                    <h3 class="title">About me
                    </h3>
                    <h5 class="title p-0">
                        Not Available
                    </h5>
                    <div class="text-center">
                        <h4 class="title p-0">Sports: Not Available
                        </h4>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 ml-auto mr-auto">
                    </div>
                    <tabs pills class="nav-align-center" tab-content-classes="gallery"
                        tab-nav-classes="nav-pills-just-icons" type="primary">
                        <tab-pane title="Profile">
                            <i slot="label" class="now-ui-icons sport_user-run"></i>

                            <div class="text-center mb-5" v-if="activities.length === 0">
                                <h5 class="title">Not Available</h5>
                            </div>
                            <div class="row">
                                <div class="col-md-4 text-center" v-for="(activity, idx) in activities"
                                    v-bind:key="idx">
                                    <div class="card" style="width: 18rem;">
                                        <div class="card-body text-left">
                                            <div class="mapouter" v-html="activity.mapsrc">
                                            </div>
                                            <h5 class="card-title fw-bold my-3">Location</h5>
                                            <h5 class="card-text">{{ activity.address }} <br>Postal Code: {{
                                            activity.postalcode
                                            }} </h5>
                                            <h5 class="card-title fw-bold my-3">Training Details</h5>
                                            <h5 class="card-text">{{ activity.trainingdesc }}</h5>
                                            <h5 class="card-title fw-bold my-3">Date</h5>
                                            <h5 class="card-text">{{ activity.date }}</h5>
                                            <h5 class="card-title fw-bold my-3">Timing</h5>
                                            <h5 class="card-text">{{ activity.starttime }} - {{ activity.endtime }}</h5>
                                            <h5 class="card-title fw-bold my-3">Price</h5>
                                            <h5 class="card-text">SGD ${{ activity.price }}/hr</h5>
                                            <h5 class="card-title fw-bold my-3"
                                                v-if="activity.participants != undefined && activity.participants.length !== 0">
                                                Participants</h5>
                                            <h5 class="card-text" v-for="participant in activity.participants">
                                                {{participant}}
                                            </h5>
                                            <!-- Button trigger modal -->
                                            <div
                                                v-if="activity.participants !== undefined && activity.participants.includes(currUserEmail) && activity.participants.length > 0">
                                                <button class="btn btn-secondary btn-block btn-lg"
                                                    v-on:click="unjoinTrainingDetails(idx)">
                                                    <i class="ri-pin-distance-line ri-lg"></i> Unjoin
                                                </button>
                                            </div>
                                            <div v-else>
                                                <button class="btn btn-primary btn-block btn-lg"
                                                    
                                                    v-on:click="joinTrainingDetails(idx)">
                                                    <i class="ri-pin-distance-line ri-lg"></i> Join
                                                </button>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </tab-pane>
                        <tab-pane title="Messages">
                            <i slot="label" class="now-ui-icons design_image"></i>

                            <div class="text-center mb-5" v-if="photoGallery.length === 0">
                                <h5 class="title">Not Available</h5>
                            </div>
                            <div class="row">
                                <div class="col-md-4 text-center" v-for="(photo, idx) in photoGallery" v-bind:key="idx"
                                    v-if="photoGallery.length > 0">
                                    <div class="mt-5" style="height: 240px">
                                        <img v-bind:src="photo" class="img-raised"
                                            style="object-fit: cover; height:100%; " />
                                    </div>
                                </div>
                            </div>


                        </tab-pane>
                        <tab-pane title="Home">
                            <i slot="label" class="now-ui-icons media-1_camera-compact"></i>
                            <div class="text-center mb-5" v-if="uploadedVideo == ''">
                                <h5>Upload your Video so that students can better see your skills and knowledge!</h5>
                            </div>
                            <div v-else>
                                <div class="text-center">
                                    <video v-bind:src="uploadedVideo" width="350" controls></video>
                                </div>
                                <div class="text-right">
                                    <h4 class="text-warning title float-end" v-if="videoApproval == 'Pending Approval'">
                                        {{ videoApproval }}</h4>
                                    <h4 class="text-success title float-end" v-if="videoApproval == 'Approved'">{{
                                    videoApproval
                                    }}</h4>
                                    <h4 class="text-danger title float-end" v-if="videoApproval == 'Disapproved'">{{
                                    videoApproval
                                    }}</h4>
                                </div>
                            </div>



                        </tab-pane>

                    </tabs>
                </div>
            </div>
        </div>
        <!-- Modal - Add About me details -->
        <div class="modal fade" id="staticBackdropAboutMeID" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropAboutMeLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="staticBackdropAboutMeLabel">Add About me details</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            v-on:click="closeAboutMeModal"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="fs-6">You can write about your years of experience, industry, or skills. People also
                            talk about
                            their achievements or previous job experiences.</h5>
                        <div class="form-floating">
                            <textarea class="form-control" style="height: 150px;" maxlength="2600"
                                id="AboutMeTextareaID"
                                v-on:keyup="incrementordecrementCharacters">{{ aboutMe }}</textarea>
                            <p class="text-muted float-end"><span id="currCharactersNum">{{ charactersLength
                            }}</span>/2600
                                characters</p>
                        </div>
                        <br>
                        <h5 class="fw-bold">Sport(s)</h5>
                        <ul class="p-0">
                            <li v-for="s in chosenSport" class="d-inline"><button class="btn btn-info d-inline-block"
                                    v-on:click="chosenSport.splice(chosenSport.indexOf(s), 1)">{{ s }} <i
                                        class="ri-close-circle-fill ri-xl"></i></button></li>
                        </ul>
                        <select v-model="selectedSport" v-on:change="addSportToList" class="form-select"
                            aria-label="Default select example">
                            <option selected disabled>Choose Sport(s)</option>
                            <option value="Basketball">Basketball</option>
                            <option value="Badminton">Badminton</option>
                            <option value="Football">Football</option>
                            <option value="Golfing">Golfing</option>
                            <option value="Roller Blading">Roller Blading</option>
                            <option value="Squash">Squash</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Surfing">Surfing</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Table Tennis">Table Tennis</option>
                            <option value="Volleyball">Volleyball</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary mt-3 float-end" id="saveEditChangesID"
                            v-on:click="saveAboutMeChanges" data-bs-dismiss="modal">Save
                            Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal - Add Activities Details -->
        <div class="modal fade" id="staticBackdropTrainingDetailsID" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdroTrainingDetailsLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="staticBackdroTrainingDetailsLabel">Add Training Details
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="fs-6">Fill in the training details that you will be hosting on that day!</h5>
                        <div class="form-floating">
                            <h5 class="fw-bold">Location</h5>
                            <h5 class="d-block form-label">
                                <div class="d-inline"><input type="text" class="form-control"
                                        placeholder="Enter Address" v-model="address" /></div>
                            </h5>
                            <h5 class="d-block form-label">
                                <div class="d-inline"><input type="text" class="form-control"
                                        placeholder="Enter Postal Code" v-model="postalCode" /></div>
                            </h5>
                            <h5 class="fw-bold mt-3">Training Details</h5>
                            <div><textarea class="form-control" style="font-size:medium"
                                    placeholder="Enter Training Details" v-model="trainingDesc"></textarea></div>
                            <h5 class="fw-bold mt-3">Date</h5>
                            <input type="date" class="form-control" style="font-size:medium" v-bind:min="minDate"
                                v-model="dateInput" />
                            <h5 class="fw-bold mt-3">Start Time: <input type="time" class="form-control mt-3"
                                    v-model="startTimeInput" /></h5>
                            <h5 class="fw-bold mt-3">End Time: <input type="time" class="form-control mt-3"
                                    v-model="endTimeInput" />
                            </h5>
                            <h5 class="fw-bold">Price</h5>
                            <input type="number" class="form-control w-75 d-inline" style="font-size:medium"
                                v-model="priceInput" />
                            <div class="d-inline" style="font-size: medium;">SGD per hour</div>


                        </div>
                        <br>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary mt-3 float-end" id="saveEditChangesID"
                            v-on:click="saveTrainingDetails" data-bs-dismiss="modal">Save
                            Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal - Edit Activities Details -->
        <div class="modal fade" id="staticBackdropEditTrainingDetailsID" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdroEditTrainingDetailsLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="staticBackdroEditTrainingDetailsLabel">Add Training
                            Details</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="fs-6">Fill in the training details that you will be hosting on that day!</h5>
                        <div class="form-floating">
                            <h5 class="fw-bold">Location</h5>
                            <h5 class="d-block form-label">
                                <div class="d-inline"><input type="text" class="form-control"
                                        placeholder="Enter Address" v-model="address" /></div>
                            </h5>
                            <h5 class="d-block form-label">
                                <div class="d-inline"><input type="text" class="form-control"
                                        placeholder="Enter Postal Code" v-model="postalCode" /></div>
                            </h5>
                            <h5 class="fw-bold mt-3">Training Details</h5>
                            <div><textarea class="form-control" style="font-size:medium"
                                    placeholder="Enter Training Details" v-model="trainingDesc"></textarea></div>
                            <h5 class="fw-bold mt-3">Date</h5>
                            <input type="date" class="form-control" style="font-size:medium" v-bind:min="minDate"
                                v-model="dateInput" />
                            <h5 class="fw-bold mt-3">Start Time: <input type="time" class="form-control mt-3"
                                    v-model="startTimeInput" /></h5>
                            <h5 class="fw-bold mt-3">End Time: <input type="time" class="form-control mt-3"
                                    v-model="endTimeInput" />
                            </h5>
                            <h5 class="fw-bold">Price</h5>
                            <input type="number" class="form-control w-75 d-inline" style="font-size:medium"
                                v-model="priceInput" />
                            <div class="d-inline" style="font-size: medium;">SGD per hour</div>
                        </div>
                        <br>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary mt-3 float-end" id="saveEditChangesID"
                            v-on:click="saveEditTrainingDetails" data-bs-dismiss="modal">Save
                            Changes</button>
                        <button type="button" class="btn btn-danger mt-3" id="saveEditChangesID"
                            v-on:click="deleteTrainingDetails" data-bs-dismiss="modal">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal - Upload Video Details -->
        <div class="modal fade" id="staticUploadVideoID" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticUploadVideoLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="staticUploadVideoLabel">Upload Video</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            v-on:click="closeVideoModal"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="fs-6">Upload a video of yourself playing the sport to get recognised!</h5>
                        <h5 class="fs-6">Once your video has been approved by Sporbius, others will be able to see it.
                            This will
                            take up till 3 working days.</h5>
                        <div class="form-floating">

                            <div style="border: 3px dashed #007bff; cursor: pointer;" class="text-center"
                                @click="$refs.file.click()">
                                <input id="file-inputID" type="file" class="file-input" ref="file"
                                    v-on:change="fileInputedChange($event)" hidden />
                                <i class="ri-upload-cloud-2-fill ri-3x" style="color: #007bff"></i>
                                <h4 style="color: #007bff" class="m-0 mb-3"> Browse File to Upload</h4>
                            </div>
                            <div v-if="uploadedVideo !== ''" class="mt-5">
                                <div type="button" class="btn btn-danger float-end" v-on:click="removeVideo">
                                    <i class="ri-close-line"></i>
                                </div>
                                <video v-bind:src="uploadedVideo" width="350" controls></video>
                            </div>
                        </div>
                        <br>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary mt-3 float-end" id="saveEditChangesID"
                            v-on:click="saveVideo" data-bs-dismiss="modal">Save
                            Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal - Upload Profile photo and Cover photo Details -->
        <div class="modal fade" id="staticBackdropAddProfilePicAndCoverPageID" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropAddProfilePicAndCoverPageLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="staticBackdropAddProfilePicAndCoverPageLabel">Upload
                            Profile
                            photo and Cover photo</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            v-on:click="closeProfilePhotoAndCoverPhotoModal"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="fs-6">Profile Picture & Cover Photo</h5>
                        <div class="form-floating">
                            <h5 class="fw-bold">Profile Picture</h5>

                            <div style="border: 3px dashed #007bff; cursor: pointer;" class="text-center"
                                @click="$refs.profilephoto.click()">
                                <input id="profilePhotofile-inputID" type="file" class="profilePhotoFile-input"
                                    ref="profilephoto" v-on:change="profilePhotoInputedChange($event)" hidden />
                                <i class="ri-upload-cloud-2-fill ri-3x" style="color: #007bff"></i>
                                <h4 style="color: #007bff" class="m-0 mb-3"> Browse File to Upload</h4>
                            </div>
                            <div v-if="uploadedProfilePhoto !== ''" class="mt-5">
                                <div type="button" class="btn btn-danger float-end" v-on:click="removeProfilePhoto">
                                    <i class="ri-close-line"></i>
                                </div>
                                <div class="photo-container">
                                    <img v-bind:src="uploadedProfilePhoto" alt="" />
                                </div>
                            </div>


                            <h5 class="fw-bold mt-5">Cover Photo</h5>

                            <div style="border: 3px dashed #007bff; cursor: pointer;" class="text-center"
                                @click="$refs.coverphoto.click()">
                                <input id="coverPhotofile-inputID" type="file" class="coverPhotoFile-input"
                                    ref="coverphoto" v-on:change="coverPhotoInputedChange($event)" hidden />
                                <i class="ri-upload-cloud-2-fill ri-3x" style="color: #007bff"></i>
                                <h4 style="color: #007bff" class="m-0 mb-3"> Browse File to Upload</h4>
                            </div>
                            <div v-if="uploadedCoverPhoto !== ''" class="mt-5">
                                <div type="button" class="btn btn-danger float-end" v-on:click="removeCoverPhoto">
                                    <i class="ri-close-line"></i>
                                </div>
                                <img v-bind:src="uploadedCoverPhoto" alt="" />
                            </div>

                        </div>
                        <br>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary mt-3 float-end" id="saveEditChangesID"
                            v-on:click="saveProfilePhotoAndCoverPhoto" data-bs-dismiss="modal">Save
                            Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal - Add Photo to Photo Gallery -->
        <div class="modal fade" id="staticBackdropPhotoGalleryID" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropPhotoGalleryLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="staticBackdropPhotoGalleryLabel">Add Photo(s) to
                            Gallery</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="fs-6">Add photo(s) to your gallery so that others can see your progression!</h5>
                        <div class="form-floating">

                            <div style="border: 3px dashed #007bff; cursor: pointer;" class="text-center"
                                @click="$refs.galleryphoto.click()">
                                <input id="galleryPhotofile-inputID" type="file" class="galleryPhotoFile-input"
                                    ref="galleryphoto" v-on:change="galleryPhotoInputedChange($event)" hidden />
                                <i class="ri-upload-cloud-2-fill ri-3x" style="color: #007bff"></i>
                                <h4 style="color: #007bff" class="m-0 mb-3"> Browse File to Upload</h4>
                            </div>
                            <div v-if="uploadedGalleryPhoto !== ''" class="mt-5">
                                <div type="button" class="btn btn-danger float-end" v-on:click="removePhoto">
                                    <i class="ri-close-line"></i>
                                </div>
                                <img v-bind:src="uploadedGalleryPhoto" alt="" />
                            </div>

                        </div>
                        <br>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary mt-3 float-end" id="savePhotoID"
                            v-on:click="savePhotoToGallery" data-bs-dismiss="modal">Save
                            Changes</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Student Profile -->
    <div v-else>
        <div class="page-header clear-filter" filter-color="black">
            <div v-if="uploadedCoverPhoto !== ''">
                <parallax class="page-header-image" v-bind:style='{ backgroundImage: `url("${uploadedCoverPhoto}")` }'>
                </parallax>
            </div>
            <div v-else>
                <parallax class="page-header-image" style="background-Image: url('images/logo.png')"></parallax>
            </div>
            <div class="container">
                <div class="photo-container">
                    <div v-if="uploadedProfilePhoto !== ''">
                        <img v-bind:src="uploadedProfilePhoto" alt="" />
                    </div>
                    <div v-else>
                        <img src="images/noProfilePic.jpg" alt="" />
                    </div>
                </div>
                <h3 class="title">{{ nameOfUser }}</h3>
                <!-- <p class="category">Photographer</p> -->
                <div class="content">
                    <div class="social-description">
                        <h2>{{ viewCount }}</h2>
                        <p>Number Of Views</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="button-container">
                    <div v-if="uploadedCoverPhoto === '' && uploadedProfilePhoto === ''">
                        <!-- Button trigger modal -->
                        <div type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal"
                            data-bs-target="#staticBackdropAddProfilePicAndCoverPageID" v-on:click="">
                            <i class="ri-add-line ri-lg"></i> Add Profile Picture & Cover Photo
                        </div>
                    </div>
                    <div v-else>
                        <!-- Button trigger modal -->
                        <div type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal"
                            data-bs-target="#staticBackdropAddProfilePicAndCoverPageID" v-on:click="">
                            <i class="ri-edit-box-line ri-lg"></i> Edit Profile Picture & Cover Photo
                        </div>
                    </div>
                </div>
                <div v-if="aboutMe !== '' && aboutMe !== undefined && chosenSport.length !== 0">
                    <h3 class="title">About me
                    </h3>
                    <h5 class="text-center">
                        {{ aboutMe }}
                    </h5>
                    <div class="text-center">
                        <h4 class="title p-0">Sports:
                            <button class="btn btn-info btn-sm" v-for="c in chosenSport" disabled>{{ c }}</button>
                        </h4>
                    </div>
                </div>
                <div v-else-if="aboutMe !== '' && aboutMe !== undefined && chosenSport.length == 0">
                    <h3 class="title">About me
                    </h3>
                    <h5 class="text-center">
                        {{ aboutMe }}
                    </h5>
                    <div class="text-center">
                        <h4 class="title p-0">Sports: Not Available</h4>
                    </div>
                </div>
                <div v-else-if="aboutMe == '' && chosenSport.length != 0">
                    <h3 class="title">About me
                    </h3>
                    <h5 class="title p-0">
                        Not Available
                    </h5>
                    <div class="text-center">
                        <h4 class="title p-0">Sports:
                            <button class="btn btn-info btn-sm" v-for="c in chosenSport" disabled>{{ c }}</button>
                        </h4>
                    </div>
                </div>
                <div v-else class="text-center m-5">
                    <h3 class="title">About me
                    </h3>
                    <h5 class="title p-0">
                        Not Available
                    </h5>
                    <div class="text-center">
                        <h4 class="title p-0">Sports: Not Available
                        </h4>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 ml-auto mr-auto">
                    </div>
                    <tabs pills class="nav-align-center" tab-content-classes="gallery"
                        tab-nav-classes="nav-pills-just-icons" type="primary">
                        <tab-pane title="Profile">
                            <i slot="label" class="now-ui-icons sport_user-run"></i>

                            <!-- <i slot="label" class="now-ui-icons design_image"></i> -->
                            <!-- <div class="col-md-10 ml-auto mr-auto">
                  <div class="row collections">
                    <div class="col-md-6">
                      <img src="img/bg6.jpg" class="img-raised" />
                      <img src="img/bg11.jpg" alt="" class="img-raised" />
                    </div>
                    <div class="col-md-6">
                      <img src="img/bg7.jpg" alt="" class="img-raised" />
                      <img src="img/bg8.jpg" alt="" class="img-raised" />
                    </div>
                  </div>
                </div> -->


                            <div class="row">
                                <div class="col-md-4 text-center" v-for="(activity, idx) in JoinedActivities"
                                    v-bind:key="idx">
                                    <div class="card" style="width: 18rem;">
                                        <div class="card-body text-left">
                                            <!-- <div class="mapouter" v-html="activity.mapsrc">
                        </div>
                        <h5 class="card-title fw-bold my-3">Location</h5>
                        <h5 class="card-text">{{ activity.address }} <br>Postal Code: {{ activity.postalcode }} </h5>
                        <h5 class="card-title fw-bold my-3">Training Details</h5>
                        <h5 class="card-text">{{ activity.trainingdesc }}</h5>
                        <h5 class="card-title fw-bold my-3">Date</h5>
                        <h5 class="card-text">{{ activity.date }}</h5>
                        <h5 class="card-title fw-bold my-3">Timing</h5>
                        <h5 class="card-text">{{ activity.starttime }} - {{ activity.endtime }}</h5>
                        <h5 class="card-title fw-bold my-3">Price</h5>
                        <h5 class="card-text">SGD ${{ activity.price }}/hr</h5> -->
                                            <!-- Button trigger modal -->
                                            <!-- <div type="button" class="btn btn-danger btn-block btn-lg" data-bs-toggle="modal"
                          data-bs-target="#staticBackdropEditTrainingDetailsID" v-on:click="leaveTraining">
                          <i slot="label" class="now-ui-icons ui-1_simple-remove"></i> Leave Training
                        </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </tab-pane>


                        <tab-pane title="Messages">
                            <i slot="label" class="now-ui-icons design_image"></i>

                            <!-- <div class="col-md-10 ml-auto mr-auto">
                  <div class="row collections">
                    <div class="col-md-6">
                      <img src="img/bg3.jpg" alt="" class="img-raised" />
                      <img src="img/bg8.jpg" alt="" class="img-raised" />
                    </div>
                    <div class="col-md-6">
                      <img src="img/bg7.jpg" alt="" class="img-raised" />
                      <img src="img/bg6.jpg" class="img-raised" />
                    </div>
                  </div>
                </div> -->

                            <div class="text-center mb-5">
                                <h5>Add New Photo to your gallery!</h5>
                                <!-- Button trigger modal -->
                                <div type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdropPhotoGalleryID" v-on:click="removePhoto">
                                    <i class="ri-add-line ri-lg"></i> Add New Photo to Gallery
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 text-center" v-for="(photo, idx) in photoGallery" v-bind:key="idx"
                                    v-if="photoGallery.length > 0">
                                    <div class="mt-5" style="height: 240px">
                                        <img v-bind:src="photo" class="img-raised"
                                            style="object-fit: cover; height:100%; " />
                                    </div>
                                    <!-- Button trigger modal -->
                                    <div type="button" class="btn btn-danger btn-block img-raised"
                                        v-on:click="deletePhotoFromGallery(idx)">
                                        <i class="ri-delete-bin-5-line ri-lg"></i> Delete Photo
                                    </div>
                                </div>
                            </div>


                        </tab-pane>
                    </tabs>
                </div>
            </div>
        </div>
        <!-- Modal - Add About me details -->
        <div class="modal fade" id="staticBackdropAboutMeID" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropAboutMeLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="staticBackdropAboutMeLabel">Add About me details</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            v-on:click="closeAboutMeModal"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="fs-6">You can write about your years of experience, industry, or skills. People also
                            talk about
                            their achievements or previous job experiences.</h5>
                        <div class="form-floating">
                            <textarea class="form-control" style="height: 150px;" maxlength="2600"
                                id="AboutMeTextareaID"
                                v-on:keyup="incrementordecrementCharacters">{{ aboutMe }}</textarea>
                            <p class="text-muted float-end"><span id="currCharactersNum">{{ charactersLength
                            }}</span>/2600
                                characters</p>
                        </div>
                        <br>
                        <h5 class="fw-bold">Sport(s)</h5>
                        <ul class="p-0">
                            <li v-for="s in chosenSport" class="d-inline"><button class="btn btn-info d-inline-block"
                                    v-on:click="chosenSport.splice(chosenSport.indexOf(s), 1)">{{ s }} <i
                                        class="ri-close-circle-fill ri-xl"></i></button></li>
                        </ul>
                        <select v-model="selectedSport" v-on:change="addSportToList" class="form-select"
                            aria-label="Default select example">
                            <option selected disabled>Choose Sport(s)</option>
                            <option value="Basketball">Basketball</option>
                            <option value="Badminton">Badminton</option>
                            <option value="Football">Football</option>
                            <option value="Golfing">Golfing</option>
                            <option value="Roller Blading">Roller Blading</option>
                            <option value="Squash">Squash</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Surfing">Surfing</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Table Tennis">Table Tennis</option>
                            <option value="Volleyball">Volleyball</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary mt-3 float-end" id="saveEditChangesID"
                            v-on:click="saveAboutMeChanges" data-bs-dismiss="modal">Save
                            Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal - Upload Profile photo and Cover photo Details -->
        <div class="modal fade" id="staticBackdropAddProfilePicAndCoverPageID" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropAddProfilePicAndCoverPageLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="staticBackdropAddProfilePicAndCoverPageLabel">Upload
                            Profile
                            photo and Cover photo</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            v-on:click="closeProfilePhotoAndCoverPhotoModal"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="fs-6">Profile Picture & Cover Photo</h5>
                        <div class="form-floating">
                            <h5 class="fw-bold">Profile Picture</h5>

                            <div style="border: 3px dashed #007bff; cursor: pointer;" class="text-center"
                                @click="$refs.profilephoto.click()">
                                <input id="profilePhotofile-inputID" type="file" class="profilePhotoFile-input"
                                    ref="profilephoto" v-on:change="profilePhotoInputedChange($event)" hidden />
                                <i class="ri-upload-cloud-2-fill ri-3x" style="color: #007bff"></i>
                                <h4 style="color: #007bff" class="m-0 mb-3"> Browse File to Upload</h4>
                            </div>
                            <div v-if="uploadedProfilePhoto !== ''" class="mt-5">
                                <div type="button" class="btn btn-danger float-end" v-on:click="removeProfilePhoto">
                                    <i class="ri-close-line"></i>
                                </div>
                                <div class="photo-container">
                                    <img v-bind:src="uploadedProfilePhoto" alt="" />
                                </div>
                            </div>


                            <h5 class="fw-bold mt-5">Cover Photo</h5>

                            <div style="border: 3px dashed #007bff; cursor: pointer;" class="text-center"
                                @click="$refs.coverphoto.click()">
                                <input id="coverPhotofile-inputID" type="file" class="coverPhotoFile-input"
                                    ref="coverphoto" v-on:change="coverPhotoInputedChange($event)" hidden />
                                <i class="ri-upload-cloud-2-fill ri-3x" style="color: #007bff"></i>
                                <h4 style="color: #007bff" class="m-0 mb-3"> Browse File to Upload</h4>
                            </div>
                            <div v-if="uploadedCoverPhoto !== ''" class="mt-5">
                                <div type="button" class="btn btn-danger float-end" v-on:click="removeCoverPhoto">
                                    <i class="ri-close-line"></i>
                                </div>
                                <img v-bind:src="uploadedCoverPhoto" alt="" />
                            </div>

                        </div>
                        <br>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary mt-3 float-end" id="saveEditChangesID"
                            v-on:click="saveProfilePhotoAndCoverPhoto" data-bs-dismiss="modal">Save
                            Changes</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal - Add Photo to Photo Gallery -->
        <div class="modal fade" id="staticBackdropPhotoGalleryID" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropPhotoGalleryLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="staticBackdropPhotoGalleryLabel">Add Photo(s) to
                            Gallery</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="fs-6">Add photo(s) to your gallery so that others can see your progression!</h5>
                        <div class="form-floating">

                            <div style="border: 3px dashed #007bff; cursor: pointer;" class="text-center"
                                @click="$refs.galleryphoto.click()">
                                <input id="galleryPhotofile-inputID" type="file" class="galleryPhotoFile-input"
                                    ref="galleryphoto" v-on:change="galleryPhotoInputedChange($event)" hidden />
                                <i class="ri-upload-cloud-2-fill ri-3x" style="color: #007bff"></i>
                                <h4 style="color: #007bff" class="m-0 mb-3"> Browse File to Upload</h4>
                            </div>
                            <div v-if="uploadedGalleryPhoto !== ''" class="mt-5">
                                <div type="button" class="btn btn-danger float-end" v-on:click="removePhoto">
                                    <i class="ri-close-line"></i>
                                </div>
                                <img v-bind:src="uploadedGalleryPhoto" alt="" />
                            </div>

                        </div>
                        <br>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary mt-3 float-end" id="savePhotoID"
                            v-on:click="savePhotoToGallery" data-bs-dismiss="modal">Save
                            Changes</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
  
<script>
import { Tabs, TabPane } from '@/components';
import Router from 'vue-router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import db from '../firebase/firebaseInit';
import Landing from './Landing.vue'
import MainNavbar from '../layout/MainNavbar.vue'
import MainFooter from '../layout/MainFooter.vue'
import { collection, getDocs, updateDoc, where } from "firebase/firestore";
import { async } from '@firebase/util';

export default {
    name: 'profile',
    bodyClass: 'profile-page',
    components: {
        Tabs,
        TabPane,
    },
    data() {
        return {
            nameOfUser: '',
            role: '',
            viewCount: 0,
            aboutMe: '',
            charactersLength: 0,
            selectedSport: 'Choose Sport(s)',
            chosenSport: [],
            address: '',
            postalCode: '',
            trainingDesc: '',
            mapSrc: '',
            activities: [],
            minDate: '',
            dateInput: '',
            startTimeInput: '',
            endTimeInput: '',
            priceInput: '',
            uploadedVideo: '',
            videoApproval: '',
            uploadedProfilePhoto: '',
            uploadedCoverPhoto: '',

            JoinedActivities: [],
            photoGallery: [],
            uploadedGalleryPhoto: '',
            participants: [],
            currUserEmail: ''

        };
    },
    methods: {
        incrementordecrementCharacters() {
            this.charactersLength = document.getElementById('AboutMeTextareaID').value.length;
        },
        async beforeMount() {
            if (sessionStorage.loggedRole == "") {
                this.$router.push({ name: 'landing' });
            }
            else if (sessionStorage.loggedRole != "admin") {
                this.$router.push({ name: "profile" });
            }
        },
        async saveAboutMeChanges() {
            if (this.chosenSport != '') {
                sessionStorage.setItem('sportInserted', this.chosenSport)
            }
            else {
                sessionStorage.setItem('sportInserted', [])
            }
            this.aboutMe = document.getElementById('AboutMeTextareaID').value;
            db.collection("users").doc(sessionStorage.id).update({
                aboutme: this.aboutMe,
                sports: this.chosenSport,
            });
        },
        addSportToList() {
            if (!this.chosenSport.includes(this.selectedSport)) {
                this.chosenSport.push(this.selectedSport);
            }
        },
        async saveTrainingDetails() {
            this.mapSrc = `<div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no"
                              marginheight="0" marginwidth="0"
                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${this.postalCode}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                          </div>`;

            this.activities.unshift({ address: this.address, postalcode: this.postalCode, trainingdesc: this.trainingDesc, mapsrc: this.mapSrc, date: this.dateInput, starttime: this.startTimeInput, endtime: this.endTimeInput, price: this.priceInput });
            db.collection("users").doc(sessionStorage.id).update({
                activities: this.activities,
            });
        },
        async saveEditTrainingDetails() {
            this.mapSrc = `<div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no"
                              marginheight="0" marginwidth="0"
                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${this.postalCode}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                          </div>`;
            var activityID = sessionStorage.getItem('editActivityIndex');
            this.activities.splice(activityID, 1);
            this.activities.splice(activityID, 0, { address: this.address, postalcode: this.postalCode, trainingdesc: this.trainingDesc, mapsrc: this.mapSrc, date: this.dateInput, starttime: this.startTimeInput, endtime: this.endTimeInput, price: this.priceInput })

            db.collection("users").doc(sessionStorage.id).update({
                activities: this.activities,
            });
        },
        async deleteTrainingDetails() {
            var activityID = sessionStorage.getItem('editActivityIndex');
            this.activities.splice(activityID, 1);

            db.collection("users").doc(sessionStorage.id).update({
                activities: this.activities,
            });
        },
        editTrainingDetails(activityID) {
            this.address = this.activities[activityID].address;
            this.postalCode = this.activities[activityID].postalcode;
            this.trainingDesc = this.activities[activityID].trainingdesc;
            this.dateInput = this.activities[activityID].date;
            this.startTimeInput = this.activities[activityID].starttime;
            this.endTimeInput = this.activities[activityID].endtime;
            this.priceInput = this.activities[activityID].price;
            sessionStorage.setItem("editActivityIndex", activityID);
            //session activity id
            //get activity id in editTrainingDetails()
            //this.activities[activityid] = new dict data
        },
        clearTrainingDetails() {
            this.address = '';
            this.postalCode = '';
            this.trainingDesc = '';
            this.dateInput = '';
            this.startTimeInput = '';
            this.endTimeInput = '';
            this.priceInput = '';
        },
        fileInputedChange(v) {
            const file = v.target.files[0];

            let reader = new FileReader()
            reader.onload = (event) => {
                this.uploadedVideo = event.target.result;

            }
            reader.readAsDataURL(file)
            document.getElementById('file-inputID').value = ''
        },
        async saveVideo() {
            if (this.uploadedVideo != '') {
                this.videoApproval = "Pending Approval"
                sessionStorage.setItem('videoInserted', this.uploadedVideo)
            }
            else {
                this.videoApproval = ""
                sessionStorage.setItem('videoInserted', '')
            }
            db.collection("users").doc(sessionStorage.id).update({
                video: this.uploadedVideo,
                videoApproved: this.videoApproval
            });

        },
        removeVideo() {
            this.uploadedVideo = ""
        },
        closeVideoModal() {
            if (sessionStorage.getItem('videoInserted') != '') {
                this.uploadedVideo = sessionStorage.getItem('videoInserted');
            }
            else {
                this.uploadedVideo = ''
            }
        },
        closeAboutMeModal() {
            if (sessionStorage.getItem('sportInserted').split(',').length > 1) {
                this.chosenSport = sessionStorage.getItem('sportInserted').split(',');
            }
            else {
                this.chosenSport = []
            }
        },
        profilePhotoInputedChange(v) {
            const file = v.target.files[0];

            let reader = new FileReader()
            reader.onload = (event) => {
                this.uploadedProfilePhoto = event.target.result;

            }
            reader.readAsDataURL(file)
            document.getElementById('profilePhotofile-inputID').value = ''
        },
        coverPhotoInputedChange(v) {
            const file = v.target.files[0];

            let reader = new FileReader()
            reader.onload = (event) => {
                this.uploadedCoverPhoto = event.target.result;
            }
            reader.readAsDataURL(file)
            document.getElementById('coverPhotofile-inputID').value = ''
        },
        async saveProfilePhotoAndCoverPhoto() {
            if (this.uploadedProfilePhoto != '') {
                sessionStorage.setItem('profilePhotoInserted', this.uploadedProfilePhoto)
            }
            else {
                sessionStorage.setItem('profilePhotoInserted', '')
            }

            if (this.uploadedCoverPhoto != '') {
                sessionStorage.setItem('coverPhotoInserted', this.uploadedCoverPhoto)
            }
            else {
                sessionStorage.setItem('coverPhotoInserted', '')
            }

            db.collection("users").doc(sessionStorage.id).update({
                profilephoto: this.uploadedProfilePhoto,
                coverphoto: this.uploadedCoverPhoto,
            });

        },
        removeProfilePhoto() {
            this.uploadedProfilePhoto = ""
        },
        removeCoverPhoto() {
            this.uploadedCoverPhoto = ""
        },
        closeProfilePhotoAndCoverPhotoModal() {
            if (sessionStorage.getItem('profilePhotoInserted') != '') {
                this.uploadedProfilePhoto = sessionStorage.getItem('profilePhotoInserted');
            }
            else {
                this.uploadedProfilePhoto = '';
            }

            if (sessionStorage.getItem('coverPhotoInserted') != '') {
                this.uploadedCoverPhoto = sessionStorage.getItem('coverPhotoInserted');
            }
            else {
                this.uploadedCoverPhoto = '';
            }
        },
        galleryPhotoInputedChange(v) {
            const file = v.target.files[0];

            let reader = new FileReader()
            reader.onload = (event) => {
                this.uploadedGalleryPhoto = event.target.result;
            }
            reader.readAsDataURL(file)
            document.getElementById('galleryPhotofile-inputID').value = ''
        },
        removePhoto() {
            this.uploadedGalleryPhoto = '';
        },
        async savePhotoToGallery() {
            if (this.uploadedGalleryPhoto !== '') {
                this.photoGallery.unshift(this.uploadedGalleryPhoto);

                db.collection("users").doc(sessionStorage.id).update({
                    photogallery: this.photoGallery,
                });
            }
        },
        async deletePhotoFromGallery(index) {
            this.photoGallery.splice(index, 1);

            db.collection("users").doc(sessionStorage.id).update({
                photogallery: this.photoGallery,
            });
        },
        async joinTrainingDetails(index) {

            var selectedProfileID = sessionStorage.getItem('viewProfileID')

            if (this.activities[index].participants === undefined) {
                this.participants.push(this.currUserEmail)
            }
            else {
                this.participants = this.activities[index].participants
                this.participants.push(this.currUserEmail)
            }

            var activityDict = { address: this.activities[index].address, postalcode: this.activities[index].postalcode, trainingdesc: this.activities[index].trainingdesc, mapsrc: this.activities[index].mapsrc, date: this.activities[index].date, starttime: this.activities[index].starttime, endtime: this.activities[index].endtime, price: this.activities[index].price, participants: this.participants }
            this.activities.splice(index, 1);
            this.activities.splice(index, 0, activityDict);

            db.collection("users").doc(selectedProfileID).update({
                activities: this.activities,
            });
            this.participants = []
        },
        async unjoinTrainingDetails(index) {
            var selectedProfileID = sessionStorage.getItem('viewProfileID')

            if (this.activities[index].participants.length > 0) {
                this.participants = this.activities[index].participants
            }

            this.participants.splice(this.currUserEmail)

            var activityDict = { address: this.activities[index].address, postalcode: this.activities[index].postalcode, trainingdesc: this.activities[index].trainingdesc, mapsrc: this.activities[index].mapsrc, date: this.activities[index].date, starttime: this.activities[index].starttime, endtime: this.activities[index].endtime, price: this.activities[index].price, participants: this.participants }
            this.activities.splice(index, 1);
            this.activities.splice(index, 0, activityDict);

            db.collection("users").doc(selectedProfileID).update({
                activities: this.activities,
            });
        }

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

            console.log(localStorage)

        }
        console.log(localStorage)

        var viewProfileID = sessionStorage.getItem('viewProfileID')
        var userID = sessionStorage.getItem('id');

        const qSnapshot = await getDocs(collection(db, "users"));
        qSnapshot.forEach((doc) => {
            if (doc.id == userID) {
                this.currUserEmail = doc.data().email
            }
        })
        console.log(this.currUserEmail)

        const querySnapshot = await getDocs(collection(db, "users"), where('id', '===', viewProfileID));
        querySnapshot.forEach((doc) => {
            this.nameOfUser = doc.data().name;
            this.role = doc.data().role;

            if (this.aboutMe != '' && this.aboutMe != undefined) {
                this.aboutMe = doc.data().aboutme;
            }
            else {
                this.aboutMe = '';
            }

            if (this.viewCount != '' && this.viewCount != undefined) {
                this.viewCount = doc.data().viewcount;
            }
            else {
                this.viewCount = 0;
            }

            if (doc.data().sports !== undefined) {
                this.chosenSport = doc.data().sports;
                sessionStorage.setItem('sportInserted', doc.data().sports)
            } else {
                this.chosenSport = []
                sessionStorage.setItem('sportInserted', [])
            }
            this.charactersLength = this.aboutMe.length

            if (doc.data().activities !== undefined) {
                this.activities = doc.data().activities;
            }
            else {
                this.activities = [];
            }

            const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            this.minDate = `${year}-${month}-${day}`;
            if (doc.data().video !== undefined) {
                this.uploadedVideo = doc.data().video;
                this.videoApproval = doc.data().videoApproved;
                sessionStorage.setItem('videoInserted', doc.data().video)

            }
            else if (doc.data().video == '' && doc.data().video == undefined) {
                this.uploadedVideo = '';
                this.videoApproval = '';
                sessionStorage.setItem('videoInserted', '')
            }

            if (doc.data().profilephoto !== undefined) {
                this.uploadedProfilePhoto = doc.data().profilephoto;
                sessionStorage.setItem('profilePhotoInserted', doc.data().profilephoto);
            }
            else {
                this.uploadedProfilePhoto = '';
                sessionStorage.setItem('profilePhotoInserted', '');
            }

            if (doc.data().coverphoto !== undefined) {
                this.uploadedCoverPhoto = doc.data().coverphoto;
                sessionStorage.setItem('coverPhotoInserted', doc.data().coverphoto);
            }
            else {
                this.uploadedCoverPhoto = '';
                sessionStorage.setItem('coverPhotoInserted', '');
            }

            if (doc.data().photogallery !== undefined) {
                this.photoGallery = doc.data().photogallery;
            }
            else {
                this.photoGallery = [];
            }

        });
    }
};



</script>
  
<style>
.mapouter {
    position: relative;
    text-align: right;
    /* width: 600px;
      height: 400px; */
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    /* width: 600px;
      height: 400px; */
}

/* .gmap_iframe {
      width: 600px !important;
      height: 400px !important;
    } */
</style>