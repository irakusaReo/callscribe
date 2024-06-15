const express = require('express');
const { createScript, getScripts, updateScript, deleteScript } = require('../controllers/scriptController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const router = express.Router();

router.post('/', auth, role(['admin']), createScript);
router.get('/', auth, getScripts);
router.put('/:id', auth, role(['admin']), updateScript);
router.delete('/:id', auth, role(['admin']), deleteScript);

module.exports = router;