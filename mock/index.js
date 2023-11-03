const test = require('./test');
const survey = require('./survey');
const user = require('./user');

const mockList = [
  ...test,
  ...survey,
  ...user
];

module.exports = mockList;
