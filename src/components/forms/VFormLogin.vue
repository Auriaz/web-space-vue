<template >
    <v-form v-if="!online" v-model="valid" ref="form">
        <v-row class="pa-2" justify="center">
            <v-col cols="12">
                <v-text-field outlined rounded dense v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>

            <v-col cols="12">
                <v-text-field @click:append="show = !show" outlined rounded dense v-model="password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :rules="[passRules.required, passRules.min]" :type="show ? 'text' : 'password'" label="Hasło"  required></v-text-field>
            </v-col>

            <v-col cols="12">
                <v-checkbox v-model="selected" label="zaznacz" color="indigo" hide-details></v-checkbox>
            </v-col>

            <v-btn class="ma-2" outlined color="indigo" @click="login" :loading="loading">Zaloguj się</v-btn>
        </v-row>
    </v-form>
</template>

<script>
    export default {
        name: 'v-form-login',
        components: {
        },
        data() {
            return {
                valid: false,
                email: '',
                password: '',
                show: false,
                loading: false,
                selected: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                passRules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    emailMatch: () => ('The email and password you entered don\'t match')
                },
            }
        },
        computed: {
            online() {
                return this.$store.getters.online
            },
        },
        methods: {
            async login() {
                this.loading = true
                try {
                    this.$store.dispatch('login', { email: this.email, password: this.password })
                    this.$refs.form.reset()
                } catch (error) {
                    this.$store.commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'error',
                        text: 'Wystąpił błąd w trakcie logowania',
                        snackbar: true,
                    })
                }
                this.loading = false
            },
        },
    }
</script>

<style scoped lang="scss">
</style>
