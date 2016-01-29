var VideoList = ({handleVideoListEntryClick,videos}) => (
	<div className="video-list media">
		{videos.map((video,i) =>
			<VideoListEntry video={video} handleVideoListEntryClick={handleVideoListEntryClick} key={i}/>
		)}
	</div>
);

window.VideoList = VideoList;
