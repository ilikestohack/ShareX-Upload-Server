async function upload(_req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.render('upload', { public: this.c.public, header: this.webheader });
}
module.exports = upload;
