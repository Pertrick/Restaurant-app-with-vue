<template>
  <div>
    <div>
      <input type="name" v-model="formData.name" placeholder="Enter Name">
      <small class="text-danger">{{ errors.name }}</small>
    </div>
    <div>
      <input type="email" v-model="formData.email" placeholder="Enter Email">
      <small class="text-danger">{{ errors.email }}</small>
    </div>
    <div>
      <input type="password" v-model="formData.password" placeholder="Enter Passsword">
      <small class="text-danger">{{ errors.password }}</small>
    </div>
    <div>
      <button @click="signUp()">Sign Up</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUpFormComponent',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
      },
      errors: {
        name: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    async signUp() {

      this.errors = {};

      if (this.formData.name === '') {
        this.errors.name = 'Name is required';
      }
      if (this.formData.email === '') {
        this.errors.email = 'Email is required';
      }
      if (this.formData.password === '') {
        this.errors.password = 'Password is required';
      }

      if (Object.keys(this.errors).length === 0) {
        try {
          let result = await axios.post("http://localhost:3000/users", this.formData);

          if (result.status == 201) {
            localStorage.setItem("user-info", JSON.stringify(result.data))
            this.$router.push({ "name": "HomeView" })
          }


        } catch (error) {
          console.log("Error signing up" + error);
        }

      }


    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  padding: 15px;
  margin: 8px;
  width: 300px;
  border: 1px solid #cccddd;
  border-radius: 5px;
}

button {
  padding: 10px;
  margin: 7px;
  width: 250px;
  border: none;
  background-color: rgb(204, 194, 63);
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  font-family: monserat;
  letter-spacing: 5px;
}

small{
  display: block;
}
</style>
