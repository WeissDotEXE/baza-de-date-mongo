const express = require("express");
const Video = require("../models/Video");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allVideos = await Video.find();
    res.json(allVideos);
    res.send(allVideos);
  } catch (error) {
    res.json({ message: "something wrong" });
  }
});

router.post("/", async (req, res) => {
    const video = new Video({
      title:req.body.title,
      views:req.body.views,
      channel:req.body.channel,
    });
    try {
      const savedVideo = await video.save();
      res.status(200).json(savedVideo);
    } catch (error) {
      res.json({ message: "error" });
    }
  });

router.get('/:videoId',async (req,res)=>{
    try{
        const video=await VideoSchema.findById(req.params.videoId);
        res.json(video);
    }
    catch(error){
        res.json({message:"something wrong"});
    }
})

//update video
router.patch("/:videoId", async (req, res) => {
  try {
    const video = await VideoSchema.findById(req.params.videoId);
    res.json(video);
  } catch (error) {
    res.json({ message: "something wrong" });
  }
});

//delete video
router.delete("/:videoId", async (req, res) => {
  try {
    const removedVideo = await VideoSchema.remove({ _id: req.params.videoId });
    res.json(removedVideo);
  } catch (error) {
    res.json({ message: "something wrong" });
  }
});

module.exports = router;
