const Mock = require('mockjs');
const Random = Mock.Random;

/**
 * @description Get survey list
 */
const getSurveyList = (opts = {}) => {
  const { len = 10, isDeleted = false, isStarred = false } = opts;
  const list = [];
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.title(5, 20),
      isPublished: Random.boolean(),
      answeredCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isStarred,
      isDeleted,
    });
  }
  return list;
};

module.exports = getSurveyList;
