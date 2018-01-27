import PropTypes     from 'prop-types';
import { Button }    from 'react-bootstrap';
import Link          from 'components/Link/Link';
import YoutubeHelper from 'helpers/youtube';
import { Container } from './VideoDetailStyle';

const VideoDetail = ({ video }) => {
  if (!video || !Object.keys(video).length) return null;

  const videoId     = video.id.videoId;
  const downloadUrl = YoutubeHelper.getDownloadUrl(videoId);

  return (
    <Container>
      <p className='videoTitle'>{video.snippet.title}</p>
      <Link href='sdqsds' target='_blank'>
        {video.snippet.channelTitle}
      </Link>
      <p className='videoDescription'>{video.snippet.description}</p>
      <Link href={downloadUrl}>
        <Button
          bsClass='btn downloadButton'
          type='button'
          bsStyle='danger'
        >
          <i className='fa fa-download' aria-hidden='true'></i> Télécharger en mp3
        </Button>
      </Link>
    </Container>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.object.isRequired,
};

VideoDetail.defaultProps = {
  video: {},
};

export default VideoDetail;
