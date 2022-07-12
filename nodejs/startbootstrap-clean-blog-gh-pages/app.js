const express = require('express')
const path = require('path')


const app = new express()

app.use(express.static('public'))

const ejs = require('ejs')
const res = require('express/lib/response')
app.set('view engine', 'ejs')


app.listen(3000, ()=>{
console.log('App listening on port 3000')
}); 


app.get('/',(req,res)=>{
        res.render('index');
        })

app.get('/about',(req,res)=>{
               
        res.render('about');
        })
app.get('/contact',(req,res)=>{
                
        res.render('contact');
        })
app.get('/post',(req,res)=>{
                        
        res.render('post')
        })
                
app.use((req,res)=>
{
        res.status(404).render('404')
})
    





