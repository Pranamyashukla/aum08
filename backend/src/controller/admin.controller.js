import {Song} from "../models/song.model.js";
import {Album} from "../models/album.model.js";
import cloudinary from "../lib/cloudinary.js";


const uploadToCloudinary =  async (file) =>{
    try{
        const result = await cloudinary.uploader.upload(file.tempFilePath,{
            respurce_type: "auto",
        })
        return result.secure_url;
    }
    catch(error){
        console.log("Cloudinary Upload Error: " + error);
        throw new Error("Error uploading file to Cloudinary");
    }
}


export const createSong = async (req,res,next) => {
    
    try{
        if( !req.files || !req.files.audioFile || !req.files.imageFile){
            return res.status(400).json({message: "Audio file and Image file are required"});
        }

        const {title, artist,albumId,duration} = req.body;
        const audioFile = req.files.audioFile;
        const imageFile = req.files.imageFile;
        
        // *********** UPLOAD TO CLOUDINARY ********** //
        const audioUrl = await uploadToCloudinary(audioFile, "audio_files");
        const imageUrl = await uploadToCloudinary(imageFile, "image_files");

        const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            album: albumId || null
        });

        await song.save();

        if( albumId ){
            await Album.findByIdAndUpdate(albumId, {
                $push: {songs: song._id}
            });
        }

        res.status(201).json({message: "Song created successfully", song});
    }
    catch(error){
        console.log("Error creating song: "+ error);
        next(error);
    }
};

export const deleteSong = async (req,res,next) => {

    try{
        const { id } = req.params;
        const song = await Song.findById(id);

        // if song is part of album
        if( song.albumId ){
            await Album.findByIdAndUpdate(song.albumId, {
                $pull: { songs: song._id }
            });
        }

        await Song.findByIdAndDelete(id);
        res.status(200).json({message: "Song deleted successfully" });
    }
    catch(error){
        console.log("Error deleting this song", error);
        next(error);
    }

};

export const createAlbum = async (req,res,next) => {
    try{
        const { title, artist, releaseYear } = req.body;
        const { imageFile } = req.files;
        const imageUrl = await uploadToCloudinary(imageFile);
        const album = new Album({
            title,
            artist,
            imageUrl,
            releaseYear
        });
        await album.save();
        res.status(201).json({message: "Album created successfully", album});
    }
    catch(error){
        console.log("Error creating album: "+ error);
        next(error);
    }
};

export const deleteAlbum = async (req,res,next) => {
    try{
        const { id } = req.params;
        await Song.deleteMany({ albumId: id});
        await Album.findByIdAndDelete(id);
        res.status(200).json({message: "Album deleted successfully" });
    }
    catch(error){

    }
};

export const checkAdmin = async (req,res,next) => {
    res.status(200).json({ admin: true});
};