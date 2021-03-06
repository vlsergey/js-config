import {assert} from 'chai';
import React from 'react';
import {renderIntoDocument} from 'react-dom/test-utils';

import HelloWorld from './HelloWorld';

describe('HelloWold', () => {

  it('Can be rendered', () => {
    const rendered: HelloWorld = renderIntoDocument(<HelloWorld name="World" />) as unknown as HelloWorld;
    assert.ok(rendered);
  });

});
