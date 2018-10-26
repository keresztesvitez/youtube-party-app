<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#"><i class="fas fa-headphones"></i>&nbsp;Youtube Party App</a>
        </nav>

        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <!-- <div class="embed-responsive embed-responsive-16by9">
                        <iframe id="video" class="embed-responsive-item" src="" allow="encrypted-media"></iframe>
                    </div> -->
                    <div class="embed-responsive embed-responsive-16by9">
                        <div id="player"></div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 songList">
                    <PlayList :videos="videos"></PlayList>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <Controls @togglePlay="playToggleHandler"></Controls>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import PlayList from './PlayList'
import Controls from './Controls'
import YouTubePlayer from 'youtube-player'
import Video from '../classes/Video.js'

import { mapState, mapActions } from 'vuex'

let appState = {
    player: {}
}

export default {
    name: 'Host',
    components: {PlayList, Controls},
    data: function() {
        return {
            appState
        }
    },
    methods: {
        initHost() {
            this.initVideoPlayer();
        },
        initVideoPlayer() {
            appState.player = YouTubePlayer("player")
            appState.player.loadVideoById("uCLEq9V0-Yk")
            appState.player.stopVideo()
        },
        playToggleHandler() {
            console.log('hjandlin')
            appState.player.playVideo()
        }
    },
    mounted() {
        this.initHost();
    },
    computed: {
        videos() {
            return this.$store.getters['playlist/videos'];
        }
    }
}
</script>
