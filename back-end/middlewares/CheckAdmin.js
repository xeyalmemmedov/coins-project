function checkAdmin(req, res, next) {
    if (!req.session || !req.session.isAdmin) {
        return res.status(403).json({ result: false, message: 'Unauthorized' }); // Admin kontrolü yapıyoruz
    }
    next();  // Admin kontrolü geçerse, işlem devam eder
}

module.exports = checkAdmin;
