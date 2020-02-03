function guestMiddleware(req, res, next){
    if(req.session.usuarioLogueado == undefined){
        next();
    } else {
        res.send("Sesión iniciada como " + req.session.usuarioLogueado.email);
    }
}

module.exports = guestMiddleware;