import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
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

//const pic = Factory.create('pictures');


/*pictures.forEach((picture) => {
  const pictureExist = Pictures.findOne({ 'src': picture.src });

  if (!pictureExist) {
    insertPicture.call(picture);
  }
  });*/

const users = [{
  email: 'test@test.com',
  password: 'test',
  username: 'test'
}];

users.forEach(({ email, password, username }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
      const userId = Accounts.createUser({ email, password, username });
    }
});
