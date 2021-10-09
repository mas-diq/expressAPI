module.exports = (mongoose) => {
    const schema = mongoose.Schema({
        title: String,
        content: String,
        place : String,
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

    const Post = mongoose.model("notebook", schema);
    return Post;
}