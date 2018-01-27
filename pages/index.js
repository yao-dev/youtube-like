import React                   from 'react';
import { Row, Col, Button }    from 'react-bootstrap';
import Layout                  from 'components/Layout/Layout';
import Logo                    from 'components/Logo/Logo';
import Link                    from 'components/Link/Link'
import SearchBar               from 'components/SearchBar/SearchBar';
import YoutubePlayer           from 'components/YoutubePlayer/YoutubePlayer';
import VideoDetail             from 'components/VideoDetail/VideoDetail';
import VideoList               from 'components/VideoList/VideoList';
import VideoListWithPagination from 'components/VideoListWithPagination/VideoListWithPagination';
import SearchHistoryList       from 'components/SearchHistoryList/SearchHistoryList';
// import HistoryList             from 'components/HistoryList/HistoryList';
import YoutubeHelper           from 'helpers/youtube';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentSearch: '',
      selectedVideo: {},
      videoOnPlaying: false,
      currentPage: 1,
    };
  }

  onSearch = (term, videos, result = {}) => {
    if (term === '' || term === this.state.currentSearch) return;

    const { prevPageToken, nextPageToken, pageInfo } = result;
    const totalPages = Math.ceil(pageInfo.totalResults / pageInfo.resultsPerPage);

    return this.setState({
      currentSearch: term,
      videos,
      prevPageToken,
      nextPageToken,
      totalPages,
    });
  }

  resetCurrentSearch = () => {
    return this.setState({ currentSearch: '' });
  }

  onVideoSelect = (selectedVideo) => {
    return this.setState({ selectedVideo, videoOnPlaying: true });
  }

  closeVideo = () => {
    return this.setState({ selectedVideo: null, videoOnPlaying: false });
  }

  prevPage = (prevPageToken) => {
    if (!this.state.prevPageToken) return;

    return YoutubeHelper.search({ q: this.state.currentSearch, pageToken: prevPageToken }, (result) => {
      const { prevPageToken, nextPageToken } = result;
      return this.setState({
        prevPageToken,
        nextPageToken,
        videos: result.items,
        currentPage: this.state.currentPage - 1,
      });
    });
  }

  nextPage = (nextPageToken) => {
    if (!this.state.nextPageToken) return;

    return YoutubeHelper.search({ q: this.state.currentSearch, pageToken: nextPageToken }, (result) => {
      const { prevPageToken, nextPageToken } = result;
      return this.setState({
        prevPageToken,
        nextPageToken,
        videos: result.items,
        currentPage: this.state.currentPage + 1,
      });
    });
  }

  render() {
    return (
      <Layout>
        <Row>
          <Col xs={12}>
            <Logo />
          </Col>
        </Row>
        <Row id='mainContent'>
          {/* <Col xs={12} md={3}>
            <HistoryList
              searchHistoryList={
            // <SearchHistoryList
            //   currentSearch={this.state.currentSearch}
            //   resetCurrentSearch={this.resetCurrentSearch}
            //   onSearch={this.onSearch}
            // />
            <div>Historique de recherche video</div>
              }

              videoHistoryList={
            <div>Aucune video</div>
              }
            />
          </Col> */}
          <Col xs={12} sm={8} smOffset={2} lg={6} lgOffset={3}>
            <Col xs={12}>
              <YoutubePlayer
                closeVideo={this.closeVideo}
                video={this.state.selectedVideo}
              />
            </Col>
            <Col xs={12}>
              <VideoDetail video={this.state.selectedVideo} />
            </Col>
            <Col xs={12}>
              <SearchBar onSearch={this.onSearch} />
            </Col>
            <Col xs={12}>
              <VideoListWithPagination
                onVideoSelect={this.onVideoSelect}
                videoOnPlaying={this.state.videoOnPlaying}
                videos={this.state.videos}
                prevPage={this.prevPage}
                nextPage={this.nextPage}
                prevPageToken={this.state.prevPageToken}
                nextPageToken={this.state.nextPageToken}
                currentPage={this.state.currentPage}
                totalPages={this.state.totalPages}
              />
              {/* <VideoList
                onVideoSelect={this.onVideoSelect}
                videoOnPlaying={this.state.videoOnPlaying}
                videos={this.state.videos}
              /> */}
            </Col>
          </Col>
        </Row>
        <style global jsx>{`
          body {
            background: #F1F1F1;
          }

          #mainContent {
            padding-top: 25px;
          }

          textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {
            border-color: rgba(212, 57, 41, 0.4);
            box-shadow: 0 1px 1px rgba(229, 103, 23, 0.1) inset, 0 0 8px rgba(212, 57, 41, 0.4);
            outline: 0 none;
          }
        `}</style>
      </Layout>
    );
  }
}
