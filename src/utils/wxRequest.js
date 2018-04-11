import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()

const wxRequest = async(params = {}, url) => {
    tip.loading();
    let data = params.query || {};
    data.time = TIMESTAMP;
    return new Promise((resolve, reject) => {
        wepy.request({
            url: url,
            method: params.method || 'GET',
            data: data,
            header: { 'Content-Type': 'application/json' },
            success: function (result) {
                tip.loaded()
                console.log(result)
                if(result.statusCode == '200') {
                    resolve(result.data)
                } else {
                    tip.alertDialog(result.statusCode+'错误，请联系管理员')
                }
            },
            fail: function(result) {
                tip.loaded()
                console.log(result)
                tip.alertDialog('超时')
            }
        });
    })
};


module.exports = {
    wxRequest
}
