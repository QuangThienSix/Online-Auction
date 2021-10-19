import appConfig from "./config/env";
import logger from "./lib/utils/logger";
import mysql from "mysql";
const pool = mysql.createPool(appConfig.mysql);
export default (init) => {
  // connect to db
  try {
    pool.getConnection(function (err, connection) {
      if (connection) {
        logger.info("DB connected.");
      } else {
        logger.info("No conncet err: ", err.sqlMessage);
      }
    });
    init();
  } catch (error) {
    logger.info("DB disconnect.");
  }
};

export const load = (sql) => {
  return new Promise(function (resolve, reject) {
    pool.query(sql, function (error, results, fields) {
      if (error) {
        return reject(error);
      }

      resolve(results);
    });
  });
};
export const add = (table, entity) => {
  return new Promise(function (resolve, reject) {
    const sql = `insert into ${table} set ?`;
    pool.query(sql, entity, function (error, results) {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

export const patch = (table, entity, condition) => {
  return new Promise(function (resolve, reject) {
    const sql = `update ${table} set ? where ?`;
    pool.query(sql, [entity, condition], function (error, results) {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

export const del = (table, condition) => {
  return new Promise(function (resolve, reject) {
    const sql = `delete from ${table} where ?`;
    pool.query(sql, condition, function (error, results) {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};
