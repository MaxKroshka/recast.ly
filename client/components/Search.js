class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

handleSearch () {
    this.props.handleSearchInput(this.refs.searchTextInput.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" ref="searchTextInput" onChange={this.handleSearch}/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

window.Search = Search;
