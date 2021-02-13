const express = require("express");
const router = express.Router();
const { submain, getpId, trails } = require("../controllers/details");

router.get("/trial", trails);
router.get("/pId/:pId", submain);
router.param("pId", getpId);

module.exports = router;
