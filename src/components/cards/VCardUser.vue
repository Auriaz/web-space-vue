<template>
    <v-card class="card-user">
        <v-speed-dial v-model="fab" top right direction="left" transition="slide-x-transition">
            <template v-slot:activator>
                <v-btn v-model="fab" outlined fab small color="blue darken-2" >
                    <v-icon v-if="fab" class="fas fa-user-cog"></v-icon>
                    <v-icon v-else class="fas fa-times"></v-icon> 
                </v-btn>
            </template>

            <v-btn fab dark x-small color="green">
                <v-icon class="fas fa-user-edit"></v-icon>
            </v-btn>

            <v-btn fab dark x-small color="indigo">
                <v-icon class="fas fa-user-plus"></v-icon>
            </v-btn>

            <v-btn fab dark x-small color="red">
                <v-icon class="fas fa-user-slash"></v-icon>
            </v-btn>
        </v-speed-dial>

        <v-card-title class="">
            <v-list-item class="my-10 pa-2">
                <v-list-item-content>
                    <v-list-item-title>Imie: {{ user.first_name }}</v-list-item-title>
                    <v-list-item-title>Nazwisko: {{ user.last_name }}</v-list-item-title>
                    <v-list-item-title>Email: {{ user.email }}</v-list-item-title>
                    <v-list-item-subtitle>Rola: {{ user.roles }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-avatar class="ma-2" size="80">
                    <v-img :src="user.avatar_url" :alt="user.avatar"></v-img>
                </v-avatar>
            </v-list-item>
        </v-card-title>

    </v-card>
</template>

<script>
export default {
    name: 'v-card-user',
    data() {
        return {
            fab: false,
        }
    },
    props: ['user'],
        computed: {
        // activeFab () {
        //     switch (this.tabs) {
        //         case 'one': return { class: 'purple', icon: 'fas fa-user-plus' }
        //         case 'two': return { class: 'red', icon: 'fas fa-user-edit' }
        //         case 'three': return { class: 'green', icon: 'fas fa-user-edit' }
        //         default: return {}
        //      }
        // },
    },

}
</script>

<style lang="scss" scoped>
@import '../../styles/settings/_colors';   
    .card-user {
        width: 320px;
        height: 200px;
        position: relative;

        &:hover {
            transform: scale(1.05);
            background-color: lighten($color: $mainBlue, $amount: 30%);
        }
    }

  .v-speed-dial {
    position: absolute;
    z-index: 7;
  }

 .v-btn--floating {
    position: relative;
  }
</style>