import express from "express";

const app = express();
const port = 5050;

const breedDB = {
    husky: [...Array(5)].map((_, x) => `./images/husky${x+1}.jpg`),
    kombai: [...Array(5)].map((_, x) => `./images/kombai${x+1}.jpg`),
    mastiff: [...Array(5)].map((_,x)=> `./images/mastiff${x+1}.jpg`),
    pitbull: [...Array(5)].map((_, x)=> `./images/pitbull${x+1}.jpg`),
    poodle: [...Array(5)].map((_, x)=> `./images/poodle${x+1}.jpg`),
    redbone: [...Array(5)].map((_, x)=> `./images/redbone${x+1}.jpg`),
    spitz: [...Array(5)].map((_, x)=> `./images/spitz${x+1}.jpg`),
    sheepdog: [...Array(5)].map((_, x)=> `./images/sheepdog${x+1}.jpg`),
    bulldog: [...Array(5)].map((_, x)=> `./images/bulldog${x+1}.jpg`),
    boxer: [...Array(5)].map((_, x)=> `./images/boxer${x+1}.jpg`)
}

app.use(express.static("public"));

app.get("/breed",  (req, res)=>{
    res.send(breedDB)
});

app.get("/image/:breed", (req, res)=>{
    const breed = req.params.breed;
    if(breed in breedDB){
        console.log(breedDB[breed])
        res.send(breedDB[breed])
    }else{
        res.send("404")
    }
    
})

app.all("*", (req, res)=>{
    res.status(404).send("This Page is unavaliable")
})

app.listen(port, (req, res)=>{
    console.log(`App running at http://localhost:${port}`);
})