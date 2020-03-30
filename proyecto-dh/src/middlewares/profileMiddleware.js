function profileMiddleware(req, res, next){
    if(req.session.usuarioLogueado == undefined){
        next();
    } else {
        res.redirect('profile');
    }
}

module.exports = profileMiddleware;