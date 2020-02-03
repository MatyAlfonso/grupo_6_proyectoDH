function profileMiddleware(req, res, next){
    if(req.session.usuarioLogueado == undefined){
        next();
    } else {
        res.render('profile');
    }
}

module.exports = profileMiddleware;