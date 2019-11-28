<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" max-width="500">            
            <v-card class="black">
                <v-card-title class="headline white--text">Czy jesteś pewien, że chcesz usunąć?</v-card-title>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="cancel">zrezygnuj</v-btn>
                    <v-btn color="red darken-2" text @click="deleted">Usuń</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: 'v-modal-ask-deleted',
    data() {
        return {
            // action: this.dialog
            user: this.document
        }
    },
    props: ['dialog', 'collection', 'document'],
    methods: {
        cancel() {
            this.$emit('cancel')
        },
        deleted() {
            this.$store.dispatch('deletedUser', this.user)

            this.$emit('cancel')
        }
    },
    created() {
        if(this.action) {
            this.dialog = this.action
        }
    },
}
</script>