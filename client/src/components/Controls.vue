<template>
    <div>
        <button class="btn-lg btn-primary" @click="togglePlay">
            <i class="fas" :class="{'fa-pause':playing, 'fa-play':!playing}"></i>&nbsp;{{toggleLabel}}
        </button>
        <button class="btn-lg btn-info" v-on:click="next">
            <i class="fas fa-step-forward"></i>&nbsp;Next
        </button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Controls',
    methods: {
        ...mapActions('playlist', ['next', 'togglePlay'])
    },
    computed: {
        toggleLabel() {
            return this.$store.getters['playlist/playing'] ? "Pawse" : "Play"
        },
        playing() {
            return this.$store.getters['playlist/playing']
        }
    }
}
</script>

<style>

</style>
