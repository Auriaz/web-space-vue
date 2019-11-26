<template>
    <div class="radial-menu" v-bind:class="{ moving: toggle }">
        <div class="radial-menu__container" @click="toggle = !toggle">
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <div v-bind:class="{ toggle: toggle }" v-on="on">
                        <v-btn fab color="blue" v-if="!toggle">
                            <v-icon large color="white">mdi-menu</v-icon>
                        </v-btn>
                        
                        <v-icon v-else v-bind:class="{ rotate: toggle }" id="radial-add">mdi-close</v-icon>
                    </div>
                </template>
                
                <span>panel użytkownika</span>
            </v-tooltip>
        </div>
        
        <div class="radial-menu__body" id="radial-menu" v-bind:class="{ expand: toggle }">  
            <template v-for="icon in icons" >
                <v-tooltip right :key="icon.id">
                    <template v-slot:activator="{ on }">
                        <transition name="slide-fade">
                            <v-list-item  :to="icon.router"  v-show="toggle" :class="`radial-menu__body--btn ${icon.color} lighten-3 expand-${icon.id}`" v-on="on">
                                <v-icon :color="icon.color" id="icon-radial-menu">{{ icon.icon }}</v-icon>
                            </v-list-item>
                        </transition>
                    </template>

                    <span>{{ icon.title }}</span>
                </v-tooltip>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-radial-menu',
    components: {
        
    },
    data() {
        return {
            toggle: false,
            icons: [
                {id: 1, title:"home",       icon: "mdi-home", router: "/",          color: "info",      direction: "top"},
                {id: 2, title:"accounts",   icon: "mdi-account-group", router: "/accounts",     color: "error",     direction: "top"},
                {id: 3, title:"account",       icon: "mdi-account", router: "/account",           color: "error",     direction: "top"},
                {id: 4, title:"dashboard",  icon: "mdi-monitor-dashboard", router: "/dashboard", color: "info",      direction: "top"},
                {id: 5, title:"usuń",       icon: "mdi-home", router: "",           color: "success",   direction: "top"},
                {id: 6, title:"usuń",       icon: "mdi-home", router: "",           color: "success",   direction: "top"},
            ],
            // items: []
        }
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/settings/_colors';   

.radial-menu {
    position: fixed;
    bottom: 65px;
    left: 10px;
    z-index: 4;
    transition: 0.8s;
 
    &__container, .radial-menu__body {
        height: 60px;
        width: 60px;
        position: absolute;
        cursor: pointer;
    }

    &__body {
        z-index: -1;
        transform: scale(0.6);

        &--btn  {
            height: 60px;
            width: 60px;
            position: absolute;
            top: 0;
            clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            transition: 0.8s;
        } 
    }
}

#radial-add {
    font-size: 35px;
    color: $mainWhite;
}

#icon-radial-menu {
    font-size: 35px;
}

.toggle {
    height: 60px;
    width: 60px;
    position: absolute;
    top: 0;
    clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: $mainBlue;
    // transform: scale(1) rotate(45deg);
    transition: 0.8s;

        &:hover {
        transform: scale(0.8);
    }
}

.rotate {
    transform: rotate(45deg);
}

.scale {
    transform:  scale(1);
}

.moving {
    transform: translate(60px, -70px);
}

.expand {
    transform: scale(1);

    &-1 {
        transform: translateY(-68px);

        &:hover {
            transform: translateY(-68px) scale(1.1);
        }
    }
    
    &-2 {
        transform: translate(54px, -35px);

        &:hover {
            transform: translate(54px, -35px) scale(1.1);
        }
    }

    &-3 {
        transform: translate(54px, 35px);

        &:hover {
            transform: translate(54px, 35px) scale(1.1);
        }
    }

    &-4 {
        transform: translateY(68px);
        
        &:hover {
            transform: translateY(68px) scale(1.1);
        }
    }

    &-5 {
        transform: translate(-54px, 35px);

        &:hover {
            transform: translate(-54px, 35px) scale(1.1);
        }
    }

    &-6 {
        transform: translate(-54px, -35px);

        &:hover {
            transform: translate(-54px, -35px) scale(1.1);
        }
    }

}

.slide-fade-enter-active {
    transition: all .8s ease;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>