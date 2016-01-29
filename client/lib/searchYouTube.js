var searchYouTube = (keyword,callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search',{
    part: 'snippet',
    key: window.YOUTUBE_API_KEY,
    q: keyword,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(data => {
      callback(data);
    })
  .fail(data => {
      console.error('Youtube: Failed to send message');
  });
};

window.searchYouTube = searchYouTube;
