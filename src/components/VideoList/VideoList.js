import PropTypes      from 'prop-types';
import { Container }  from './VideoListStyle';
import VideoListItems from 'components/VideoListItems/VideoListItems';

const VideoList = ({ videos, videoOnPlaying, onVideoSelect }) => {
  if (!videos || !videos.length) return null;

  const videoItems = videos.map(video => (
    <VideoListItems
      key={video.etag}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return (
    <Container>
      {videoItems}
    </Container>
  );
};

VideoList.propTypes = {
  videos:         PropTypes.array.isRequired,
  videoOnPlaying: PropTypes.func.isRequired,
  onVideoSelect:  PropTypes.func.isRequired,
};

export default VideoList;
