const db = require('../models');
const Post = db.post

// Menampilkan semua data yang ada di DB
exports.findAll = (req, res) => {
    Post.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: `Error message = ${err.message} while find all`
            })
        });
}

// Menambahkan data pada DB
exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.published : false
    })

    post.save(post)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(409).send({
                message: `Error message = ${err.message} while create posts`
            })
        });
}

// Mendapatkan 1 data pada DB
exports.findOne = (req, res) => {
    const id = req.params.id;

    Post.findById(id)
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(409).send({
                message: `Error message = ${err.message} while show posts`
            })
        });
}

// Mengupdata 1 data pada DB
exports.update = (req, res) => {
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: "Post not found"
                })
            }
            res.send({
                message: "Post was updated"
            })

        }).catch((err) => {
            res.status(409).send({
                message: `Error message = ${err.message} while update posts`
            })
        });
}

// Menghapus 1 data pada DB
exports.delete = (req, res) => {
    const id = req.params.id

    Post.findByIdAndRemove(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: "Post not found"
                })
            }

            res.send({
                message: "Post was deleted"
            })
        }).catch((err) => {
            res.status(409).send({
                message: `Error message = ${err.message} while delete posts`
            })
        });
}