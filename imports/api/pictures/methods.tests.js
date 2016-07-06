/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';

import { Pictures } from './pictures.js';
import { insertPicture} from './methods.js';

const pictures = [
  { 
    title: 'Picture one',
    src: 'http://semantic-ui.com/images/avatar2/large/kristy.png',
    ownerId: '1',
    date: new Date(),
    subjects: [ { name: 'Bill Murray', id: '1' }, { name: 'Dan Aykroyd' , id: '2'}, { name: 'Harold Ramis' , id: '3'}, { name: 'Ernie Hudson', id: '4' } ] 
  },
];
const getRandomPicture = () => pictures[Math.floor(Math.random() * pictures.length)];


describe('Pictures methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a picture into the Picture collection', function () {
    
     const picture = getRandomPicture();
    insertPicture.call(picture);
    
    const getPicture = Pictures.findOne({ title: picture.title });
    assert.equal(getPicture.title, picture.title);
   
  });

});
