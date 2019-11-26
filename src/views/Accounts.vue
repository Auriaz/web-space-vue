<template>
    <v-container class="accounts">
        <v-row align-content="center">
            <v-col class="col-12 my-3">
                <h1 class="title text-center grey--text  mt-12">Accounts</h1>
            </v-col>

            
            <v-layout row justify-space-between class="accounts__cards">
                <v-row justify-md="center">
                    <v-col class="col-12 col-sm-6 col-md-4" v-for="user in users" :key="user.id">
                        <v-card-user :user="user"/>
                    </v-col>
                </v-row>
            </v-layout>
        </v-row>
        <v-modal-user-create />
    </v-container>
</template>

<script>
import VCardUser from '@/components/cards/VCardUser'
import VModalUserCreate from '@/components/modals/VModalUserCreate'

export default {
    name: 'accounts',
    components: {
        VCardUser: VCardUser,
        VModalUserCreate: VModalUserCreate
    },
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    created() {
        this.$store.dispatch('loadUsers')
    },
}
</script>

<style lang="scss" scoped>
    .accounts {
        


        &__cards {

        }
    }
</style>