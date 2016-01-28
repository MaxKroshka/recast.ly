var searchYouTube = (keyword) => {
  var newUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='+keyword+'&type=video&videoEmbeddable=true&key='+window.YOUTUBE_API_KEY;
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: newUrl,
    type: 'GET',
    success: function (data) {
      console.log('Youtube: Data recieved');
      console.log(data);
      // callback(data);
    },
    error: function (data) {
      console.error('Youtube: Failed to send message');
    }
  });
};

window.searchYouTube = searchYouTube;
