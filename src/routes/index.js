import { Router } from 'express'
const router = Router()


router.get('/nosotros', (req, res) => res.render('nosotros'))
router.get('/compania', (req, res) => res.render('compania'))
router.get('/contacto', (req, res) => res.render('contacto'))

export default router