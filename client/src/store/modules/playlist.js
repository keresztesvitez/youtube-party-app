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
  next(context) {
    context.commit('next')
  }
}

// mutations
const mutations = {
  togglePlay(state) {
    state.playing = !state.playing
  },
  next(state) {
    state.playingIndex++
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
