import {wxRequest} from '../utils/wxRequest';

//接口
//获取列表
const getList = (params) => wxRequest(params, 'https://www.easy-mock.com/mock/5a90d25e81763562832917ab/myTest/homeList');
//获取首页交易总额
const getAllMoney = (params) => wxRequest(params, 'https://www.zalljinfu.com/applyInformation/selectLoanAmount.do');

module.exports = {
  getList,
  getAllMoney
}