import React          from 'react';
import PropTypes      from 'prop-types';
import classNames     from 'classnames';
import { Col, Pager } from 'react-bootstrap';
import { Container }  from './VideoListWithPaginationStyle';
import VideoList      from 'components/VideoList/VideoList';

const withPagination = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const {
        prevPage,
        nextPage,
        prevPageToken,
        nextPageToken,
        currentPage,
        totalPages,
        ...otherProps
      } = this.props;

      if (!this.props.videos || !this.props.videos.length) return null;

      return (
        <Container>
          <WrappedComponent {...otherProps} />
          <Pager>
            <Pager.Item
              className={classNames('previous', {disabled: !prevPageToken})}
              onSelect={() => prevPage(prevPageToken)}
            >
              Précédent
            </Pager.Item>
            <Pager.Item>{` ${currentPage} / ${totalPages} `}</Pager.Item>
            <Pager.Item
              className={classNames('next', {disabled: !nextPageToken})}
              onSelect={() => nextPage(nextPageToken)}
            >
              Suivant
            </Pager.Item>
          </Pager>
        </Container>
      );
    }
  }
};

const VideoListWithPagination = withPagination(VideoList)

export default VideoListWithPagination;
