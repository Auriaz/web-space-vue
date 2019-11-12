<template>
    <v-app>
        <v-nav/>   
    
        <v-content>
            <router-view></router-view>
            <v-snack-bar-box v-for="msg in messages" :key="msg.index" :msg="msg"></v-snack-bar-box>
            <!-- <v-alert-msg v-for="msg in messages" :key="msg.color" :msg="msg"></v-alert-msg> -->
        </v-content>

        <v-foot/>
    </v-app>
</template>

<script>
    import VNav from './components/navigations/VNav.vue'
    import VFoot from './components/footer/VFoot'
    import VSnackBarBox from './components/alerts/VSnackBarBox'
    // import VAlertMsg from './components/alerts/VAlertMsg'

    export default {
        name: 'App',
        components: { 
            VNav: VNav, 
            VFoot: VFoot,
            VSnackBarBox: VSnackBarBox,
            // VAlertMsg: VAlertMsg
        },
        computed: {
            messages() {
                return this.$store.state.messages;
            }
        },
        methods: {
 
        },
    }
</script>

<style lang="scss" scoped>

</style>