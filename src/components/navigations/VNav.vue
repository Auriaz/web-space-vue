<template>
    <v-app-bar elevate-on-scroll clipped-right fixed >
        <nav class="nav deep-purple">
            <v-toolbar-title class="nav-logo">
                <router-link to="/">
                    <span class="cyan--text font-weight-bold font-lg font-italic">Web</span>
                    <span class="deep-orange--text font-lg font-wt-b font-oblique">SPACE</span>
                </router-link> 
            </v-toolbar-title>

            <v-btn small fab outlined class="nav-wrap-sm ma-2" color="cyan" @click="active = !active">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
          
            <v-btn small fab outlined class="nav-open ma-2" color="cyan" @click.stop="drawer = !drawer">
                <v-icon>mdi-menu</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <div :class="{flex: active}" class="nav-wrap">
                <span class="nav-list">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#contact" class="nav-section cyan--text font-weight-bold" v-on="on">
                                Kontakt
                            </a>   
                        </template>
                    
                        <span>Kontakt</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#price" class="nav-section cyan--text font-weight-bold" v-on="on">
                                Cennik
                            </a>   
                        </template>
                    
                        <span>Cennik</span>
                    </v-tooltip>                    
                    
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#about" class="nav-section cyan--text font-weight-bold" v-on="on">
                                O firmie
                            </a>   
                        </template>
                    
                        <span>O firmie</span>
                    </v-tooltip>                    
                    
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#introduction" class="nav-section cyan--text font-weight-bold" v-on="on">
                                Oferta
                            </a>   
                        </template>
                    
                        <span>Oferta</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn small fab outlined class="d-none d-md-block ma-3 mx-10" color="cyan" @click.stop="drawer = !drawer" v-on="on">
                                <v-icon>mdi-menu</v-icon>
                            </v-btn>   
                        </template>
                    
                        <span>Menu</span>
                    </v-tooltip>
                </span>
            </div>
        </nav>

        <v-navigation-drawer app temporary absolute v-model="drawer" right class="deep-purple site-bar">
            <v-list>
                <v-list-item-group>
                    <v-layout column align-center>
                        <v-flex class="mt-5">
                            <v-avatar size="100">
                                <v-img v-if="online && user" :src="user.avatar_url" :alt="user.avatar"></v-img>
                                <v-img v-else src="/uploads/images/avatar/dr_strange.jpg" alt="logo web-space"></v-img>
                            </v-avatar>
                        </v-flex>

                        <v-flex class="mt-1 mb-4">
                            <h1 v-if="online && user" class="title cyan--text">{{ user.first_name }} {{ user.last_name }}</h1>
                            <h1 v-else class="title white--text">Web-Space.pl</h1>
                        </v-flex>

                        <v-flex class="mt-1 mb-5">
                            <v-popup @projectAdded="snackbar = true" :name="name" :colorBtn="colorBtn"/>
                        </v-flex>
                    </v-layout>

                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-icon>
                            <v-icon class="fas" :class="`cyan--text ${link.icon}`" ></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="link.text" class="white--text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item v-if="online && user" @click="logout" router to="/">
                        <v-list-item-icon>
                            <v-icon class="cyan--text">mdi-logout-variant</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="white--text" >Wyloguj się</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item v-else @click="activated = !activated">
                        <v-list-item-icon>
                            <v-icon class="cyan--text">mdi-login-variant</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title   class="white--text" >Logowanie</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <v-form-login v-if="activated && !online" :online="online"></v-form-login>
        </v-navigation-drawer>
    </v-app-bar>
</template>

<script>
import VFormLogin from '../forms/VFormLogin'
import VPopup from '../modals/VPopup'


export default {
    name: 'v-nav',
    components: {
        VFormLogin: VFormLogin,
        VPopup: VPopup
    },
    data() {
        return {
            active: false,
            drawer: false,    
            name: 'skontaktuj się',
            colorBtn: 'cyan white--text',
            activated: false,
            links: [
                {icon: 'fa-home',           text: 'Home',     route: '/'},
                {icon: 'fa-street-view',    text: 'My Projects',   route: '/projects'},
                {icon: 'fa-users',          text: 'Team',          route: '/team'},
            ], 
        }
    },
    props: ['online', 'user'],
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../styles/settings/_colors';   

    .flex {
        display: flex;
    }

    .v-app-bar--is-scrolled {
        position: fixed;
        opacity: 0.95;
        background-color: $mainPurple !important;
    }
</style>