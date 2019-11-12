<template>
    <div class="wallpaper">
        <vue-particles
            color="#673ab7"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="12"
            linesColor="#304FFE"
            :linesWidth="1.2"
            :lineLinked="true"
            :lineOpacity="0.9"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
    </div>
</template>

<script>
import VueParticles from '../../vendors/particles/vue-particles'

export default {
    name: 'v-canvas',
    components: {
        VueParticles: VueParticles
    },
}
</script>