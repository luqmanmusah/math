import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: props.result };
  }

  componentDidUpdate(prevProps) {
    const { result } = this.props;
    if (result !== prevProps.result) {
      this.updateResult(result);
    }
  }

  updateResult(r) {
    this.setState({
      result: r,
    });
  }

  render() {
    const { result } = this.state;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

Result.propTypes = {
  result: PropTypes.string,
};

Result.defaultProps = { result: 0 };

export default Result;
