import BaseController from './baseController';
import {
    getVouchers
}
from '../models/voucher'
import logger from '../lib/utils/logger';

class VoucherController extends BaseController {
    constructor() {
        super();
        this.GetVoucher = this.GetVoucher.bind(this);
    }
    async GetVoucher(req, res) {
        logger.info('GetVoucher');
        const data = await getVouchers();
        if (data) {
            logger.info('Success GetVoucher');
            return this.responseSuccess(res, {
                data,
                'status': 'success',
            });
        } else {
            logger.info('Error GetVoucher ');
            return this.responseSuccess(res, {
                'status': 'error',
                'data': {
                    'status': 'error',
                }
            });
        }
    }
}
export default new VoucherController();