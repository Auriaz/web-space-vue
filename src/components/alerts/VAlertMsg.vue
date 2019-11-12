<template>
    <v-alert  dismissible outlined border="bottom" :type="msg.color" :icon="msg.icon">
        {{ msg.text }}
    </v-alert>
</template>

<script>
export default {
    name: 'v-alert-msg',
    props: ['msg']
}
</script>