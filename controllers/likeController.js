

const Post = require("../models/postModel")
const Like = require("../models/likeModel")

//like a post 
exports.likePost = async (req,res)=>{
    try{
        const {post, user} = req.body;
        const like = new Like({
            post,user,
        });
        const savedLike = await like.save();

        const udpatedPost = await Post.findByIdAndUpdate(post,{$push:{likes: savedLike._id}},{new:true})
        .populate("likes").exec();

        res.json({
            post:udpatedPost,
        })
    }
    catch(error){
        return res.status(400).json({
            error: "Error while liking post"
        })
    }
}

exports.unlikePost = async (req,res) => {
    try{
        const {post, like} = req.body;

        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});

        const udpatedPost = await post.findByIdAndUpdate(post,
                                                            {$pull:{likes: deletedLike._id}},
                                                            {new:true});
        res.json({
            post:udpatedPost,
        });
    }
    catch(error){
        return res.status(400).json({
            error: "Error while unliking the post"
        });
    }
}


exports.dummyLink = (req,res)=>{
    res.send("dummy link")
};  