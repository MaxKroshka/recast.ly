var DetailsBar = ({state}) => (
  <div>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-heart">   {state.currentVideoLikeCount}   </span>
        </button>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-eye-open">   {state.currentVideoViewCount}   </span>
        </button>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-thumbs-down">   {state.currentVideoDislikeCount}   </span>
        </button>
  </div>
    );

window.DetailsBar = DetailsBar;
