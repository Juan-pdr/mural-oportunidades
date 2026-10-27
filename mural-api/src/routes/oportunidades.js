const express = require('express');
const db = require('../database');
const router = express.Router();

//GET /oportunidades - lista todos os registros
router.get('/', (req, res) =>{
    const oportunidades = db.prepare('SELECT * FROM oportunidades ORDER BY prazo').all();
    res.json(oportunidades);
});

module.exports = router;

//GET /oportunidades/:id - busca pelo id

router.get('/:id', (req,res) => {

    const oportunidade = db
    .prepare('SELECT * FROM oportunidades WHERE id = ?')
    .get(req.params.id)

    if(!oportunidade){
        return res.status(404).json({erro: 'oportunidade não encontrada'})

    
    }
    res.json(oportunidade)
})