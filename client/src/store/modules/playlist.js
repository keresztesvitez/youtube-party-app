import Video from '../../classes/Video.js'

// initial state
const state = {
  playing: false,
  playingIndex: 0,
  videos: [
    new Video("uCLEq9V0-Yk"),
    new Video("YRNIndNHloU"), 
    new Video("izRZxhqfk0Y")
  ]
}

// getters
const getters = {
  playing(state) {
    return state.playing
  },
  videos(state) {
    return state.videos
  },
  currentVideo(state) {
    return state.videos[state.playingIndex]
  },
  playingIndex(state) {
    return state.playingIndex
  }
}

// actions
const actions = {
  togglePlay(context) {
    context.commit('togglePlay')
  },
  play(context) {
    context.commit('play')
  },
  pause(context) {
    context.commit('pause')
  },
  next(context) {
    context.commit('next')
  }
}

// mutations
const mutations = {
  togglePlay(state) {
    state.playing = !state.playing
  },
  play(state) {
    state.playing = true
  },
  pause(state) {
    state.playing = false
  },
  next(state) {
    console.log(state.videos.length)
    console.log(state.playingIndex)
    state.playingIndex = (state.playingIndex + 1) % state.videos.length
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
