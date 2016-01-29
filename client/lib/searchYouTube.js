var searchYouTube = (keyword,callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search',{
    part: 'snippet',
    key: window.YOUTUBE_API_KEY,
    q: keyword,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(data => {
      console.log(data.items);
      callback(data);
    })
  .fail(data => {
      console.error('Youtube: Failed to send message');
  });
};

window.searchYouTube = searchYouTube;


var searchYouTubeForStats = (videoId,callback) => {
  $.get('https://www.googleapis.com/youtube/v3/videos',{
    part: 'statistics',
    key: window.YOUTUBE_API_KEY,
    id: videoId
  }).done(data => {
      console.log(data);
      callback(data);
    })
  .fail(data => {
      console.error('Youtube: Failed to send message');
  });
};

window.searchYouTubeForStats = searchYouTubeForStats;
