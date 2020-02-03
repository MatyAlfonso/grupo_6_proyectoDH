function guestMiddleware(req, res, next){
    if(req.session.usuarioLogueado == undefined){
        next();
    } else {
        res.send("¡Ya estás registrado!");
    }
}

module.exports = guestMiddleware;