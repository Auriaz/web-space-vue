<template>
    <v-form class="px-3" v-model="valid" ref="form">
        <v-text-field label="Tytuł" v-model="message.title" prepend-icon="far fa-folder" :counter="3" :rules="inputRules" required></v-text-field>
        <v-text-field label="Imię i Nazwisko" v-model="message.surname" prepend-icon="far fa-user" :counter="3" :rules="inputRules" required></v-text-field>
        <v-text-field label="Telefon" v-model="message.telephone" prepend-icon="fas fa-phone-volume" :counter="3" :rules="inputRules" required></v-text-field>
        <v-text-field label="E-mail" v-model="message.email" prepend-icon="far fa-envelope" :rules="emailRules" required></v-text-field>
        <v-textarea label="Informacja" v-model="message.content" prepend-icon="fas fa-pencil-alt" :counter="10" :rules="textRules" required></v-textarea>

        <!-- <v-menu>
            <template v-slot:activator="{ on }">
                <v-text-field :value="due" v-on="on" label="Termin zlecenia" prepend-icon="far fa-calendar-alt"></v-text-field>
            </template>

            <v-date-picker v-model="due"></v-date-picker>
        </v-menu> -->

        <v-btn class="cyan white--text mx-0 mt-3" @click="submit" :loading="loading">Wyślij</v-btn>
    </v-form>
</template>

<script>

export default {
    name: 'v-form-contact',
    data() {
        return {
            valid: false,
            message: {
                surname: '',
                telephone: '',
                email: '',
                title: '',
                content: '',
                creatAt: new Date(),
            },
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
                // TODO Połączenie z bazą danych
           }
        }
    },

}
</script>