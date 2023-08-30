<script>
import axios from 'axios';
export default {
    name: 'EditRestaurantComponent',
    data() {
        return {
            formData: {
                name: '',
                contact: '',
                address: '',
                imgUrl: ''
            },
            errors: {
                name: '',
                contact: '',
                address: '',
                imgUrl: ''
            },
            restaurantId:''
        }
    },
    methods: {
        async fetchRestaurant() {
            try {
                let result = await axios.get(`http://localhost:3000/restaurants?id=${this.restaurantId}`);
                console.log(result);

                if (result.status === 200 && result.data.length > 0) {
                    console.log(result.data[0]);
                    let restaurant = result.data[0];
                    this.formData = {
                        name: restaurant.name,
                        address: restaurant.address,
                        contact: restaurant.contact,
                        imgUrl: restaurant.img
                    };

                }
            } catch (error) {
                console.log("error : " + error);
            }

        },
        async updateRestaurant() {
            this.errors = {};

            if (this.formData.name === '') {
                this.errors.name = 'Name is required';
            }
            if (this.formData.contact === '') {
                this.errors.contact = 'Contact is required';
            }
            if (this.formData.address === '') {
                this.errors.address = 'Address is required';
            }
            if (this.formData.imgUrl === '') {
                this.errors.imgUrl = 'Image Url  is required';
            }

            if (Object.keys(this.errors).length === 0) {
                try {
                    let result = await axios.put(`http://localhost:3000/restaurants/${this.restaurantId}`, {
                        'name': this.formData.name,
                        'contact': this.formData.contact,
                        'address': this.formData.address,
                        'img': this.formData.imgUrl
                    });

                    if (result.status === 200) {
                        this.$router.push({ 'name': 'HomeView' });
                    }
                } catch (error) {
                    console.log("Error : " + error);
                }
            }
        }
    },
    mounted() {
        this.restaurantId = this.$route.params.id;
        this.fetchRestaurant();
       
    },
    
}
</script>

<template>
    <div class="container mt-3">

        <form class="mx-auto w-75 border p-4 rounded">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Name</label>
                    <input type="email" class="form-control" v-model="formData.name" id="inputName">
                    <small class="text-danger">{{ errors.name }}</small>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Contact</label>
                    <input type="text" class="form-control" v-model="formData.contact" id="inputContact">
                    <small class="text-danger">{{ errors.contact }}</small>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" v-model="formData.address" id="inputAddress"
                        placeholder="1234 Main St">
                    <small class="text-danger">{{ errors.address }}</small>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputCity">Add Image</label>
                    <input type="text" class="form-control" id="InputImage" v-model="formData.imgUrl"
                        placeholder="enter link to image">
                    <small class="text-danger">{{ errors.imgUrl }}</small>
                </div>
            </div>
            <button type="button" class="btn btn-success" @click="updateRestaurant">Update</button>
        </form>

    </div>
</template>

<style scoped></style>