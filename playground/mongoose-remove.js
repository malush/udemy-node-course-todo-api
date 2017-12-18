const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove();
//Todo.findByIdAndRemove();

Todo.findByIdAndRemove('5a382c249a97aac3447c898e').then((todo) => {
  console.log(todo);
});
