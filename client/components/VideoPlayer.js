var VideoPlayer = ({state}) => (
  !state.currentVideo  ? <div> Still loading </div> :
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/"+state.currentVideo.id.videoId} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{state.currentVideo.snippet.title}</h3>
        <DetailsBar state={state}/>
        <div>{state.currentVideo.snippet.description}</div>
      </div>
    </div>
)
window.VideoPlayer = VideoPlayer;
