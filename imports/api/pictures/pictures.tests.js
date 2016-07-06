/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { Pictures } from './pictures.js';

describe('Pictures collection', function () {
  it('registers the pictures with Mongo properly', function () {
    assert.equal(typeof Pictures, 'object');
  });
});
