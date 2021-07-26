const router = require('express').Router();
const actions = require('../controllers/actions');

//create new contact
router.post('/add', actions.createContact);

//obtenir toutes les donnees
router.get('/', actions.recupAllContact);

//suppression
router.delete('/delete', actions.delContact);

//Modification
router.put('/update', actions.updContact);
module.exports = router;