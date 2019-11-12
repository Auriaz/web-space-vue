<template>
    <div class="team">
        <h1 class="title grey--text text-center">Team</h1>

        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex  col-xs-12 col-sm-6 col-md-4 col-lg-3 class="pa-3" v-for="person in team" :key="person.name">
                    <v-card flat class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src="person.avatar" alt="Avatar">
                            </v-avatar>
                        </v-responsive>

                        <v-card-text>
                            <h2 class="title">{{ person.name }}</h2>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn flat color="blue lighten-4">
                                <v-icon small left class="fab fa-discourse"></v-icon>
                                <span>Massage</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    name: 'Team',
    data() {
        return {
            team: [
                {name: "Chan Li", role: 'Web developer', avatar: '/uploads/images/avatar/thanos.jpg'},
                {name: "Ryu", role: 'Graphic designer', avatar: '/uploads/images/avatar/dr_strange.jpg'},
                {name: "Gueken", role: 'Social media maverick', avatar: '/uploads/images/avatar/vision.jpg'},
                {name: "Yoshi", role: 'Sales guru', avatar: '/uploads/images/avatar/panther.jpg'},
            ]
        }
    },
  }
</script>
