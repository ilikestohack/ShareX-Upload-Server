async function home(_req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.render('home', { public: this.c.public });
}
module.exports = home;
