import { Meteor } from 'meteor/meteor';
import { Pictures } from '../pictures';

Meteor.publish('pictures', () => Pictures.find());
