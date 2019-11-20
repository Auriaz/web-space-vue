<template>
    <div class="dashboard">
        <h1 class="title text-center grey--text">Dashboard</h1>
        
        <v-layout v-for="user in users" :key="user.id" class="dashboard__cards">
            <v-card-user :user="user"/>
        </v-layout>
    </div>
</template>

<script>
import VCardUser from '@/components/cards/VCardUser'

export default {
    name: 'dashboard',
    components: {
        VCardUser: VCardUser
    },
    computed: {
        users() {
            return this.$store.state.users
        }
    },
}
</script>

<style lang="scss" scoped>
    .dashboard {
        width: 100%;
        height: auto;
        position: relative;
        margin-top: 100px;

        &__cards {
            display: flex;
            flex-flow: wrap row;

        }
    }
</style>