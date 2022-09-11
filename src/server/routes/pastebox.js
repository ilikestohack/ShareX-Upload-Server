async function pastebox(_req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.render('pastebox', { public: this.c.public });
}
module.exports = pastebox;
