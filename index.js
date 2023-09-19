import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const baseUrl = "https://api.blockchain.com/v3/exchange/";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", async(req,res)=>{
    try {
        // let symbol = "BTC-USD"
        // let finalUrl = `${baseUrl}tickers/${symbol}`
        // const result = await axios.get(finalUrl);
        // console.log(result.data);
        res.render("index.ejs");
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
    
})

app.post("/getThePrice", async(req,res)=>{
    const symbolName = req.body.id
    console.log(symbolName);
    try {
        const result = await axios.get(`${baseUrl}tickers/${symbolName}`);
        res.render("index.ejs", {content:result.data});
        
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})