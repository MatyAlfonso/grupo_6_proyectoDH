function profileMiddleware(req, res, next){
    if(req.session.usuarioLogueado == undefined){
        next();
    } else if(req.session.usuarioLogueado.email == "j&mclothes@gmail.com"){
        res.redirect('http://localhost:3001/');
    } else {
        res.redirect('profile');
    }

    
}

module.exports = profileMiddleware;