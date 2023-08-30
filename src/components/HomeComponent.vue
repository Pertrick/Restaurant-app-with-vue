<script>
import axios from 'axios';

export default {
    name: 'HomeComponent',
    data() {
        return {
            restaurants: [],
        }
    },
    mounted() {
        this.fetchRestaurants();
    },
    methods: {
        async fetchRestaurants() {
            try {
                let result = await axios.get(`http://localhost:3000/restaurants`);
                if (result.status == 200) {
                    this.restaurants = result.data;
                }
            } catch (error) {
                console.log("Error login in" + error);
            }
        },
        edit(restaurantId){
            this.$router.push({
                name:'EditRestaurantView',
                params:{
                    id:restaurantId
                }
            })
        }
    }

}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="restaurant in restaurants" :key="restaurant.id" @click="edit(restaurant.id)">
                <div class="card my-2" style="width: 18rem;">
                    <img :src="restaurant.img" class="card-img-top" :alt="restaurant.name">
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">{{ restaurant.name }}</h6>
                        <p class="card-text">{{ restaurant.address }}</p>
                        <p class="card-footer">{{ restaurant.contact }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    cursor: pointer;
}
</style>