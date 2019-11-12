<template>
    <v-form class="px-3" v-model="valid" ref="form">
        <v-text-field label="Tytuł" v-model="title" prepend-icon="far fa-folder" :counter="3" :rules="inputRules" required></v-text-field>
        <v-text-field label="Imię i Nazwisko" v-model="surname" prepend-icon="far fa-user" :counter="3" :rules="inputRules" required></v-text-field>
        <v-text-field label="Telefon" v-model="telephone" prepend-icon="fas fa-phone-volume" :counter="3" :rules="inputRules" required></v-text-field>
        <v-text-field label="E-mail" v-model="email" prepend-icon="far fa-envelope" :rules="emailRules" required></v-text-field>
        <v-textarea label="Informacja" v-model="content" prepend-icon="fas fa-pencil-alt" :counter="10" :rules="textRules" required></v-textarea>

        <!-- <v-menu>
            <template v-slot:activator="{ on }">
                <v-text-field :value="due" v-on="on" label="Termin zlecenia" prepend-icon="far fa-calendar-alt"></v-text-field>
            </template>

            <v-date-picker v-model="due"></v-date-picker>
        </v-menu> -->

        <v-btn class="success mx-0 mt-3" @click="submit" :loading="loading">Wyślij</v-btn>
    </v-form>
</template>

<script>
import db from '@/fb'

export default {
    name: 'v-form-contact',
    data() {
        return {
            valid: false,
            surname: '',
            telephone: '',
            email: '',
            title: 'Formularz zgłoszeniowy z strony internetowej',
            content: '',
            // due: null,
            inputRules: [
                v => !!v || 'Tytuł jest wymagany',
                v => v.length >= 3 || 'Wiadomość powina sładać się z przynajmniej 3 liter'
            ],
            textRules: [
                v => !!v || 'Pole jest wymagane',
                v => v.length >= 10 || 'Wiadomość powina sładać się z przynjmniej 10 liter'
            ],
            emailRules: [
                v => !!v || 'E-mail jest wymagany',
                v => /.+@.+\..+/.test(v) || 'Adres email musi być poprawny',
            ],
            loading: false,
        }
    },
    props: [ ],
    methods: {
        submit() {
           if(this.$refs.form.validate()) {
               this.loading = true;

            //    const message = ({
            //         surname: this.surname,
            //         telephone: this.telephone,
            //         email: this.email,
            //         title: this.title,
            //         content: this.content,
            //         due: this.due,
            //         person: 'Chang Li',
            //         status: 'ongoing'
            //     })
                
                // console.log(project);
                // const msg = {
                //     color: 'success',
                //     content: 'Wiadomość została wysłana'
                // }
               db.collection('messages').add().then(() => {
            //        console.log('Dodano do bazy danych')
                        this.$store.commit('addMessage', {       
                            icon: 'fas fa-envelope',
                            color: 'success',
                            text: 'Wiadomość została wysłana',
                            snackbar: true,
                        })

                        this.loading = false;
                        // this.dialog = false;
                        this.$emit('dialogClose')
               })
            //    console.log(this.title, this.content, this.due)
           }
        }
    },

}
</script>