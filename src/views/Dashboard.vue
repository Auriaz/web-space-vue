<template>
    <v-container class="dashboard">
        <v-row align-content="center">
            <v-col class="col-12 my-7">
                <h1 class="title text-center grey--text">Dashboard</h1>
            </v-col>
            
            <v-layout row justify-space-between class="dashboard__cards">

            </v-layout>
        </v-row>
    </v-container>
</template>

<script>


export default {
    name: 'dashboard',
    components: {
   
    },
    computed: {

    },
}
</script>

<style lang="scss" scoped>
    .dashboard {
        width: 1200px;
        height: auto;
        position: relative;
        margin-top: 60px;

        &__cards {

        }
    }
</style>