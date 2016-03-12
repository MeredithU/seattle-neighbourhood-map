import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="greeting">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
};

Title.propTypes = {
  title: React.PropTypes.string.isRequired
};

 export default Title;