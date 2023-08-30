<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
export default {
    components: { HeaderComponent, HomeComponent },
    data() {
        return {
            name: '',
        }
    },
    methods: {
        async fetchUserName() {
            let user = localStorage.getItem('user-info');
            if (user) {
                this.name = JSON.parse(user).name;
            }
        }
    },
    mounted() {
        this.fetchUserName();
    }

}
</script>

<template>
    <HeaderComponent />
    <p class="text-right m-3"><small>Welcome back</small> <strong>{{ name }}</strong>!</p>
    <HomeComponent/>
</template>


<style scoped></style>