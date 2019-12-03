<template>
    <v-card flat color="deep-purple" class="contact white--text" v-sa>
        <v-layout row class="contact__box">
            <v-col class="col-12 col-md-8 contact__box-contact">
                <v-col class="col-12">
                    <v-card-title class="headline cyan--text">{{ item.title }}</v-card-title>
                    <v-card-text class="subtitle-1">{{ item.content }}</v-card-text>
                </v-col>
                
                <v-divider></v-divider>

                <v-row class="pa-2 mt-12">
                    <v-col class="col-12 col-sm-6">
                        <p  class="cyan--text">
                            <v-icon class="fas fa-home cyan--text"></v-icon>
                            <strong>{{ item.surname }}</strong>
                        </p>

                        <v-layout row wrap justify-space-around>
                            <v-flex class="col-2">
                                <v-icon class="fas fa-info-circle cyan--text"></v-icon>
                            </v-flex>
                        
                            <v-flex class="col-10 px-2">
                                <p> <strong class="cyan--text">NIP: </strong>{{ item.nip }}</p>

                                <p> <strong class="cyan--text">MBank: </strong>{{ item.nrAccount }}</p>
                            </v-flex>
                        </v-layout>
                    </v-col>

                    <v-col class="col-12 col-sm-6 mt-12">
                        <p>
                            <v-icon class="fas fa-phone-volume cyan--text"></v-icon>
                            <strong class="cyan--text">telefon: </strong> {{ item.telephone }}
                        </p>

                        <p>
                            <v-icon class="fas fa-envelope cyan--text"></v-icon>
                            <strong class="cyan--text">e-mail: </strong> {{ item.email }}
                        </p>
                    </v-col>
                </v-row>
            </v-col>

            <v-col class="contact__box-form col-12 col-md-4 pa-5">
                <v-card class="contact__box-form--form">
                    <v-card-title>
                        <h2 class="title">Formularz kontaktowy</h2>
                    </v-card-title>

                    <v-card-text>
                        <v-form-contact ></v-form-contact>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-layout>
    </v-card>
</template>

<script>
import VFormContact from '../forms/VFormContact'

export default {
    name: "v-card-contact",
    components: {
    VFormContact: VFormContact,
    },
    data() {
        return {

        } 
    },
    props: ['item']
}
</script>

<style lang="scss" scoped>
    .contact {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .before-enter {
    opacity: 0;
    transform: scale(0.6);
    transition: all 1.2s ease;
    }

    .enter {
    opacity: 1;
    transform: scale(1) rotateZ(0deg) translate(0, 0);
    }
</style>