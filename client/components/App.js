class App extends React.Component {

  constructor(props) {
    super(props)
 
    this.state = {
      videos: [],
      currentVideo: null,
      searchText: ''
    }

    this.set = this.set.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  set(data) {
    this.setState({videos: data.items})
  }

  handleSearchInput(searchedText){
    this.setState({searchText: searchedText});
    window.searchYouTube(searchedText, this.set);
  }

  handleUserInput(currentVideo) {
    this.setState({currentVideo: currentVideo})
  } 

  componentDidMount() {
    window.searchYouTube('', (data) => {
      this.setState({videos: data.items, currentVideo: data.items[0]})
    });
  }

  render () {
    return  (
      <div>
        <Nav handleSearchInput={this.handleSearchInput} searchedText={this.state.searchText}/>
        <div className="col-md-7">
          <VideoPlayer currentVideo={this.state.currentVideo} videos={this.state.videos}/>
        </div>
        <div className="col-md-5">
          <VideoList currentVideo={this.state.currrentVideo} videos={this.state.videos} handleUserInput={this.handleUserInput}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App videos={window.exampleVideoData} />, document.getElementById('app'));
