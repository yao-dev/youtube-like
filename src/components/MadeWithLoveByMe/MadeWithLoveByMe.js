import PropTypes                from 'prop-types';
import { Container, HeartIcon } from './MadeWithLoveByMeStyle';

const MadeWithLoveByMe = ({ name, heartColor }) => {
  return (
    <Container>
      Made with <HeartIcon heartColor={heartColor} className='fa fa-heart' aria-hidden='true' /> by {name}
    </Container>
  );
};

MadeWithLoveByMe.propTypes = {
  name: PropTypes.string,
  heartColor: PropTypes.string,
};

MadeWithLoveByMe.defaultProps = {
  name: 'Michaël YAO',
  heartColor: '#D43929',
};

export default MadeWithLoveByMe;
