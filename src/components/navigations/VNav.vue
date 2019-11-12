<template>
    <v-app-bar elevate-on-scroll clipped-right fixed >
        <nav class="nav">
            <v-toolbar-title class="nav-logo">
                <router-link to="/">
                    <span class="cyan--text font-weight-bold font-lg font-italic">Web</span>
                    <span class="deep-orange--text font-lg font-wt-b font-oblique">SPACE</span>
                </router-link> 
            </v-toolbar-title>

            <div class="nav-wrap-sm" @click="isActived = !isActived">            
                <v-icon class="fas fa-bars"></v-icon>
            </div>

            <v-app-bar-nav-icon tile large icon class="nav-open ma-2" color="blue-grey" @click.stop="drawer=!drawer">
                <i class="fas fa-sign-in-alt fa-lg"></i>
            </v-app-bar-nav-icon>   

            <v-spacer></v-spacer>

            <div :class="{flex: isActived}" class="nav-wrap">
                <span class="nav-list">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#contact" class="nav-section blue-grey--text font-weight-bold" v-on="on">
                                Kontakt
                            </a>   
                        </template>
                    
                        <span>Kontakt</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#price" class="nav-section blue-grey--text font-weight-bold" v-on="on">
                                Cennik
                            </a>   
                        </template>
                    
                        <span>Cennik</span>
                    </v-tooltip>                    
                    
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#about" class="nav-section blue-grey--text font-weight-bold" v-on="on">
                                O firmie
                            </a>   
                        </template>
                    
                        <span>O firmie</span>
                    </v-tooltip>                    
                    
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#introduction" class="nav-section blue-grey--text font-weight-bold" v-on="on">
                                Introduction
                            </a>   
                        </template>
                    
                        <span>Introduction</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-app-bar-nav-icon tile large icon class="nav-section d-none d-md-flex ma-2 mx-5" color="blue-grey" @click.stop="drawer = !drawer" v-on="on">
                                <i class="fas fa-sign-in-alt fa-lg"></i>
                            </v-app-bar-nav-icon>   
                        </template>
                    
                        <span>Menu</span>
                    </v-tooltip>
                </span>
            </div>
        </nav>

        <v-site-bar :drawer="drawer" ></v-site-bar>
    </v-app-bar>
</template>

<script>
import VSiteBar from './VSiteBar'


export default {
    name: 'v-nav',
    components: {
        VSiteBar: VSiteBar,
    },
    data() {
        return {
            isActived: false,
            drawer: false,// todo naprawić      
        }
    },
    methods: {
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