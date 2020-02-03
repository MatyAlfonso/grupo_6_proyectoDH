function authMiddleware(req, res, next){
    if(req.session.usuarioLogueado != undefined){
        next();
    } else {
        res.send("Inicia sesión para acceder a ésta página");
    }
}

module.exports = authMiddleware;