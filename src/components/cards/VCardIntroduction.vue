<template>
  <v-card raised :elevation="12" class="card-introduction pa-2 ">
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex class="row wrap justify-center">
          <v-icon x-large :class="`fas ${item.icon}`"></v-icon>
        </v-flex>

        <v-card-title class="card-introduction__title text-center font-italic font-weight-medium pa-2">
          {{ item.title }}
        </v-card-title>
        
        <v-card-text class=" text-center">
          <v-divider class="mb-2"></v-divider>
          {{ item.description }}
        </v-card-text>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
    name: "v-card-introduction",
    data() {
      return {
        src: this.item.src,
        show: false,
      }
    },
    props: ['item'],
}
</script>