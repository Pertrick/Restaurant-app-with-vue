<script>
import LoginFormComponent from '@/components/LoginFormComponent.vue';

export default {
    name: 'LoginView',
    data() {
        return {
          
        }
    },
    methods: {
    },
    components: {
        LoginFormComponent,
    },
    computed:{ 
    },
    mounted(){
    }

}
</script>

<template>
    <div class="container mt-5 border rounded-lg mx-auto w-50 p-5">
        <img class="logo rounded-circle" src="../assets/logo-rest.png" />
        <h3 class="login-text font-weight-bold text-center mt-4">Login</h3>
        <LoginFormComponent />
        <p>New user? <router-link class="link" :to="({name:'SignUpView'})">Sign Up</router-link></p>
        <p>Forget Password</p>
    </div>
</template>
    
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo{
    width:100px;
  }
  .login-text{
    font-family: monserat;
    letter-spacing: 5px;
    
  }

  .link{
    cursor: pointer;
    color: #000;
    
  }
</style>
  