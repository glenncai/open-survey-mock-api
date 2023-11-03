const Mock = require('mockjs');
const getSurveyList = require('./data/getSurveyList');

const Random = Mock.Random;

module.exports = [
  {
    // Get single survey by id
    url: '/api/survey/:id',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.title(5, 20),
          desc: Random.paragraph(1),
          js: '',
          css: '',
          isDeleted: Random.boolean(),
          isPublished: Random.boolean(),
          componentList: [
            // Title
            {
              fe_id: Random.id(),
              type: 'surveyTitle',
              title: 'Title',
              props: {
                text: 'Survey Title',
                level: 1,
                isCenter: false
              }
            },
            // Input 1
            {
              fe_id: Random.id(),
              type: 'surveyInput',
              title: 'Input 1',
              props: {
                title: 'Your name...',
                placeholder: 'Please enter your name',
              }
            },
            // Input 2
            {
              fe_id: Random.id(),
              type: 'surveyInput',
              title: 'Input 2',
              props: {
                title: 'Your email...',
                placeholder: 'Please enter your email',
              }
            }
          ]
        }
      };
    }
  },
  {
    // Create survey
    url: '/api/survey',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      };
    }
  },
  {
    // Get (search) survey list
    url: '/api/survey',
    method: 'get',
    response(ctx) {
      const {
        query = {
          isDeleted: 'false',
          isStarred: 'false',
          pageSize: 10
        }
      } = ctx;
      const isDeleted = query.isDeleted === 'true';
      const isStarred = query.isStarred === 'true';
      const pageSize = +query.pageSize;

      console.log(query);

      return {
        errno: 0,
        data: {
          list: getSurveyList({ len: pageSize, isDeleted, isStarred }),
          total: 100
        }
      };
    }
  },
  {
    // Update survey
    url: '/api/survey/:id',
    method: 'patch',
    response() {
      return {
        errno: 0
      };
    }
  },
  {
    // Duplicate survey
    url: '/api/survey/duplicate/:id',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      };
    }
  },
  {
    // Batch delete survey
    url: '/api/survey',
    method: 'delete',
    response() {
      return {
        errno: 0
      };
    }
  }
];
