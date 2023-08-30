<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import EditRestaurantComponent from '@/components/EditRestaurantComponent.vue';
export default {
    components: { HeaderComponent, EditRestaurantComponent },
}
</script>

<template>
    <HeaderComponent />
    <div class="mt-5">
        <h4 class="font-weight-bold">Edit Restaurants</h4>
        <EditRestaurantComponent />
    </div>
</template> 


<style scoped>
</style>