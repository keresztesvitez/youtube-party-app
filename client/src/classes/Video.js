class Video {
    constructor (videoId) {
        this.videoId = videoId;
    }

    get title() {
        return "Placeholder Title"
    }

    get thumbnail() {
        return `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`;
    }
}

export default Video;

// .ytp-title-link -> title?