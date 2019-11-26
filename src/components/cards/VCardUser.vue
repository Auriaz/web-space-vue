<template>
    <v-card class="card-user" v-bind:class="{edit: edit, hover: hover}">
        <v-card-title @click="hover = !hover"  class="pa-0 light-blue lighten-3 cursor-pointer">
            <v-col cols="12">
                <h2 v-if="!edit" class="title grey--text">Karta użytkownika</h2>
                <h2 v-else class="title grey--text">Edycja użytkownika</h2>
            </v-col>
        </v-card-title>

        <v-card-text>
            <!-- END ACTION -->
            <v-row justify="space-between">
                <v-col class="card-user__avatar">
                    <v-avatar size="80">
                        <v-img :src="user.avatar_url" :alt="user.avatar"></v-img>
                    </v-avatar>
                </v-col>

                <v-col class="mx-2">
                    <v-list-item-content>
                        <v-list-item-title class="font-italic font-weight-bold py-1">
                            <v-col v-if="!edit" class="ma-0 pa-0">
                                Imie: 
                                <span class="indigo--text">{{ user.first_name }}</span>
                            </v-col>
                            <v-col v-else cols="10" class="ma-0 pa-0">
                                <v-text-field v-model="user.first_name" :rules="nameRules" label="*Imię" prepend-inner-icon="mdi-account" required clearable filled></v-text-field>
                            </v-col>
                        </v-list-item-title>

                        <v-list-item-title class="font-italic font-weight-bold py-1">
                            <v-col v-if="!edit" class="ma-0 pa-0">
                                Nazwisko: <span class="indigo--text">{{ user.last_name }}</span>
                            </v-col>
                            <v-text-field v-else v-model="user.last_name" :rules="nameRules" label="*Nazwisko" prepend-inner-icon="mdi-account" required clearable filled></v-text-field>
                        </v-list-item-title>
                        <v-list-item-title class="font-italic font-weight-bold py-1">
                            <v-col v-if="!edit" class="ma-0 pa-0">
                                Email: <span class="indigo--text">{{ user.email }}</span>
                            </v-col>
                            <v-text-field v-else v-model="user.email" :rules="emailRules" label="*E-mail" prepend-inner-icon="mdi-email" required clearable filled></v-text-field>
                        </v-list-item-title>

                        <v-list-item-subtitle class="font-italic font-weight-bold py-1">
                            <v-col v-if="!edit" class="ma-0 pa-0">
                                Funkcja na stronie: <span class="indigo--text">{{ user.roles }}</span>
                            </v-col>
                            <v-select v-else v-model="user.roles" :items="roles" :rules="[v => !!v || 'Wybór jest wymagany']" label="*Funkcja na stronie" prepend-inner-icon="mdi-settings" required filled></v-select>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="font-italic font-weight-bold py-1">
                            <v-col v-if="!edit" class="ma-0 pa-0">
                                Stanowisko: <span class="indigo--text">{{ user.department }}</span>
                            </v-col>
                            <v-select v-else v-model="user.department" :items="department" :rules="[v => !!v || 'Wybór jest wymagany']" label="*Stanowisko" prepend-inner-icon="mdi-settings" required filled></v-select>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="font-italic font-weight-bold py-1">Data dodania: <span class="indigo--text">{{ user.createdAt }}</span></v-list-item-subtitle>
                    </v-list-item-content>
                </v-col>
            </v-row>
        </v-card-text>
        <!-- ACTION -->
        <v-card-actions>
            <v-row>
                <v-col v-if="edit">
                     <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn fab small color="blue darken-2" class="card-user__action--btn white--text mx-2" @click="edit = false" v-on="on">
                                <v-icon>mdi-close</v-icon>
                            </v-btn> 
                        </template>
                    
                        <span>zamknij karte</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn fab small color="green" class="card-user__action--btn white--text mx-2" :loading="loading" @click="update" v-on="on">
                                <v-icon>mdi-content-save-edit</v-icon>
                            </v-btn>
                        </template>
                    
                        <span>zatwierdź zmiane</span>
                    </v-tooltip>
                </v-col>

                <v-col v-else>
                    <v-speed-dial v-model="fab" bottom right direction="top" transition="slide-x-transition">
                        <template v-slot:activator>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn v-model="fab" outlined fab small color="blue darken-2" class="card-user__action--btn" v-on="on">
                                        <v-icon v-if="fab">mdi-close</v-icon>
                                        <v-icon v-else>mdi-account-circle</v-icon> 
                                    </v-btn>
                                </template>
                                
                                <span>akcja</span>
                            </v-tooltip>
                        </template>
                              
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn fab dark x-small color="blue" class="card-user__action--btn" @click="edit = true" v-on="on">
                                    <v-icon>mdi-account-edit</v-icon>
                                </v-btn>
                            </template>

                            <span>edycja</span>
                        </v-tooltip> 

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn fab dark x-small color="error" class="card-user__action--btn" @click.stop="dialog = true" v-on="on">
                                    <v-icon>mdi-account-remove</v-icon>
                                </v-btn>
                            </template>

                            <span>usuń</span>
                        </v-tooltip>
                    </v-speed-dial>
                </v-col>
            </v-row>
        </v-card-actions>

        <v-modal-ask-deleted :dialog="dialog" :document="user" :collection="`users`"  @cancel="dialog = false"/>
    </v-card>
</template>

<script>
import VModalAskDeleted from '../modals/VModalAskDeleted'
export default {
    name: 'v-card-user',
    components: {
        VModalAskDeleted: VModalAskDeleted
    },
    data() {
        return {
            hover: false,
            fab: false,
            edit: false,
            dialog: false,
            buttons: [
                {title:"edycja", icon: "edit", path: "", color: "success", action: false },
                // {title:"dodaj", icon: "plus", path: "", color: "info", action: false },
                {title:"usuń", icon: "slash", path: "", color: "error", action: false },
            ],
            // employee: {
            //     first_name: '',
            //     last_name: '',
            //     email: '',
            //     roles: '',
            //     department: '',
            //     password: '',
            //     avatar: 'thanos.jpg',
            //     avatar_url: '/uploads/images/avatar/thanos.jpg',
            //     createdAt: new Date()
            // },
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
            loading: false
        }
    },
    props: ['user'],
    methods: {
        update() {
            this.loading = true
            this.$store.dispatch('updatedUser', this.user)
            this.loading = false
            this.edit = false
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/settings/_colors';   
    .card-user {
        width: 300px;
        height: 320px;
        position: relative;



        &__action--btn {
            &:hover {
                transform: scale(1.1);
                color: lighten($color: $mainBlue, $amount: 30%);
            }
        }

        &__avatar {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 15px;
            right: 60px;
        }
    }

    .v-speed-dial {
        position: absolute;
        z-index: 2;
    }

    .v-btn--floating {
        position: relative;
    }

    .edit {
        width: 400px;
        min-height: 700px;
        position: absolute;
        top: 70px;
        z-index: 4;
    }

    .hover {
        transform: scale(1.1);
        z-index: 6;
    }
</style>