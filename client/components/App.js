class App extends React.Component {

  constructor(props) {
    super(props)
 
    this.state = {
      videos: this.props.videos,
      currentVideo: this.props.videos[0],
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(currentVideo) {
    this.setState({currentVideo: currentVideo})
  } 

  render () {
    return  (
      <div>
        <Nav />
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
