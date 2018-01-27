import PropTypes     from 'prop-types';
import { Col }       from 'react-bootstrap';
import { Container } from './VideoListItemsStyle';
import StringHelper  from 'helpers/string';

const VideoListItems = ({ video, onVideoSelect }) => {
  return (
    <Container onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.default.url} />
      <p>{StringHelper.maxLength(video.snippet.title, 50)}</p>
    </Container>
  );
};

VideoListItems.propTypes = {
  video:         PropTypes.object.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoListItems;
