var express = require("express")

var app = express()

var multer = require("multer")

app.use(express.json())  // to get the raw data

app.use(express.urlencoded({extended:true}))   

console.log(__dirname,"dirname");




var storage = multer.diskStorage({

    destination:(req,file,callback)=>{

     console.log(__dirname,"inside");


      callback(null,__dirname+"/multimedia(s3)")                       //if we wont mention null it always takes 1st parameter & error will rise
    }, 

    filename:(req,file,callback)=>{
        console.log(file);
       callback(null,file.originalname)
    } 
})     //this accepts one object


var upload = multer({storage:storage})


// app.post("/reg",upload.single("file"),(req,res)=>{       //single()-used to pass 1 file and array("filename",count hw many to send)-to pass multiple

//     res.send({
//         file:req.file,                    //whenever we use array method it should be as files
//         body:req.body
//     })

// })
     app.post("/reg",upload.array("hh",3),(req,res)=>{ 
     res.send({
         file:req.files,                   
         body:req.body
     })
})


app.listen(3009,()=>{
    console.log("server has been started");
    
})