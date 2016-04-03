import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import _ from 'lodash';

import './FilterList.scss';

class FilterList extends React.Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.mapData.cityFeaturesList.map((landmark, i) => 
            <li key={i}>{landmark}</li>
          )}
        </ul>
      </div>
    )
  }

};

function mapStateToProps(state) {
  return {
    mapData: state.mapData,
    cityFeaturesList: state.mapData
  };
}

export default connect(mapStateToProps)(FilterList);