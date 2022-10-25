import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import Register from './pages/Register.vue'
import CoachLanding from './pages/CoachLanding.vue';
import CoachLogin from './pages/CoachLogin.vue';
import CoachRegister from './pages/CoachRegister.vue';
import ForgetPassword from './pages/ForgetPassword.vue';

import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import CoachLandingNavbar from './layout/CoachLandingNavbar.vue';


Vue.use(Router);

sessionStorage.id


const router = new Router({
  linkExactActiveClass: 'active',
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   components: { default: Index, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: 'black' }
    //   }
    // },
    {
      path: '/',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      meta: {
        requiresAuth: true,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/register',
      name: 'register',
      components: { default: Register },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/coachlanding',
      name: 'register',
      components: { default: CoachLanding, header: CoachLandingNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/coachlogin',
      name: 'register',
      components: { default: CoachLogin },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/coachregister',
      name: 'register',
      components: { default: CoachRegister },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/forgetpassword',
      name: 'register',
      components: { default: ForgetPassword },
      props: {
        header: { colorOnScroll: 400 },
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



export default router;
