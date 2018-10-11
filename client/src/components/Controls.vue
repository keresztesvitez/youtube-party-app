<template>
    <div>
        <button class="btn-lg btn-primary" @click="toggle">
            <i class="fas" :class="{'fa-pause':playing, 'fa-play':!playing}"></i>&nbsp;{{toggleLabel}}
        </button>
        <button class="btn-lg btn-info" v-on:click="next">
            <i class="fas fa-step-forward"></i>&nbsp;Next
        </button>
    </div>
</template>

<script>
export default {
    name: 'Controls',
    methods: {
        next() {
            console.log("cica")
        },
        toggle() {
            this.playing = !this.playing
            this.$emit('togglePlay')
        }
    },
    data() {
        return {
            playing: false
        }
    },
    computed: {
        toggleLabel() {
            return this.playing ? "Pawse" : "Play"
        }
    }
}
</script>

<style>

</style>
