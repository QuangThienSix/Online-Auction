import BaseController from './baseController';
import {
    getSupport
}
from '../models/support'
import logger from '../lib/utils/logger';

class SupportController extends BaseController {
    constructor() {
        super();
        this.GetSupport = this.GetSupport.bind(this);
    }
    async GetSupport(req, res) {
        logger.info('GetSupport');
        const data = await getSupport();
        if (data) {
            const information = [];
            data.map(function (support) {
                if (support.department == 'KT' || support.department == 'CSKH') {
                    information.push(support);
                }
            });
            return this.responseSuccess(res, {
                'cskh_hotline': information[1].sdt,
                'cskh_email': information[1].email,
                'kt_hotline': information[0].sdt,
                'kt_email': information[0].email,
                'status': 'success',
            });
        } {
            return this.responseSuccess(res, {
                'data': {
                    'status': 'error',
                }
            });
        }
    }
}
export default new SupportController();