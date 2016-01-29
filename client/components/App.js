class App extends React.Component {

  constructor(props) {
    super(props)
 
    this.state = {
      videos: [],
      currentVideo: null
    }
  }

  handleSearchInput(searchedText){
    searchYouTube(searchedText, (data) => {
      this.setState({videos: data.items})
    });
  }

  handleVideoListEntryClick(currentVideo) {
    this.setState({currentVideo: currentVideo})
  } 

  componentDidMount() {
    searchYouTube('', (data) => {
      this.setState({videos: data.items, currentVideo: data.items[0]})
    });
  }

  render () {
    return  (
      <div>
        <Nav handleSearchInput={this.handleSearchInput.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer currentVideo={this.state.currentVideo} videos={this.state.videos}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handleVideoListEntryClick={this.handleVideoListEntryClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
