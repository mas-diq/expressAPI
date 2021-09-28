module.exports = (app) => {
    const posts = require('../controllers/post.controller');
    const router = require('express').Router();

    // Routes mencari semua data
    router.get('/', posts.findAll);

    // Routes menambahkan data
    router.post('/', posts.create);

    // Routes menampilkan 1 data
    router.get('/:id', posts.findOne);

    // Router mengupdate 1 data
    router.put('/:id', posts.update);

    // Router menghapus 1 data
    router.delete('/:id', posts.delete);

    app.use('/api/posts', router);
}