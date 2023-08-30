<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
                <a class="navbar-brand text-success" href="/"> 
                     <img class="logo rounded-circle" src="../assets/logo-rest.png" />
                </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" :to="{name:'HomeView'}">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'AddRestaurantView'}">Add Restaurant</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" :to="{name:'UpdateRestaurantView'}">Update Restaurant</router-link>
                    </li> -->
                </ul>
                
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success ml-1" type="submit">Search</button>
                </form>

                <div class="ml-3">
                    <button @click="logout" class="btn btn-danger" type="button">Logout</button>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "HeaderComponent",
    data() {
        return {

        }
    },
    methods:{
        logout(){
            localStorage.clear("user-info");
            this.$router.push({"name":"LoginView"})
        }
    }

}
</script>

<style scoped>
.logo{
    width:50px;
  }
</style>