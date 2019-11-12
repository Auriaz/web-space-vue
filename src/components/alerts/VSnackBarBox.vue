<template>
    <v-snackbar v-model="msg.snackbar" bottom left :color="msg.color" multi-line :timeout="6000" >
        <v-avatar class="pa-6" :color="`${msg.color} lighten-4`" size="24">
            <v-icon :class="`${msg.icon}`" small :color="msg.color"></v-icon>
        </v-avatar>
        {{ msg.text }}
        <v-btn x-small outlined fab @click="msg.snackbar = false">
            <v-icon class="fas fa-times fa-xs"></v-icon>
        </v-btn>
    </v-snackbar>
</template>

<script>
  export default {
      name: 'v-snack-bar-box',
      props: ['msg']
  }
  </script>

<style lang="scss" scoped>
</style>