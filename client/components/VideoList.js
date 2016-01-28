class VideoList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
		return (
			<div className="video-list media">
				{this.props.videos.map((video) =>
						<VideoListEntry video={video} currentVideo={this.props.currentVideo} handleUserInput={this.props.handleUserInput} />
				)}
			</div>
		);
  }
}

window.VideoList = VideoList;
