import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/pages/HomeView.vue';
import SignUpView from '@/pages/SignUpView.vue';
import LoginView from '@/pages/LoginView.vue';
import AddRestaurantView from '@/pages/AddRestaurantView'
import EditRestaurantView from '@/pages/EditRestaurantView'

const routes = [
    {
         path: '/home', 
         name:'HomeView',
         component: HomeView,
         meta: { requiresAuth: true }, 
    },
    { 
        path: '/signup',
        name: 'SignUpView',
        component: SignUpView
    },
    { 
        path: '/login',
        name: 'LoginView',
        component: LoginView
    },
    { 
      path: '/add-restaurant',
      name: 'AddRestaurantView',
      component: AddRestaurantView
    },
    { 
      path: '/edit-restaurant/:id',
      name: 'EditRestaurantView',
      component: EditRestaurantView
    }
  ]
  
 
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  });

  router.beforeEach((to, from, next) => {
    const userIsLoggedIn = !!localStorage.getItem('user-info');
  
    if (to.name === 'LoginView' && userIsLoggedIn) {
      next({ name: 'HomeView' }); // Redirect to HomeView after successful login
    } else if (to.meta.requiresAuth && !userIsLoggedIn) {
      next({ name: 'LoginView' }); // Redirect to LoginView for routes that require authentication
    } else {
      next(); // Allow navigation for other cases
    }
  });


  export default router;
  