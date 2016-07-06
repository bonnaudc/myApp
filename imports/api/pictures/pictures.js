import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Pictures = new Mongo.Collection('Pictures');

Pictures.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Pictures.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Pictures.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the picture.',
  },
  src:{
    type: String,
    label: 'The source of the picture.',
  },
  ownerId:{
    type: String,
    label: 'The owner of the picture.',
  },
  date:{
    type: Date,
    label: 'The date of the picture.',
  },
  subjects:{
    type: [Object],
    label: 'The subjects in the picture.'
  }
});

Pictures.attachSchema(Pictures.schema);


Factory.define('picture', Pictures, {
  title: () => faker.hacker.phrase(),
  src: () => faker.image.imageUrl(),
  ownerId: () => faker.random.uuid(),
  date: () => faker.date.past(),
  subjects: () => [
    { name : faker.name.findName(), id : faker.random.uuid() },
    { name : faker.name.findName(), id : faker.random.uuid() },
  ],
});
