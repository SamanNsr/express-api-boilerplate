const mongoose = require('mongoose');


const dataFieldOne = {
  _id: mongoose.Types.ObjectId('618f62f406a22dadc69b2ba7'),
  name: 'email',
  description: 'email address',
};

const dataFieldTwo = {
  _id: mongoose.Types.ObjectId('618f635920840298697a1fdd'),
  name: 'phoneNumber',
  description: 'phoneNumber',
};


module.exports = {
  dataFieldOne,
  dataFieldTwo
};
