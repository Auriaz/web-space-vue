<template>
  <v-card outlined raised :elevation="12" color="white darken-2" max-width="300" class="card-price mx-auto">
    <v-flex>

      <v-card-title class="cyan--text deep-purple font-weight-bold custom-transform-class">{{ item.title }}</v-card-title>


      <v-card-text class="pa-3 py-2">{{ item.description }}</v-card-text>

      <v-divider></v-divider>

      <v-card-subtitle class="title blue-grey--text font-weight-bold justify-center pa-2 py-5">{{item.price}} zł/netto</v-card-subtitle>

      <v-divider></v-divider>

      <v-card-text>
        Pakiet składa się:
        <v-list-item dense two-line v-for="specification in item.specification" :key="specification.title">
          <v-list-item-content>
            <v-list-item-title> <a :href="specification.href">{{ specification.title }}</a></v-list-item-title>
            <v-list-item-subtitle>{{ specification.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-flex>

    <v-flex>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-popup :name="name" :textBtn="textBtn" :colorBtn="colorBtn"></v-popup>
      </v-card-actions>
    </v-flex>
  </v-card>
</template>

<script>
import VPopup from '../modals/VPopup'

export default {
    name: 'v-card-price',
    components: {
      VPopup: VPopup,
    },
    data() {
      return {
        name: 'skontaktuj się',
        colorBtn: '',
        textBtn: 'text'
      }
    },
    props: ['item'],
}
</script>

<style lang="scss" scoped>
  .custom-transform-class {
    text-transform: uppercase;
    justify-content: center;
  }

  .card-price {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
  }
</style>