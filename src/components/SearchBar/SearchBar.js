import PropTypes                 from 'prop-types';
import { Row, Col, FormControl } from 'react-bootstrap';
import YoutubeHelper             from 'helpers/youtube';

export default class SearchBar extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  onInputChange = (value) => {
    return this.setState({ value });
  }

  resetSearchBar = () => {
    return this.setState({ value: '' });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { onSearch } = this.props;
    const term = this.state.value;

    if (!YoutubeHelper.validTerm(term)) return this.props.onSearch('', []);

    return YoutubeHelper.search({ q: term }, (result) => {

      onSearch(term, result.items, result);
      this.resetSearchBar();
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormControl
          type='text'
          placeholder='Search something'
          value={this.state.value}
          onChange={(e) => this.onInputChange(e.target.value)}
          style={{
            border: '0px',
            borderRadius: '0px',
          }}
        />
        <style jsx>{`
          form {
            margin: 30px 0px;
          }
        `}</style>
      </form>
    );
  }
}
