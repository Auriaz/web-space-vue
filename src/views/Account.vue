<template>
    <v-container v-if="online" class="account">
        <v-row align-content="center">
            <v-col class="col-12 my-7">
                <h1 class="title text-center grey--text">Account</h1>
            </v-col>
            
            <v-layout row justify-space-between class="account__cards">

            </v-layout>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'account',
    components: {
   
    },
    computed: {
        online() {
            return this.$store.getters.online
        },
    },
}
</script>

<style lang="scss" scoped>
    .account {
        width: 1200px;
        height: auto;
        position: relative;
        margin-top: 60px;

        &__cards {

        }
    }
</style>