<template>
    <div class="wrapper">
        <div style="position:relative;">
            <div class="row no-gutters" style="box-shadow: 0 3px 7px 1px rgba(0,0,0,0.06);">
                <div class="col py-5">
                    <h1 class="text-center">Zaloguj się</h1>
                    <h6 class="text-center"></h6>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-xs-12 col-md-6 px-5" style="background-color: #659dbd; padding-bottom: 150px;">
                    <h2 class="text-center mb-5 pt-5 text-white">API</h2>
                    <p class="text-white">
                        You are currently
                        <span v-if="user">
                            authenticated as {{ user.username }}

                            <a href="/logout" class="btn btn-warning btn-sm">Log out</a>
                        </span>
                        <span v-else>not authenticated</span>
                    </p>
                    <p class="text-white">
                        Check out the API Docs: <a v-bind:href="entrypoint" class="text-white"><u>{{ entrypoint }}</u></a>
                    </p>
                </div>
                <div class="col-xs-12 col-md-6 px-5" style="background-color: #7FB7D7; padding-bottom: 150px;">
                    <h2 class="text-center mb-5 pt-5 text-white">Or, login!</h2>
                    <v-form-login
                        v-on:user-authenticated="onUserAuthenticated"
                    ></v-form-login>
                </div>
            </div>
            <footer class="footer">

                    <p class="text-muted my-5 text-center">Made with ❤️ by the <a style="text-decoration: underline; color: #6c757d; font-weight: bold;" href="http://www.symfonycasts.com">SymfonyCasts</a> Team</p>

            </footer>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import VFormLogin from '../components/forms/VFormLogin';

    export default {
        name: 'login',
        components: {
            VFormLogin: VFormLogin
        },
        props: ['entrypoint'],
        methods: {
            onUserAuthenticated(userUri) {
                axios
                    .get(userUri)
                    .then(response => (this.user = response.data))
            }
        },
        data() {
            return {
                user: null
            }
        }
    }
</script>

<style scoped lang="scss">
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        min-height: 60px;
        background-color: #f5f5f5;
    }
</style>