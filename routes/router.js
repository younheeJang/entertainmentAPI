let companies = require('../models/companies')
module.exports = (app, fs) => {
    app.get('/', (req, res) => {
        companies.find().then(datas => {
                console.log(datas.length)
                    //res.json(datas)
                res.status(200).render('index', { datas })
            }).catch((err) => res.status(500).send(err))
            //res.render('index', {title: "MY HOMEPAGE",length: 5})
    });
    app.get('/practice',(req,res)=>{
        res.status(200).render('prac1.html')
    })
    app.get('/data', (req, res)=>{
        companies.find().then(datas=>{
            console.log('d'+datas.length);
            res.send(datas);
            res.end();
        }).catch((err)=>res.status(500).send(err))
    })
}