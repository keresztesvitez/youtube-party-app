class VideoController {

    constructor() {
        this.videos = [];
    }
    
    getAll() {
        return this.videos;
    }
    
    add(video) {
        this.videos.push(video);
    }

    remove(index) {
        this.videos.splice(index, 1)
    }
}

module.exports = VideoController