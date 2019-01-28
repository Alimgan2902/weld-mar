var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WELD-MAR' });
});

router.get('/engineering', function(req, res, next) {
    res.render('engineering', { title: 'WELD-MAR' });
});
router.get('/manufacturing', function(req, res, next) {
    res.render('manufacturing', { title: 'WELD-MAR' });
});
router.get('/welding', function(req, res, next) {
    res.render('welding', { title: 'WELD-MAR' });
});
router.get('/turning_works', function(req, res, next) {
    res.render('turning_works', { title: 'WELD-MAR' });
});
router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'WELD-MAR' });
});
module.exports = router;
