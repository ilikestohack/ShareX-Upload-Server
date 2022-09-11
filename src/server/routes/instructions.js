async function instructions(_req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.render('instructions', { public: this.c.public });
}
module.exports = instructions;
