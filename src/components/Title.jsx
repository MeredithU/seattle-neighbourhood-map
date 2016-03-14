import React from 'react';
import './Title.scss';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="title">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
};

Title.propTypes = {
  title: React.PropTypes.string.isRequired
};

 export default Title;