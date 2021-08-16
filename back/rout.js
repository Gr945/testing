const express = require('express');

const Object = require('./bdShema')
const router = express.Router()

router
.route('/')                             // отдает все обьекты
.get (async (req,res) => {
  const allObject = await Object.find()
  res.status(200).json(allObject)
})
.post( async (req,res) => {             // засеивание БД через postmen
  const {data, name, amount, distance} = req.body

  if (data && name && amount && distance) {
    const newObj = await Object.create({
      data,
      name,
      amount,
      distance
     
    })
    res.status(200).json(newObj)
  } else {
    res.status(400).json({create:false})
  }
})

module.exports = router
