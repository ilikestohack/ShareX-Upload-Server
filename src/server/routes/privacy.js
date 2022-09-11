async function privacy(_req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.render('privacy', { public: this.c.public });
}
module.exports = privacy;
