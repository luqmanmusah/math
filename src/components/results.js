/* eslint-disable indent */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: props.result,
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.result !== prevProps.result) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(() => ({
        result: this.props.result,
      }));
    }
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
