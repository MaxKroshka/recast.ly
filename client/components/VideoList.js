var VideoList = () => (
  <div className="video-list media">
    {exampleVideoData.map(video =>
        <VideoListEntry video={video} />
    )}
  </div>
);

window.VideoList = VideoList;
