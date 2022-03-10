//Get blog
const getAllBlog = (req, res, next) => {
    res.json({message: 'Get all blog'})
}

//Post blog
const newBlog = (req, res, next) => {
    res.json({message: "POST new blog"});
};

//delete blog
const deleteAllBlog = (req, res, next) => {
    res.json({message: 'Delete all blog'})
}

//Get blog: name
const getOneBlog = (req, res, next) => {
    res.json({message: 'Get 1 blog'})
}

//post blog:name
const newComment = (req, res, next) => {
    res.json({message: 'Post 1 blog comment'})
}

//delete blog:name
const deleteOneBlog = (req, res, next) => {
    res.json({message: 'Delete 1 blog'})
}

module.exports = {
    getAllBlog,
    newBlog,
    deleteAllBlog,
    getOneBlog,
    newComment,
    deleteOneBlog
};