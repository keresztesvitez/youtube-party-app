<template>
    <div class="row">
        <div class="col-sm-4 videoPreviewContainer">
            <img v-bind:src="video.thumbnail" width="160px" />
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