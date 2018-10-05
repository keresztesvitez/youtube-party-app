<template>
    <div>
        <ListItem v-for="video in videos" :video="video" :key="video.id" />
    </div>
</template>

<script>
import ListItem from "./ListItem"

export default {
    components: {ListItem},
    props: ["videos"]
}
</script>