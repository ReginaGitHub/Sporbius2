import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import ViewProfile from './pages/ViewProfile.vue';
import AdminViewProfile from './pages/AdminViewProfile.vue';
import Register from './pages/Register.vue'
import CoachLanding from './pages/CoachLanding.vue';
import CoachLogin from './pages/CoachLogin.vue';
import CoachRegister from './pages/CoachRegister.vue';
import ForgetPassword from './pages/ForgetPassword.vue';
import StudentList from "./pages/StudentList.vue";
import CoachList from "./pages/CoachList.vue";
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import LoggedInNavbar from './layout/LoggedInNavbar.vue';
import CoachLandingNavbar from './layout/CoachLandingNavbar.vue';
import AdminList from './pages/AdminList.vue';
import AdminNavBar from './layout/AdminNavbar.vue';



Vue.use(Router);



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
      components: { default: Profile, header: LoggedInNavbar, footer: MainFooter },
      meta: {
        requiresAuth: true,
      },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/studentlist',
      name: 'studentlist',
      components: { default: StudentList, header: LoggedInNavbar, footer: MainFooter },
      meta: {
        requiresAuth: true,
      },
      props: {
        header: { colorOnScroll: 400 },
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
      name: 'coachlanding',
      //CoachLandingNavbar
      components: { default: CoachLanding, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/coachlogin',
      name: 'regicoachloginster',
      components: { default: CoachLogin },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/coachregister',
      name: 'coachregister',
      components: { default: CoachRegister },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      components: { default: ForgetPassword },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/coachlist',
      name: 'coachlist',
      components: { default: CoachList, header: LoggedInNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/adminlist',
      name: 'adminlist',
      components: { default: AdminList, header: AdminNavBar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/viewprofile',
      name: 'viewprofile',
      components: { default: ViewProfile, header: LoggedInNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/adminviewprofile',
      name: 'adminviewprofile',
      components: { default: AdminViewProfile, header: AdminNavBar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    }
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
