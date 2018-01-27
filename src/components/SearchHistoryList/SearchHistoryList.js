import PropTypes     from 'prop-types';
import YoutubeHelper from 'helpers/youtube';

export default class SearchHistoryList extends React.Component {
  static propTypes = {
    currentSearch:      PropTypes.string,
    resetCurrentSearch: PropTypes.func.isRequired,
    onSearch:           PropTypes.func.isRequired,
  }

  static defaultProps = {
    currentSearch: ''
  }

  constructor(props) {
    super(props);

    this.state = {
      searchHistory: []
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.currentSearch !== nextProps.currentSearch) {
      this.saveSearch(nextProps.currentSearch);
    }
  }

  saveSearch = (term) => {
    if (term === '') return;

    let searchHistory = this.state.searchHistory;

    if (!searchHistory.includes(term)) {
      searchHistory.unshift(term);
    } else {
      if (searchHistory[0] !== term) {
        const indexOfSaveSearch = searchHistory.indexOf(term);
        searchHistory.splice(indexOfSaveSearch, 1);
        searchHistory.unshift(term);
      }
    }

    return this.setState({ searchHistory });
  }

  onSelectedSearch = (term) => {
    if (term === this.props.currentSearch) return;

    return YoutubeHelper.search({ q: term }, (result) => {
      this.saveSearch(term);
      this.props.onSearch(term, result.items);
    });
  }

  clearHistory = () => {
    this.setState({ searchHistory: [] });
    this.props.resetCurrentSearch();
  }

  deleteItem = (index) => {
    const searchHistory = this.state.searchHistory;
    const isCurrentSearch = searchHistory[index] === this.props.currentSearch;
    searchHistory.splice(index, 1);

    this.setState({ searchHistory });
    console.log(searchHistory)
    if (isCurrentSearch) return this.props.resetCurrentSearch();
  }

  render() {
    return (
      <div>
        {this.state.searchHistory.length ?
          (<ul>
            <li><button onClick={this.clearHistory}>clear history</button></li>
            {this.state.searchHistory.map((searchHistoryItem, index) => (
              <li key={index}>
                <span onClick={() => this.onSelectedSearch(searchHistoryItem)}>{searchHistoryItem}</span>
                <button onClick={() => this.deleteItem(index)}>delete</button>
              </li>
            ))}
          </ul>)
        : null }
      </div>
    );
  }
}
