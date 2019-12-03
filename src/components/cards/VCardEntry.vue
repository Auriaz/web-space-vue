<template>
    <v-card flat>
        <div class="home-entry__card--header" v-sa>
            <span class="home-entry__card--title cyan--text darken-4 display-1 font-italic font-weight-bold">
                {{ content.title }}
            </span>
        </div>

        <div class="home-entry__card--body" v-sa>
            <span class="home-entry__card--text">
                {{ content.description }}
            </span>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: 'v-card-entry',
        props: ['content']
    }
</script>


<style lang="scss" scoped>
.before-enter {
    opacity: 0;
    transition: all 2s cubic-bezier(.42,0.01,.71,1.58);
}

.enter {
    opacity: 1;
    transform: translateX(0);
}
</style>