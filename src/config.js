const YOUTUBE_API_KEY = 'AIzaSyC78ThbksU9SEPs4U6pyagr6fHgLhLa7oM';
const LOCALE = 'fr';

const config = {
  app_name: 'Youtube Like',
  locale: LOCALE,
  youtube: {
    embed_base_url: 'https://www.youtube.com/embed',
    download_base_url: '//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch',
    api: {
      key: YOUTUBE_API_KEY,
      root_url: 'https://www.googleapis.com/youtube/v3/search',
      options: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        maxResults: 24
      }
    }
  }
};

export default config;
