<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#"><i class="fas fa-headphones"></i>&nbsp;Youtube Party App</a>
        </nav>

        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe id="video" class="embed-responsive-item" src="" allow="encrypted-media"></iframe>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 songList">
                    <ListItem v-for="video in videos" title="video.title" url="video.url"></ListItem>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <button class="btn-lg btn-primary"><i class="fas fa-pause"></i>&nbsp;Pause</button>
                    <button class="btn-lg btn-info"><i class="fas fa-step-forward"></i>&nbsp;Next</button>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div class="row">
                        <div class="col-sm-4 videoPreviewContainer"></div>
                        <div class="col-sm-8">
                            <h5>Artist Long Name - Awesome Song To Listen</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
