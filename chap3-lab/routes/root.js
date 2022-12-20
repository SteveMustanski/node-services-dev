'use strict'

const genData = require('../utils/data');

const theData = genData();


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    console.log('the data', theData);
    return genData()
  })
}
