<template>
    <v-form v-model="valid" ref="form">
        <v-row class="pa-2" justify="center">
            <v-col cols="12">
                <v-text-field outlined rounded dense v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>

            <v-col cols="12">
                <v-text-field @click:append="show = !show" outlined rounded dense v-model="password" :append-icon="show ? 'far fa-eye' : 'far fa-eye-slash'" :rules="[passRules.required, passRules.min]" :type="show ? 'text' : 'password'" label="Hasło"  required></v-text-field>
            </v-col>

            <v-col cols="12">
                <v-checkbox v-model="selected" label="zaznacz" color="indigo" hide-details></v-checkbox>
            </v-col>

            <v-btn class="ma-2" outlined color="indigo" @click="submit" :loading="loading">Zaloguj się</v-btn>
        </v-row>
    </v-form>
</template>

<script>
    import axios from 'axios';

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
        props: ['user'],
        methods: {
            submit() {
               this.loading = true;

                const user = {
                    email: this.email,
                    password: this.password
                }

                axios
                    .post('/login', user)
                    .then(response => {
                        const msg = {       
                            icon: 'fas fa-user',
                            color: 'success',
                            text: this.password,
                            snackbar: true,
                        }
                        
                        this.$emit('user-authenticated', response.headers.location);
                        this.email = '';
                        this.password = '';

                        this.$store.commit('addMessage', msg)
                    }).catch(error => {
                        const msg = {       
                            icon: 'fas fa-user',
                            color: 'error',
                            text: 'Błąd przy logowaniu',
                            snackbar: true,
                        }

                        if (error.response.data) {
                            msg.text = error.response.data.error
                        } 

                        this.$store.commit('addMessage', msg)
                    }).finally(() => {
                        this.loading = false;
                    })
            
            },
        },
    }
</script>

<style scoped lang="scss">
</style>
