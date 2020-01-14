const express = require('express');
const router = express.Router();
const Post = require('../module/post');

//retorna todos os posts//
router.get('/',async (req, resp) =>{
    try{
        const posts = await Post.find();
        resp.json(posts);
    }catch(err){
        resp.json({message: err})
    }
});

//faz uma postagem//
router.post('/',async(req, res) =>{
    const post = new Post({

        title: req.body.title,
        description: req.body.description

    });
    try{
    const savedPost = await post.save();
          res.json(savedPost);
    } catch(err){

    resp.json({message: err})
    }

    
});

// post especifico //

router.get('/:postId', async (req, res) =>{
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);

    }catch(err){
        res.json({message:err});
        
    }
});

//deletar post//

router.delete('/:postId', async (req, res) =>{

    try{
    const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost)
    }catch(err){
        res.json({message:err})
    }

});

// atualizar post//

router.patch('/:postId', async (req, res) =>{
    try{
        const updatePost = await Post.updateOne(
            {_id: req.parames.postId},
            {$set:{title: req.body.title}}
            );
            res.json(updatePost)
    }catch(err){
        res.json({message:err});
    }

});

module.exports = router;