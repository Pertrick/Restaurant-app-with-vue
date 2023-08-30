<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import AddRestaurantComponent from '@/components/AddRestaurantComponent.vue';
export default {
    components: { HeaderComponent, AddRestaurantComponent },
}
</script>

<template>
    <HeaderComponent />
    <div class="mt-5">
        <h4 class="font-weight-bold">Add Restaurant</h4>
        <AddRestaurantComponent />
    </div>
 
</template>


<style scoped></style>