const Nodecache = require("node-cache");
const cache = new Nodecache();
const model = require("../models/blog");

module.exports.Show = async(req,res)=>{
    try{
    const blog = cache.get("blogs");
    if(blog){
        res.json({
            message : "blogs fetched sucessfully",
            data : blog
        })
    }else{
        const blogs = await model.find();
        cache.set("blogs",blogs);
        res.json({
            message : "blogs fetched sucessfully",
            data : blogs
        })
    }
    
       
    
    }catch(err){
        console.log(err,);
        res.status(400).json({
            message : "error while fetching blogs"
        })
    }
    }

module.exports.Postblog =async(req,res)=>{
    const {name , title , description} = req.body
    try{
        await model.create({
            name:name ,
            title:title ,
            description:description

        });
        cache.del("blogs");
        res.status(201).json({message:"Blog created successfully"})
    }catch(err){
        console.log(err)
    }

}
module.exports.UpdateBlog = async(req,res)=>{
const id = req.params.id
await model.findByIdAndUpdate(id,req.body);
cache.del("blogs");
res.json({
    message : "blogs updated sucessfully",
})
}

module.exports.DeleteBlog = async(req,res)=>{
const id = req.params.id
await model.findByIdAndDelete(id);
cache.del("blogs");
res.json({
    message : "blogs deleted sucessfully",
})
}

