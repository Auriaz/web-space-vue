<template>
    <v-app>
        <v-nav :user="user" :online="online"/>   
    
        <v-content>
            <router-view></router-view>
            <v-snack-bar-box v-for="msg in messages" :key="msg.index" :msg="msg"></v-snack-bar-box>
            <!-- <v-alert-msg v-for="msg in messages" :key="msg.color" :msg="msg"></v-alert-msg> -->
            <v-radial-menu v-if="online && user"></v-radial-menu>
            <v-progress-site v-if="loading"></v-progress-site>
        </v-content>

        <v-foot/>
    </v-app>
</template>

<script>
    import VNav from './components/navigations/VNav.vue'
    import VRadialMenu from './components/navigations/VRadialMenu.vue'
    import VFoot from './components/footer/VFoot'
    import VSnackBarBox from './components/alerts/VSnackBarBox'
    import VProgressSite from './components/progress/VProgressSite'
    // import VAlertMsg from './components/alerts/VAlertMsg'

    export default {
        name: 'App',
        components: { 
            VNav: VNav, 
            VFoot: VFoot,
            VSnackBarBox: VSnackBarBox,
            // VAlertMsg: VAlertMsg,
            VRadialMenu: VRadialMenu,
            VProgressSite: VProgressSite
        },
        computed: {
            messages() {
                return this.$store.state.messages
            },
            online() {
                return this.$store.getters.online
            },
            user() {
                return this.$store.state.user
            },
            loading() {
                return this.$store.getters.loading
            }
        },
        methods: {
 
        },
    }
</script>

<style lang="scss" scoped>

</style>