const model = require('../models/user');

const controller = 
{ login: {
    get(req, res){
        res.render('paginaLogin', {
            errors: req.flash('error')
        })
    },
    async post(req, res){
        const { email, password} = req.body;
        const exist = await model.findOne({email: email}).exec()
        
        if(!exist){
            req.flash('error', 'Email não cadastrado')
            return res.redirect('back');
        }
        if(exist.password == password){
            
            req.session.user = exist;
            await req.session.save();
            
            res.redirect('user/home');
        }else{
            req.flash('error', 'Senha Incorreta')
            res.redirect('back');
        }
        
    }
},
    cadastro : {
        async post(req, res){
            const { emailR, cpf, passwordR, passwordRConfirm, number, usuario} = req.body;
            const exist = await model.findOne({email: emailR}).exec()
            const exist2 = await model.findOne({cpf: cpf}).exec()
            if(passwordR != passwordRConfirm){
                console.log('error')
            }
            if(exist || exist2){
                console.log('ovo');
            }
            else{
            const user = new model({email: emailR, password: passwordR, cpf: cpf, number: number, usuario: usuario});
            await user.save();   
            }
            res.redirect('back');
        }
    },
    paginainicial : {
        get(req, res){
            const { usuario } = req.session.user
            res.render('index', {usuario})
        }        
    },
    avaliation : {
        get(req, res){
            res.render('avaliation')
        }
    },
    rastrear : {
        get(req, res){
            res.render('rastrear')
        }
    },
    perfil : {
        get(req, res){
            const { usuario, email, number, cpf} = req.session.user
            res.render('perfil', {usuario, email, number, cpf})
        }
    },
    deposito : {
        get(req, res){
            res.render('deposito')
        }
    },
    carrinho : {
        get(req, res){
            res.render('meuCarrinho')
        }
    },
    pedidos : {
        get(req, res){
            res.render('meuspedidos')
        }
    },
    produto : {
        get(req, res){
            res.render('produto')
        }
    },
    recuperar : {
        get(req, res){
            res.render('recuperarSenha')
        }
    },
    suporte : {
        get(req, res){
            res.render('suporte')
        }
    },
    endereco : {
        get(req, res){
            res.render('endereço')
        }
    }
}
module.exports = controller;