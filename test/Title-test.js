require('testdom')('<html><body></body></html');

import React from 'react';
import jsdom from 'mocha-jsdom';
import assert from 'assert';
import TestUtils from 'react-addons-test-utils';

var Title = require('../src/components/Title.jsx').default;

describe('Testing Title component', function() {

  it('renders an h1', function() {
    let renderer = TestUtils.createRenderer();
    
    renderer.render(
      <Title title='Testing Title React Component' />
    );

    const { children } = renderer.getRenderOutput().props;
    let expectedOutcome = 'Testing Title React Component';

    assert.equal(expectedOutcome, children.props.children);
  });

});