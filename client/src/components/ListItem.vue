<template>
    <div class="row">
        <div class="col-sm-4 videoPreviewContainer">
            <img v-bind:src="video.image" />
        </div>
        <div class="col-sm-8">
            <h5>{{video.title}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props: ["video"]
}
</script>