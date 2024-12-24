function checkAdmin(req, res, next) {
    // Admin kullanıcısının oturum bilgilerini kontrol ediyoruz.
    if (!req.session || !req.session.isAdmin) {
        // Eğer admin girişi yoksa login sayfasına yönlendiriyoruz.
        return res.send(JSON.stringify({result:false}));  // Giriş yapmamışsa login sayfasına yönlendir
    }
    next();  // Eğer admin girişi varsa, işlemi devam ettir
}

module.exports = checkAdmin;
