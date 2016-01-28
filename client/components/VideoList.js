class VideoList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
		return (
			<div className="video-list media">
				{exampleVideoData.map((video,index) =>
						<VideoListEntry videoIndex={index} video={video} handleClick={this.props.handleClick} state={this.props.state}/>
				)}
			</div>
		);
  }
}

window.VideoList = VideoList;
