<template>
  <v-footer dark padless >
    <v-card flat tile class="deep-purple white--text text-center" >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <!-- <v-layout class="footer__tech">
            <v-col>
              <v-img src="/uploads/images/logo/symfony.png" width="30"></v-img>
            </v-col>

            <v-col>
              <v-img src="/uploads/images/logo/vue.png" width="30"></v-img>
            </v-col>
            
            <v-col>
              <v-img src="/uploads/images/logo/vuetify.png" width="30"></v-img>
            </v-col>

            <v-col>
              <v-img src="/uploads/images/logo/vuex.png" width="30"></v-img>
            </v-col>
        </v-layout> -->

        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — 
        <span class="cyan--text font-lg font-italic">Web</span>
        <span class="deep-orange--text font-lg font-wt-b font-oblique">SPACE</span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'v-foot',
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
  }
</script>

<style lang="scss" scoped>
  .footer__tech {
    width: 250px;
  }
</style>