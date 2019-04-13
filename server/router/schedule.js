const express = require('express');
const router = new express.Router;

router.post('/schedule/api', async (req, res) => {
    res.send(req.body);
});

module.exports = router;