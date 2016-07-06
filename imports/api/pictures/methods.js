import { Pictures } from './pictures';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
//import { rateLimit } from '../../modules/rate-limit.js';

export const insertPicture = new ValidatedMethod({
  name: 'pictures.insert',
  validate: new SimpleSchema({
    title: { type: String },
    src: { type: String },
    ownerId: { type: String },
    date: { type: Date },
    subjects: { type: [Object] },
    'subjects.$.name': { type: String },
    'subjects.$.id': { type: String },
  }).validator(),
  run(picture) {
    Pictures.insert(picture);
  },
});

/*export const updateDocument = new ValidatedMethod({
  name: 'documents.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Documents.update(_id, { $set: update });
  },
});

export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});*/

/*rateLimit({
  methods: [
    insertDocument,
    updateDocument,
    removeDocument,
  ],
  limit: 5,
  timeRange: 1000,
});
*/
