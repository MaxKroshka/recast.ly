class App extends React.Component {

  constructor(props) {
    super(props)
 
    this.state = {
      videos: [],
      currentVideo: null,
      currentVideoViewCount: 0,
      currentVideoLikeCount: 0,
      currentVideoDislikeCount: 0
    }
  }

  handleSearchInput(searchedText){
    searchYouTube(searchedText, (data) => {
      this.setState({videos: data.items})
    });
  }

  handleVideoListEntryClick(currentVideo) {
    this.setState({currentVideo: currentVideo})
    searchYouTubeForStats(currentVideo.id.videoId, (stats) => {
      this.setState({
        currentVideoDislikeCount: stats.items[0].statistics.dislikeCount,
        currentVideoViewCount: stats.items[0].statistics.viewCount,
        currentVideoLikeCount: stats.items[0].statistics.likeCount
      })
    })
  } 

  componentDidMount() {
    searchYouTube('', (data) => {
      this.setState({videos: data.items, currentVideo: data.items[0]})
      searchYouTubeForStats(data.items[0].id.videoId, (stats) => {
        this.setState({
          currentVideoDislikeCount: stats.items[0].statistics.dislikeCount,
          currentVideoViewCount: stats.items[0].statistics.viewCount,
          currentVideoLikeCount: stats.items[0].statistics.likeCount
        })
      })
    });
  }

  render () {
    return  (
      <div>
        <Nav handleSearchInput={this.handleSearchInput.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer state={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handleVideoListEntryClick={this.handleVideoListEntryClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
