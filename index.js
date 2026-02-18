const express = require('express')
require('dotenv').config();
const path = require('path');
const connect = require('./connection/connectmdb')
const model = require('./scheema/scheema')

console.log(process.env.PORT_NO);

const mdurl = process.env.MDB || "mongodb+srv://noumanaziz383:Nouman123%21@cluster0.shnqyd4.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=Cluster0"
connect(mdurl)

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const filePath = path.join(__dirname,'public')

app.get('/',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath,'index.html'));
    }catch(error){
        res.send(error)
    }
})

app.get('/image',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath,"burger-frenchfries.png"))
    }catch(error){
        res.send(error)
    }
})

app.get('/imageOne',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath, "images (1).png"))
    }catch(error){
        res.send(error)
    }
})

app.get('/imagetwo',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath, "images (8).png"))
    }catch(error){
        res.send(error)
    }
})

app.get('/imagethree',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath, "images (3).png"))
    }catch(error){
        res.send(error)
    }
})

app.get('/imagefour',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath, "images.png"))
    }catch(error){
        res.send(error)
    }
})

app.get('/userone',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath,'user-4.png'))
    }catch(error){
        res.send(error)
    }
})

app.get('/userthree',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath,'user-6.png'))
    }catch(error){
        res.send(error)
    }
})

app.get('/usertwo',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath,'user-5.png'))
    }catch(error){
        res.send(error)
    }
})

app.get('/imagefive',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath, "images (6).png"))
    }catch(error){
        res.send(error)
    }
})

app.get('/imagesix',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath, "images (7).png"))
    }catch(error){
        res.send(error)
    }
})

app.get('/imageseven',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath, "images (4).png"))
    }catch(error){
        res.send(error)
    }
})

app.get('/imageeight',async(req,res)=>{
    try{
        await res.sendFile(path.resolve(filePath, "images (5).png"))
    }catch(error){
        res.send(error);
    }
})

app.post('/submit',async(req,res)=>{
    const body = req.body
    await model.create({
        name: body[0],
        number: body[1],
        val: body[2]
    });
    res.json({msg:'Data submit successfully'})
})

const port = process.env.PORT_NO || 8000

app.listen(port,()=>{
    console.log("Server is running on port number " + port)
})