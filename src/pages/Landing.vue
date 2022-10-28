<template>
  <div>
    <div class="page-header clear-filter" filter-color="black">
      <parallax class="page-header-image" style="background-image: url('images/landingWallpaper.jpg')">
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Just Do It. Sporbius.</h1>
          <div class="text-center">
            <!-- <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a> -->
            <router-link class="btn btn-primary" to="/login">
              <p class="m-0"><i class="ri-login-box-fill ri-lg"></i> Get Started</p>
            </router-link>

          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Everything you need for a sport is right at your fingertips</h2>
            <h5>
              Sporbius is a community for anyone who is interested in any type of sports. Our mission - <strong>To enable the world to playmore</strong>.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div class="image-container image-left" style="background-image: url('images/LandingCard1.jpg')">
                <div class="img-overlay" style="padding-top: 150px; padding-left: 50px;">
                  <h1 class="title text-white">Find Coaches <br> near you</h1>
                </div>
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary title">
                  "You believe in the long term plan but you need short term goals to motivate and
                  inspire you. Sporbius is indeed the best place that you can start learning a sport. I highly recommend
                  it."
                  <br />
                  <br />
                  - Roger Federer
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div class="image-container" style="background-image: url('images/LandingCard2.jpg')">
                <div class="img-overlay" style="padding-top: 150px; padding-left: 50px;">
                  <h1 class="title text-white">Attend the <br> sessions</h1>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div class="image-container image-right" style="background-image: url('images/LandingCard3.jpg')">
                <div class="img-overlay" style="padding-top: 150px; padding-right: 50px; text-align: right;">
                  <h1 class="title text-white">Book your <br> sessions</h1>
                </div>
              </div>
              <h3 class="title">
                Sporbius is a web app that connects avid sports players.
              </h3>
              <h5>
                The one and only platform that links professional coaches to interested players.
                Lead by example by joining us as a coach or even play with like minded people near you!
              </h5>
              <h5>
                Getting started has never been this easy with Sporbius, connecting with players and coaches
                to play the sports that you love. So come on and join us and play a game!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">What you waiting for? Just Do It.</h2>
                        <h5>Coming soon on IOS and Android</h5>
                        <img src="../../public/images/AppStoreGooglePlay.jpg" />
                    </div>
                </div>
                <div class="separator separator-primary"></div>
            </div>
        </div>
        <div class="section section-team text-center p-0" style="margin-bottom: 50px;">
            <div class="container">
                <h2 class="title">Here is our team</h2>
                <div class="team">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="team-player">
                                <img src="images/ArthurProfilePic.jpeg" alt="Thumbnail Image"
                                    class="rounded-circle img-fluid img-raised" />
                                <h4 class="title">Arthur Cheng</h4>
                                <p class="category text-primary">CIO</p>
                                <h5>
                                    With Sporbius, the sports world will never be the same again. What a great platform
                                    to match student to qualified coaches.
                                </h5>
                                <a href="https://www.instagram.com/a.rrrc/" class="btn btn-primary btn-icon btn-round" target="_blank"><i
                                        class="fab fa-instagram" target="_blank"></i></a>
                                <a href="https://www.linkedin.com/in/arthur-cheng-a74a891b4/"
                                    class="btn btn-primary btn-icon btn-round" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="team-player">
                                <img src="images/ReginaProfilePic.jpg" alt="Thumbnail Image"
                                    class="rounded-circle img-fluid img-raised" />
                                <h4 class="title">Regina Ang</h4>
                                <p class="category text-primary">CEO</p>
                                <h5>
                                    The vision of Sporbius is to build a healthy community in connecting coaches and
                                    potential students in
                                    common sport.
                                </h5>
                                <a href="https://www.instagram.com/reginangra/"
                                    class="btn btn-primary btn-icon btn-round" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/reginaang-ra"
                                    class="btn btn-primary btn-icon btn-round" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="team-player">
                                <img src="images/DexterProfilePic.jpg" alt="Thumbnail Image"
                                    class="rounded-circle img-fluid img-raised" />
                                <h4 class="title">Dexter Chua</h4>
                                <p class="category text-primary">COO</p>
                                <h5>
                                    JUST DO IT. Calling all Sports enthusiasts, we offer a variety of sports in which
                                    you can find qualified coaches to learn from.
                                </h5>
                              
                                <a href="https://www.instagram.com/justdexter/" class="btn btn-primary btn-icon btn-round"><i
                                        class="fab fa-instagram" target="_blank"></i></a>
                                <a href="https://www.linkedin.com/in/idexterchuaa"
                                    class="btn btn-primary btn-icon btn-round" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="team-player">
                                <img src="images/DerekProfilePic.jpg" alt="Thumbnail Image"
                                    class="rounded-circle img-fluid img-raised" />
                                <h4 class="title">Derek Wee</h4>
                                <p class="category text-primary">CTO</p>
                                <h5>
                                    Sporbius. Indeed the perfect platform in finding suitable coaches while still
                                    widening the consumer base of coaches.
                                </h5>
                                <a href="#pablo" class="btn btn-primary btn-icon btn-round"><i
                                        class="fab fa-instagram" target="_blank"></i></a>
                                <a href="https://www.linkedin.com/in/weederek"
                                    class="btn btn-primary btn-icon btn-round" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input class="input-lg" placeholder="First Name..." v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08">
            </fg-input>
            <fg-input class="input-lg" placeholder="Email Here..." v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85">
            </fg-input>
            <div class="textarea-container">
              <textarea class="form-control" name="name" rows="4" cols="80" v-model="form.message"
                placeholder="Type a message..."></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg">Send Message</n-button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'landing',
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
  }
};
</script>
<style>

</style>
