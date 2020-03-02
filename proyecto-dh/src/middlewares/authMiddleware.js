function authMiddleware(req, res, next){
    if(req.session.usuarioLogueado != undefined){
        next();
    } else {
        res.send("Inicia sesión para acceder a ésta página"); //o redirección a res.render("/users/login")
    }
}

module.exports = authMiddleware;