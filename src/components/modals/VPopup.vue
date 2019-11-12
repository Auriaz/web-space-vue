<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn text :class="`${colorBtn}`" v-on="on">{{ name }}</v-btn>
        </template>

        <v-card>
            <v-card-title>
                <h2>Formularz kontaktowy</h2>
            </v-card-title>

            <v-card-text>
                <v-form-contact @dialogClose="dialog = false"></v-form-contact>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import VFormContact from '../forms/VFormContact'

export default {
    name: 'v-popup',
    components: {
        VFormContact
    },
    data() {
        return {
            dialog: false
        }
    },
    props: ['name', 'colorBtn'],
    methods: {

    },

}
</script>