import {wxRequest} from '../utils/wxRequest';

//接口
const getList = (params) => wxRequest(params, 'https://www.easy-mock.com/mock/5a90d25e81763562832917ab/myTest/homeList');

module.exports = {
  getList
}