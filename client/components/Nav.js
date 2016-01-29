var Nav = ({handleSearchInput}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleSearchInput={handleSearchInput}/>
    </div>
  </nav>
);

window.Nav = Nav;
