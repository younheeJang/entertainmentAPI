module.exports = (app, fs) => {
    app.get('/', (req, res) => {
        let companies = require('../models/companies')
        companies.find().then(datas => {
                console.log(datas.length)
                    //res.json(datas)
                res.status(200).render('index', { datas })
            }).catch((err) => res.status(500).send(err))
            //res.render('index', {title: "MY HOMEPAGE",length: 5})
    });
}