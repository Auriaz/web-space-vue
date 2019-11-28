<template>
    <v-card class="progress-image" v-bind:class="{enable: enable}">
        <v-row class="text-center" >
            <v-col cols="12" class="pa-1">
                <v-card-title class="progress-image__title">
                    przesyłanie zdjęcia
                </v-card-title>
            </v-col>

            <v-col cols="12" class="pa-1">
                <v-progress-circular
                :rotate="270"
                :size="56"
                :width="4"
                :value="value"
                color="teal"
                >
                    {{ value }}
                </v-progress-circular>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
  export default {
    data () {
        return {
            value: null,
            enable: false
        }
    },
    mounted () {
        this.value = this.$store.getters.progress
        if(this.$store.getters.progress != null) {
            this.enable = true
        }
    },
  }
</script>

<style lang="scss" scoped>
@import '@/styles/settings/_colors';
.progress-image {
    width: 130px;
    height: 130px;
    position: fixed;
    display: none;
    top: 100px;
    left: 10px;
    margin: 0px;
    background-color: lighten($color: $mainBlue, $amount: 30%);

    &__title {
        font-family: 'Merriweather', serif;
        font-size: 0.8rem;
        padding: 0 15px;
        font-variant: small-caps;
        color: $mainPurple;
    }
}

.enable {
    display: block;
}
</style>