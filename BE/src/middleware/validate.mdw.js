import Ajv from 'ajv'

import logger from '../lib/utils/logger';

const ajv = new Ajv({
    allErrors: true
});


export const Validate = (schema) => {
    return (req, res, next) => {
      
        const validate = ajv.compile(schema);
        const valid = validate(req.body);
        if (!valid) {
            logger.info(validate.errors);
            return res.status(400).json(validate.errors);
        }
        next();
    }
}