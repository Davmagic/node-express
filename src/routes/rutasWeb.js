const express =require('express');
const router = express.Router();

//rutas
router.get('/', (req, res) => {
    res.render("index", { titulo: "Mi titulo dinamico" });
});

router.get('/servicio', (req, res) => {
    res.render("servicio", { titulo: "Página de Servicios" });
});

module.exports = router;