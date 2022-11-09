var express = require('express');
const { websiteAvailability } = require('../middleware/time');
var router = express.Router();

router.get("/", websiteAvailability, (req, res) => {
  res.render('pages/welcome');
});
router.get("/services", websiteAvailability, (req, res) => {
  res.render('pages/services');

});
router.get("/contact-us", websiteAvailability, (req, res) => {
  res.render('pages/contact-us');
});

module.exports = router;
