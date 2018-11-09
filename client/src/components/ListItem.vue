<template>
    <div class="row" :class="{'currentVideo':isPlaying, '':!isPlaying}">
        <div class="col-sm-4 videoPreviewContainer">
            <img v-bind:src="video.thumbnail" width="160px" />
        </div>
        <div class="col-sm-8">
            <h5>{{video.title}}</h5>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

var isPlaying

export default {
    props: ["video"],
    watch: {
        playingIndex(newValue, oldValue) {
            this.currentVideo.videoId
            
        }
    },
    computed: {
        isPlaying() {
            isPlaying = false
            if (this.currentVideo.videoId == video.videoId) {
                isPlaying = true
            } 
        },
        ...mapGetters('playlist', ['playing', 'videos', 'currentVideo', 'playingIndex'])
    }
}
</script>

<style>
    .currentVideo {
        background-color: red;
    }
</style>
