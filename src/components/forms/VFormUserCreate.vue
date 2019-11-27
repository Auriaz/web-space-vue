<template>
    <v-row class="pa-3 ma-0">
        <v-form ref="form" v-model="valid" >
            <v-row >
                <v-col class="col-12" >
                    <v-text-field v-model="user.email" :rules="emailRules" label="*E-mail" prepend-inner-icon="mdi-email" required clearable filled></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="col-12 col-md-7 ml-8">
                       <v-text-field v-model="user.avatar_url"  label="*Avatar" prepend-inner-icon="mdi-camera" required clearable filled></v-text-field>
                    <!-- <v-file-input v-model="avatar" :rules="imageRules" accept="image/png, image/jpeg, image/bmp" placeholder="Dodaj avatara" prepend-icon="mdi-camera" label="Avatar" filled></v-file-input> -->
                </v-col>
                <v-col class="col-12 col-md-4 avatar-image">
                    <v-img v-if="user.avatar_url" :src="user.avatar_url" :alt='user.avatar' sizes="150"></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="col-12 col-md-5">
                    <v-text-field v-model="user.first_name" :rules="nameRules" label="*Imię" prepend-inner-icon="mdi-account" required clearable filled></v-text-field>
                </v-col>

                <v-col class="col-12 col-md-7">
                    <v-text-field v-model="user.last_name" :rules="nameRules" label="*Nazwisko" prepend-inner-icon="mdi-account" required clearable filled></v-text-field>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col class="col-12 col-md-6">
                    <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" label="*Podaj hasło" @click:append="show1 = !show1" prepend-inner-icon="mdi-lock-question" clearable filled></v-text-field>
                </v-col>

                <v-col class="col-12 col-md-6">
                    <v-text-field v-model="confirm_password" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min, comparePasswords]" :type="show2 ? 'text' : 'password'" label="*Powtórz hasło" @click:append="show2 = !show2" prepend-inner-icon="mdi-lock-question" clearable filled></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="col-12 col-md-6">
                    <v-select v-model="user.roles" :items="roles" :rules="[v => !!v || 'Wybór jest wymagany']" label="*Funkcja na stronie" prepend-inner-icon="mdi-settings" required filled></v-select>
                </v-col>

                <v-col class="col-12 col-md-6">
                    <v-select v-model="user.department" :items="department" :rules="[v => !!v || 'Wybór jest wymagany']" label="*Stanowisko" prepend-inner-icon="mdi-settings" required filled></v-select>
                </v-col>
            </v-row>

            <v-row>
                <v-btn :disabled="!valid" color="success" class="mr-4" :loading="loading" @click="validate">Dodaj</v-btn>
                <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
                <v-btn color="warning" class="mr-4" @click="resetValidation">Reset validacji</v-btn>
            </v-row>
        </v-form>
    </v-row>
</template>

<script>
export default {
    name: 'v-form-add-user',
    data() {
        return {
            valid: false,
            password: '',
            confirm_password: '',
            user: {
                first_name: '',
                last_name: '',
                email: '',
                roles: '',
                department: '',
                avatar: 'thanos.jpg',
                avatar_url: '/uploads/images/avatar/thanos.jpg',
                createdAt: new Date()
            },
            nameRules: [
                v => !!v || 'Pole jest wymagane',
                v => (v && v.length >= 3 ) || 'Pole musi się składać przynajmniej z 3 liter',
            ],
            emailRules: [
                v => !!v || 'E-mail jest wymagany',
                v => /.+@.+\..+/.test(v) || 'Wpisz poprawnego maila',
            ],
            imageRules: [
                value => !value || value.size < 2000000 || 'Wielkość zdjęcia nie może przekroczyć 2 MB!',
            ],
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },
            select: null,
            roles: [
                'ROLE_ADMIN',
                'ROLE_DESIGNER',
                'ROLE_SOCIAL_MEDIA',
                'TODO',
            ],
            department: [
                'Graphic designer',
                'Social media maverick',
                'Web developer'
            ],
            show1: false,
            show2: false,
            loading: false
        }
    },
    computed: {
        comparePasswords() {
            return this.password !== this.confirm_password ? 'Hało musi być identyczne' : true
        }
    },
    methods: {
        validate () {
            if (this.$refs.form.validate()) {
                this.loading = true

                this.$store.dispatch('registration', {
                    email: this.user.email,
                    password: this.password
                })
                this.$store.dispatch('createdUser', this.user)
                
                this.loading = false
                this.$emit('close')
                this.reset()
            }
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    },
}
</script>

<style lang="scss" scoped>
.add-user {
    width: 100%;
}

.avatar-image {
    border: 1px dotted grey;
}
</style>