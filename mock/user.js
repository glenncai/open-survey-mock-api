const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = [
  {
    // Get user info
    url: '/api/user/info',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          username: Random.title(),
          nickname: Random.name()
        }

        // errno: 401,
        // msg: 'Fail to get user info.'
      };
    }
  },
  {
    // Register
    url: '/api/user/register',
    method: 'post',
    response() {
      return {
        errno: 0
      };
    }
  },
  {
    // Login
    url: '/api/user/login',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          token: Random.word(20)
        }
      };
    }
  }
];
