'use strict'

const { Router } = require('express')

const router = Router()

const genData = require('../utils/data');


router.get('/', async (req, res) => {
  let theData = await(genData())
  res.send(theData)
})

module.exports = router