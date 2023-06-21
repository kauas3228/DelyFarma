const {express, Router} = require('express');
const routes = new Router();
const controller = require('../controllers/index')

routes.get('/login', controller.login.get);
routes.get('/user/home', checkSession, controller.paginainicial.get);
routes.get('/user/avaliacoes', checkSession, controller.avaliation.get);
routes.get('/user/rastrear', checkSession, controller.rastrear.get);
routes.get('/user/deposito', checkSession, controller.deposito.get);
routes.get('/user/endereco', checkSession, controller.endereco.get);
routes.get('/user/carrinho', checkSession, controller.carrinho.get);
routes.get('/user/pedidos', checkSession, controller.pedidos.get);
routes.get('/user/perfil', checkSession, controller.perfil.get);
routes.get('/user/produto', checkSession, controller.produto.get);
routes.get('/recuperar', checkSession, controller.recuperar.get);
routes.get('/user/suporte', checkSession, controller.suporte.get);
routes.post('/login', controller.login.post);
routes.post('/cadastro', controller.cadastro.post);

function checkSession(req, res, next){
    if(req.session.user){
        next()
    }
    else{
        res.redirect('/login')
    }
}
module.exports = routes;

