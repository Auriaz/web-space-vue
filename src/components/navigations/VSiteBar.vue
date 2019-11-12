<template>
    <v-navigation-drawer app temporary absolute v-model="drawer" right class="blue site-bar">
        <v-list>
            <v-list-item-group>
                <v-layout column align-center>
                    <v-flex class="mt-5">
                        <v-avatar size="100">
                            <v-img src="/uploads/images/avatar/dr_strange.jpg" alt="Avatar"></v-img>
                        </v-avatar>
                    </v-flex>

                    <v-flex class="mt-1 mb-4">
                        <h1 v-if="user" class="title white--text">{{ user.username }}</h1>
                        <h1 v-else class="title white--text">Web-Space.pl</h1>
                    </v-flex>

                    <v-flex class="mt-1 mb-5">
                        <v-popup @projectAdded="snackbar = true" :name="name" :colorBtn="colorBtn"/>
                    </v-flex>
                </v-layout>

                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon class="fas" :class="link.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="link.text" class="white--text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item v-if="user" @click="user" router to="/logout">
                    <v-list-item-icon>
                        <v-icon class="fas fa-sign-out-alt"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title   class="white--text" >Wyloguj się</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item v-else @click="isActivated = !isActivated">
                    <v-list-item-icon>
                        <v-icon class="fas fa-user"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title   class="white--text" >Logowanie</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

        <v-form-login v-if="isActivated && !user" @user-authenticated="onUserAuthenticated"></v-form-login>
        
    </v-navigation-drawer>
</template>

<script>
import axios from 'axios';
import VFormLogin from '../forms/VFormLogin'
import VPopup from '../modals/VPopup'

export default {
    name: 'v-site-bar',
    components: {
        VFormLogin: VFormLogin,
        VPopup: VPopup
    },
    data() {
        return {
            // drawer: false,
            name: 'skontaktuj się',
            colorBtn: 'success',
            isActivated: false,
            user: null,
            links: [
                {icon: 'fa-home',           text: 'Home',     route: '/'},
                {icon: 'fa-street-view',    text: 'My Projects',   route: '/projects'},
                {icon: 'fa-users',          text: 'Team',          route: '/team'},
                // {icon: 'fa-user',          text: 'Login',          route: '/login'},
            ],
        }
    },
    props: ['drawer'],
    methods: {
        onUserAuthenticated(userUri) {
            axios
                .get(userUri)
                .then(response => {
                    this.user = response.data
                    this.isActivated = false
                })
        }
    },
    mounted() {
        if(window.user) {
            this.user = window.user
        }
    },
}
</script>