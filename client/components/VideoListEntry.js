var VideoListEntry = ({video,handleUserInput}) => (
  <div className="video-list-entry" onClick={() => handleUserInput(video)}>
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{video.snippet.title}</div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);

window.VideoListEntry = VideoListEntry;
