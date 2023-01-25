var express = require("express");
var router = express.Router();
const moment = require("moment");

const Trip = require('../models/trips');

//Retrieve trips following filter parameters

router.get('/', (req, res) => {
  //console.log('req.query.date: ' + req.query.date);
  
  let startOfDay = moment(req.query.date).startOf('day').utc().toDate();
  startOfDay = startOfDay.getTime() - startOfDay.getTimezoneOffset()*60000;
  startOfDay = new Date(startOfDay);

  let endOfDay = moment(req.query.date).endOf('day').utc().toDate();
  endOfDay = endOfDay.getTime() - endOfDay.getTimezoneOffset()*60000;
  endOfDay = new Date(endOfDay);
  
  //console.log('Start date: ' + startOfDay);
  //console.log('End date: ' + endOfDay);

  Trip.find({
    departure: req.query.departure,
    arrival: req.query.arrival,
    date: { $gt : startOfDay, 
            $lt : endOfDay}
  })
       .then((data) => res.json({data}));
  //res.json({result: 'OK'});
});

//Select route by route id
router.get('/:id', (req, res) => {
  Trip.findOne({_id: req.params.id})
       .then((data) => res.json({data}));
});

module.exports = router;