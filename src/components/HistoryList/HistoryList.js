import React            from 'react';
import PropTypes        from 'prop-types';
import { Col }  from 'react-bootstrap';

export default class HistoryList extends React.Component {
  // static propTypes = {
  //
  // }
  //
  // static defaultProps = {
  //
  // }

  state = {
    activeTab: 'search',
  }

  handleSelect = (tabName) => {
    return this.setState({ activeTab: tabName });
  }

  getActiveTabContent = (tabName) => {
    const { searchHistoryList, videoHistoryList } = this.props;
    const a = tabName === 'search' ? searchHistoryList : videoHistoryList;
    console.log(a);
    return a;
  }

  render() {
    return (
      <Col xs={12}>
        <Col xs={6} onClick={() => this.handleSelect('search')}>
          Search history list
        </Col>
        <Col xs={6} onClick={() => this.handleSelect('video')}>
          Video history list
        </Col>
        <Col xs={12}>
          {this.getActiveTabContent(this.state.activeTab)}
        </Col>
      </Col>
    );
  }
};

{/* <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
  <NavItem eventKey='1' href="/home">NavItem 1 content</NavItem>
  <NavItem eventKey='2' title="Item">NavItem 2 content</NavItem>
</Nav> */}
