const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error)=>{console.error(error)});
db.once('open',()=>{console.log('connected to mongo')});

const modl = mongoose.model('modl',{ide:Number, stockNames:Array});

var stockList = []


const doc= modl.findOne({},(err,result)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log('Results:',result);
    }
})

const app = express();

app.listen(3000,()=>{
    console.log("connected to server");
})

app.post('/save',(req,res)=>{
    var data = req.body.data;
    stockList.push(data);
    doc.update({stockNames:stockList});
    res.send("updated");

})

app.post('/delete',(req,res)=>{
    var data =req.body.data;
    var n = stockList.indexOf(data);
    stockList.splice(n,1);
    doc.update({stockNames:stockList});
})