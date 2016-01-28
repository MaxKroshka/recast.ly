class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: this.props.videos,
      currentVideo: this.props.videos[0]
    }
  }


 handleClick (event) {
  this.setState({
    currentVideo : event.target
  })
}

  render () {
    return  (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.props.videos[0]} selectedVideoId={this.state.selectedVideoId}/>
        </div>
        <div className="col-md-5">
          <VideoList state={this.state} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App videos={window.exampleVideoData} />, document.getElementById('app'));
