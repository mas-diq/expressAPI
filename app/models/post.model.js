module.exports = (mongoose) => {
    const schema = mongoose.Schema({
        title: String,
        subtitle: String,
        imageURL : String,
        published: Boolean
    }, {
        timestamps: true
    })

    schema.method("toJSON", function () {
        const {
            _v,
            _id,
            ...object
        } = this.toObject()
        object.id = _id;
        return object;
    })

    const Post = mongoose.model("posts", schema);
    return Post;
}