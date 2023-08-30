<script>
import SignUpFormComponent from '@/components/SignUpFormComponent.vue';

export default {
    name: 'SignUpView',
    data() {
        return {
          
        }
    },
    methods: {
        redirectToDestination(){
            if(!this.isLoggedIn){
               this.$router.push({name:"SignUpView"})
            }else{
                this.$router.push({name:"HomeView"});
            }
        }
    },
    components: {
        SignUpFormComponent,
    },
    computed:{
        isLoggedIn(){
            return !!localStorage.getItem('user-info');
        }
     
    },
    mounted(){
       this.redirectToDestination();
    }

}
</script>

<template>
    <div class="container mt-5 border rounded-lg mx-auto w-50 p-5">
        <img class="logo rounded-circle" src="../assets/logo-rest.png" />
        <h1 class="signup-text" mt-3 text-center>Sign Up</h1>
        <SignUpFormComponent />
        <p>Already a user? <router-link class="link" :to="({name:'LoginView'})">Login</router-link></p>
    </div>
</template>
    
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo{
    width:100px;
  }

  .signup-text{
    font-family: monserat;
    letter-spacing: 5px;
  }

  .link{
    cursor: pointer;
    color: #000;
    
  }
</style>
  