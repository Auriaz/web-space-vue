<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="700px" :fullscreen="fullscreen">
            <template v-slot:activator="{ on }">
                <v-spacer></v-spacer>
                <v-btn color="red" class="btn-add-user" dark v-on="on" fab>
                    <v-icon>mdi-account-multiple-plus</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="ml-3">
                    <span class="headline">Formularz dodania nowego użytkownika</span>
                    <v-spacer></v-spacer>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn x-small fab outlined color="blue darken-4" class="mx-1" @click="fullscreen = !fullscreen" v-on="on">
                                <v-icon >mdi-overscan</v-icon>
                            </v-btn>     
                        </template>
                    
                        <span>fullscreen</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn x-small fab outlined color="red" class="mx-1 mr-0" @click="dialog = false" v-on="on">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </template>
                    
                        <span>zamknij</span>
                    </v-tooltip>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-form-user-create @close="dialog = false"/>
                    </v-container>
                    <small class="red--text">*Pole wymagane</small>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import VFormUserCreate from '../forms/VFormUserCreate'

export default {
    name: 'v-model-user-create',
    components: {
        VFormUserCreate: VFormUserCreate,
    },
    data() {
        return {
            dialog: false,
            fullscreen: false
        }
    },

}
</script>

<style lang="scss" scoped>
.btn-add-user {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 5;
}
</style>