<template>
  <div id="app">
    <Host />
  </div>
</template>

<script>
import Host from './components/Host'
import ListItem from './components/ListItem'

export default {
  name: 'App',
  components: {Host, ListItem}
  // data: function () {
  // return {
  //   videos: [
  //     {"image":"https://placekitten.com/250/100", "title":"Video 1"},
  //     {"image":"https://placekitten.com/250/100", "title":"Video 2"},
  //     {"image":"https://placekitten.com/250/100", "title":"Video 3"}
  //   ]
  // }
// }
}
</script>

<style>
</style>
