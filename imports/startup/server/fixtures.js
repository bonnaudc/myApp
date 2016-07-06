import { Meteor } from 'meteor/meteor';
import { Pictures } from '../../api/pictures/pictures.js';
import { insertPicture} from '../../api/pictures/methods.js';
import { Factory } from 'meteor/dburles:factory';
import { resetDatabase } from 'meteor/xolvio:cleaner';
resetDatabase();

const pictures = [
  { 
    title: 'Picture one',
    src: 'https://s3.amazonaws.com/uifaces/faces/twitter/sachingawas/128.jpg',
    ownerId: '1',
    date: new Date(),
    subjects: [ { name: 'Bill Murray', id: '1' }, { name: 'Dan Aykroyd' , id: '3'} ] 
  },
  { 
    title: 'Picture two',
    src: 'https://s3.amazonaws.com/uifaces/faces/twitter/n3dmax/128.jpg',
    ownerId: '1',
    date: new Date(),
    subjects: [ { name: 'Harold Ramis' , id: '2'}, { name: 'Ernie Hudson', id: '4' }, { name: 'Bill Murray', id: '1' } ] 
  },
];

const { _id } = Factory.create('picture');

pictures.forEach((picture) => {
  const pictureExist = Pictures.findOne({ 'src': picture.src });

  if (!pictureExist) {
    insertPicture.call(picture);
  }
});
