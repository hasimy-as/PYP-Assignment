const express = require('express');
const router = express.Router();

const Domain = require('../controllers/domain.js');

router.get('/api/about', Domain.getAbout);
router.get('/api/contact', Domain.getContact);
router.get('/api/features', Domain.getFeatures);
router.get('/api/originators', Domain.getOriginators);

module.exports = router;
