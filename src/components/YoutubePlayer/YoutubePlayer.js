import PropTypes     from 'prop-types';
import { Col }       from 'react-bootstrap';
import { Container } from './YoutubePlayerStyle';
import YoutubeHelper from 'helpers/youtube';

const YoutubePlayer = ({ video, closeVideo, options }) => {
  if (!video || !Object.keys(video).length) return null;

  const videoId  = video.id.videoId;
  const videoUrl = YoutubeHelper.getEmbedUrl(videoId, options);

  return (
    <Container>
      <button onClick={closeVideo}><b>X</b></button>
      <iframe
        width='660'
        height='360'
        src={videoUrl}
        frameBorder={0}
        allowFullScreen="allowfullscreen"
      />
    </Container>
  );
};

YoutubePlayer.propTypes = {
  video:      PropTypes.object.isRequired,
  closeVideo: PropTypes.func.isRequired,
  options:    PropTypes.object,
};

YoutubePlayer.defaultProps = {
  video: {},
  options: {
    autoplay: 1, // TODO explain why
    controls: 2, // TODO explain why
    fs: 1,       // TODO explain why
  },
};

export default YoutubePlayer;
