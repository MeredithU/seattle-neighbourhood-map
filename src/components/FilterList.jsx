import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setCategoryFilter } from '../actions/index.jsx';

import _ from 'lodash';

import './FilterList.scss';

class FilterList extends React.Component {

  render() {
    return (
      <div>
        <label>
          <input filter='ALL' type='checkbox' value='All' className='cityFeatureCheckbox' />
            All
        </label>
        {this.props.allDataPoints.cityFeaturesList.map((landmark, i) => 
          <label key={i}>
            <input key={i} 
                   filter={landmark} 
                   type='checkbox' 
                   value={landmark} 
                   className='cityFeatureCheckbox'
            />
            {landmark}
          </label>
        )}
      </div>
    )
  }

};

function mapStateToProps(state) {
  return {
    allDataPoints: state.allDataPoints,
    cityFeaturesList: state.allDataPoints,
    categoryFilter: state.categoryFilter
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setCategoryFilter(ownProps.filter))
    }
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(FilterList);