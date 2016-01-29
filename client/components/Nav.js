class Nav extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <Search handleSearchInput={this.props.handleSearchInput} searchedText={this.props.searchText} />
        </div>
      </nav>
    );
  }
}

window.Nav = Nav;
